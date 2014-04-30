var filePath = process.argv[2];

var fs = require('fs')
fs.readFile(filePath, function(err, data) {
	console.log(data.toString().split('\n').length - 1)
})

