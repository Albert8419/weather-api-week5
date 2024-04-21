"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeGasPriceData = void 0;
const tslib_1 = require("tslib");
const algosdk_1 = tslib_1.__importDefault(require("algosdk"));
const config_js_1 = require("../config/config.js");
const storeGasPriceData = (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = (0, config_js_1.getClient)();
        const account = (0, config_js_1.getAccount)();
        const suggestedParams = yield client.getTransactionParams().do();
        const enc = new TextEncoder();
        const note = enc.encode(JSON.stringify(data)); // Encoding the gas price data as a string in the transaction note
        let txn = algosdk_1.default.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Sending the transaction to oneself
            amount: 1000, // Minimum amount to facilitate the transaction
            note: note,
            suggestedParams: suggestedParams,
        });
        const signedTxn = txn.signTxn(account.sk);
        let sendTxn = yield client.sendRawTransaction(signedTxn).do();
        console.log("Transaction successful with ID: ", sendTxn.txId);
    }
    catch (error) {
        console.error("Failed to store gas price data:", error);
    }
});
exports.storeGasPriceData = storeGasPriceData;
//# sourceMappingURL=helpers.js.map