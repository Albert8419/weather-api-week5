import algosdk from "algosdk";
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "3000";
const mnemonic = "erode super only accident teach spatial morning nominee upon tomato panic laugh bargain baby tonight present leisure jewel priority creek clutch inside tiger abstract brain";
export function getClient() {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}
export function getAccount() {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
//# sourceMappingURL=config.js.map