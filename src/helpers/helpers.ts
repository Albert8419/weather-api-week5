import algosdk, { Algodv2, mnemonicToSecretKey } from 'algosdk';
import { TextEncoder } from 'util';

// Algorand configurations
const { ALGORAND_TOKEN, ALGORAND_SERVER, ALGORAND_PORT, ALGORAND_MNEMONIC, ALGORAND_MIN_TRANSACTION_AMOUNT } = process.env;
const algodToken = ALGORAND_TOKEN || '';
const server = ALGORAND_SERVER || 'http://localhost';
const port = parseInt(ALGORAND_PORT || '4001');
const mnemonic = ALGORAND_MNEMONIC || '';
const MIN_TRANSACTION_AMOUNT = parseInt(ALGORAND_MIN_TRANSACTION_AMOUNT || '1000');

// Initialize Algorand client
export function getClient(): Algodv2 {
  return new algosdk.Algodv2(algodToken, server, port);
}

// Convert the mnemonic to an account object
export function getAccount(): { addr: string; sk: Uint8Array } {
  return mnemonicToSecretKey(mnemonic);
}

// Store AQI Widget data on the Algorand blockchain
export const storeAQIWidgetData = async (data: AQIWidgetData): Promise<void> => {
  try {
    const client = getClient();
    const account = getAccount();
    const suggestedParams = await client.getTransactionParams().do();

    // Encode AQI widget data as a string in the transaction note
    const enc = new TextEncoder();
    const note = enc.encode(JSON.stringify(data));

    // Create a payment transaction with suggested parameters
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: account.addr,
      to: account.addr, // Ensure this is the correct recipient
      amount: MIN_TRANSACTION_AMOUNT,
      note: note,
      suggestedParams: suggestedParams,
    });

    // Sign and send the transaction
    const signedTxn = txn.signTxn(account.sk);
    const sendTxn = await client.sendRawTransaction(signedTxn).do();

    console.log('Transaction successful with ID: ', sendTxn.txId);

    // Additional logic to wait for transaction confirmation if needed
  } catch (error) {
    console.error('Failed to store AQI widget data:', error);
    throw error; // Propagate the error to the caller
  }
};

interface AQIWidgetData {
  // Define the structure of AQI widget data
  city: string;
  aqi: number;
  // Add more properties as needed
}
