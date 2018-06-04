# Webinars page

## Start
`npm i && npm start`
Проект использует 3000 порт, собирается при помощи Webpack 4. Основной конфиг - **webpack.base.config** в корне, в зависимости от переданного при запуске флага билдятся файлы с хэшами.
Конфиги для режима **development** и **production** лежат рядом, дополняют основной.

## Build
`npm run build`

## Стек: React v.16.4, Redux, React-Router v.4, Webpack 4;
В качестве middleware использован redux-thunk. Информация о добавленных вебинарах хранится в localStorage.
Используется **BrowserHistory**.