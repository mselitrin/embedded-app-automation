import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()

function handlePublishMessage() {
  const messageType = document.getElementById('messageType').value
  const messageTarget = document.getElementById('messageTarget').value
  const messageContent = JSON.parse(
    document.getElementById('messageContent').value
  )
  sdk.publishMessage(messageType, messageTarget, messageContent)
}

function handleOn() {
  const eventName = document.getElementById('eventName').value
  sdk.on(eventName, data => {
    document.getElementById('messageReceived').innerHTML = JSON.stringify(data)
  })
}

function handleAddButtonClicked() {
  sdk.on("addButtonClicked", () => {
    console.log("Add Button was Clicked!")
  })
}

function handlePhoneNumberClicked() {
  console.log("Starting to Listen")
  sdk.on('phoneNumberClicked', ({ number }) => {
    console.log(`Phone Number ${number} was clicked`)
  })
}

document.getElementById('btnOn').addEventListener('click', handleOn)
document.getElementById('btnPublishMessage')
        .addEventListener('click', handlePublishMessage)
document.getElementById('btnAddButtonClicked')
        .addEventListener('click', handleAddButtonClicked)
document.getElementById('btnPhoneNumberClicked')
        .addEventListener('click', handlePhoneNumberClicked)
