// Объявление переменной
let number;
//Генератор случайного числа от 1 до 100
function numberGeneration() {
	number = Math.ceil(Math.random() * 100);
}

//Создание Promise
const promise = new Promise((resolve, reject) => {

	//генерация случайного числа с задержкой 3 с созданной с помощью setTimeout
	setTimeout(numberGeneration(), 3000);
	if (number % 2 == 0) {
		// Если сгенерированное число четное— Promise выполнится успешно(resolve)
		resolve(`Завершено успешно. Сгенерированное число ${ number}`);
	} else {
		// Если сгенерированное число нечетное— Promise выполнится с ошибкой (reject)
		reject(`Завершено с ошибкой. Сгенерированное число ${ number}`);
	}
});

//Обработка результата выполнения после разрешения Promise
promise
	// then используется для обработки успешного результата выполнения promise
	.then((result) => {
		// вывод в консоль resolve
		console.log('Обработка результата resolve: ', result);
	})
	// catch используется для обработки неуспешного результата выполнения promise
	.catch((error) => {
		// вывод в консоль reject
		console.log('Обработка результата reject: ', error);
	});