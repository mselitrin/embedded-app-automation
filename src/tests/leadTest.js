import * as leadMethod from '../contextMethodSDK/leadContext.js'

async function leadTest() {
  await leadMethod.firstNameContext();
  await leadMethod.middleNameContext();
  await leadMethod.lastNameContext();
  await leadMethod.prefixContext();
  await leadMethod.suffixContext();
  await leadMethod.companyContext();
  await leadMethod.ownerContext();
  await leadMethod.titleContext();
  await leadMethod.valueContext();
  await leadMethod.emailContext();
  await leadMethod.phoneContext();
  await leadMethod.socialsContext();
  await leadMethod.websitesContext();
  await leadMethod.statusContext();
  await leadMethod.sourceContext();
  await leadMethod.addressContext();
  await leadMethod.descriptionContext();
  await leadMethod.tagsContext();
  await leadMethod.customTextField();
  await leadMethod.customTextArea();
  await leadMethod.customDropdown();
  await leadMethod.customDate();
  await leadMethod.customCheckbox();
  await leadMethod.customNumberField();
  await leadMethod.customURL();
  await leadMethod.customPercentage();
  await leadMethod.customCurrency();
  await leadMethod.customMultiSelect();
}


document.getElementById('leadTest').addEventListener('click', leadTest)
