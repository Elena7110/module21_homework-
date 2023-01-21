"use strict";

// Объявление переменной
var number; //Генератор случайного числа от 1 до 100

function numberGeneration() {
  number = Math.ceil(Math.random() * 100);
} //Создание Promise


var promise = new Promise(function (resolve, reject) {
  //генерация случайного числа с задержкой 3 с созданной с помощью setTimeout
  setTimeout(numberGeneration(), 3000);

  if (number % 2 == 0) {
    // Если сгенерированное число четное— Promise выполнится успешно(resolve)
    resolve("\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E. \u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(number));
  } else {
    // Если сгенерированное число нечетное— Promise выполнится с ошибкой (reject)
    reject("\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E \u0441 \u043E\u0448\u0438\u0431\u043A\u043E\u0439. \u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(number));
  }
}); //Обработка результата выполнения после разрешения Promise

promise // then используется для обработки успешного результата выполнения promise
.then(function (result) {
  // вывод в консоль resolve
  console.log('Обработка результата resolve: ', result);
}) // catch используется для обработки неуспешного результата выполнения promise
["catch"](function (error) {
  // вывод в консоль reject
  console.log('Обработка результата reject: ', error);
});