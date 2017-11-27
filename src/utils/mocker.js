export const states = {
  'init': () => [
    {
      name: 'Title',
      text: 'Начало работы',
    }, {
      name: 'Image',
      src: 'https://image.playerauctions.com/sellerstore/554129/20160221131953_LogoImage_71%D1%85541.png',
    }, {
      name: 'Buttons',
      buttons: [{
        fields: [],
        action: 'deposit',
        param: 'start',
      }]
    }],
  'deposit>identification': () => [
    {
      name: 'Title',
      text: 'Идентификация',
    }, {
      id: 'inn',
      name: 'TextInput',
      label: 'Инн'
    }, {
      name: 'Buttons',
      buttons: [{
        fields: ['inn'],
      }]
    }],
  'deposit>accountList': ({ clientInfo, accountList }) => [
    {
      name: 'Title',
      text: 'Список счетов',
    }, {
      name: 'ClientInfo',
      info: clientInfo,
    }, {
      name: 'BasicTable',
      // name: 'BasicTable',
      header: { "number": "Номер счета", "balance": "Баланс", "currency": "Валюта" },
      actions: { "create_doc": "Перевод" },
      list: accountList,
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
        text: 'Отмена',
        action: 'reject',
        color: 'default',
      }, {
        action: 'confirm',
      }]
    }],
  'deposit>createDocumentResult': () => [{
    name: 'Title',
    text: 'Успешный перевод',
  }, {
    name: 'Image',
    src: 'http://img11.hostingpics.net/pics/999033vaultboyvectorbybac0nbr0nyd5lo6mw.png'
  }, {
    name: 'Buttons',
    buttons: [{
      fields: [],
      text: 'Вернуться',
      action: 'deposit',
      param: 'start',
    }]
  }],
};