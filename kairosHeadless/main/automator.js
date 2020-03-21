var exports = module.exports = {};
const puppeteer = require('puppeteer');
const loadTest = require("../extras/loadTestData.js");
const commonUtils = require("../extras/utils.js");
const flowList = require("../flows/flowList.js");
const constants = require("../constants/common.js");
const fs = require('fs');
const fse = require('fs-extra')
const path = require("path");
const chalk = require('chalk');

var argv = require('yargs')
    .usage('Usage: $0 [options]')
    .example('$0  --test=firstTest', 'Run automated flows')
    .alias('t', 'test')
    .nargs('t', 1)
    .describe('t', 'provide a unique test name. It has alphanumberic. Minimum 4 charaters. This will be used in screenshots and console log folder name')
    .demandOption(['t'])
    .alias('c', 'concurrency')
    .describe('c', 'Concurrency to use')
    .alias('d', 'debug')
    .describe('d', 'Start in debug with Headless mode off')
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2019')
    .boolean(['d'])
    .argv;

const loadTestDataList = loadTest.loadTestData;

const exceutionMap = {};

const getNow = commonUtils.getNow;
const getDiff = commonUtils.getDiff;
const cg = commonUtils.cg;
const cc = commonUtils.cc;

var logDir = path.join(__dirname, '..', 'logs');
console.log("Main Log Directory:", logDir);
var testDir;
var testDirLogs;
var testDirScreenShots;

var browser;

var testName;

if ((typeof(argv.test) === "string") && (argv.test.length > 3) && !(/\s/.test(argv.test))) {
    if(argv.debug)
        constants.HEADLESSMODE = false;    
    constants.CONCURRENT = argv.concurrency || constants.CONCURRENT;
    testName = '/' + argv.test + "#" + commonUtils.getTimeString();
    testDir = logDir + testName;
    testDirLogs = logDir + testName + "/consoleLogs";
    testDirScreenShots = logDir + testName + "/screenShots";
    console.log(chalk.cyanBright('Starting test: '), testName);
    console.log(chalk.cyanBright('Log Directory: '), testDir);
    // console.log('Log Directory: ', testDirScreenShots);
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
        console.log("    Test Dirs Created");
        fs.mkdirSync(testDirLogs);
        fs.mkdirSync(testDirScreenShots);
    }
} catch (e) {
    console.log("Cannot make testDirLogs or testDirScreenShots", e);
}

console.log(chalk.magentaBright("Concurrency: "), constants.CONCURRENT);
console.log(chalk.magentaBright("Headless: "), constants.HEADLESSMODE);

(async () => {
    browser = await puppeteer.launch({
        headless: constants.HEADLESSMODE,
        timeout: constants.BROWSERTIMEOUT,
        // devtools: true
//        args: ['--no-sandbox'] //for older version of chrome enable this to prevent launch exeption
    });

    exports.browser = browser;
    exports.testName = testName;

    for (let j = 0; j < loadTestDataList.length; j += constants.CONCURRENT) {
        const upto = Math.min(constants.CONCURRENT, loadTestDataList.length - j);
        var promises = [];
        for(let i = j, k = 0; k < upto; i++, k++) {
            console.log("loadTestDataList[i]", loadTestDataList[i], i);
            promises.push(startFlow(loadTestDataList[i], i));
        }
        await Promise.all(promises);
        console.log("\n\n");
    }
})();

async function startFlow(loadTestDataListItem, i) {
    return new Promise((resolve, reject) => {
        initiateFlow(loadTestDataListItem).then(res => {
            loadTestDataListItem.ready = getDiff(loadTestDataListItem.start);
            debugger;
            console.log(cg(getNow()), '\t', cc("Ready #" + i + ": " + loadTestDataListItem.id + " in " + loadTestDataListItem.ready + " seconds") );
            resolve();

        }).catch(async err => {

            console.log(cg(getNow()), '\t', "Error initiating flow for " + i + ": " + loadTestDataListItem.id);
            console.log(cg(getNow()), '\t', err);
            if ((err instanceof puppeteer.errors.TimeoutError) && loadTestDataListItem.instances == 1) {
                console.log(cg(getNow()), '\t', "Flow reattempt initiated for " + i + ": " + loadTestDataListItem.id);
                await initiateFlow(loadTestDataListItem).then(res => {
                    console.log(cg(getNow()), '\t', "Flow Successfull initiated for " + i + ": " + loadTestDataListItem.id);
                    resolve();
                }).catch(err => {
                    console.log(cg(getNow()), '\t', "Error initiating flow for " + i + ": " + loadTestDataListItem.id);
                    console.log(cg(getNow()), '\t', err);
                    console.log(cg(getNow()), '\t', "Discarding this ID " + i + ": " + loadTestDataListItem.id);
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