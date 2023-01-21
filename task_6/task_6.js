// ищем поле воода номера страницы
const page = document.querySelector('.input-page');
// ищем поле воода лимита
const limit = document.querySelector('.input-limit');
// ищем кнопку 
const btn = document.querySelector('.j-btn');
// ищем место для вывода результата
const result = document.querySelector('.j-result');

// функция range возвращает число в заданном диапазоне

function range(number) {
	let data = false;
	if (number > 0 && number < 11) {
		data = true;
	}
	return data;
}

// используем метод createItem(), который позволяет добавить элемент в очередь, принимает один единственный аргумент $data,
// который может быть чем угодно.
// В качестве результата возвращает уникальный ID элемента очереди, куда были сохранены данные.
function createQueue(data) {
	let list = '';
	for (let key in data) {
		const imgUrl = data[key]['download_url'];
		const imgAuthor = data[key]['author'];
		const imgHTML = `<div class="card"><img src="${imgUrl}" class="card-image"/><p>${imgAuthor}</p></div>`;
		list += imgHTML;
	}
	result.innerHTML = list;
}

// добавляем кнопке btn обработчик click
btn.addEventListener('click', () => {
	// задаем переменные в полученными из полей ввода значениями
	let receivedPage = page.value;
	let receivedLimit = limit.value;
	// выполняем условия в зависимости от числа, полученного с помощью функции range
	if (!range(receivedPage)) {
		alert('Номер страницы вне диапазона от 1 до 10');
	} else if (!range(receivedLimit)) {
		alert('Лимит вне диапазона от 1 до 10');
	} else if (!range(receivedPage) && !range(receivedLimit)) {
		alert('Номер страницы и лимит вне диапазона от 1 до 10');
	} else {
		// создаем константу, содержащую url запрос, подставляем на место id пользователя число, введенное в поле input.value
		const url = `https://picsum.photos/v2/list?page=${receivedPage}&limit=${receivedLimit}`;
		// передаем функции первым параметром переменную с url запросом, по умолчанию функция делает get запрос к удаелнному API, получаем данные fetch
		fetch(url)
			// получаем объект response, объект ответа после реализации запроса
			.then((response) => {
				// Декодирует ответ в формате JSON
				const result = response.json();
				return result;
			})
			// получаем результирующий json с применением функции createQueue
			.then((data) => {
				createQueue(data);
			})
			// перехват ошибок
			.catch(() => {
				console.log('error')
			});
	}
});