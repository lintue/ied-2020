const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const index = require("./routes/index");

const app = express();

if(process.env.NODE_ENV !== "production"){
	const Bundler = require("parcel-bundler");
	const entryFiles = path.join(__dirname, "frontend/*.html");
	const parcelOptions = {
		outDir: "./public"
	};
	const bundler = new Bundler(entryFiles, parcelOptions);

	app.use(bundler.middleware());
}

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({defaultLayout: "../layout"}));
app.set("view engine", "handlebars");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	const err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;