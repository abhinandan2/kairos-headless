
var exports = module.exports = {};
const loadTest = [];




function insertTestData(id,username,password,instances,context,screenGrab) {
	

	if ( !context){
		context = null;
	}

	loadTest.push({id:id,username:username,password:password,instances:instances,context:context,screenGrab:screenGrab});
}



    // insertTestData("agent#1","supervisor5","supervisor5",1,null);
    // insertTestData("agent#2","supervisor3","supervisor3",2,null);
    insertTestData("centralAgent#1","m@gmail.com","Test@123",1,null,false);
    insertTestData("centralAgent#2","i@gmail.com","Test@123",1,null,true);
    insertTestData("centralAgent#3","t@gmail.com","Test@123",1,null,true);
    insertTestData("centralAgent#4","s@gmail.com","Test@123",1,null,false);


exports.loadTestData = loadTest;


