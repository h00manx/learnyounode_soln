// Send a GET request and print response from data event 

var http = require('http'),
	url = process.argv[2];

// Convert response to utf8 and handle
// 'data', 'error' and 'end' events. .get handles .end automatically.
http.get(url, function (response) {
	response.setEncoding('utf8');
	response.on('data', function(content) {
		console.log(content);
	});
	response.on('error', console.error);	
});
