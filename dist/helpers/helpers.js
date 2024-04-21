"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeAQIWidgetData = exports.getAccount = exports.getClient = void 0;
const algosdk_1 = __importDefault(require("algosdk"));
const algosdk_2 = require("algosdk");
const util_1 = require("util");
// Algorand configurations
const algodToken = process.env.ALGORAND_TOKEN || '';
const server = process.env.ALGORAND_SERVER || 'http://localhost';
const port = parseInt(process.env.ALGORAND_PORT || '4001');
const mnemonic = process.env.ALGORAND_MNEMONIC || '';
// Initialize Algorand client
function getClient() {
    return new algosdk_1.default.Algodv2(algodToken, server, port);
}
exports.getClient = getClient;
// Convert the mnemonic to an account object
function getAccount() {
    return (0, algosdk_2.mnemonicToSecretKey)(mnemonic);
}
exports.getAccount = getAccount;
// Retrieve minimum transaction amount from environment variables or set default
const MIN_TRANSACTION_AMOUNT = parseInt(process.env.ALGORAND_MIN_TRANSACTION_AMOUNT || '1000');
const storeAQIWidgetData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = getClient();
        const account = getAccount();
        const suggestedParams = yield client.getTransactionParams().do();
        const enc = new util_1.TextEncoder();
        const note = enc.encode(JSON.stringify(data)); // Encoding the AQI widget data as a string in the transaction note
        const txn = algosdk_1.default.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Ensure this is the correct recipient. If it's a data record, this is fine.
            amount: MIN_TRANSACTION_AMOUNT, // Using the configurable minimum transaction amount
            note: note,
            suggestedParams: suggestedParams,
        });
        const signedTxn = txn.signTxn(account.sk);
        const sendTxn = yield client.sendRawTransaction(signedTxn).do();
        console.log('Transaction successful with ID: ', sendTxn.txId);
        // Additional logic to wait for transaction confirmation if needed
    }
    catch (error) {
        console.error('Failed to store AQI widget data:', error);
        throw error; // Propagate the error to the caller
    }
});
exports.storeAQIWidgetData = storeAQIWidgetData;
