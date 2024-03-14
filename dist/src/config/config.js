import algosdk from "algosdk";
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "3000";
const mnemonic = "region cherry net oxygen ivory universe inside clog blade easily seven cargo scissors pen forget sustain front casual arrow fiscal ordinary local hurt above unable";
export function getClient() {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}
export function getAccount() {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
//# sourceMappingURL=config.js.map