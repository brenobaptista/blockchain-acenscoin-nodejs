const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "699f1aa79a923386040bc5c5f7fe2c2ef5e4f5d03720cbc0a72c428faa7d9567"
);
const myWalletAddress = myKey.getPublic("hex");

let acensCoin = new Blockchain();

console.log("Starting the miner...");
acensCoin.minePendingTransactions(myWalletAddress);

console.log(
  "Balance of breno is ",
  acensCoin.getBalanceOfAddress(myWalletAddress)
);

console.log('Starting transaction for 10 AcensCoins');

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
acensCoin.addTransaction(tx1);

acensCoin.getAllTransactionsForWallet(myWalletAddress);

console.log("Is chain valid? ", acensCoin.isChainValid() ? 'Yes' : 'No');
