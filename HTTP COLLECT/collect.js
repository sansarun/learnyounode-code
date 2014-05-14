var url = process.argv[2];

var http = require("http");
http.get(url, onResponse);

function onResponse(stream) {
	stream.setEncoding("utf8");

	var content = "";
	stream.on("data", function(data) {
		content += data;
	});

	stream.on("end", function() {
		console.log(content.length);
		console.log(content);
	})
}