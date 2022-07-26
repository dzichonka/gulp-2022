import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //обработка ошибок
import notify from "gulp-notify"; //сообщения (подсказки)
import browsersync from "browser-sync"; //локальный сервис
import newer from "gulp-newer"; //проверка обнавлений

//эксортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer
}