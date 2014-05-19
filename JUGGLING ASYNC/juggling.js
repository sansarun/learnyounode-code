var http = require("http");

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var content1 = content2 = content3 = "";
var completeCount = 0;

getAllContent(url1, function(content) {
	content1 = content;
	completeCount++;
	printIfAllComplete();
});

getAllContent(url2, function(content) {
	content2 = content;
	completeCount++;
	printIfAllComplete();
});

getAllContent(url3, function(content) {
	content3 = content;
	completeCount++;
	printIfAllComplete();
});

function printIfAllComplete() {
	if(completeCount == 3) {
		console.log(content1);
		console.log(content2);
		console.log(content3);
	}
}

function getAllContent(url, completeCallback) {
	http.get(url, function(stream) {
		stream.setEncoding("utf8");
		
		var content = "";

		stream.on('data', function(data) {
			content += data;
		});

		stream.on("end", function() {
			completeCallback(content);
		});
	});
}