import algosdk from 'algosdk';
import axios from 'axios';

// Algorand configurations
const algodToken = process.env.ALGORAND_TOKEN || '';
const server = process.env.ALGORAND_SERVER || 'http://localhost';
const port = parseInt(process.env.ALGORAND_PORT || '4001');
const mnemonic = process.env.ALGORAND_MNEMONIC || '';

// Initialize Algorand client
export function getClient(): algosdk.Algodv2 {
  return new algosdk.Algodv2(algodToken, server, port);
}

// Convert the mnemonic to an account object
export function getAccount(): algosdk.Account {
  return algosdk.mnemonicToSecretKey(mnemonic);
}

// Gas Prices API configurations
const gasApiToken = process.env.GAS_API_TOKEN || ''; // Add this to your environment variables
const gasApiHost = 'gas-price.p.rapidapi.com';

// Initialize Axios client for Gasoline Prices API
export const getGasApiAxiosClient = () => {
  return axios.create({
    baseURL: `https://${gasApiHost}`,
    headers: {
      'X-RapidAPI-Key': gasApiToken,
      'X-RapidAPI-Host': gasApiHost,
    },
  });
}
