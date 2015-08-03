// Handle 3 GET request and collect data from ALL events.
// Print them in order as given in CLI
// Written using concat-stream

// helpful link: https://github.com/nodeschool/discussions/issues/69

var http = require('http'),
	concatstream = require('concat-stream'),
	urls_list = process.argv.slice(2),
	yet_to_end = 3,
	results = [];

// .map sequentially calls the callback function
urls_list.map(function (url, idx) {
	http.get(url, function (response) {
		var data_rec = "";
		response.setEncoding('utf8');
		response.on('error', console.error);
		response.pipe(concatstream(function (data) {
			data_rec += data;
		}));
		response.on('end', function() {
			results[idx] = data_rec;			
			// once all responses have been received, print them
			if (--yet_to_end <= 0) {
				results.map(function (x) {console.log(x)});
			}
		});
	});
});