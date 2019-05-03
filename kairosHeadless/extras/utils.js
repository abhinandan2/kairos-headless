var exports = module.exports = {};

const randomFixedInteger = function (length) {
    return (Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1))).toString();
}


exports.randomFixedInteger = randomFixedInteger;


