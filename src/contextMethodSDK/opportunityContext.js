import { handleSaveContext, handleCompareContext, handleCustomFieldIndex } from './abstractMethods.js'
import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()

export async function statusContext() {
  const fieldName = 'status'

  //Lost
  var fieldValue = 'Lost'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Open
  fieldValue = 'Open'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Abandoned
  fieldValue = 'Abandoned'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Won
  fieldValue = 'Won'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Invalid Value
  fieldValue = 'Invalid'
  await handleSaveContext(fieldName, fieldValue, 'IntegrityError')
}

export async function valueContext() {
  //-----Monetary Value
  var fieldName = 'monetary_value'
  var fieldValue = 25

  //valid value
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //negative number
  fieldValue = -25
  await handleSaveContext(fieldName, fieldValue, 'InputError')

  //decimal number
  fieldValue = 12.99
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  // 0$
  fieldValue = 0
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  // empty
  fieldValue = null
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //----Monetary Unit
  fieldName = 'monetary_unit'

  //valid value
  fieldValue = 'BTC'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //invalid unit
  fieldValue = 'ABC'
  await handleSaveContext(fieldName, fieldValue, 'InputError')
}

export async function sourceContext() {
  const fieldName = 'customer_source_id'
  var fieldValue = ''
  const source_api = 'v1/customer_sources'
  const prom = await sdk.api(source_api, {method : 'GET', body: '{}'})

  //Custom source, Advertising, Cold Call, Email
  for (var i = 0; i < prom.length; i++) {
    fieldValue = prom[i].id
    await handleSaveContext(fieldName, fieldValue)
    await handleCompareContext(fieldName, fieldValue)
  }

  //Invalid Source
  fieldValue = 1
  await handleSaveContext(fieldName, fieldValue, 'IntegrityError')

  //No Source
  fieldValue = null
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)
}


export async function pipelineContext() {
  const fieldName = 'pipeline_id'
  var fieldValue = ''
  const pipeline_api = 'v1/pipelines'
  const prom = await sdk.api(pipeline_api, {method : 'GET', body: '{}'})

  //Sales, Business, Custom Pipeline
  for (var i = 0; i < prom.length; i++) {
    fieldValue = prom[i].id
    await handleSaveContext(fieldName, fieldValue)
    await handleCompareContext(fieldName, fieldValue)
  }

  //Invalid Pipeline -- Not Going to Test since app crashes, already discussed
  // fieldValue = 1234
  // await handleSaveContext(fieldName, fieldValue, 'InputError')
}

export async function stageContext() {
  var fieldName = 'pipeline_stage_id'
  var fieldValue = ''
  //Grabs Pipeline ID
  const { context } = await sdk.getContext()
  const curr_pipeline = context.pipeline_id

  //Grabs all Pipeline and Stages
  const pipeline_api = 'v1/pipelines'
  const prom = await sdk.api(pipeline_api, {method : 'GET', body: '{}'})

  //Grabbing Object by ID
  var stages_id = null
  for(var i = 0; i < prom.length; i++) {
    if (prom[i].id == curr_pipeline) {
      stages_id = i
    }
  }
  //Changing Stages
  for (var j = 0; j < prom[stages_id].stages.length; j++) {
    fieldValue = prom[stages_id].stages[j].id
    console.log(fieldValue)
    await handleSaveContext(fieldName, fieldValue)
    await handleCompareContext(fieldName, fieldValue)
  }

  //Input Invalid Stage ID
    fieldValue = 1234
    await handleSaveContext(fieldName, fieldValue, 'IntegrityError')
}

export async function priorityContext() {
  var fieldName = 'priority'

  //Low
  var fieldValue = 'Low'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Medium
  fieldValue = 'Medium'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //High
  fieldValue = 'High'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //None
  fieldValue = 'None'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Invalid Priority
  fieldValue = "Extra High"
  await handleSaveContext(fieldName, fieldValue, 'IntegrityError')
}

export async function closeDateContext() {
  var fieldName = 'close_date'

  //Valid date
  var fieldValue = '1/20/2022'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Invalid date format
  fieldValue = '13/13/2013'
  await handleSaveContext(fieldName, fieldValue, 'ArgumentError')

  //Empty Date
  fieldValue = null
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)
}

