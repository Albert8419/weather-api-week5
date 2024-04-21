import algosdk from "algosdk";

// Assuming you're using a sandbox or private network, this token may be fine.
// For a public Algorand network, you would need a valid token.
const algodToken = "a".repeat(64);

// This should be the address of your Algorand node.
// If you're using the Algorand sandbox, localhost is correct, but the port should be 4001.
const server = "http://localhost";
const port = 4001; // Algorand's default port is 4001 for the algod process.

// Your mnemonic to restore the account.
// Ensure you protect this and don't expose it in your code in a production environment.
const mnemonic = "place case guide roof nerve poverty pattern social donor such figure shrimp reject resource forward ladder bunker job slab extend during baby waste absent educate";

// Initialize Algorand client
export function getClient(): algosdk.Algodv2 {
    return new algosdk.Algodv2(algodToken, server, port);
}

// Convert the mnemonic to an account object
export function getAccount(): algosdk.Account {
    return algosdk.mnemonicToSecretKey(mnemonic);
}
