var exports = module.exports = {};

const loadTestDataList = require("../extras/loadTestData.js");
const logUtil = require("../extras/logUtil.js");
const constants = require("../constants/common.js");
const automator = require("../main/automator.js");
const puppeteer = require('puppeteer');
const https = require('https')

const browser = automator.browser;

const config = {
    URL: 'https://central-dev.phonon.io/authorization-server/user/signin',
    viewPort: { width: 1280, height: 615 },
    screenshotInterval: 10000,
};

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function takeIncomingScreenshot (page, loadTestDataItem, itemIndex) {
	await page.waitForSelector('#footer-incoming:not(.ng-hide)', { timeout: 0 });
	console.log(loadTestDataItem.id, "takeIncomingScreenshot");
	// Wait for one second before taking screenshot.
	await timeout(1000);
	await page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "incoming"), fullPage: true });
	await page.waitForSelector('#footer-incoming.ng-hide', { timeout: 0 });
	if(!(page.isClosed()))
		takeIncomingScreenshot(page, loadTestDataItem, itemIndex);
}

async function takeConnectedScreenshot (page, loadTestDataItem, itemIndex) {
	await page.waitForSelector('#footer-connected:not(.ng-hide)', { timeout: 0 });
	console.log(loadTestDataItem.id, "takeConnectedScreenshot");
	// Wait for one second before taking screenshot.
	await timeout(1000);
	await page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "connected"), fullPage: true });
	await page.waitForSelector('#footer-connected.ng-hide', { timeout: 0 });
	if(!(page.isClosed()))
		takeConnectedScreenshot(page, loadTestDataItem, itemIndex);
}

async function takeCompletedScreenshot (page, loadTestDataItem, itemIndex) {
	await page.waitForSelector('#footer-completed:not(.ng-hide)', { timeout: 0 });
	console.log(loadTestDataItem.id, "takeCompletedScreenshot");
	// Wait for one second before taking screenshot.
	await timeout(1000);
	await page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "completed"), fullPage: true });
	await page.waitForSelector('#footer-completed.ng-hide', { timeout: 0 });
	if(!(page.isClosed()))
		takeCompletedScreenshot(page, loadTestDataItem, itemIndex);
}

async function takeMissedScreenshot (page, loadTestDataItem, itemIndex) {
	await page.waitForSelector('#missed:not(.ng-hide)', { timeout: 0 });
	console.log(loadTestDataItem.id, "takeMissedScreenshot");
	// Wait for one second before taking screenshot.
	await timeout(1000);
	await page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "missed"), fullPage: true });
	await page.waitForSelector('#missed.ng-hide', { timeout: 0 });
	if(!(page.isClosed()))
		takeMissedScreenshot(page, loadTestDataItem, itemIndex);
}

async function alertDisconnect (page, loadTestDataItem, itemIndex) {
    await page.waitForSelector('#toast-container > div > div > div > div[aria-label="You are offline"]', { timeout: 0 });
    console.log(loadTestDataItem.id, "alertDisconnect");
    // Wait for one second before taking screenshot.
    await timeout(1000);
    await page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "disconnected"), fullPage: true });
    let text = "Test: " + automator.testName + "| Agent: " + loadTestDataItem.id + " | Disconnected at " + new Date().toLocaleTimeString() + " ( " + new Date().getTime() + " ).";
    if(loadTestDataItem.options.getSlackAlerts)
        sendToSlack(text);
    await page.waitForSelector('#toast-container > div > div > div > div[aria-label="You are offline"]', { hidden: true, timeout: 0 });
    // You might say it's a better idea to keep the sendToSlack function here.
    // Since it makes sense to only send message when you are back online.
    // However, it is not neccessary that the socket disconnection occurred because of internet.
    // Hence, it is better to keep it the way it is.
    if(!(page.isClosed()))
        alertDisconnect(page, loadTestDataItem, itemIndex);
}

