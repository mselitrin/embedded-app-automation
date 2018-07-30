import { leadTest } from '../tests/leadTest'
import { handleLogActivity } from '../logActivity/logActivity.js'
import { handleRelateTask } from '../relateEntity/relateEntity.js'
import { handleCreateEntity } from '../createEntitySDK/createEntity.js'

async function automateLead() {
    //Executes all of Leads Context Method Changes
    await leadTest();
    //Creates all Activities for Lead Record
    await handleLogActivity();
    //Relate Task
    await handleRelateTask();
    //Creates Lead Entity
    await handleCreateEntity("lead");
}

document.getElementById('automate_lead').addEventListener('click', automateLead)
