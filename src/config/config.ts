import algosdk from "algosdk";

// Placeholder values - replace with actual production values
const algodToken = process.env.ALGORAND_TOKEN || ""; // Retrieve token from environment variable
const server = process.env.ALGORAND_SERVER || "http://localhost"; // Retrieve server address from environment variable
const port = parseInt(process.env.ALGORAND_PORT || "4001"); // Retrieve port from environment variable

// Placeholder mnemonic - replace with actual production mnemonic retrieved securely
const mnemonic = process.env.ALGORAND_MNEMONIC || "";

// Initialize Algorand client
export function getClient(): algosdk.Algodv2 {
    return new algosdk.Algodv2(algodToken, server, port);
}

// Convert the mnemonic to an account object
export function getAccount(): algosdk.Account {
    return algosdk.mnemonicToSecretKey(mnemonic);
}