function sendToSlack (text, retry = 0) {
    if(retry > 2) {
        console.log("Retried 3 times, stopping now.", text);
        return
    }
    console.log("sendToSlack => ", text, retry);
    const data = JSON.stringify({ text });

    const options = {
      hostname: 'hooks.slack.com',
      port: 443,
      path: '/services/T8HM74UCF/BJQ1CEAJH/Df70Q6m0GsmSahoTf6BxKi4i',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }

    const req = https.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`)
      res.on('data', (d) => {
        process.stdout.write(d)
      })
    })

    req.on('error', (error) => {
      console.error(error)
      console.log("Calling again in few minutes", text);
      retry++;
      setTimeout(() => sendToSlack(text, retry), 30 * 60 * 1000);
    })

    req.write(data)
    req.end()
}

// async function takeOtherEventsScreenshot (page, loadTestDataItem, itemIndex) {
// 	await page.waitForSelector('.agentui__footer-title.m-t-none', { timeout: 0 });
// 	const titleText = await page.$eval('.agentui__footer-title.m-t-none', el => {
// 		debugger;
// 	});

// 	console.log(loadTestDataItem.id, "titleText", titleText);

// 	switch(titleText) {
// 		case 'On Call':
// 			console.log("On Call");
// 			await timeout(1000);
// 			await page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "On-Call"), fullPage: true });
// 			break;
// 		case 'Dialing':
// 			console.log("Dialing");
// 			break;
// 		case 'On Conference Call':
// 			console.log("On Conference Call");
// 			break;
// 		case 'Conference Ended':
// 			console.log("Conference Ended");
// 			break;
// 		case 'Conference Missed':
// 			console.log("Conference Missed");
// 			break;
// 		case 'On Consultation':
// 			console.log("On Consultation");
// 			break;
// 		case 'Consultation Ended':
// 			console.log("Consultation Ended");
// 			break;
// 		case 'Consultation Missed':
// 			console.log("Consultation Missed");
// 			break;
// 	}

// 	await page.waitForFunction(`document.querySelector(".agentui__footer-title.m-t-none").inner‌​Text !== ${titleText}`, { timeout: 0 });
// 	if(!(page.isClosed()))
// 		takeOtherEventsScreenshot(page, loadTestDataItem, itemIndex);
// }

async function centralAgentLogin(loadTestDataItem, itemIndex) {
    if(loadTestDataItem.options.headless === false)
        console.log(loadTestDataItem.id, "Headless is false");
    // const browser = await puppeteer.launch({ headless: false });
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

    await page.waitForSelector('.form-group .radio > #SOFTPHONE');
    await page.click('.form-group .radio > #SOFTPHONE');

    await page.evaluate(() => console.log(`$url is ${location.href}`));

    await page.waitForSelector('.agentui__login--submit-button > button:not([disabled])');

    await timeout(500);
    await page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "softLoginDetails"), fullPage: true });
    console.log(loadTestDataItem.id, "softLoginDetails");
    await page.click('.agentui__login--submit-button > button');

    if(loadTestDataItem.options.takeEventsScreenshot) {
    	console.log(loadTestDataItem.id, "Capturing events");
	    takeIncomingScreenshot(page, loadTestDataItem, itemIndex);
	    takeConnectedScreenshot(page, loadTestDataItem, itemIndex);
	    takeCompletedScreenshot(page, loadTestDataItem, itemIndex);
	    takeMissedScreenshot(page, loadTestDataItem, itemIndex);
	    // takeOtherEventsScreenshot(page, loadTestDataItem, itemIndex);
    }

    alertDisconnect(page, loadTestDataItem, itemIndex);

    setTimeout(() => {
        if (!(page.isClosed())) {
            page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "ScreenAfter10Seconds"), fullPage: true })
        }

    }, config.screenshotInterval)

    if (constants.TAKESCHEDULEDSCREENGRAB && loadTestDataItem.screenGrab) {
        console.log(loadTestDataItem.id, "Scheduled Screenshot ENABLED for " + loadTestDataItem.id);
        scheduledID = setInterval(() => {
            if (!(page.isClosed())) {
                page.screenshot({ path: logUtil.screenShotPath(loadTestDataItem.id, itemIndex, "ScheduledScreenShot"), fullPage: true })
            }

        }, 1000 * 60)
    } else {
        console.log("Scheduled Screenshot DISABLED for " + loadTestDataItem.id);
    }

    page.on('close', (loadTestDataItem) => {
    	console.log(loadTestDataItem.id, "Page is closed...");
        if (scheduledID) {
            clearInterval(scheduledID);
            console.log(loadTestDataItem.id, "Screenshot Interval Cleared...");
        }
    });

}


exports.centralAgentLogin = centralAgentLogin;