export async function primaryContactContext() {
  //Grab Contacts from DevAPI
  const contact_search_api = '/v1/people/search'
  const prom = await sdk.api(contact_search_api, {method : 'POST', body: '{"page_size": 5}'})
  var fieldName = 'primary_contact_id'

  //Change Primary Contact to Valid Contact
  var fieldValue = prom[0].id
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //const { context } = await sdk.getContext()

  // const oppo_record_search = 'v1/opportunities/' + context.id
  // const promi = await sdk.api(oppo_record_search, {method : 'GET', body: '{}'})
  // console.log(promi)

  //Invalid Primary Contact -- CRASHES Full Detail View
  // var fieldValue = 12345
  // await handleSaveContext(fieldName, fieldValue)
  // await handleCompareContext(fieldName, fieldValue)

  //Empty Primary Contact
  // var fieldValue = null
  // await handleSaveContext(fieldName, fieldValue)
  // await handleCompareContext(fieldName, fieldValue)
}

export async function descriptionContext() {
  const fieldName = 'details'

  //Valid Description
  var fieldValue = 'Description has been updated!'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Input Description with special characters
  fieldValue = '#$%^&*Company'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Empty Description
  fieldValue = null
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)
}

export async function tagsContext() {
  const fieldName = 'tags'
  //valid tag
  var fieldValue = ['tags 1']
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //remove tags
  fieldValue = []
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //% and / error tags (Removes the special characters)
  fieldValue = ['%Tag']
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Multi tags
  fieldValue = ['Tag1', 'Tag2']
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)
}

export async function winPercentageContext() {
  const fieldName = 'win_probability'
  //Valid Percentage
  var fieldValue = 20
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Empty Percentage
  fieldValue = null
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Negative Percentage
  var fieldValue = -20
  await handleSaveContext(fieldName, fieldValue, 'InputError')

  //Invalid Percentage - No Error Messages (Matches with DevAPI)
  fieldValue = "not@gmail.com"
  await handleSaveContext(fieldName, fieldValue, 'InputError')

  //0 Percentage
  fieldValue = 0
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)
}

export async function customTextField() {
  //Grabs the Custom Field Object on the record to alter
  const { context } = await sdk.getContext()
  var custom_field_object = context.custom_fields

  var array_index = await handleCustomFieldIndex("String")

  const fieldName = 'custom_fields'

  //Valid Custom Text Field
  custom_field_object[array_index].value = "Custom Text Field Updated"
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Empty Custom Text Field
  custom_field_object[array_index].value = null
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)
}

export async function customTextArea() {
  //Grabs the Custom Field Object on the record to alter
  const { context } = await sdk.getContext()
  var custom_field_object = context.custom_fields

  //Grab the ID of the Index that needs to be altered
  var array_index = await handleCustomFieldIndex("Text")

  const fieldName = 'custom_fields'

  //Valid Custom Text Area
  custom_field_object[array_index].value = "Custom Text Area Updated"
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Empty Custom Text Area
  custom_field_object[array_index].value = null
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)
}

export async function customDropdown() {
  //Grabs the Custom Field Object on the record to alter
  const { context } = await sdk.getContext()
  var custom_field_object = context.custom_fields

  //Grab the ID of the Index that needs to be altered and Dropdown ID
  var array_index = await handleCustomFieldIndex("Dropdown")

  const fieldName = 'custom_fields'

  //Valid Custom Dropdown Option
  custom_field_object[array_index[0]].value = array_index[1]
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Invalid Dropdown ID
  custom_field_object[array_index[0]].value = 12345
  await handleSaveContext(fieldName, custom_field_object, 'IntegrityError')

  //Empty Dropdown Option
  custom_field_object[array_index[0]].value = null
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)
}

export async function customDate() {
  //Grabs the Custom Field Object on the record to alter
  const { context } = await sdk.getContext()
  var custom_field_object = context.custom_fields

  //Grab the ID of the Index that needs to be altered
  var array_index = await handleCustomFieldIndex("Date")

  const fieldName = 'custom_fields'

  //Valid Custom Date
  custom_field_object[array_index].value = 1642665600 //01/20/2022 Date
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Invalid Custom Date
  custom_field_object[array_index].value = "hello"
  await handleSaveContext(fieldName, custom_field_object, 'ArgumentError')

  //Empty Custom Date
  custom_field_object[array_index].value = null
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)
}

export async function customCheckbox() {
  //Grabs the Custom Field Object on the record to alter
  const { context } = await sdk.getContext()
  var custom_field_object = context.custom_fields

  //Grab the ID of the Index that needs to be altered
  var array_index = await handleCustomFieldIndex("Checkbox")

  const fieldName = 'custom_fields'

  //True Checkbox
  custom_field_object[array_index].value = true
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //False Checkbox
  custom_field_object[array_index].value = false
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Invalid Checkbox - no error message (matches with DevAPI)
  custom_field_object[array_index].value = "hello"
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)
}

