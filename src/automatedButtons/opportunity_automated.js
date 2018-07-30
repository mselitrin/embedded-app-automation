import { opportunityTest } from '../tests/opportunityTest'
import { handleLogActivity } from '../logActivity/logActivity.js'
import { handleRelateTask, handleRelatePerson, handleRelateCompany, handleRelateProject } from '../relateEntity/relateEntity.js'
import { handleCreateEntity } from '../createEntitySDK/createEntity.js'

async function automateOpportunity() {
    //Executes all of Opportunity Context Method Changes
    await opportunityTest();
    //Creates all Activities for Lead Record
    await handleLogActivity();
    //Relate People
    await handleRelatePerson();
    //Relate Task
    await handleRelateTask();
    //Relate Company
    await handleRelateCompany();
    //Relate Project
    await handleRelateProject();
    //Creates Opportunity Entity
    await handleCreateEntity("opportunity");
}

document.getElementById('automate_opportunity').addEventListener('click', automateOpportunity)
