'use strict'

var gulp = require("gulp");
var babel = require("gulp-babel");
const autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
 
gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/'
    },
    src: { 
        html: 'src/*.html', 
        js: 'src/index.js',
        style: 'src/style.scss'
    }};

    gulp.task('html:build', done => {
        gulp.src(path.src.html)
            .pipe(gulp.dest(path.build.html));
            done();
    });

    gulp.task('js:build', done=> {
        gulp.src(path.src.js) 
        .pipe(babel())
            .pipe(gulp.dest(path.build.js));
            done();
    });

    gulp.task('style:build', done=> {
        gulp.src(path.src.style) 
            .pipe(sass()) 
            .pipe(autoprefixer()) 
            .pipe(gulp.dest(path.build.css));
            done();
    });

    gulp.task('build', gulp.series('html:build', 'js:build', 'style:build'));