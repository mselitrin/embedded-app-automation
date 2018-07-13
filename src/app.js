import './tests/leadTest.js'
import './tests/peopleTest.js'
import './tests/companyTest.js'
import './tests/opportunityTest.js'
import './tests/projectTest.js'
import './tests/modalTest.js'
import './UIUpdate/uiUpdate.js'
import './devAPI/devAPI.js'
import './logActivity/logActivity.js'
import './createEntitySDK/createEntity.js'
import './listenPublishEvent/listenPublishEvent.js'
import './relateEntity/relateEntity.js'
import './css/app.css'

import copperSDK from 'copper-sdk'
const sdk = copperSDK.init()
console.log(copperSDK.version)

sdk.on('contextUpdated', function() {
  console.log("Hi Context Updated")
})

//This enables the sliding open and closing of the section
$(".sdkMethod").click(function () {
    var $sdkMethod = $(this);
    //getting the next element
    var $content = $sdkMethod.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
    });
});
