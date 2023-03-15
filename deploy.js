const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const {interface, bytecode} = require('./compile')

const provider = new HDWalletProvider(
    'screen abuse cricket furnace type spell episode orphan lend broken toe night',
    'https://goerli.infura.io/v3/7c932dca64454bf0bbcb46bff08552c1'
)
const web3 = new Web3(provider)

const deploy = async() =>{
    const accounts = await web3.eth.getAccounts()
    console.log('attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode, arguments: ['Hi There!'] }).send({gas : '1000000', from : accounts[0]})

    console.log('contract deployed to ',result._address)
    provider.engine.stop()
}

deploy()