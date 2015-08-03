// Send a GET request and collect data from ALL events
// Written using concat-stream

var http = require('http'),
	concatstream = require('concat-stream'),
	url = process.argv[2];

http.get(url, function(response) {
	response.setEncoding('utf8');
	response.on('error', console.error);
	response.pipe(concatstream(function(data){
		console.log(data.length);
		console.log(data);
	}));
});