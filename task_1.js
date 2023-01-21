//JS-объект
let result = {
	list: []
};

// Создание элемента класса DOMParser, который позволяет парсить XML
const parser = new DOMParser();

//XML который будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

//Парсинг XML. В переменной parser вызываем метод parseFromString
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
// находим обертку student
const studentsNodes = xmlDOM.querySelectorAll("student");

studentsNodes.forEach((element) => {
	var student = new Object();
	// ищем все теги из 
	const studentFirstname = element.querySelector("first");
	const studentSecondname = element.querySelector("second");
	const studentAge = element.querySelector("age");
	const studentProf = element.querySelector("prof");
	const nameNode = element.querySelector("name");
	// ищем атрибуты
	const nameLang = nameNode.getAttribute("lang");
	// прописываем выводимые значения
	student.name = studentFirstname.textContent + ' ' + studentSecondname.textContent;
	student.age = studentAge.textContent;
	student.prof = studentProf.textContent;
	student.lang = nameLang;
	result.list.push(student);
});

console.log(result);