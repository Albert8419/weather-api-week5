"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeAQIWidgetData = exports.getAccount = exports.getClient = void 0;
const algosdk_1 = __importStar(require("algosdk"));
const util_1 = require("util");
// Algorand configurations
const { ALGORAND_TOKEN, ALGORAND_SERVER, ALGORAND_PORT, ALGORAND_MNEMONIC, ALGORAND_MIN_TRANSACTION_AMOUNT } = process.env;
const algodToken = ALGORAND_TOKEN || '';
const server = ALGORAND_SERVER || 'http://localhost';
const port = parseInt(ALGORAND_PORT || '4001');
const mnemonic = ALGORAND_MNEMONIC || '';
const MIN_TRANSACTION_AMOUNT = parseInt(ALGORAND_MIN_TRANSACTION_AMOUNT || '1000');
// Initialize Algorand client
function getClient() {
    return new algosdk_1.default.Algodv2(algodToken, server, port);
}
exports.getClient = getClient;
// Convert the mnemonic to an account object
function getAccount() {
    return (0, algosdk_1.mnemonicToSecretKey)(mnemonic);
}
exports.getAccount = getAccount;
// Store AQI Widget data on the Algorand blockchain
const storeAQIWidgetData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = getClient();
        const account = getAccount();
        const suggestedParams = yield client.getTransactionParams().do();
        // Encode AQI widget data as a string in the transaction note
        const enc = new util_1.TextEncoder();
        const note = enc.encode(JSON.stringify(data));
        // Create a payment transaction with suggested parameters
        const txn = algosdk_1.default.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Ensure this is the correct recipient
            amount: MIN_TRANSACTION_AMOUNT,
            note: note,
            suggestedParams: suggestedParams,
        });
        // Sign and send the transaction
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
