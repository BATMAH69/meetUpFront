import { states } from './mocker';

export const filter = (state, keys = []) => {
  const result = {};
  keys.forEach(key => (result[key] = state[key]));
  return result;
};

const clean = (state) => ({
  ...state,
  amount: '',
  inn: '',
  recipientAccountNumber: '',
  accountNumber: '',
  accountName: '',
  currencyCode: '',

});

export const process = (param, query, cb, body) => {
  const type = param === 'start' ? 'name' : 'event';
  const cleaner = param === 'start' ? clean : i => i;
  if (query === 'home') {
    cb(cleaner({
      widgets: states.init(),
      pid: 'renew',
    }));
    return;
  }
  cb({loader: true});
  fetch(`/rest/process/${param}?${type}=${query}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(({ data, pid, processName, stateName, error }) => {
      if (error) {
        cb({ error, loader: false });
        return;
      }
      cb(cleaner({
        widgets: (states[`${processName}>${stateName}`] || states.init)(data),
        pid: pid,
        error: '',
        loader: false,
      }))
    })
    .catch(() =>{
      cb({ loader: false })
    });
};
