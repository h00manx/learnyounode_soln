// HTTP server that serves JSON data when it receives a GET request to the path 
// '/api/parsetime'. Expect the request to contain a query string 
// with a key 'iso' and an ISO-format time as the value.

var http = require('http'),
	url = require('url');

function parseTime (time) {
	return {'hour': time.getHours(), 'minute': time.getMinutes(), 'second': time.getSeconds()};
}

function unixTime (time) {
	return {'unixtime': time.getTime()};
}

var server = http.createServer(function (request, response) {
	if (request.method != "GET") return "Invalid request method. Use GET";
	
	var parsed_url = url.parse(request.url, true),
		time = new Date(parsed_url.query['iso']),
		resp_data;	

	switch(parsed_url.pathname.toLowerCase()) {
		case '/api/parsetime':
			resp_data = parseTime(time);
			break;

		case '/api/unixtime':
			resp_data = unixTime(time);
			break;

		default:
			resp_data = null;			
	}

	if (resp_data) {
		response.writeHead(200, {'Content-Type': 'application-json'});
		response.end(JSON.stringify(resp_data));	

	} else {
		response.writeHead(404, "Invalid url");
		response.end();
	}
});

server.listen(process.argv[2]);