require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000



let page = 1;
let offset = 5;
app.get('/', async (req, res) => {
  //res.send('Hello World Koinx !')
  let address = req.query.address;
  let url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=${page}&offset=${offset}&sort=asc&apikey=${process.env.apikey}`;
  let data = await fetch(url, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });
  let json = await data.json();
  //console.log(json);
  res.send(json);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})