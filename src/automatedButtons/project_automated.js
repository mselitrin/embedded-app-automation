import { projectTest } from '../tests/projectTest'
import { handleLogActivity } from '../logActivity/logActivity.js'
import { handleRelateTask, handleRelateCompany, handleRelateOpportunity, handleRelatePerson } from '../relateEntity/relateEntity.js'
import { handleCreateEntity } from '../createEntitySDK/createEntity.js'

async function automateProject() {
    //Executes all of People Context Method Changes
    await projectTest();
    //Creates all Activities for People Record
    await handleLogActivity();
    //Relate Task
    await handleRelateTask();
    //Relate Company
    await handleRelateCompany();
    //Relate Opportunity
    await handleRelateOpportunity();
    //Relate Person
    await handleRelatePerson();
    //Creates Project Entity
    await handleCreateEntity("project");
}

document.getElementById('automate_project').addEventListener('click', automateProject)
