import { companyTest } from '../tests/companyTest'
import { handleLogActivity } from '../logActivity/logActivity.js'
import { handleRelateTask, handleRelatePerson, handleRelateOpportunity, handleRelateProject } from '../relateEntity/relateEntity.js'
import { handleCreateEntity } from '../createEntitySDK/createEntity.js'

async function automateCompany() {
    //Executes all of Company Context Method Changes
    await companyTest();
    //Creates all Activities for Company Record
    await handleLogActivity();
    //Relate People
    await handleRelatePerson();
    //Relate Task
    await handleRelateTask();
    //Relate Opportunity
    await handleRelateOpportunity();
    //Relate Project
    await handleRelateProject();
    //Creates Company Entity
    await handleCreateEntity("company");
}

document.getElementById('automate_company').addEventListener('click', automateCompany)
