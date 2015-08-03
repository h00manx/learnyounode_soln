// A-SYNCHRONIOUSLY parse a directory and print the files, of a certain extension, to the console.

// read filesystem module
var fs = require('fs');

// setup the extension
var extension = "." + process.argv[3];

// filter out the filesnames from the array returned by readdir func
fs.readdir(process.argv[2], function (err, list) {
	if (err) throw err;
	
	list.forEach(function(filename) {
		if (filename.indexOf(extension) > -1) {
			console.log(filename);
		};
	});	
});