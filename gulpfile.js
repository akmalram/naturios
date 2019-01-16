const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

function css() {
    return gulp.src('./src/css/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(cleanCss({
            level: 2
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

function watch() {
    gulp.watch('./src/css/*.scss', css);
    gulp.watch('./build/*.html', browserSync.reload);
}

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        },
        // tunnel: true
    });
});

gulp.task('css', css);
gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync'));