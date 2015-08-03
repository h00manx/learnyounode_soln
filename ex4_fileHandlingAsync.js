// A-SYNCHRONIOUSLY Read a file and print the number of lines it has

// To understand the concept of async, refer:
// https://github.com/maxogden/art-of-node#callbacks

// load filesystem module
var fs = require('fs');

// read file async
fs.readFile(process.argv[2], 'utf8', afterReading);

// function to split file and log into console
function afterReading(err, data) {
	if (err) throw err;
	// split file by new line
	var newLineCount = data.split("\n").length - 1;
	console.log(newLineCount);
}