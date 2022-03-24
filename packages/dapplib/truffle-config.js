require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain unknown hunt drink fringe tourist'; 
let testAccounts = [
"0x103a6f02cd37bb4c75ddd53e27e0d9fbaff00e28e551761a4d17e9a20f6c9680",
"0xcef6649ef6c1604d77a8811d896e736c6d60f98e0e9faa50de18f57cb8399842",
"0x1116d79adaa143575f9c7448efb67778c5e250ff0e961bb389dc2b833acc24aa",
"0x4e9e47fab6e27792525b3eca80f4abbf70a8405a4638bf253b1af20c3939fb35",
"0xb3506e99825e817f973f85ef3588940b9fba4d0dbfa9bbb0e786fcdcc97f0541",
"0x5bf9703144201d9852deb55c77b62da468153d70057f85418ffa70c032055209",
"0x8f47eaf959db99a54ab0795e3ab91fbdc48a622fa69cdcf5e7b5b36d58df15ff",
"0xa60a9c9beafaa7a8d36842c94474ec872d309e7af47c54d12000a7a0a17e407c",
"0xf59186dc09c73561939566831c59660a35ccbadeef598797934ad958ffca9c40",
"0x8e8aab1659c69604a3acb93325b6eb73ee45f23ef9515c5ffe4721383ade0781"
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

