var exports = module.exports = {};

const loadTestDataList = require("../extras/loadTestData.js");
const automator = require("../main/automator.js");

const browser = automator.browser;


async function botLogin(loadTestDataItem,itemIndex) {
	
const context = await automator.browser.createIncognitoBrowserContext();
	const page = await context.newPage();
	// await page.emulateMedia('screen'); 
	await page.goto('https://abflbot-backend.phonon.in/', {waitUntil: 'networkidle0'});

	await page.click('.ui > .ui > .field:nth-child(2) > .ui > input')

	await page.keyboard.type(loadTestDataItem.username);

	await page.click('.ui > .ui > .field:nth-child(3) > .ui > input')

	await page.keyboard.type(loadTestDataItem.password);

	await Promise.all([
	  page.waitForNavigation({waitUntil: 'networkidle0'}), // The promise resolves after navigation has finished
	  page.click('.ui > .ui > .field > .six > .positive'), // Clicking the link will indirectly cause a navigation
	]);

	// await page.click('.ui > .ui > .field > .six > .positive')

	page.on('console', msg => console.log('PAGE LOG:', msg.text()));

	await page.evaluate(() => console.log(`url is ${location.href}`));


	// if(itemIndex == 0){
	// 	automator.exceutionMap[loadTestDataItem.id] = [];
	// 	automator.exceutionMap[loadTestDataItem.id].push(context:context,page:page,username:loadTestDataItem.username,password:loadTestDataItem.password);

	// } else {
	// 	automator.exceutionMap[loadTestDataItem.id].push(context:context,page:page,username:loadTestDataItem.username,password:loadTestDataItem.password);

	// }
	
}


exports.botLogin = botLogin;


