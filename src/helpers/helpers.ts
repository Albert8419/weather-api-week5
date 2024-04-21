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

export const storeGasPriceData = async (data: GasPriceData): Promise<void> => {
    try {
        const client = getClient();
        const account = getAccount();
        const suggestedParams = await client.getTransactionParams().do();

        const enc = new TextEncoder();
        const note = enc.encode(JSON.stringify(data)); // Encoding the gas price data as a string in the transaction note

        let txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Sending the transaction to oneself
            amount: 1000, // Minimum amount to facilitate the transaction (consider making it configurable)
            note: note,
            suggestedParams: suggestedParams,
        });

        const signedTxn = txn.signTxn(account.sk);
        let sendTxn = await client.sendRawTransaction(signedTxn).do();

        console.log("Transaction successful with ID: ", sendTxn.txId);
    } catch (error) {
        console.error("Failed to store gas price data:", error);
        throw error; // Rethrow the error to propagate it to the caller
    }
};