export async function customNumberField() {
  //Grabs the Custom Field Object on the record to alter
  const { context } = await sdk.getContext()
  var custom_field_object = context.custom_fields

  //Grab the ID of the Index that needs to be altered
  var array_index = await handleCustomFieldIndex("Float")

  const fieldName = 'custom_fields'

  //Valid Number Field
  custom_field_object[array_index].value = 12345
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Empty Number Field
  custom_field_object[array_index].value = null
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Invalid Number Field - No Error Messages (Matches with DevAPI)
  custom_field_object[array_index].value = "hello"
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)
}

export async function customURL() {
  //Grabs the Custom Field Object on the record to alter
  const { context } = await sdk.getContext()
  var custom_field_object = context.custom_fields

  //Grab the ID of the Index that needs to be altered
  var array_index = await handleCustomFieldIndex("URL")

  const fieldName = 'custom_fields'
  //Valid URL
  custom_field_object[array_index].value = "www.google.com"
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Empty URL
  custom_field_object[array_index].value = null
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Invalid URL - No Error Messages (Matches with DevAPI)
  custom_field_object[array_index].value = "not@gmail.com"
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)
}

export async function customPercentage() {
  //Grabs the Custom Field Object on the record to alter
  const { context } = await sdk.getContext()
  var custom_field_object = context.custom_fields

  //Grab the ID of the Index that needs to be altered
  var array_index = await handleCustomFieldIndex("Percentage")

  const fieldName = 'custom_fields'
  //Valid Percentage
  custom_field_object[array_index].value = 20
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Empty Percentage
  custom_field_object[array_index].value = null
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Negative Percentage
  custom_field_object[array_index].value = -20
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Invalid Percentage - No Error Messages (Matches with DevAPI)
  custom_field_object[array_index].value = "not@gmail.com"
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //0 Percentage
  custom_field_object[array_index].value = 0
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)
}

export async function customCurrency() {
  //Grabs the Custom Field Object on the record to alter
  const { context } = await sdk.getContext()
  var custom_field_object = context.custom_fields

  //Grab the ID of the Index that needs to be altered
  var array_index = await handleCustomFieldIndex("Currency")

  const fieldName = 'custom_fields'
  //Valid Currency
  custom_field_object[array_index].value = 20
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Empty Currency
  custom_field_object[array_index].value = null
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Negative Currency
  custom_field_object[array_index].value = -20
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Invalid Currency - No Error Messages (Matches with DevAPI)
  custom_field_object[array_index].value = "not@gmail.com"
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //0 Currency
  custom_field_object[array_index].value = 0
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)
}

export async function customMultiSelect() {
  //Grabs the Custom Field Object on the record to alter
  const { context } = await sdk.getContext()
  var custom_field_object = context.custom_fields

  //Grab the ID of the Index that needs to be altered and Dropdown ID
  var array_index = await handleCustomFieldIndex("MultiSelect")

  const fieldName = 'custom_fields'

  //Valid Multi Dropdown Option
  custom_field_object[array_index[0]].value = [array_index[1]]
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Empty Multi Dopdown Option
  custom_field_object[array_index[0]].value = []
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)

  //Invalid Dropdown ID
  custom_field_object[array_index[0]].value = [12345]
  await handleSaveContext(fieldName, custom_field_object, 'IntegrityError')

  //Valid Double Multi Dropdown
  custom_field_object[array_index[0]].value = [array_index[1], array_index[2]]
  await handleSaveContext(fieldName, custom_field_object)
  await handleCompareContext(fieldName, custom_field_object)
}

export async function ownerContext() {
  //Grab Owner ID
  const list_user_api = 'v1/users/search'
  const prom = await sdk.api(list_user_api, {method : 'POST', body: '{"page_size" : 50}'})
  console.log(prom[0].id)

  const fieldName = 'assignee_id'

  //Invalid Owner ID
  fieldValue = 12345
  await handleSaveContext(fieldName, fieldValue, 'AssigneeIntegrityError')

  //Empty Owner
  var fieldValue = null
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Valid Owner
  fieldValue = prom[0].id
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)
}

export async function nameContext() {
  const fieldName = 'name'

  // //Valid Name
  var fieldValue = 'Updated Name'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Empty Name
  var fieldValue = null
  await handleSaveContext(fieldName, fieldValue, 'ActiveRecord::RecordInvalid')

  //Valid name with special characters
  fieldValue = 'What the Updated ^&*'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)
}
