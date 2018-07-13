import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()

function handleOpenModal() {
  sdk.showModal({
    height : 500,
    width : 500
  })
}

function handleCloseModal() {
  sdk.closeModal()
}

document
  .getElementById('btnOpenModal')
  .addEventListener('click', handleOpenModal)
document
  .getElementById('btnCloseModal')
  .addEventListener('click', handleCloseModal)
