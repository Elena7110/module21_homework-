"use strict";

//JS объект 
var jsObj = {
  name: "Anton",
  age: 36,
  skills: ["Javascript", "HTML", "CSS"],
  salary: 80000
}; // JSON.stringify для преобразования объектов в JSON

var jsonString = JSON.stringify(jsObj);
console.log(jsonString);