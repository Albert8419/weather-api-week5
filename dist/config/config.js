"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = exports.getClient = void 0;
const tslib_1 = require("tslib");
const algosdk_1 = tslib_1.__importDefault(require("algosdk"));
// Configuration for the Algorand client
const algodToken = "a".repeat(64); // Typically for sandbox use; replace with a secure method of storing and retrieving tokens for production
const server = "http://localhost"; // This should point to the Algorand node's address
const port = 4001; // Default port for the Algorand daemon (algod)
// Mnemonic for the account - be sure to keep this secure and not hard-coded in production
const mnemonic = "place case guide roof nerve poverty pattern social donor such figure shrimp reject resource forward ladder bunker job slab extend during baby waste absent educate";
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