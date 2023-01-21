"use strict";

//JS-объект
var result = {
  list: []
}; // Создание элемента класса DOMParser, который позволяет парсить XML

var parser = new DOMParser(); //XML который будем парсить

var xmlString = "\n<list>\n  <student>\n    <name lang=\"en\">\n      <first>Ivan</first>\n      <second>Ivanov</second>\n    </name>\n    <age>35</age>\n    <prof>teacher</prof>\n  </student>\n  <student>\n    <name lang=\"ru\">\n      <first>\u041F\u0435\u0442\u0440</first>\n      <second>\u041F\u0435\u0442\u0440\u043E\u0432</second>\n    </name>\n    <age>58</age>\n    <prof>driver</prof>\n  </student>\n</list>\n"; //Парсинг XML. В переменной parser вызываем метод parseFromString

var xmlDOM = parser.parseFromString(xmlString, "text/xml"); // находим обертку student

var studentsNodes = xmlDOM.querySelectorAll("student");
studentsNodes.forEach(function (element) {
  var student = new Object(); // ищем все теги из 

  var studentFirstname = element.querySelector("first");
  var studentSecondname = element.querySelector("second");
  var studentAge = element.querySelector("age");
  var studentProf = element.querySelector("prof");
  var nameNode = element.querySelector("name"); // ищем атрибуты

  var nameLang = nameNode.getAttribute("lang"); // прописываем выводимые значения

  student.name = studentFirstname.textContent + ' ' + studentSecondname.textContent;
  student.age = studentAge.textContent;
  student.prof = studentProf.textContent;
  student.lang = nameLang;
  result.list.push(student);
});
console.log(result);