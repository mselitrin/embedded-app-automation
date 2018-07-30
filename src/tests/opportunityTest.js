import * as opportunityMethod from '../contextMethodSDK/opportunityContext.js'

export async function opportunityTest() {
  await opportunityMethod.nameContext()
  await opportunityMethod.pipelineContext()
  await opportunityMethod.primaryContactContext()
  await opportunityMethod.closeDateContext()
  await opportunityMethod.statusContext()
  await opportunityMethod.ownerContext()
  await opportunityMethod.stageContext()
  await opportunityMethod.sourceContext()
  await opportunityMethod.valueContext()
  await opportunityMethod.priorityContext()
  await opportunityMethod.winPercentageContext()
  await opportunityMethod.descriptionContext()
  await opportunityMethod.tagsContext()
  await opportunityMethod.customTextField()
  await opportunityMethod.customTextArea()
  await opportunityMethod.customDropdown()
  await opportunityMethod.customDate()
  await opportunityMethod.customCheckbox()
  await opportunityMethod.customNumberField()
  await opportunityMethod.customURL()
  await opportunityMethod.customPercentage()
  await opportunityMethod.customCurrency()
  await opportunityMethod.customMultiSelect()
}


document.getElementById('opportunityTest').addEventListener('click', opportunityTest)
