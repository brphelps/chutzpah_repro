/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
        path = require("path");

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task("build", function (cb) {
    try {
        var distPath = path.join(__dirname, '/dist-output');
        console.log(distPath);
        rimraf.sync(distPath);
    }
    catch (err) {
        console.log(err);
        console.log("couldn't clean");
    }
    return gulp.src(paths.webroot + "js/**/*.js")
        .pipe(gulp.dest('dist-output'));
});