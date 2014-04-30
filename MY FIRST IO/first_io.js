var filePath = process.argv[2];

var fs = require('fs')
var fileContent = fs.readFileSync(filePath).toString();

console.log(fileContent.split('\n').length - 1);