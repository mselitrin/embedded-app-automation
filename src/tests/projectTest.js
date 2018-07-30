import * as projectMethod from '../contextMethodSDK/projectContext.js'

export async function projectTest() {
  await projectMethod.nameContext();
  await projectMethod.ownerContext();
  await projectMethod.statusContext();
  await projectMethod.descriptionContext();
  await projectMethod.tagsContext();
  await projectMethod.customTextField();
  await projectMethod.customTextArea();
  await projectMethod.customDropdown();
  await projectMethod.customDate();
  await projectMethod.customCheckbox();
  await projectMethod.customNumberField();
  await projectMethod.customURL();
  await projectMethod.customPercentage();
  await projectMethod.customCurrency();
  await projectMethod.customMultiSelect();
 }


document.getElementById('projectTest').addEventListener('click', projectTest)
