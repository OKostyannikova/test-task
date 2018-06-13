let gulp = require("gulp"),
  gp = require("gulp-load-plugins")(),
  browserSync = require('browser-sync').create();


gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });
});


gulp.task("styles", function () {
  return gulp.src(["src/scss/main.scss", "src/scss/libs.scss"])
    .pipe(gp.sourcemaps.init())
    .pipe(gp.sass().on('error', gp.sass.logError))
    .pipe(gp.autoprefixer({
      browsers: ["last 2 versions"]
    }))
    .on("error", gp.notify.onError({
      title: "style"
    }))
    /*  .pipe(gp.csso({
         restructure: false
     })) */
    .pipe(gp.sourcemaps.write())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task("html", function () {
  return gulp.src("src/**/*.html")
    .on('end', browserSync.reload)
})

gulp.task("scripts:lib", function () {
  return gulp.src([])
    .pipe(gp.concat("libs.min.js"))
    .pipe(gulp.dest("src/js/"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task("scripts", function () {
  return gulp.src("src/js/index.js")
    .pipe(gulp.dest("src"))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task("watch", function () {
  gulp.watch("src/**/*.scss", gulp.series("styles"));
  gulp.watch("src/**/*.html", gulp.series("html"));
  gulp.watch("src/js/**/*.js", gulp.series("scripts"));
});

gulp.task("default", gulp.series(
  gulp.parallel("styles", "scripts"),
  gulp.parallel("watch", "serve")
));
