var directory = process.argv[2]
var preferedExtension = process.argv[3]

var fs = require('fs')
fs.readdir(directory, function(err, fileList) {
	fileList.forEach(function(file) {
		var tail = file.substring(file.length - (preferedExtension.length + 1))
		if(tail == "." + preferedExtension) {
			console.log(file)
		}
	})
})