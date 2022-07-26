import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.mesage %>"
            })))//обнуружение ошибок через пламбер и выдача сообщений о них через нотифай
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'app.min.js',
            }//файл результата
        }))
        .pipe(app.gulp.dest(app.path.build.js))// выгружаем в папку с результатом
        .pipe(app.plugins.browsersync.stream())// обновляем браузер
}