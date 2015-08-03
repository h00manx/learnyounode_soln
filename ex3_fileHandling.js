// Read a file and print the number of lines it has

// load filesystem module
var fs = require('fs');

// open file from the argument passed in CLI
var bufObject = fs.readFileSync(process.argv[2])

// convert buffer to string
var strFile = bufObject.toString();

// split file by new line
var newLineCount = strFile.split('\n').length - 1;

// print to console
console.log(newLineCount);