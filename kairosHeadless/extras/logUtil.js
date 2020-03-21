var exports = module.exports = {};

const automator = require("../main/automator.js");
const fs = require("fs");
const moment = require("moment");
const fse = require('fs-extra');
var util = require('util');


function writeLog(automationID,instance,data) {

	// fse.outputJson(automator.testDirLogs + "/" + automationID + "#" + instance  + ".log", {time:moment().format(), data: util.inspect(data)})
	fs.appendFile(automator.testDirLogs + "/" + automationID + "#" + instance  + ".log",moment().format("HH-mm-ss") + " --- " + data + '\n', 'utf8'
		,
    // callback function
    function(err) { 
        if (err){
        	console.log(err)
        }
	}
	);
}



function screenShotPath(automationID,instance,type){
	// console.log(automator.testDirScreenShots + "/" + automationID + "#" + instance  + "/"  +  moment().format() + "---" + type + ".jpg");
	return   automator.testDirScreenShots + "/" + automationID + "#" + instance  + "/"  +  moment().format("HH-mm-ss") + "---" + type + ".jpg";
}


exports.screenShotPath = screenShotPath;
exports.writeLog = writeLog;