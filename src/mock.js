const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
});

const pid1 = '06f40b36-1a6b-40a1-a72e-15fbd93e1a7b';

app.post('/rest/process/*', function (req, res) {
  if (req.params[0] === 'start') {
    res.send({
      "pid": pid1,
      "processName": "deposit",
      "stateName": "identification",
      "data": null
    })
  }
  if (req.params[0] === pid1) {
    if (req.body.inn) {
      res.send({
        "pid": pid1,
        "processName": "deposit",
        "stateName": "accountList",
        "data": {
          "clientInfo": { "id": 1, "name": "Рэй Палмер", "inn": "12345" },
          "accountList": [{ "id": 1, "number": "1234567890", "currency": null, "balance": 30000000 }]
        }
      })
    }

    if (req.body.id && req.query.event === 'create_doc') {
      res.send({
        "pid": pid1,
        "processName": "deposit",
        "stateName": "createDocument",
        "data": { "id": req.body.id, "number": "1234567890", "currency": null, "balance": 30000 }
      })
    }

    if (req.body.amount) {
      res.send({
        "pid": pid1,
        "processName": "deposit",
        "stateName": "confirmCreateDocument",
        "data": {
          "sourceAccount": { "id": 1, "number": "1234567890", "currency": null, "balance": 30000 },
          "recipientAccount": req.body.recipientAccountNumber,
          "amount": req.body.amount
        }
      })
    }

    if (req.query.event === 'confirm') {
      res.send({
        "pid": pid1,
        "processName": "deposit",
        "stateName": "createDocumentResult",
        "data": {
          "transferDetailDto": {
            "sourceAccount": {
              "id": 1,
              "number": "1234567890",
              "currency": null,
              "balance": 30000
            }, "recipientAccount": "999933331111", "amount": 1000
          },
          "result": "COMPLETE"
        }
      })
    }
  }

});

app.listen(8081);