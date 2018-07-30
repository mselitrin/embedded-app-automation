import * as companyMethod from '../contextMethodSDK/companyContext.js'

export async function companyTest() {
  await companyMethod.nameContext();
  await companyMethod.phoneContext();
  await companyMethod.ownerContext();
  await companyMethod.websitesContext();
  await companyMethod.contactContext();
  await companyMethod.emailDomainContext();
  await companyMethod.socialsContext();
  await companyMethod.addressContext();
  await companyMethod.descriptionContext();
  await companyMethod.tagsContext();
  await companyMethod.customTextField();
  await companyMethod.customTextArea();
  await companyMethod.customDropdown();
  await companyMethod.customDate();
  await companyMethod.customCheckbox();
  await companyMethod.customNumberField();
  await companyMethod.customURL();
  await companyMethod.customPercentage();
  await companyMethod.customCurrency();
  await companyMethod.customMultiSelect();
}


document.getElementById('companyTest').addEventListener('click', companyTest)
