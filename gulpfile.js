const gulp = require("gulp");
const Bundler = require("parcel-bundler");
const nodemon = require("gulp-nodemon");
const path = require("path");

// Run server
function devServer(cb){
	let started = false;

	nodemon({
		verbose: false,
		script: "./bin/www",
		watch: [
			"routes/*",
			"bin/*",
			"views/*",
			"app.js",
			"connection.js"
		]
	}).on("start", function(){
		if(!started){
			cb();
			started = true;
		}
	});
}

exports["dev-server"] = devServer;
exports.watch = gulp.parallel(devServer);