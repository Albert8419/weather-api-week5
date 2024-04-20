import algosdk from "algosdk";
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "3000";
const mnemonic = "pigeon essence guitar sea spawn sheriff hold solid vote quote oblige hurdle entire senior situate pond boy pledge ladder weekend glare project nice abandon napkin";
export function getClient() {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}
export function getAccount() {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
//# sourceMappingURL=config.js.map