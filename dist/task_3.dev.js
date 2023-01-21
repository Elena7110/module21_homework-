"use strict";

// Объект веб-хранилища localStorage позволяют хранить пары ключ/значение в браузере, getItem(key) – получить данные по ключу key.
var username = localStorage.getItem('username');
var dateOfLastVisit = localStorage.getItem('dateOfLastVisit'); // если имя пользователя и дата последнего визита true, то выводиться alert с соответствующей надписью, иначе вывадится prompt с просьбой указать имя пользователя

if (username && dateOfLastVisit) {
  alert("\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C, ".concat(username, "! \u0414\u0430\u0432\u043D\u043E \u043D\u0435 \u0432\u0438\u0434\u0435\u043B\u0438\u0441\u044C. \u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0430\u0437 \u0432\u044B \u0431\u044B\u043B\u0438 \u0443 \u043D\u0430\u0441 ").concat(dateOfLastVisit));
} else {
  username = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
} // переменная с данными для вывода даты и времени последнего визита пользователя в требуемой форме


var options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}; // Дата и время последнего визита. Метод toLocaleString() возвращает строку с языкозависимым представлением даты. Для определения текущей даты используется new Date()

dateOfLastVisit = new Date().toLocaleString("ru", options); // Метод setItem() при передаче имени и значения ключа добавляет этот ключ в хранилище или обновляется, если он уже существует.

localStorage.setItem('username', username);
localStorage.setItem('dateOfLastVisit', dateOfLastVisit);