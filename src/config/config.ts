import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "3000";

const mnemonic: string = "pigeon essence guitar sea spawn sheriff hold solid vote quote oblige hurdle entire senior situate pond boy pledge ladder weekend glare project nice abandon napkin"

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}

export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}    