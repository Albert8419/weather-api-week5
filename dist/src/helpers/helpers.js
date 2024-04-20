import { __awaiter } from "tslib";
import algosdk from 'algosdk';
import { getClient, getAccount } from '../config/config'; // Remove .js extension if you are using TypeScript
export const storeWeatherData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = getClient(); // Ensure this function retrieves an Algorand client instance
        const account = getAccount(); // Ensure this function retrieves the Algorand account details
        // Fetch transaction parameters
        const suggestedParams = yield client.getTransactionParams().do();
        // Encode the data as note field in the transaction
        const note = algosdk.encodeObj(data);
        // Create a transaction to send Algos to the same account with the note data
        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Self-transaction
            amount: 1000, // Smallest amount of Algos possible
            note: note,
            suggestedParams: suggestedParams,
        });
        // Sign the transaction with the account's secret key
        const signedTxn = txn.signTxn(account.sk);
        // Send the transaction to the Algorand network
        const sendTxn = yield client.sendRawTransaction(signedTxn).do();
        console.log('Transaction ID:', sendTxn.txId);
    }
    catch (error) {
        // Log the error stack for detailed debug information
        console.error('Failed to store weather data:', error.stack);
    }
});
//# sourceMappingURL=helpers.js.map