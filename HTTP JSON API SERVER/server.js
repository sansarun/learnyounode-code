var port = process.argv[2];

var server = require('http').createServer(onRequest);
server.listen(port);

var urlHandler = {
	"/api/parsetime": parseTimeHander,
	"/api/unixtime": unixtimeHandler
}

var url = require('url');
function onRequest(request, response) {
	var urlObject = url.parse(request.url, true);
	if(urlObject.pathname in urlHandler) {
		urlHandler[urlObject.pathname](request, response, urlObject.query);
	}
}

function parseTimeHander(request, response, params) {
	var date = new Date(params.iso);
	var result = {
		'hour': date.getHours(),
		'minute': date.getMinutes(),
		'second': date.getSeconds()
	}

	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(result));
}

function unixtimeHandler(request, response, params) {
	var date = new Date(params.iso);
	var result = {
		'unixtime': date.getTime()
	}

	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(result));
}