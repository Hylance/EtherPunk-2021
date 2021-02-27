require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note mushroom exchange grid kiwi orange twist'; 
let testAccounts = [
"0xedb474474e6b4f20e43826e40c6fdb94bde47cb8c37745e323b8ab6d7cd59a62",
"0x4b4ae480955797c94f1548dbc520fe6b4a35168b3aad61cfbcc297c439363c50",
"0x5f19b20c866e02e5f13708edcc3b40a6e8a0019475596d9f270fd762028972a9",
"0xc5ea6397e3245c143181185c5ef58ed45ab4d708494f76e4e512b4e1a4ae0e15",
"0x9af67b1d7e1963cebbb8ffd0f63e436feb00082fca2663923306e9d64c520ccb",
"0x7ced29e51bbc389f42331452cafedfefacf599544dd33d6858d845e05a92a418",
"0xa5cda88559714fc5f1058c3d8470f9e85d791cb5ade5695763f80aea17ad0f74",
"0x11e26485acc65153de6167e9c241844f574786cecc9cc806fbf4145de9b4d547",
"0xf1f35d7cd4d6e12df18c3bb75650c3982a33e4ba93597d9eee75814cba70b006",
"0xba70a141bb309d756c07f5724239ce83e5d27206f6ef703da779d7b794275ed5"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
