"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = exports.getClient = void 0;
const tslib_1 = require("tslib");
const algosdk_1 = tslib_1.__importDefault(require("algosdk"));
// Placeholder values - replace with actual production values
const algodToken = process.env.ALGORAND_TOKEN || ""; // Retrieve token from environment variable
const server = process.env.ALGORAND_SERVER || "http://localhost"; // Retrieve server address from environment variable
const port = parseInt(process.env.ALGORAND_PORT || "4001"); // Retrieve port from environment variable
// Placeholder mnemonic - replace with actual production mnemonic retrieved securely
const mnemonic = process.env.ALGORAND_MNEMONIC || "";
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
//# sourceMappingURL=config.js.map