const moment = require('moment');
const chalk = require('chalk');

var exports = module.exports = {};

const randomFixedInteger = function (length) {
    return (Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1))).toString();
}

// Ex: 08:16:44 PM = 201644
const getTimeString = () => new Date().toTimeString().substr(0,8).replace(/:/g,'-')

const getNow = () => moment().format("HH:mm:ss.SSS");

const getDiff = (start) => moment().diff(moment(start), 's');

const cg = (i) => chalk.green(i);
const cc = (i) => chalk.cyan(i);

function waitForNetworkIdle(page, timeout, maxInflightRequests = 0) {
  page.on('request', onRequestStarted);
  page.on('requestfinished', onRequestFinished);
  page.on('requestfailed', onRequestFinished);

  let inflight = 0;
  let fulfill;
  let promise = new Promise(x => fulfill = x);
  let timeoutId = setTimeout(onTimeoutDone, timeout);
  return promise;

  function onTimeoutDone() {
    page.removeListener('request', onRequestStarted);
    page.removeListener('requestfinished', onRequestFinished);
    page.removeListener('requestfailed', onRequestFinished);
    fulfill();
  }

  function onRequestStarted() {
    ++inflight;
    if (inflight > maxInflightRequests)
      clearTimeout(timeoutId);
  }
  
  function onRequestFinished() {
    if (inflight === 0)
      return;
    --inflight;
    if (inflight === maxInflightRequests)
      timeoutId = setTimeout(onTimeoutDone, timeout);
  }
}

exports.randomFixedInteger = randomFixedInteger;
exports.getTimeString = getTimeString;
exports.getNow = getNow;
exports.getDiff = getDiff;
exports.cg = cg;
exports.cc = cc;
exports.waitForNetworkIdle = waitForNetworkIdle;


