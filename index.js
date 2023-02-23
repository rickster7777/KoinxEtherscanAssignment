require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
require('./db.js')
const Transaction = require('./model/transactionSchema');

let page = 1;
let offset = 5;
app.get('/', async (req, res) => {
  //res.send('Hello World Koinx !')
  let address = req.query.address;
  let url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=${page}&offset=${offset}&sort=asc&apikey=${process.env.apikey}`;
  let data = await fetch(url);
  let json = await data.json();
  //console.log(json);
  result = json.result;
  result.forEach((transaction) => {
    let transactions = new Transaction({
      blockNumber: transaction.blockNumber,
      timeStamp: transaction.timeStamp,
      hash: transaction.hash,
      nonce: transaction.nonce,
      blockHash: transaction.blockHash,
      transactionIndex: transaction.transactionIndex,
      from: transaction.from,
      to: transaction.to,
      value: transaction.value,
      gas: transaction.gas,
      gasPrice: transaction.gasPrice,
      isError: transaction.isError,
      txreceipt_status: transaction.txreceipt_status,
      input: transaction.input,
      contractAddress: transaction.contractAddress,
      cumulativeGasUsed: transaction.cumulativeGasUsed,
      gasUsed: transaction.gasUsed,
      confirmations: transaction.confirmations,
      methodId: transaction.methodId,
      functionName: transaction.functionName
    });
    transactions.save().catch(error => console.log(error));
  });

  res.status(200).send(json);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})