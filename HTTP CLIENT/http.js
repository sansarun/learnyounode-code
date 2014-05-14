var url = process.argv[2];

var http = require("http");
http.get(url, onResponse);

function onResponse(stream) {
	stream.setEncoding("utf8");
	stream.on("data", function(data) {
		console.log(data);
	});
}