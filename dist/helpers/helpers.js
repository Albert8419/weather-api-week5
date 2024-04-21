"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeGasPriceData = void 0;
const tslib_1 = require("tslib");
const algosdk_1 = tslib_1.__importDefault(require("algosdk"));
const config_js_1 = require("../config/config.js");
// Retrieve minimum transaction amount from environment variables or set default
const MIN_TRANSACTION_AMOUNT = parseInt(process.env.ALGORAND_MIN_TRANSACTION_AMOUNT || "1000");
const storeGasPriceData = (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = (0, config_js_1.getClient)();
        const account = (0, config_js_1.getAccount)();
        const suggestedParams = yield client.getTransactionParams().do();
        const enc = new TextEncoder();
        const note = enc.encode(JSON.stringify(data)); // Encoding the gas price data as a string in the transaction note
        let txn = algosdk_1.default.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Ensure this is the correct recipient. If it's a data record, this is fine.
            amount: MIN_TRANSACTION_AMOUNT, // Using the configurable minimum transaction amount
            note: note,
            suggestedParams: suggestedParams,
        });
        const signedTxn = txn.signTxn(account.sk);
        let sendTxn = yield client.sendRawTransaction(signedTxn).do();
        console.log("Transaction successful with ID: ", sendTxn.txId);
        // Additional logic to wait for transaction confirmation if needed
    }
    catch (error) {
        console.error("Failed to store gas price data:", error);
        throw error; // Propagate the error to the caller
    }
});
exports.storeGasPriceData = storeGasPriceData;
//# sourceMappingURL=helpers.js.map