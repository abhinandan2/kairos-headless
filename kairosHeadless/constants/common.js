var exports = module.exports = {};

let TAKESCHEDULEDSCREENGRAB = false;
let DEFAULTTIMEOUT = 120 * 1000;
let BROWSERTIMEOUT = 20 * 1000;
let CONCURRENT = 5;
let HEADLESSMODE = true;

// Agent Pattern:
let AGENT_USERNAME = 'centralAgent#200XXX';
let AGENT_EMAIL = 'aXXX@gmail.com';
let AGENT_PASSWORD = 'Test@1234567'

// Agent Start & End
let AGENT_START_DEFAULT = 200;
let AGENT_END_DEFAULT = 300;

exports.TAKESCHEDULEDSCREENGRAB = TAKESCHEDULEDSCREENGRAB;
exports.DEFAULTTIMEOUT = DEFAULTTIMEOUT;
exports.BROWSERTIMEOUT = BROWSERTIMEOUT;
exports.CONCURRENT = CONCURRENT;
exports.HEADLESSMODE = HEADLESSMODE;
exports.AGENT_START_DEFAULT = AGENT_START_DEFAULT;
exports.AGENT_END_DEFAULT = AGENT_END_DEFAULT;
exports.AGENT_USERNAME = AGENT_USERNAME;
exports.AGENT_EMAIL = AGENT_EMAIL;
exports.AGENT_PASSWORD = AGENT_PASSWORD;