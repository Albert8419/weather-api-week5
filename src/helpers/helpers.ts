import algosdk from 'algosdk';
import { getClient, getAccount } from '../config/config.js'; // Remove .js extension if you are using TypeScript

// TypeScript interface for weather data
interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

export const storeWeatherData = async (data: WeatherData): Promise<void> => {
    try {
        const client = getClient(); // Ensure this function retrieves an Algorand client instance
        const account = getAccount(); // Ensure this function retrieves the Algorand account details

        // Fetch transaction parameters
        const suggestedParams = await client.getTransactionParams().do();

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
        const sendTxn = await client.sendRawTransaction(signedTxn).do();

        console.log('Transaction ID:', sendTxn.txId);
    } catch (error) {
        // Log the error stack for detailed debug information
        console.error('Failed to store weather data:', (error as Error).stack);
    }
};