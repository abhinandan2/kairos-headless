var exports = module.exports = {};
const loadTest = [];


function insertTestData(id, username, password, instances, context = null, screenGrab, options = { takeEventsScreenshot: false, headless: false, getSlackAlerts: false }) {
	loadTest.push({ id, username, password, instances, context, screenGrab: true, options });
}


insertTestData("centralAgent#200120","a120@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
insertTestData("centralAgent#200121","a121@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
insertTestData("centralAgent#200122","a122@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
insertTestData("centralAgent#200123","a123@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
insertTestData("centralAgent#200124","a124@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
insertTestData("centralAgent#200125","a125@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
insertTestData("centralAgent#200126","a126@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
insertTestData("centralAgent#200127","a127@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
insertTestData("centralAgent#200128","a128@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
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

// insertTestData("centralAgent#200151","a151@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200152","a152@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200153","a153@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200154","a154@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200155","a155@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200156","a156@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200157","a157@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200158","a158@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200159","a159@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200160","a160@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200161","a161@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200162","a162@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200163","a163@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200164","a164@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200165","a165@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200166","a166@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200167","a167@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200168","a168@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200169","a169@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200170","a170@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });

// insertTestData("centralAgent#200171","a171@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200172","a172@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200173","a173@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200174","a174@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200175","a175@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200176","a176@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200177","a177@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200178","a178@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200179","a179@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });
// insertTestData("centralAgent#200180","a180@gmail.com","Test@1234567", 1, null, false, { takeEventsScreenshot: true, headless: true });










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
// insertTestData("centralAgent#200051","a51@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200052","a52@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200053","a53@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200054","a54@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200055","a55@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200056","a56@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200057","a57@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200058","a58@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200059","a59@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200060","a60@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200061","a61@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: false });
// insertTestData("centralAgent#200062","a62@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: false });
// insertTestData("centralAgent#200063","a63@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: false });
// insertTestData("centralAgent#200064","a64@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: false });
// insertTestData("centralAgent#200065","a65@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200066","a66@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200067","a67@gmail.com","Test@123",1,null,true, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200068","a68@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200069","a69@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200070","a70@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200071","a71@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200072","a72@gmail.com","Test@123",1,null,true, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200073","a73@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200074","a74@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200075","a75@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200076","a76@gmail.com","Test@123",1,null,true, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200077","a77@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200078","a78@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200079","a79@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200080","a80@gmail.com","Test@123",1,null,true, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200081","a81@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200082","a82@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200083","a83@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200084","a84@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200085","a85@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200086","a86@gmail.com","Test@123",1,null,true, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200087","a87@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200088","a88@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200089","a89@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200090","a90@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200091","a91@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200092","a92@gmail.com","Test@123",1,null,true, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200093","a93@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200094","a94@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200095","a95@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200096","a96@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200097","a97@gmail.com","Test@123",1,null,true, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200098","a98@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200099","a99@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });
// insertTestData("centralAgent#200100","a100@gmail.com","Test@123",1,null,false, { takeEventsScreenshot: false, headless: true });

exports.loadTestData = loadTest;



