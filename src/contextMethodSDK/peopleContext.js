import { handleSaveContext, handleCompareContext, handleCustomFieldIndex } from './abstractMethods.js'
import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()

export async function firstNameContext() {
  	//Valid First Name
  	const fieldName = 'first_name'
  	let fieldValue = 'LeBron'
  	console.log("Testing firstName valid value")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, fieldValue)

  	//Empty string
  	fieldValue = null
  	let expectedValue = null
	  console.log("Testing firstName empty value")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, expectedValue)

  	//Set constant value
  	fieldValue = 'LeBron'
  	await handleSaveContext(fieldName, fieldValue)

}

export async function middleNameContext() {
    const fieldName = 'middle_name'
    let fieldValue = 'Raymone'
	console.log("Testing middleName valid value")
    await handleSaveContext(fieldName, fieldValue)
    await handleCompareContext(fieldName, fieldValue)

    //Empty string
  	fieldValue = ""
  	let expectedValue = null
	console.log("Testing middleName empty value")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, expectedValue)

  	//Set constant value
  	fieldValue = 'Raymone'
  	await handleSaveContext(fieldName, fieldValue)
}

export async function lastNameContext() {
   	const fieldName = 'last_name'
   	let fieldValue = 'James'
	console.log("Testing lastName valid value")
   	await handleSaveContext(fieldName, fieldValue)
   	await handleCompareContext(fieldName, fieldValue)

   	//Empty string
  	fieldValue = ""
  	let expectedValue = null
	console.log("Testing lastName empty value")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, expectedValue)

  	//Set constant value
  	fieldValue = 'James'
  	await handleSaveContext(fieldName, fieldValue)
}

export async function prefixContext() {
   	const fieldName = 'prefix'
   	let fieldValue = 'Mr.'
	console.log("Testing prefix valid value")
   	await handleSaveContext(fieldName, fieldValue)
   	await handleCompareContext(fieldName, fieldValue)

   	//Empty string
  	fieldValue = ""
  	let expectedValue = null
	console.log("Testing prefix empty value")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, expectedValue)

  	//Set constant value
  	fieldValue = 'Mr.'
  	await handleSaveContext(fieldName, fieldValue)
}

export async function suffixContext() {
   	const fieldName = 'suffix'
   	let fieldValue = 'Sr.'
	console.log("Testing suffix valid value")
   	await handleSaveContext(fieldName, fieldValue)
   	await handleCompareContext(fieldName, fieldValue)

   	//Empty string
  	fieldValue = ""
  	let expectedValue = null
	console.log("Testing suffix empty value")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, expectedValue)

  	//Set constant value
  	fieldValue = 'Sr.'
  	await handleSaveContext(fieldName, fieldValue)
}

export async function contactContext() {
  const fieldName = 'contact_type_id'
  var fieldValue = ''
  const contact_api = 'v1/contact_types'
  const prom = await sdk.api(contact_api, {method : 'GET', body: '{}'})

  //Potential, Current, Uncategorized, Other, Custom
  for (var i = 0; i < prom.length; i++) {
    fieldValue = prom[i].id
    await handleSaveContext(fieldName, fieldValue)
    await handleCompareContext(fieldName, fieldValue)
  }

  //Invalid ID
  fieldValue = 1234
  await handleSaveContext(fieldName, fieldValue, 'InputError')
}

export async function companyContext() {
  const company_search_api = 'v1/companies/search'
  const prom = await sdk.api(company_search_api, {method : 'POST', body: '{"page_size" : 5}'})
  var fieldName = 'company_id'

  //Valid Company ID
  var fieldValue = prom[0].id
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Empty Company ID
  fieldValue = null
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Valid Company ID
  var fieldValue = prom[0].id
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Invalid Company ID
  // fieldValue = 12345
  // await handleSaveContext(fieldName, fieldValue)
  // await handleCompareContext(fieldName, fieldValue)
}

export async function emailContext() {
   	const fieldName = 'email'
   	let fieldValue = {
		"email": "lebron@james.com",
		"category": "work"
	}
	console.log("Testing email valid value")
   	await handleSaveContext(fieldName, fieldValue)
   	await handleCompareContext(fieldName, fieldValue)

   	//Empty category
   	fieldValue = {
		"email": "lebron@james.com",
		"category": ""
	}

	let expectedValue = {
		"email": "lebron@james.com",
		"category": "work"
	}

	console.log("Testing email with empty category")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, expectedValue)

  	//Random format
  	fieldValue = {
		"email": "12rqoiner",
		"category": "work"
	}

	console.log("Testing email with random format")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, fieldValue)

  	//set valid value
  	fieldValue = {
		"email": "lebron@james.com",
		"category": "work"
	}
   	await handleSaveContext(fieldName, fieldValue)
}

