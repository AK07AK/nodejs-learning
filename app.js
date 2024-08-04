var logger = require('./logger');
logger.logg("msg");

const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);