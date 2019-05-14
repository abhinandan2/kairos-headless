var exports = module.exports = {};
const puppeteer = require('puppeteer');
const loadTest = require("../extras/loadTestData.js");
const commonUtils = require("../extras/utils.js");
const flowList = require("../flows/flowList.js");
const constants = require("../constants/common.js");
const fs = require('fs');
const fse = require('fs-extra')
const path = require("path");

var argv = require('yargs')
    .usage('Usage: $0 [options]')
    .example('$0  --test=firstTest', 'Run automated flows')
    .alias('t', 'test')
    .nargs('t', 1)
    .describe('t', 'provide a unique test name. It has alphanumberic. Minimum 4 charaters. This will be used in screenshots and console log folder name')
    .demandOption(['t'])
    .alias('c', 'concurrency')
    .describe('c', 'Concurrency to use')
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2019')
    .argv;

const loadTestDataList = loadTest.loadTestData;

const exceutionMap = {};

var logDir = path.join(__dirname, '..', 'logs');
console.log("logDir", logDir);
var testDir;
var testDirLogs;
var testDirScreenShots;

var browser;

var testName;

if ((typeof(argv.test) === "string") && (argv.test.length > 3) && !(/\s/.test(argv.test))) {
    constants.CONCURRENT = argv.concurrency || 5;
    testName = '/' + argv.test + "#" + commonUtils.randomFixedInteger(4);
    testDir = logDir + testName;
    testDirLogs = logDir + testName + "/consoleLogs";
    testDirScreenShots = logDir + testName + "/screenShots";
    console.log('Starting test: ', testName);
    console.log('Log Directory: ', testDirLogs);
    console.log('Log Directory: ', testDirScreenShots);
} else {
    if ((/\s/.test(argv.test))) {
        console.log('Whitespaces not allowed in test name');
    } else if (argv.test.length < 4) {
        console.log('Minimum 4 characters needed in test name');
    } else {
        console.log('Test name needs to be alphanumberic');
    }
    process.exit(0);

}

try {
    if (!fs.existsSync(testDir)) {
        fse.ensureDirSync(testDir);
    }
    if (!fs.existsSync(testDirLogs)) {
        console.log("creating testDirLogs and testDirScreenShots");
        fs.mkdirSync(testDirLogs);
        fs.mkdirSync(testDirScreenShots);
    }
} catch (e) {
    console.log("Cannot make testDirLogs or testDirScreenShots", e);
}

console.log("CONCURRENCY: ", constants.CONCURRENT);

(async () => {
    browser = await puppeteer.launch({
        headless: constants.HEADLESSMODE,
        timeout: constants.BROWSERTIMEOUT,
    });

    exports.browser = browser;

    for (let j = 0; j < loadTestDataList.length; j += constants.CONCURRENT) {
        const upto = Math.min(constants.CONCURRENT, loadTestDataList.length - j);
        var promises = [];
        for(let i = j, k = 0; k < upto; i++, k++) {
            console.log("loadTestDataList[i]", loadTestDataList[i], i);
            promises.push(startFlow(loadTestDataList[i], i));
        }
        await Promise.all(promises);
    }
})();

async function startFlow(loadTestDataListItem, i) {
    return new Promise((resolve, reject) => {
        initiateFlow(loadTestDataListItem).then(res => {

            console.log("Flow Successfull initiated for " + i + ": " + loadTestDataListItem.username);
            resolve();

        }).catch(async err => {

            console.log("Error initiating flow for " + i + ": " + loadTestDataListItem.username);
            console.log(err);
            if ((err instanceof puppeteer.errors.TimeoutError) && loadTestDataListItem.instances == 1) {
                console.log("Flow reattempt initiated for " + i + ": " + loadTestDataListItem.username);
                await initiateFlow(loadTestDataListItem).then(res => {
                    console.log("Flow Successfull initiated for " + i + ": " + loadTestDataListItem.username);
                    resolve();
                }).catch(err => {
                    console.log("Error initiating flow for " + i + ": " + loadTestDataListItem.username);
                    console.log(err);
                    console.log("Discarding this ID " + i + ": " + loadTestDataListItem.username);
                    reject();
                });
            }

        });
    })
}

async function initiateFlow(loadTestDataItem) {
    var context = (loadTestDataItem.context) ? loadTestDataItem.context : "defaultFlow";

    for (var i = 0; i < loadTestDataItem.instances; i++) {
        // console.log(loadTestDataItem);
        await fse.ensureDir(testDirScreenShots + "/" + loadTestDataItem.id + "#" + i)
        await flowList[context](loadTestDataItem, i)
    }
    return true;
}




exports.exceutionMap = exceutionMap;
exports.testDirLogs = testDirLogs;
exports.testDirScreenShots = testDirScreenShots;