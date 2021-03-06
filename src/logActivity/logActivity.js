import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()

export async function handleLogActivity() {
  //Setup
  var activityType = ["Note", "Phone Call", "Meeting", "To Do", "Custom Note"]
  var activityID = [0, 0, 0, 0, 0]

  //Call DevAPI and grab activityType
  const activity_search = 'v1/activity_types'
  var activity_result = await sdk.api(activity_search, {method : 'GET', body : '{}'})

  console.log(activity_result)
  for(var i = 0; i < activity_result.user.length; i++) {
    if (activity_result.user[i].name == "Phone Call") {
      activityID[1] = activity_result.user[i].id
    } else if (activity_result.user[i].name == "Meeting") {
      activityID[2] = activity_result.user[i].id
    } else if (activity_result.user[i].name == "To Do") {
      activityID[3] = activity_result.user[i].id
    } else if (activity_result.user[i].name == "Custom Note") {
      activityID[4] = activity_result.user[i].id
    }
  }

  console.log(activityID)

  for (var i = 0; i < activityType.length; i++) {
    await sdk.logActivity(activityID[i], activityType[i]);
  }
}

function handleRefreshActivityLog() {
  sdk.refreshUI({ name: 'ActivityLog' })
}



document.getElementById('btnLogActivity')
        .addEventListener('click', handleLogActivity)

document.getElementById('btnRefreshActivityLog')
        .addEventListener('click', handleRefreshActivityLog)
