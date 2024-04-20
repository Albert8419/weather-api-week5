import { __awaiter } from "tslib";
import algosdk from "algosdk";
import { getClient, getAccount } from "../config/config.js";
export const storeWeatherData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = getClient();
        const account = getAccount();
        const suggestedParams = yield client.getTransactionParams().do();
        const enc = new TextEncoder();
        const note = enc.encode(JSON.stringify(data)); // Encoding the weather data as a string in the transaction note
        let txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
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
        console.error("Failed to store weather data:", error);
    }
});
//# sourceMappingURL=helpers.js.map