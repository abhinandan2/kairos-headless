var exports = module.exports = {};

const loadTestDataList = require("../extras/loadTestData.js");
const logUtil = require("../extras/logUtil.js");
const constants = require("../constants/common.js");
const automator = require("../main/automator.js");

const browser = automator.browser;

const config = {
    URL: 'https://central-uat.phonon.in/authorization-server/user/signin',
    viewPort: { width: 1280, height: 615 },
    screenshotInterval: 10000,
};

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function takeIncomingScreenshot (page, id, itemIndex) {
	await page.waitForSelector('#footer-incoming:not(.ng-hide)', { timeout: 0 });
	console.log("takeIncomingScreenshot");
	// Wait for one second before taking screenshot.
	await timeout(1000);
	await page.screenshot({ path: logUtil.screenShotPath(id, itemIndex, "incoming"), fullPage: true });
	await page.waitForSelector('#footer-incoming.ng-hide', { timeout: 0 });
	if(!(page.isClosed()))
		takeIncomingScreenshot(page, id, itemIndex);
}

async function takeConnectedScreenshot (page, id, itemIndex) {
	await page.waitForSelector('#footer-connected:not(.ng-hide)', { timeout: 0 });
	console.log("takeConnectedScreenshot");
	// Wait for one second before taking screenshot.
	await timeout(1000);
	await page.screenshot({ path: logUtil.screenShotPath(id, itemIndex, "connected"), fullPage: true });
	await page.waitForSelector('#footer-connected.ng-hide', { timeout: 0 });
	if(!(page.isClosed()))
		takeConnectedScreenshot(page, id, itemIndex);
}

async function takeCompletedScreenshot (page, id, itemIndex) {
	await page.waitForSelector('#footer-completed:not(.ng-hide)', { timeout: 0 });
	console.log("takeCompletedScreenshot");
	// Wait for one second before taking screenshot.
	await timeout(1000);
	await page.screenshot({ path: logUtil.screenShotPath(id, itemIndex, "completed"), fullPage: true });
	await page.waitForSelector('#footer-completed.ng-hide', { timeout: 0 });
	if(!(page.isClosed()))
		takeCompletedScreenshot(page, id, itemIndex);
}

async function takeMissedScreenshot (page, id, itemIndex) {
	await page.waitForSelector('#missed:not(.ng-hide)', { timeout: 0 });
	console.log("takeMissedScreenshot");
	// Wait for one second before taking screenshot.
	await timeout(1000);
	await page.screenshot({ path: logUtil.screenShotPath(id, itemIndex, "missed"), fullPage: true });
	await page.waitForSelector('#missed.ng-hide', { timeout: 0 });
	if(!(page.isClosed()))
		takeMissedScreenshot(page, id, itemIndex);
}

async function centralAgentLogin(loadTestDataItem, itemIndex) {

    const context = await automator.browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    page.setDefaultTimeout(constants.DEFAULTTIMEOUT);

    var scheduledID = null;
    await page.goto(config.URL, { waitUntil: 'networkidle0' });

    await page.setViewport(config.viewPort)

    page.on('console', msg => {
        logUtil.writeLog(loadTestDataItem.id, itemIndex, msg.text())
    });

    await page.waitForSelector('#singin > div > form > fieldset > div:nth-child(1) > div > div > input')
    await page.click('#singin > div > form > fieldset > div:nth-child(1) > div > div > input')

    await page.keyboard.type(loadTestDataItem.username);

    await page.waitForSelector('#singin > div > form > fieldset > div:nth-child(2) > div > div > input')
    await page.click('#singin > div > form > fieldset > div:nth-child(2) > div > div > input')

    await page.keyboard.type(loadTestDataItem.password);

    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
        page.click('#singin div.login-button > button'),
    ]);

    // await page.click('.ui > .ui > .field > .six > .positive')

    await page.waitForSelector('.form-group .radio > #softphone');
    await page.click('.form-group .radio > #softphone');

    await page.evaluate(() => console.log(`url is ${location.href}`));

    await page.waitForSelector('body > div > div > div > div > div > div > div > div > form > div:nth-child(2) > div > div > button:not([disabled])');

    await page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "softLoginDetails"), fullPage: true });

    await page.click('body > div > div > div > div > div > div > div > div > form > div:nth-child(2) > div > div > button');

    if(loadTestDataItem.options.takeEventsScreenshot) {
    	console.log("Capturing events");
	    takeIncomingScreenshot(page, loadTestDataItem.id, itemIndex);
	    takeConnectedScreenshot(page, loadTestDataItem.id, itemIndex);
	    takeCompletedScreenshot(page, loadTestDataItem.id, itemIndex);
	    takeMissedScreenshot(page, loadTestDataItem.id, itemIndex);    	
    }


    setTimeout(() => {
        if (!(page.isClosed())) {
            page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "ScreenAfter10Seconds"), fullPage: true })
        }

    }, config.screenshotInterval)

    if (constants.TAKESCHEDULEDSCREENGRAB && loadTestDataItem.screenGrab) {
        console.log("Scheduled Screenshot ENABLED for " + loadTestDataItem.id);
        scheduledID = setInterval(() => {
            if (!(page.isClosed())) {
                page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "ScheduledScreenShot"), fullPage: true })
            }

        }, 1000 * 60)
    } else {
        console.log("Scheduled Screenshot DISABLED for " + loadTestDataItem.id);
    }

    page.on('close', () => {
    	console.log("Page is closed...");
        if (scheduledID) {
            clearInterval(scheduledID);
            console.log("Screenshot Interval Cleared...");
        }
    });

}


exports.centralAgentLogin = centralAgentLogin;