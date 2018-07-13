import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()

function handleUpdateWidth() {
  let width = document.getElementById('updateWidth').value
  sdk.setAppUI({
    width: parseInt(width)
  })
}

function handleUpdateHeight() {
  let height = document.getElementById('updateHeight').value
  sdk.setAppUI({
    height: parseInt(height)
  })
}

function handleUpdateCount(){
  let count = document.getElementById('updateCount').value
  sdk.setAppUI({
    count: parseInt(count)
  })
}

function handleAddBtn() {
  let bool_value = document.getElementById('updateAddButton').value
  var bool
  if (bool_value == "true") {
    bool = true
  } else {
    bool = false
  }
  sdk.setAppUI({
    disableAddButton: bool
  })
}

function handleActionBar() {
  let bool_value = document.getElementById('updateActionBar').value
  var bool
  if (bool_value == "true") {
    bool = true
  } else {
    bool = false
  }
  sdk.setAppUI({
    showActionBar: bool
  })
}

function handleActionBarActive() {
  let bool_value = document.getElementById('updateActionActive').value
  var bool
  if (bool_value == "true") {
    bool = true
  } else {
    bool = false
  }
  sdk.setAppUI({
    isActionBarActive: bool
  })
}

document.getElementById('BtnUpdateHeight').addEventListener('click', handleUpdateHeight)
document.getElementById('BtnUpdateWidth').addEventListener('click', handleUpdateWidth)
document.getElementById('BtnUpdateCount').addEventListener('click', handleUpdateCount)
document.getElementById('BtnUpdateAdd').addEventListener('click', handleAddBtn)
document.getElementById('BtnActionBar').addEventListener('click', handleActionBar)
document.getElementById('BtnActionActive').addEventListener('click', handleActionBarActive)
