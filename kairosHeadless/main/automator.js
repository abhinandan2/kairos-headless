var exports = module.exports = {};
const puppeteer = require('puppeteer');
const puppeteerErrors = require('puppeteer/Errors');
const loadTest = require("../extras/loadTestData.js");
const commonUtils = require("../extras/utils.js");
const flowList = require("../flows/flowList.js");
const constants = require("../constants/common.js");
const fs = require('fs');
const fse = require('fs-extra')

var argv = require('yargs')
    .usage('Usage: $0 [options]')
    .example('$0  --test=firstTest', 'Run automated flows')
    .alias('t', 'test')
    .nargs('t', 1)
    .describe('t', 'provide a unique test name. It has alphanumberic. Minimum 4 charaters. This will be used in screenshots and console log folder name')
    .demandOption(['t'])
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2019')
    .argv;

const loadTestDataList = loadTest.loadTestData;

const exceutionMap = {};

var logDir = __dirname + '/../logs/';

var testDir;
var testDirLogs;
var testDirScreenShots;

var browser;

var testName;





if ( (typeof(argv.test) === "string") && (argv.test.length > 3) && !(/\s/.test(argv.test))) {
	testName = argv.test + "#"+commonUtils.randomFixedInteger(4);
	testDir = logDir + testName;
	testDirLogs = logDir + testName + "/consoleLogs";
	testDirScreenShots = logDir + testName + "/screenShots";
  	console.log('Starting test: ',testName);
  	console.log('Log Directory: ',testDirLogs);
  	console.log('Log Directory: ',testDirScreenShots);
} else {
	if((/\s/.test(argv.test)))	{
		console.log('Whitespaces not allowed in test name');
	} else if(argv.test.length < 4){
		console.log('Minimum 4 characters needed in test name');
	} else {
		console.log('Test name needs to be alphanumberic');
	}
  process.exit(0);

}




if (!fs.existsSync(testDir)){
    fs.mkdirSync(testDir);
}

fs.mkdirSync(testDirLogs);
fs.mkdirSync(testDirScreenShots);


(async() => {
browser = await puppeteer.launch({headless: constants.HEADLESSMODE});
// browser = await puppeteer.launch();

exports.browser = browser;

for (let i = 0; i < loadTestDataList.length; i++) {

	await initiateFlow(loadTestDataList[i]).then(res => {

		console.log("Flow Successfull initiated for " + i + ": " + loadTestDataList[i].username);

	}).catch(async err => {
		console.log("Error initiating flow for " + i +  ": " + loadTestDataList[i].username);
		console.log(err);

		if((err instanceof puppeteerErrors.TimeoutError) && loadTestDataList[i].instances == 1){
			console.log("Flow reattempt initiated for " + i + ": " + loadTestDataList[i].username);
			await initiateFlow(loadTestDataList[i]).then(res => {

				console.log("Flow Successfull initiated for " + i + ": " + loadTestDataList[i].username);

			}).catch(err => {
				console.log("Error initiating flow for " + i +  ": " + loadTestDataList[i].username);
				console.log(err);
				console.log("Discarding this ID " + i +  ": " + loadTestDataList[i].username);


			});

		}

	});


}



})();



async function initiateFlow(loadTestDataItem) {
	
	var context = (loadTestDataItem.context) ? loadTestDataItem.context:"defaultFlow";
	
	for (var i = 0; i < loadTestDataItem.instances; i++) {

		console.log(loadTestDataItem);

		await fse.ensureDir(testDirScreenShots + "/" + loadTestDataItem.id + "#" + i)
		await flowList[context](loadTestDataItem,i)
	}

	return true;


}




exports.exceutionMap = exceutionMap;
exports.testDirLogs = testDirLogs;
exports.testDirScreenShots = testDirScreenShots;






