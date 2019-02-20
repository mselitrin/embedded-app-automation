import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()
sdk.setAppUI({
  height: 700,
  width : 700
})
/*
This file contains methods of fields that are similar in multiple entities.
*/

/*
Generic SDK Methods
*/

//Generic SDK Save Methods
export async function handleSaveContext(fieldName, fieldValue, errorMessage = '') {
  var node = document.getElementById('logs')
  var textnode
  try {
    const { context } = await sdk.getContext()
    context[fieldName] = fieldValue
    const data = await context.save()
    //Error Message Handling
  } catch (e) {
    console.log(errorMessage + e.detail)
    if (e.detail == errorMessage) {
      textnode = document.createTextNode(fieldName + " : Success\n ")
      node.appendChild(textnode)
    } else {
      textnode = document.createTextNode(fieldName + " : Failure\n ")
      node.appendChild(textnode)
    }
  }
}

export async function handleCompareContext(fieldName, fieldValue) {
  const { context } = await sdk.getContext();
  console.log(context[fieldName])
  // console.log(fieldValue)
  var node = document.getElementById('logs')
  var textnode
  //If Object
  if (typeof fieldValue === 'object') {
    //Special Case for Properties with multiple data
    if ((fieldName === 'phone_numbers' || fieldName === 'socials' || fieldName === 'websites') && !undefined) {
      for (var i=0; i<context[fieldName].length; i++) {
        delete(context[fieldName][i].id)
      }
    }
    console.log(JSON.stringify(context[fieldName]))
    console.log(JSON.stringify(fieldValue))
    console.log(JSON.stringify(context[fieldName]) === JSON.stringify(fieldValue))
    textnode = document.createTextNode(fieldName + " : Success\n ")
    node.appendChild(textnode)
  //If Plain Value
  } else if (context[fieldName] === fieldValue){
    textnode = document.createTextNode(fieldName + " : Success\n ")
    node.appendChild(textnode)
    console.log(fieldValue)
    console.log(context[fieldName] === fieldValue)
  //Fail Messages
  } else {
    textnode = document.createTextNode(fieldName + " : Failure\n ")
    node.appendChild(textnode)
  }
}

export async function handleCustomFieldIndex(dataType) {
  //Grab API to determine the Custom Field Data Types
  const custom_field_api = 'v1/custom_field_definitions'
  //Grab API Response
  const prom = await sdk.api(custom_field_api, {method : 'GET', body: '{}'})
  var array_index, dropdown_option, dropdown_option2, custom_id = null

  


  for (var i = 0; i < prom.length; i++) {
    if (prom[i].data_type == dataType) {
      custom_id = prom[i].id
      if (dataType === "Dropdown" || dataType === "MultiSelect") {
        dropdown_option = prom[i].options[1].id
        dropdown_option2 = prom[i].options[2].id
       }
      break
    }
  }

  const context = await sdk.getContext();
  for (var i = 0; i < context.context.custom_fields.length; i++) {
    if (context.context.custom_fields[i].custom_field_definition_id == custom_id) {
      array_index = i;
    }
  }

  if (dataType === "Dropdown" || dataType === "MultiSelect") {
    return [array_index, dropdown_option, dropdown_option2]
  } else {
    return array_index
  }

}

async function handleGetContext() {
  const { context } = await sdk.getContext()
  window.my_context = context
  console.log(context)
}

document.getElementById('getContext').addEventListener('click', handleGetContext)
