const mongooose = require('mongoose');

const transactionSchema = new mongooose.Schema({
    blockNumber: {                               
        type: String,
        required: false
    },
    timeStamp: {
        type: String,
        required: false
    },
    hash: {
        type: String,
        required: false,
        sparse: true
    },
    nonce: {
        type: String,
        required: false
    },
    blockHash: {
        type: String,
        required: false
    },
    transactionIndex: {
        type: String,
        required: false
    },
    from: {
        type: String,
        required: false
    },
    to: {
        type: String,
        required: false
    },
    value: {
        type: String,
        required: false
    },
    gas: {
        type: String,
        required: false
    },
    gasPrice: {
        type: String,
        required: false
    },
    isError: {
        type: String,
        required: false
    },
    txreceipt_status: {
        type: String,
        required: false
    },
    input: {
        type: String,
        required: false
    },
    contractAddress: {
        type: String,
        required: false
    },
    cumulativeGasUsed: {
        type: String,
        required: false
    },
    gasUsed: {
        type: String,
        required: false
    },
    confirmations: {
        type: String,
        required: false
    },
    methodId: {
        type: String,
        required: false
    },
    functionName: {
        type: String,
        required: false
    }
})

const Transaction = mongooose.model('transaction', transactionSchema);

module.exports = Transaction;