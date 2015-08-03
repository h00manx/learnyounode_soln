// print sum of n numbers into console(CLI)

// HELP:
// https://nodejs.org/docs/latest/api/process.html#process_process_argv

// process input
var sum = 0;
for (var i = process.argv.length - 1; i >= 2; i--) {
	// typecast the strings to numbers
	sum += Number(process.argv[i]);	
}

// print output
console.log(sum);