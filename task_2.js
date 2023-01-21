//JS объект 
const jsObj = {
	name: "Anton",
	age: 36,
	skills: ["Javascript", "HTML", "CSS"],
	salary: 80000
};

// JSON.stringify для преобразования объектов в JSON
const jsonString = JSON.stringify(jsObj);

console.log(jsonString);