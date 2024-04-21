import algosdk from "algosdk";

// Configuration for the Algorand client
const algodToken = "a".repeat(64);  // Typically for sandbox use; replace with a secure method of storing and retrieving tokens for production
const server = "http://localhost";  // This should point to the Algorand node's address
const port = 4001;  // Default port for the Algorand daemon (algod)

// Mnemonic for the account - be sure to keep this secure and not hard-coded in production
const mnemonic = "place case guide roof nerve poverty pattern social donor such figure shrimp reject resource forward ladder bunker job slab extend during baby waste absent educate";

// Initialize Algorand client
export function getClient(): algosdk.Algodv2 {
    return new algosdk.Algodv2(algodToken, server, port);
}

// Convert the mnemonic to an account object
export function getAccount(): algosdk.Account {
    return algosdk.mnemonicToSecretKey(mnemonic);
}
