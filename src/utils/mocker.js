const identification = () => [
  {
    name: 'Title',
    text: 'Идентификация',
  }, {
    id: 'inn',
    name: 'NumberInput',
    label: 'Инн'
  }, {
    name: 'Buttons',
    buttons: [{
      fields: ['inn'],
    }]
  }
];

const success = () => [{
  name: 'Title',
  text: 'Успешная операция',
}, {
  name: 'Image',
  src: 'http://meet.cherenov.ru/assets/success.png',
  maxWidth: 160,
}, {
  name: 'Buttons',
  buttons: [{
    fields: [],
    text: 'Вернуться',
    action: 'home',
    param: 'start',
  }]
}];

export const states = {
  'init': () => [
    {
      name: 'Title',
      text: 'Начало работы',
    }, {
      name: 'Image',
      src: 'http://meet.cherenov.ru/assets/logo.png',
      maxWidth: 120,
    }, {
      name: 'NextButton',
      text: 'Создание счета',
      action: 'create_account',
      param: 'start',
    }, {
      name: 'NextButton',
      text: 'Создание перевода',
      action: 'deposit',
      param: 'start',
      hide: window.location.pathname !== '/console',
    }
  ],
  'deposit>identification': identification,
  'create_account>identification': identification,
  'create_account>reservedAccounts': ({ clientInfo, reservedAccount }) => [
    {
      name: 'Title',
      text: 'Зарезервированные счета',
    }, {
      name: 'ClientInfo',
      info: clientInfo,
    }, {
      name: 'BasicTable',
      headers: { "accountNumber": "Номер счета", "accountName": "Hазвание", "currencyCode": "Валюта" },
      actions: { "activate": "Изменить" },
      list: reservedAccount.map(item => ({...item, id: item.requestId})),
    }, {
      name: 'Buttons',
      buttons: [{
        fields: [],
        text: 'создать',
        action: 'new',
      }]
    }],
  'create_account>newAccount': () => [
    {
      name: 'Title',
      text: 'Резервирование счета',
    }, {
      id: 'currencyCode',
      name: 'BasicSelect',
      label: 'Валюта счета',
      list: ['RUB','USD','EUR','BTC','OMG','HTML5'],
      def:'EUR',
    }, {
      id: 'accountNumber',
      name: 'NumberInput',
      label: 'Номер счёта'
    }, {
      id: 'accountName',
      name: 'TextInput',
      label: 'Название счета'
    }, {
      name: 'Buttons',
      buttons: [{
        fields: ['accountNumber', 'accountName', 'currencyCode'],
      }]
    }],
  'create_account>activateAccount': ({accountNumber, accountName, currencyCode}) => [
    {
      name: 'Title',
      text: 'Резервирование счета',
    }, {
      name: 'Text',
      label: 'Валюта счета',
      text: currencyCode,
    }, {
      name: 'Text',
      label: 'Номер счёта',
      text: accountNumber,
    }, {
      name: 'Text',
      label: 'Название счета',
      text: accountName,
    }, {
      name: 'Buttons',
      buttons: [{
        text: 'Назад',
        action: 'reject',
        color: 'default',
      }, {
        action: 'confirm',
      }]
    }],
  'create_account>finalScreen': success,
  'deposit>accountList': ({ clientInfo, accountList, uncompletedTransgers }) => [
    {
      name: 'Title',
      text: 'Список счетов',
    }, {
      name: 'ClientInfo',
      info: clientInfo,
    }, {
      name: 'BasicTable',
      // name: 'BasicTable',
      title: 'Счета',
      headers: { "number": "Номер счета", "balance": "Баланс", "currency": "Валюта" },
      actions: { "create_doc": "Перевод" },
      list: accountList,
    }, {
      name: 'BasicTable',
      // name: 'BasicTable',
      title: 'Черновики',
      headers: { "number": "Отправитель", "recipientAccount": "Получатель", "amount": "Сумма" },
      actions: { "process_doc": "Перевод" },
      list: uncompletedTransgers.map(({sourceAccount, recipientAccount, amount}) => (
        {id:sourceAccount.id, number:sourceAccount.number, recipientAccount, amount}
      )),
    }],
  'deposit>createDocument': () => [
    {
      name: 'Title',
      text: 'Создание перевода',
    }, {
      id: 'recipientAccountNumber',
      name: 'NumberInput',
      label: 'Счёт получателя'
    }, {
      id: 'amount',
      name: 'NumberInput',
      label: 'Сумма первода'
    }, {
      name: 'Buttons',
      buttons: [{
        fields: ['recipientAccountNumber', 'amount'],
      }]
    }],
  'deposit>confirmCreateDocument': ({ sourceAccount, recipientAccount, amount }) => [
    {
      name: 'Title',
      text: 'Подтверждение перевода',
    }, {
      id: 'sourceAccountNumber',
      name: 'Text',
      label: 'Счёт отправителя',
      text: sourceAccount.number,
    }, {
      id: 'recipientAccountNumber',
      name: 'Text',
      label: 'Счёт получателя',
      text: recipientAccount,
    }, {
      id: 'amount',
      name: 'Text',
      label: 'Сумма первода',
      text: amount,
    }, {
      name: 'Buttons',
      buttons: [{
        text: 'Назад',
        action: 'reject',
        color: 'default',
      }, {
        action: 'confirm',
      }]
    }],
  'deposit>createDocumentResult': success,
};