"use strict";

// ищем поле воода номера страницы
var page = document.querySelector('.input-page'); // ищем поле воода лимита

var limit = document.querySelector('.input-limit'); // ищем кнопку 

var btn = document.querySelector('.j-btn'); // ищем место для вывода результата

var result = document.querySelector('.j-result'); // функция range возвращает число в заданном диапазоне

function range(number) {
  var data = false;

  if (number > 0 && number < 11) {
    data = true;
  }

  return data;
} // используем метод createItem(), который позволяет добавить элемент в очередь, принимает один единственный аргумент $data,
// который может быть чем угодно.
// В качестве результата возвращает уникальный ID элемента очереди, куда были сохранены данные.


function createQueue(data) {
  var list = '';

  for (var key in data) {
    var imgUrl = data[key]['download_url'];
    var imgAuthor = data[key]['author'];
    var imgHTML = "<div class=\"card\"><img src=\"".concat(imgUrl, "\" class=\"card-image\"/><p>").concat(imgAuthor, "</p></div>");
    list += imgHTML;
  }

  result.innerHTML = list;
} // добавляем кнопке btn обработчик click


btn.addEventListener('click', function () {
  // задаем переменные в полученными из полей ввода значениями
  var receivedPage = page.value;
  var receivedLimit = limit.value; // выполняем условия в зависимости от числа, полученного с помощью функции range

  if (!range(receivedPage)) {
    alert('Номер страницы вне диапазона от 1 до 10');
  } else if (!range(receivedLimit)) {
    alert('Лимит вне диапазона от 1 до 10');
  } else if (!range(receivedPage) && !range(receivedLimit)) {
    alert('Номер страницы и лимит вне диапазона от 1 до 10');
  } else {
    // создаем константу, содержащую url запрос, подставляем на место id пользователя число, введенное в поле input.value
    var url = "https://picsum.photos/v2/list?page=".concat(receivedPage, "&limit=").concat(receivedLimit); // передаем функции первым параметром переменную с url запросом, по умолчанию функция делает get запрос к удаелнному API, получаем данные fetch

    fetch(url) // получаем объект response, объект ответа после реализации запроса
    .then(function (response) {
      // Декодирует ответ в формате JSON
      var result = response.json();
      return result;
    }) // получаем результирующий json с применением функции createQueue
    .then(function (data) {
      createQueue(data);
    }) // перехват ошибок
    ["catch"](function () {
      console.log('error');
    });
  }
});