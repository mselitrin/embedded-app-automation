import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()

export async function handleRelateTask() {
  const { context } = await sdk.getContext();
  const mainEntityID = context.id;  //save ID of main Entity
  const mainEntityType = context.type; //save TYPE of main Entity

  const create_record = 'v1/tasks';
  const record_name = "task" + new Date().getTime();
  const create_record_body = '{"name": "' + record_name + '"}';
  const sampleRecord = await sdk.api(create_record, {method:'POST', body: create_record_body})

  const target = {
    "id": sampleRecord.id,
    "type": "task"
  };

  if(await sdk.relateEntity(mainEntityType, mainEntityID, target)) { //relate target to {mainEntityID, mainEntityType}
    console.log(record_name + " successfully related to " + mainEntityType);
    await sdk.refreshUI({ name: 'Related', data : {type : 'task'} })
  } else {
    console.log("Error while relating task");
  }
}

export async function handleRelateProject() {
  const { context } = await sdk.getContext();
  const mainEntityID = context.id;  //save ID of main Entity
  const mainEntityType = context.type; //save TYPE of main Entity

  const create_record = 'v1/projects';
  const record_name = "project" + new Date().getTime();
  const create_record_body = '{"name": "' + record_name + '"}';
  const sampleRecord = await sdk.api(create_record, {method:'POST', body: create_record_body})

  const target = {
    "id": sampleRecord.id,
    "type": "project"
  };

  if(await sdk.relateEntity(mainEntityType, mainEntityID, target)) { //relate target to {mainEntityID, mainEntityType}
    console.log(record_name + " successfully related to " + mainEntityType);
    await sdk.refreshUI({ name: 'Related', data : {type : 'project'} })
  } else {
    console.log("Error while relating project");
  }
}


export async function handleRelatePerson() {
  const { context } = await sdk.getContext();
  const mainEntityID = context.id;  //save ID of main Entity
  const mainEntityType = context.type; //save TYPE of main Entity

  const create_record = 'v1/people';
  const record_name = "person" + new Date().getTime();
  const create_record_body = '{"name": "' + record_name + '"}';
  const sampleRecord = await sdk.api(create_record, {method:'POST', body: create_record_body})

  const target = {
    "id": sampleRecord.id,
    "type": "person"
  };

  if(await sdk.relateEntity(mainEntityType, mainEntityID, target)) { //relate target to {mainEntityID, mainEntityType}
    console.log(record_name + " successfully related to " + mainEntityType);
    await sdk.refreshUI({ name: 'Related', data : {type : 'people'} })
  } else {
    console.log("Error while relating person");
  }
}


export async function handleRelateCompany() {
  const { context } = await sdk.getContext();
  const mainEntityID = context.id;  //save ID of main Entity
  const mainEntityType = context.type; //save TYPE of main Entity

  const create_record = 'v1/companies';
  const record_name = "company" + new Date().getTime();
  const create_record_body = '{"name": "' + record_name + '"}';
  const sampleRecord = await sdk.api(create_record, {method:'POST', body: create_record_body})

  const target = {
    "id": sampleRecord.id,
    "type": "company"
  };

  if(await sdk.relateEntity(mainEntityType, mainEntityID, target)) { //relate target to {mainEntityID, mainEntityType}
    console.log(record_name + " successfully related to " + mainEntityType);
    await sdk.refreshUI({ name: 'Related', data : {type : 'company'} })
  } else {
    console.log("Error while relating company");
  }
}


export async function handleRelateOpportunity() {
  const { context } = await sdk.getContext();
  const mainEntityID = context.id;  //save ID of main Entity
  const mainEntityType = context.type; //save TYPE of main Entity

  let create_record = 'v1/people';
  let record_name = "person" + new Date().getTime();
  let create_record_body = '{"name": "' + record_name + '"}';
  let sampleRecord = await sdk.api(create_record, {method:'POST', body: create_record_body})
  let person_id = sampleRecord.id;

  create_record = 'v1/opportunities';
  record_name = "opportunity" + new Date().getTime();
  create_record_body = `{"name": "${record_name}", "primary_contact_id": "${person_id}"}`;
  console.log(create_record_body)
  sampleRecord = await sdk.api(create_record, {method:'POST', body: create_record_body})

  const target = {
    "id": sampleRecord.id,
    "type": "opportunity"
  };

  if(await sdk.relateEntity(mainEntityType, mainEntityID, target)) { //relate target to {mainEntityID, mainEntityType}
    console.log(record_name + " successfully related to " + mainEntityType);
    await sdk.refreshUI({ name: 'Related', data : {type : 'opportunity'} })
  } else {
    console.log("Error while relating opportunity");
  }
}

document
  .getElementById('btnRelateTask')
  .addEventListener('click', handleRelateTask)
document
  .getElementById('btnRelatePerson')
  .addEventListener('click', handleRelatePerson)
document
  .getElementById('btnRelateCompany')
  .addEventListener('click', handleRelateCompany)
document
  .getElementById('btnRelateOpportunity')
  .addEventListener('click', handleRelateOpportunity)
