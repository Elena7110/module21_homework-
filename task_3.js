// Объект веб-хранилища localStorage позволяют хранить пары ключ/значение в браузере, getItem(key) – получить данные по ключу key.
let username = localStorage.getItem('username');
let dateOfLastVisit = localStorage.getItem('dateOfLastVisit');

// если имя пользователя и дата последнего визита true, то выводиться alert с соответствующей надписью, иначе вывадится prompt с просьбой указать имя пользователя
if (username && dateOfLastVisit) {
	alert(`Добрый день, ${username}! Давно не виделись. В последний раз вы были у нас ${dateOfLastVisit}`);
} else {
	username = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
}

// переменная с данными для вывода даты и времени последнего визита пользователя в требуемой форме
var options = {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
};

// Дата и время последнего визита. Метод toLocaleString() возвращает строку с языкозависимым представлением даты. Для определения текущей даты используется new Date()
dateOfLastVisit = new Date().toLocaleString("ru", options);

// Метод setItem() при передаче имени и значения ключа добавляет этот ключ в хранилище или обновляется, если он уже существует.
localStorage.setItem('username', username);
localStorage.setItem('dateOfLastVisit', dateOfLastVisit);