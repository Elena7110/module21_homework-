"use strict";

// ищем поле воода 
var input = document.querySelector('.input'); // ищем кнопку 

var btn = document.querySelector('.j-btn'); // ищем место для вывода списка

var result = document.querySelector('.j-result'); // функция, создающая список дел с соответсвующим оформлением

function createToDoList(data) {
  var list = ''; // если пользовотеля с введенным id нет выводится соответствующее сообщение

  if (data.length == 0) {
    alert('Пользователь с указанным id не найден');
  } else {
    // иначе выводится список задач
    for (var key in data) {
      var task = data[key]['title'];
      var completed = data[key]['completed'];

      if (completed) {
        list += "<li style=\"text-decoration: line-through\">".concat(task, "</li>");
      } else {
        list += "<li>".concat(task, "</li>");
      }
    }

    result.innerHTML = list;
  }
} // добавляем кнопке btn обработчик click


btn.addEventListener('click', function () {
  // создаем константу, содержащую url запрос, подставляем на место id пользователя число, введенное в поле input.value
  var url = "https://jsonplaceholder.typicode.com/users/".concat(input.value, "/todos"); // передаем функции первым параметром переменную с url запросом, по умолчанию функция делает get запрос к удаелнному API, получаем данные fetch

  fetch(url) // получаем объект response, объект ответа после реализации запроса
  .then(function (response) {
    // Декодирует ответ в формате JSON
    var result = response.json();
    return result;
  }) // получаем результирующий json с применением функции createToDoList
  .then(function (data) {
    createToDoList(data);
  }) // перехват ошибок
  ["catch"](function () {
    console.log('error');
  });
});