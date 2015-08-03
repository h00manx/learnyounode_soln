// A-SYNCHRONIOUSLY parse a directory and print the files, of a certain extension, to the console.

// read filesystem module
var fs = require('fs');

// load path module
var path = require('path');

// filter out the filesnames from the array returned by readdir func
fs.readdir(process.argv[2], function (err, list) {
	list.forEach(function(filename) {
		if (path.extname(filename) == "." + process.argv[3]) {
			console.log(filename);
		};
	});	
});