import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()

var id_record, body, prom
async function handleApiCall() {
  var crud = document.getElementById('CRUD').value
  var entity = document.getElementById('apiEntity').value
  var api_route = 'v1/' + entity + '/'
  switch (crud) {
    case 'create':
      console.log(entity)
      if (entity == "opportunities") {
        body = '{"name" : "' + entity + ' Created By DevAPI", "primary_contact_id" :' + id_record + '}'
        console.log(body)
      } else if (entity == "leads") {
        body = '{"name" : "' + entity + ' Created By DevAPI", "company_name" : "Lead Company"}'
      } else {
        body = '{"name" : "' + entity + ' Created By DevAPI"}'
      }
      prom = await sdk.api(api_route, {method: 'POST', body : body})
      console.log(prom)
      id_record = prom.id
      document.getElementById('read_api_length').innerHTML = "Record Created"
      break;

    case 'empty_create':
      body = '{"name" : ""}'
      prom = await sdk.api(api_route, {method: 'POST', body : body})
      break;

    case 'update':
      body = '{"name" : "' + entity + ' Updated By DevAPI"}'
      const update_api_route = api_route + id_record
      prom = sdk.api(update_api_route, {method: 'PUT', body : body})
      console.log(prom)
      document.getElementById('read_api_length').innerHTML = "Record Updated"
      break;

    case 'empty_update':
      body = '{"name" : ""}'
      const empty_api_route = api_route + id_record
      prom = sdk.api(empty_api_route, {method: 'PUT', body : body})
      break;

    case 'read_list':
      body = '{"page_size" : 100}'
      const read_list_api_route = api_route + "search"
      prom = await sdk.api(read_list_api_route, {method: 'POST', body : body})
      console.log(prom)
      document.getElementById('read_api_length').innerHTML = prom.length
      break;

    case 'read_single':
      const read_api_route = api_route + id_record
      prom = await sdk.api(read_api_route, {method: 'GET', body : '{}'})
      console.log(prom)
      document.getElementById('read_api_length').innerHTML = prom.name
      break;

    case 'delete':
      const delete_api_route = api_route + id_record
      prom = await sdk.api(delete_api_route, {method: 'DELETE', body : '{}'})
      console.log(prom)
      document.getElementById('read_api_length').innerHTML = prom.id
      break;

    case 'convert_lead':
      const convert_route = api_route + id_record + "/convert"
      body = '{"details" : {"person" : {"name" : "Converted Lead"},' +
             '"opportunity": { "name" : "Opportunity From Lead"}}}'
      prom = await sdk.api(convert_route, {method: 'POST', body : body})
      console.log(prom)
      break;

    default:
      console.log("Error")
  }
}

async function handleGetApi() {
  var get_request = document.getElementById('get_request').value
  switch (get_request) {
    case 'list_activity' :
      const list_activity_type = 'v1/activity_types'
      prom = await sdk.api(list_activity_type, {method: 'GET'})
      console.log(prom)
      document.getElementById('read_api_length').innerHTML = prom
      break;
    case 'user_id':
      const list_user_api = 'v1/users/search'
      prom = await sdk.api(list_user_api, {method : 'POST', body: '{"page_size" : 200}'})
      console.log(prom)
      document.getElementById('read_api_length').innerHTML = prom
      break;
    case 'contact_type':
      const list_contact_type = 'v1/contact_types'
      prom = await sdk.api(list_contact_type, {method:'GET', body: '{}'})
      console.log(prom)
      document.getElementById('read_api_length').innerHTML = prom
      break;
    case 'custom_field':
      const list_custom_field = 'v1/custom_field_definitions'
      prom = await sdk.api(list_custom_field, {method:'GET', body: '{}'})
      console.log(prom)
      document.getElementById('read_api_length').innerHTML = prom
      break;
    case 'pipeline_stages':
      const list_pipeline_stages = 'v1/pipeline_stages'
      prom = await sdk.api(list_pipeline_stages, {method:'GET', body: '{}'})
      console.log(prom)
      document.getElementById('read_api_length').innerHTML = prom
      break;
    case 'loss_reason':
      const list_lost_reasons = 'v1/loss_reasons'
      prom = await sdk.api(list_lost_reasons, {method:'GET', body: '{}'})
      console.log(prom)
      document.getElementById('read_api_length').innerHTML = prom
      break;
    default:
      console.log("Error")
  }
}

var activity_id
async function handleApiActivity() {
  var activity_request = document.getElementById('activity_api').value
  switch(activity_request) {
    case 'create_activity' :
      const c_activity = 'v1/activities'
      body = '{"parent" : { "type" : "person", "id" : ' + id_record + '},' +
             '"type" : { "category" : "user", "id" : 0},' +
             '"details" : "This is a description for a note"}'
      prom = await sdk.api(c_activity, {method: 'POST', body: body})
      activity_id = prom.id
      console.log(prom)
      break;
    case 'read_activity':
      const r_activity = 'v1/activities/search'
      prom = await sdk.api(r_activity, {method : 'POST', body : '{"page_size" : 5}'})
      console.log(prom)
      break;
    case 'delete_activity':
      const d_activity = 'v1/activities/' + activity_id
      prom = await sdk.api(d_activity, {method : 'DELETE', body : '{}'})
      console.log(prom)
      break;
    default:
      console.log("Error")
  }
}
document.getElementById('btnApi').addEventListener('click', handleApiCall)
document.getElementById('btnApiGET').addEventListener('click', handleGetApi)
document.getElementById('btnApiActivity').addEventListener('click', handleApiActivity)
