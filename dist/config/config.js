"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasApiAxiosClient = exports.getAccount = exports.getClient = void 0;
const tslib_1 = require("tslib");
const algosdk_1 = tslib_1.__importDefault(require("algosdk"));
const axios_1 = tslib_1.__importDefault(require("axios"));
// Algorand configurations
const algodToken = process.env.ALGORAND_TOKEN || '';
const server = process.env.ALGORAND_SERVER || 'http://localhost';
const port = parseInt(process.env.ALGORAND_PORT || '4001');
const mnemonic = process.env.ALGORAND_MNEMONIC || '';
// Initialize Algorand client
function getClient() {
    return new algosdk_1.default.Algodv2(algodToken, server, port);
}
exports.getClient = getClient;
// Convert the mnemonic to an account object
function getAccount() {
    return algosdk_1.default.mnemonicToSecretKey(mnemonic);
}
exports.getAccount = getAccount;
// Gas Prices API configurations
const gasApiToken = process.env.GAS_API_TOKEN || ''; // Add this to your environment variables
const gasApiHost = 'gas-price.p.rapidapi.com';
// Initialize Axios client for Gasoline Prices API
function getGasApiAxiosClient() {
    return axios_1.default.create({
        baseURL: `https://${gasApiHost}`,
        headers: {
            'X-RapidAPI-Key': gasApiToken,
            'X-RapidAPI-Host': gasApiHost,
        },
    });
}
exports.getGasApiAxiosClient = getGasApiAxiosClient;
//# sourceMappingURL=config.js.map