require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth ridge purity grace slender flock small'; 
let testAccounts = [
"0x1f4cbd7e2e4b5da3cfa50e4e80a9bad7abf3c4d49d06b563f7529d279d2d0ed3",
"0x18f55843906bbfad87b0831fe15b3fd5f141fa4ea79db9851924c12eb440c3f9",
"0x18b3eb96f019411d9b54e0328ab1ac3b22e906d58c68da49dc9442aba51ba104",
"0xb9c6a62627f94a146a694e53feaa913b16d90023b18023134cd4d81791454e32",
"0x5fb8772e2b3095b0a55c092bf08e77fc94b0007490a101e4bac7780872643308",
"0xb38226c4dd5f6b6d3c3057059ab87226342b17cda841a79c79f135ee1d37987b",
"0x6a806eeaa0ab6e45e5a6f7fbde38e49753a943c7278bc470fa4a23a2ea4b9c98",
"0x8c3f6d551293c11cc242185b92d3ae46eb1e2630e0dbf80275979f64cef2f038",
"0x37adf80bda224a9606fc44ebccfc1d5d677345f43dcc9ad12333cd60d12af4a2",
"0x1f8c1055fa0a63ec35f658c466e7470778f0ecf70033450a0eba7b31bd0f0b80"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

