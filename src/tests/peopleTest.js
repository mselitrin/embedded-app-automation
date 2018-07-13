import * as peopleMethod from '../contextMethodSDK/peopleContext.js'

async function peopleTest() {
  await peopleMethod.firstNameContext();
  await peopleMethod.middleNameContext();
  await peopleMethod.lastNameContext();
  await peopleMethod.prefixContext();
  await peopleMethod.suffixContext();
  await peopleMethod.companyContext();
  await peopleMethod.titleContext();
  await peopleMethod.contactContext();
  await peopleMethod.ownerContext();
  await peopleMethod.emailContext();
  await peopleMethod.phoneContext();
  await peopleMethod.socialsContext();
  await peopleMethod.websitesContext();
  await peopleMethod.addressContext();
  await peopleMethod.descriptionContext();
  await peopleMethod.tagsContext();
  await peopleMethod.customTextField();
  await peopleMethod.customTextArea();
  await peopleMethod.customDropdown();
  await peopleMethod.customDate();
  await peopleMethod.customCheckbox();
  await peopleMethod.customNumberField();
  await peopleMethod.customURL();
  await peopleMethod.customPercentage();
  await peopleMethod.customCurrency();
  await peopleMethod.customMultiSelect();
}


document.getElementById('peopleTest').addEventListener('click', peopleTest)
