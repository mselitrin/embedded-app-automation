import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()

export async function handleCreateEntity(entity) {
  //DevAPI Search for Contact Record (Slow but meh)
  const search_contact = 'v1/people/search'
  prom = await sdk.api(search_contact, {method : 'POST', body : '{"page_size" : 10}'})
  var rand = Math.floor(Math.random() * prom.length)

  var leadJSON = `{"name" : "Lead from SDK",
                   "email" : {"email" : "sdklead@gmail.com", "category" : "work"},
                   "phone_numbers" : [{"number" : "415-123-4567", "category" : "mobile"}]
                  }`
  var personJSON = `{"name" : "People from SDK",
                     "emails" : [{"email" : "peopleSDK@gmail.com", "category" : "work"}]
                    }`
  var companyJSON = `{"name" : "Company from SDK",
                      "address" : {"street" : "123 Fake St", "city" : "Oakland", "state" : "CA"},
                      "details" : "This is Company Detail"
                     }`
  var opportunityJSON = `{"name" : "Opportunity from SDK", 
                          "primary_contact_id" : ${prom[rand].id},
                          "status" : "Won",
                          "priority" : "Medium"
                        }`
  var projectJSON = `{"name" : "project from SDK", 
                      "status" : "Completed"
                    }`
  var taskJSON = `{"name" : "task from SDK",
                   "priority" : "High",
                   "details" : "This is a Task Detail",
                   "related_resource" : {
                   "id" : ${prom[rand].id},
                   "type" : "person" }
                  }`

  var entityJSON = new Map([
                            ["lead", leadJSON],
                            ["person", personJSON],
                            ["company", companyJSON],
                            ["opportunity", opportunityJSON],
                            ["project", projectJSON],
                            ["task", taskJSON]
                          ]);


  //var entityType = document.getElementById('entityType').value
  var entityType = entity
  var parseJSON = JSON.parse(entityJSON.get(entityType))
  var prom = await sdk.createEntity(entityType, parseJSON)
  console.log(prom)
}

document.getElementById('btnCreateEntity')
        .addEventListener('click', handleCreateEntity)
