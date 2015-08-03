// http server receives on POST request and converts the request body to uppercase and returns to client
// additional module used: through2-map

var http = require('http'),
	map = require('through2-map');

var server = http.createServer(function (request, response) {
	if (request.method != "POST") return "Invalid request method. Use POST."
	
	request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);

});

server.listen(process.argv[2]);