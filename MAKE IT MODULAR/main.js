var directory = process.argv[2]
var extension = process.argv[3]

var filter = require('./filter')

filter(directory, extension, function(err, result) {
	if(err) {
		console.log("error")
		return
	}

	result.forEach(function(file) {
		console.log(file)
	})
})