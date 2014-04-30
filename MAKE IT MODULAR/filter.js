module.exports = function(directory, preferedExtension, callback) {
	var fs = require('fs')

	fs.readdir(directory, function(err, fileList) {
		if(err)
			return callback(err)

		var result = []
		fileList.forEach(function(file) {
			var tail = file.substring(file.length - (preferedExtension.length+1))
			if(tail === "."+preferedExtension) {
				result.push(file)
			}
		})

		callback(null, result)
	})	
}