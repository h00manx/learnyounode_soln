// module for ex6
module.exports = function filterFilename(dirName, ext, callback) {
	var fs = require('fs'),
		path = require('path');
		filelist = [];

	fs.readdir(dirName, function(err, list) {
		if (err) return callback(err);

		list.forEach(function(filename) {
			if (path.extname(filename) == "." + ext) {
				filelist.push(filename);
			}
		});
		
		return callback(null, filelist);
		
	});
}

