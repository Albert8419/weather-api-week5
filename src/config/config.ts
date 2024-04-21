import algosdk from "algosdk";

// Retrieve token, server address, port, and mnemonic from environment variables
const algodToken = process.env.ALGORAND_TOKEN || ""; // Replace "" with the actual environment variable name
const server = process.env.ALGORAND_SERVER || "http://localhost"; // Replace "http://localhost" with the actual server address environment variable
const port = parseInt(process.env.ALGORAND_PORT || "4001"); // Replace "4001" with the actual port environment variable
const mnemonic = process.env.ALGORAND_MNEMONIC || "pigeon essence guitar sea spawn sheriff hold solid vote quote oblige hurdle entire senior situate pond boy pledge ladder weekend glare project nice abandon napkin";

// Initialize Algorand client
export function getClient(): algosdk.Algodv2 {
    return new algosdk.Algodv2(algodToken, server, port);
}

// Convert the mnemonic to an account object
export function getAccount(): algosdk.Account {
    return algosdk.mnemonicToSecretKey(mnemonic);
}