export async function phoneContext() {
   	const fieldName = 'phone_numbers'
   	let fieldValue = [{
		"number": "12345",
		"category": "mobile"
	}]
	console.log("Testing phone valid value")
   	await handleSaveContext(fieldName, fieldValue)
   	await handleCompareContext(fieldName, fieldValue)

   	//Empty category
   	fieldValue = [{
		"number": "12345",
		"category": ""
	}]

	let expectedValue = [{
		"number": "12345",
		"category": "work"
	}]

	console.log("Testing phone with empty category")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, expectedValue)

	//Empty number
   	fieldValue = [{
		"number": "",
		"category": "work"
	}]

	expectedValue = []

	console.log("Testing phone with empty number")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, expectedValue)

  	//Random value
  	fieldValue = [{
		"number": "alskdfw!@#",
		"category": "work"
	}]

	console.log("Testing phone with random value")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, fieldValue)

  	//set valid value
  	fieldValue = [{
		"number": "12345",
		"category": "mobile"
	}]
   	await handleSaveContext(fieldName, fieldValue)
}

export async function socialsContext() {
   	const fieldName = 'socials'
   	let fieldValue = [{
		"url": "www.linkedin.com",
		"category": "linkedin"
	}]
	console.log("Testing socials valid value")
   	await handleSaveContext(fieldName, fieldValue)
   	await handleCompareContext(fieldName, fieldValue)

   	//Empty category
   	fieldValue = [{
		"url": "www.linkedin.com",
		"category": ""
	}]

	console.log("Testing socials with empty category")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, fieldValue)

	//Empty url
   	fieldValue = [{
		"url": "",
		"category": "linkedin"
	}]

	let expectedValue = []

	console.log("Testing socials with empty url")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, expectedValue)

  	//Random value
  	fieldValue = [{
		"url": "OIWE#@$@$",
		"category": "linkedin"
	}]

	console.log("Testing socials with random value")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, fieldValue)

  	//multiple websites
  	fieldValue = [
  		{
			"url": "linkedin.com",
			"category": "linkedin"
		},
		{
			"url": "facebook.com",
			"category": "facebook"
		},
		{
			"url": "twitter.com",
			"category": "twitter"
		},
		{
			"url": "plus.google.com",
			"category": "googleplus"
		},
		{
			"url": "youtube.com",
			"category": "youtube"
		},
		{
			"url": "quora.com",
			"category": "quora"
		},
		{
			"url": "foursquare.com",
			"category": "foursquare"
		},
		{
			"url": "klout.com",
			"category": "klout"
		},
		{
			"url": "gravatar.com",
			"category": "gravatar"
		},
		{
			"url": "other.com",
			"category": "other"
		}
	]

	console.log("Testing socials with multiple values")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, fieldValue)

}

export async function websitesContext() {
   	const fieldName = 'websites'
   	let fieldValue = [{
		"url": "www.website.com",
		"category": "work"
	}]
	console.log("Testing websites valid url")
   	await handleSaveContext(fieldName, fieldValue)
   	await handleCompareContext(fieldName, fieldValue)

   	//Empty category
   	fieldValue = [{
		"url": "some.website.com",
		"category": ""
	}]

	console.log("Testing socials with empty category")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, fieldValue)

	//Empty url
   	fieldValue = [{
		"url": "",
		"category": "linkedin"
	}]

	let expectedValue = []

	console.log("Testing socials with empty url")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, expectedValue)

  	//Random value
  	fieldValue = [{
		"url": "OIWE#@$@$",
		"category": "work"
	}]

	console.log("Testing socials with random value")
  	await handleSaveContext(fieldName, fieldValue)
  	await handleCompareContext(fieldName, fieldValue)

    //Multiple Website
    fieldValue = [{
      "url" : "website1.com",
      "category" : "work"
    }, {
      "url" : "website2.com",
      "category" : "personal"
    }]

    console.log("Testing website with multiple value")
    await handleSaveContext(fieldName, fieldValue)
    await handleCompareContext(fieldName, fieldValue)
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

export async function addressContext() {
  //Grabs the Address Object on the record to alter
  const { context } = await sdk.getContext()
  var address_object = context.address
  var fieldValue = address_object
  const fieldName = 'address'

  //Valid street name
  address_object.street = '123 Fake St !@#'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Valid City
  address_object.city = 'Oakland!@#'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Valid state
  address_object.state = 'CA!@$'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Valid Postal_code
  address_object.postal_code = '9460!@#'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Valid Country
  address_object.country = 'US'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Empty Street Name
  address_object.street =  ''
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Empty City Name
  address_object.city = ''
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Empty State Name
  address_object.state = ''
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Empty Postal Code
  address_object.postal_code = ''
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Empty Country
  address_object.country = ''
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

}

export async function titleContext() {
  var fieldName = 'title'
  var fieldValue = 'Title Updated'
  //Valid Title
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Empty title
  fieldValue = null
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)

  //Valid Title
  fieldValue = 'Title Updated Again'
  await handleSaveContext(fieldName, fieldValue)
  await handleCompareContext(fieldName, fieldValue)
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
