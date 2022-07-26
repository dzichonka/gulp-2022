import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
    return app.gulp.src(app.path.src.images, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "IMAGES",
                message: "Error: <%= error.mesage %>"
            })))//обнуружение ошибок через пламбер и выдача сообщений о них через нотифай
        .pipe(app.plugins.newer(app.path.build.images)) //проверяем на "новость"
        .pipe(webp()) //создаем изображение 
        .pipe(app.gulp.dest(app.path.build.images))// выгружаем в папку с результатом
        .pipe(app.gulp.src(app.path.src.images)) //сново получаем доступ к изображениям
        .pipe(app.plugins.newer(app.path.build.images)) //проверяем на "новость"
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLavel: 3 //0 до 7
        })) //сжимаем фоточки
        .pipe(app.gulp.dest(app.path.build.images)) // выгружаем в папку с результатом
        .pipe(app.gulp.src(app.path.src.svg)) //сново получаем доступ к изображениям
        .pipe(app.gulp.dest(app.path.build.images)) // выгружаем в папку с результатом
        .pipe(app.plugins.browsersync.stream()) // обновляем браузер
}