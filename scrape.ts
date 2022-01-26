const Web3 = require('web3');

const http = require("http");
const Web3HttpProvider = require('web3-providers-http');

let web3 = new Web3()

const options = {
    keepAlive: true,
    timeout: 20000, // milliseconds,
    headers: [{ name: 'Access-Control-Allow-Origin', value: '*' }, {}],
    withCredentials: false,
    agent: { http: http.Agent(), baseUrl: '' }
};


web3.setProvider(Web3HttpProvider('https://speedy-nodes-nyc.moralis.io/0f6242cda8fc66b5b8311b1d/avalanche/mainnet', options));

let message: string = 'Hello World';
console.log(message);
