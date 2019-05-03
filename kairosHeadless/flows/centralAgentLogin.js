var exports = module.exports = {};

const loadTestDataList = require("../extras/loadTestData.js");
const logUtil = require("../extras/logUtil.js");
const constants = require("../constants/common.js");
const automator = require("../main/automator.js");

const browser = automator.browser;


async function centralAgentLogin(loadTestDataItem,itemIndex) {
	
const context = await automator.browser.createIncognitoBrowserContext();
	const page = await context.newPage();

	page.setDefaultTimeout(constants.DEFAULTTIMEOUT);

	var scheduledID = null;
	// await page.emulateMedia('screen'); 
	await page.goto('https://central-uat.phonon.in/authorization-server/user/signin', {waitUntil: 'networkidle0'});

	await page.setViewport({ width: 1280, height: 615 })

	page.on('console', msg => {
								logUtil.writeLog(loadTestDataItem.id,itemIndex,msg.text())
							  });

	await page.waitForSelector('#singin > div > form > fieldset > div:nth-child(1) > div > div > input')
    await page.click('#singin > div > form > fieldset > div:nth-child(1) > div > div > input')

	await page.keyboard.type(loadTestDataItem.username);

	await page.waitForSelector('#singin > div > form > fieldset > div:nth-child(2) > div > div > input')
    await page.click('#singin > div > form > fieldset > div:nth-child(2) > div > div > input')

	await page.keyboard.type(loadTestDataItem.password);


	await Promise.all([
	  page.waitForNavigation({waitUntil: 'networkidle0'}), // The promise resolves after navigation has finished
	  page.click('#singin div.login-button > button'), // Clicking the link will indirectly cause a navigation
	]);

	// await page.click('.ui > .ui > .field > .six > .positive')

	await page.waitForSelector('.form-group .radio > #softphone');
 	await page.click('.form-group .radio > #softphone');


	await page.evaluate(() => console.log(`url is ${location.href}`));

	await page.waitForSelector('body > div > div > div > div > div > div > div > div > form > div:nth-child(2) > div > div > button:not([disabled])');
	
    await page.screenshot({path: logUtil.screenShotPath(loadTestDataItem.id,itemIndex,"softLoginDetails"),fullPage:true});

    await page.click('body > div > div > div > div > div > div > div > div > form > div:nth-child(2) > div > div > button');

    setTimeout(  () => {
    	if(!(page.isClosed())){
	    	page.screenshot({path: logUtil.screenShotPath(loadTestDataItem.id,itemIndex,"ScreenAfter10Seconds"),fullPage:true})    		
    	}

    }, 10000)


    if(constants.TAKESCHEDULEDSCREENGRAB && loadTestDataItem.screenGrab){
    	console.log("Scheduled Screenshot enabled for " + loadTestDataItem.id);
	    scheduledID = setInterval(  () => {
	    	if(!(page.isClosed())){
		    	page.screenshot({path: logUtil.screenShotPath(loadTestDataItem.id,itemIndex,"ScheduledScreenShot"),fullPage:true})    		
	    	}

	    }, 1000 * 60)    	
    } else {
    	console.log("Scheduled Screenshot disabled for " + loadTestDataItem.id);
    }


	page.on('close', () => {
		if(scheduledID){
			clearInterval(scheduledID);
		}

		
	});

    


	// if(itemIndex == 0){
	// 	automator.exceutionMap[loadTestDataItem.id] = [];
	// 	automator.exceutionMap[loadTestDataItem.id].push(context:context,page:page,username:loadTestDataItem.username,password:loadTestDataItem.password);

	// } else {
	// 	automator.exceutionMap[loadTestDataItem.id].push(context:context,page:page,username:loadTestDataItem.username,password:loadTestDataItem.password);

	// }
	
}


exports.centralAgentLogin = centralAgentLogin;


