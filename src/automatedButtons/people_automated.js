import { peopleTest } from '../tests/peopleTest'
import { handleLogActivity } from '../logActivity/logActivity.js'
import { handleRelateTask, handleRelateCompany, handleRelateOpportunity, handleRelateProject } from '../relateEntity/relateEntity.js'
import { handleCreateEntity } from '../createEntitySDK/createEntity.js'

async function automatePeople() {
    //Relate Company
    await handleRelateCompany();
    //Executes all of People Context Method Changes
    await peopleTest();
    //Creates all Activities for People Record
    await handleLogActivity();
    //Relate Task
    await handleRelateTask();
    //Relate Opportunity
    await handleRelateOpportunity();
    //Relate Project
    await handleRelateProject();
    //Creates Person Entity
    await handleCreateEntity("person");
}

document.getElementById('automate_people').addEventListener('click', automatePeople)
