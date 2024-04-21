import axios from 'axios';
import algosdk from 'algosdk';
import { Algodv2 } from 'algosdk';
import { mnemonicToSecretKey } from 'algosdk';
import { TextEncoder } from 'util';

// Algorand configurations
const algodToken = process.env.ALGORAND_TOKEN || '';
const server = process.env.ALGORAND_SERVER || 'http://localhost';
const port = parseInt(process.env.ALGORAND_PORT || '4001');
const mnemonic = process.env.ALGORAND_MNEMONIC || '';

// Initialize Algorand client
export function getClient(): Algodv2 {
  return new algosdk.Algodv2(algodToken, server, port);
}

// Convert the mnemonic to an account object
export function getAccount(): { addr: string; sk: Uint8Array } {
  return mnemonicToSecretKey(mnemonic);
}

// Retrieve minimum transaction amount from environment variables or set default
const MIN_TRANSACTION_AMOUNT = parseInt(process.env.ALGORAND_MIN_TRANSACTION_AMOUNT || '1000');

// Assuming AQIWidgetData is defined in global.d.ts
interface AQIWidgetData {
  city?: string;
  aqi: number;
  details: string;
  timestamp?: Date;
}

export const storeAqiWidgetData = async (data: AQIWidgetData): Promise<void> => {
  try {
    const client = getClient();
    const account = getAccount();
    const suggestedParams = await client.getTransactionParams().do();

    const enc = new TextEncoder();
    const note = enc.encode(JSON.stringify(data)); // Encoding the AQI widget data as a string in the transaction note

    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: account.addr,
      to: account.addr, // Ensure this is the correct recipient. If it's a data record, this is fine.
      amount: MIN_TRANSACTION_AMOUNT, // Using the configurable minimum transaction amount
      note: note,
      suggestedParams: suggestedParams,
    });

    const signedTxn = txn.signTxn(account.sk);
    const sendTxn = await client.sendRawTransaction(signedTxn).do();

    console.log('Transaction successful with ID: ', sendTxn.txId);

    // Additional logic to wait for transaction confirmation if needed
  } catch (error) {
    console.error('Failed to store AQI widget data:', error);
    throw error; // Propagate the error to the caller
  }
};
