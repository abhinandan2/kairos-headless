const constants = require("../constants/common.js");

var exports = module.exports = {};
const loadTest = [];


function insertTestData(id, username, password, instances, context = null, screenGrab, options = { takeEventsScreenshot: false, headless: false, getSlackAlerts: false }) {
	loadTest.push({ id, username, password, instances, context, screenGrab: true, options });
}

let start = constants.AGENT_START_DEFAULT;
let end = constants.AGENT_END_DEFAULT;
let username = constants.AGENT_USERNAME;
let email = constants.AGENT_EMAIL;
let password = constants.AGENT_PASSWORD;

for (let i = start; i <= end; i++) {
	let j = ("000" + i).substr(-3,3);
	let nextUsername = username.replace('XXX', j);
	let nextEmail = email.replace('XXX', j);
	// console.log(nextUsername, nextEmail);
	insertTestData(nextUsername, nextEmail, password, 1, null, false, { takeEventsScreenshot: true, headless: true });	
}


// insertTestData("centralAgent#200120","a120@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200121","a121@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200122","a122@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200123","a123@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200124","a124@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200125","a125@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200126","a126@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200127","a127@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200128","a128@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200129","a129@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200130","a130@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200131","a131@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200132","a132@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200133","a133@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200134","a134@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200135","a135@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200136","a136@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200137","a137@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200138","a138@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200139","a139@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200140","a140@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200141","a141@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200142","a142@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200143","a143@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200144","a144@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200145","a145@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200146","a146@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200147","a147@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200148","a148@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200149","a149@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200150","a150@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });




// insertTestData("centralAgent#200002","a2@gmail.com","Test@123", 1, null, false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200003","a3@gmail.com","Test@123", 1, null, false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200004","a4@gmail.com","Test@123", 1, null, false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200005","a5@gmail.com","Test@123", 1, null, false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200006","a6@gmail.com","Test@123", 1, null, false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200007","a7@gmail.com","Test@123", 1, null, false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200008","a8@gmail.com","Test@123", 1, null, false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200009","a9@gmail.com","Test@123", 1, null, false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200010","a10@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200011","a11@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200012","a12@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200013","a13@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200014","a14@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200015","a15@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200016","a16@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200017","a17@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200018","a18@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200019","a19@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200020","a20@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200021","a21@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200022","a22@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200023","a23@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200024","a24@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200025","a25@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200026","a26@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200027","a27@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200028","a28@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200029","a29@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200030","a30@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200031","a31@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200032","a32@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200033","a33@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200034","a34@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200035","a35@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200036","a36@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200037","a37@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200038","a38@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200039","a39@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200040","a40@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200041","a41@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200042","a42@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200043","a43@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200044","a44@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200045","a45@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200046","a46@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200047","a47@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200048","a48@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200049","a49@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200050","a50@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
exports.loadTestData = loadTest;



