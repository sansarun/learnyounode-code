var port = process.argv[2];

var net = require('net');
var server = net.createServer(onConnection);
server.listen(port);

function onConnection(socket) {
	socket.write(getCurrentDateString() + "\n");
	socket.end()
}

function getCurrentDateString() {
	var util = require('util')
	var date = new Date();

	return util.format('%s-%s-%s %s:%s', 
		date.getFullYear(),
		formatTwoPositon((date.getMonth() + 1).toString()),
		formatTwoPositon(date.getDate().toString()),
		formatTwoPositon(date.getHours().toString()),
		formatTwoPositon(date.getMinutes().toString())
	);
}

function formatTwoPositon(str) {
	if(str.length == 1) {
		return "0" + str;
	}
	else {
		return str;
	}
}