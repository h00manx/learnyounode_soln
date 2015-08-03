// A-SYNCHRONIOUSLY parse a directory and print the files, of a certain extension, to the console.
// Using module.
var mymod = require('./ex6_mod');

mymod(process.argv[2], process.argv[3], function (err, data) {
	if (err) throw err;
	
	data.forEach(function(item) {
		console.log(item);
	});
});