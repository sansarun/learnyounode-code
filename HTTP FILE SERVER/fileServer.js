var port = process.argv[2];
var filePath = process.argv[3];

var server = require('http').createServer(onRequest);
server.listen(port);

var fs = require('fs');
function onRequest(request, response) {
	var fileStream = fs.createReadStream(filePath);
	fileStream.pipe(response);
}