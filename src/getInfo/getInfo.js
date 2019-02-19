import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()

async function getCompanyInfo() {
    var prom
    prom = await sdk.getUserInfo()
    console.log(prom)
}

async function getSelectedRecords() {
    var prom
    prom = await sdk.getSelectedRecords({pageNumber : 0, pageSize:100})
    console.log(prom)
}

document.getElementById('btnSelectedRecords').addEventListener('click', getSelectedRecords)
document.getElementById('btnCompanyInfo').addEventListener('click', getCompanyInfo)