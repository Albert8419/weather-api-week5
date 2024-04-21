import algosdk from "algosdk";
import { getClient, getAccount } from "../config/config.js";

// Assuming GasPriceData is defined as mentioned previously
interface GasPriceData {
    city: string;  
    regular: number;
    midGrade: number;
    premium: number;
    diesel: number;
}

// Retrieve minimum transaction amount from environment variables or set default
const MIN_TRANSACTION_AMOUNT = parseInt(process.env.ALGORAND_MIN_TRANSACTION_AMOUNT || "1000");

export const storeGasPriceData = async (data: GasPriceData): Promise<void> => {
    try {
        const client = getClient();
        const account = getAccount();
        const suggestedParams = await client.getTransactionParams().do();

        const enc = new TextEncoder();
        const note = enc.encode(JSON.stringify(data)); // Encoding the gas price data as a string in the transaction note

        let txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Ensure this is the correct recipient. If it's a data record, this is fine.
            amount: MIN_TRANSACTION_AMOUNT, // Using the configurable minimum transaction amount
            note: note,
            suggestedParams: suggestedParams,
        });

        const signedTxn = txn.signTxn(account.sk);
        let sendTxn = await client.sendRawTransaction(signedTxn).do();

        console.log("Transaction successful with ID: ", sendTxn.txId);

        // Additional logic to wait for transaction confirmation if needed
    } catch (error) {
        console.error("Failed to store gas price data:", error);
        throw error; // Propagate the error to the caller
    }
};
