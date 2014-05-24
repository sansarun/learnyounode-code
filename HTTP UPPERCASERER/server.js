var port = process.argv[2];

var server = require('http').createServer(onRequest);
server.listen(port);

var map = require('through2-map')
function onRequest(request, response) {
	if(request.method != 'POST') {
		return response.end('HTTP method not supported.');
	}

	request.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(response);
}