// ищем поле воода 
const input = document.querySelector('.input');
// ищем кнопку 
const btn = document.querySelector('.j-btn');
// ищем место для вывода списка
const result = document.querySelector('.j-result');


// функция, создающая список дел с соответсвующим оформлением
function createToDoList(data) {
	let list = '';
	// если пользовотеля с введенным id нет выводится соответствующее сообщение
	if (data.length == 0) {
		alert('Пользователь с указанным id не найден');
	} else {
		// иначе выводится список задач
		for (let key in data) {
			const task = data[key]['title'];
			const completed = data[key]['completed'];
			if (completed) {
				list += (`<li style="text-decoration: line-through">${task}</li>`);
			} else {
				list += (`<li>${task}</li>`);
			}
		}
		result.innerHTML = list;
	}
}

// добавляем кнопке btn обработчик click
btn.addEventListener('click', () => {
	// создаем константу, содержащую url запрос, подставляем на место id пользователя число, введенное в поле input.value
	const url = `https://jsonplaceholder.typicode.com/users/${input.value}/todos`;
	// передаем функции первым параметром переменную с url запросом, по умолчанию функция делает get запрос к удаелнному API, получаем данные fetch
	fetch(url)
		// получаем объект response, объект ответа после реализации запроса
		.then((response) => {
			// Декодирует ответ в формате JSON
			const result = response.json();
			return result;
		})
		// получаем результирующий json с применением функции createToDoList
		.then((data) => {
			createToDoList(data);
		})
		// перехват ошибок
		.catch(() => {
			console.log('error')
		});
});