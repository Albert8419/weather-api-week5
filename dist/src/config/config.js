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
const mnemonic = "fix insane term problem depth indicate luggage youth add enable happy struggle zoo main clutch tobacco swear one mirror mansion chaos exercise service abandon cherry";
// Initialize Algorand client
export function getClient() {
    return new algosdk.Algodv2(algodToken, server, port);
}
// Convert the mnemonic to an account object
export function getAccount() {
    return algosdk.mnemonicToSecretKey(mnemonic);
}
//# sourceMappingURL=config.js.map