var mySum = function(){ //функция сложения
	var sum = Number((document.getElementById("numberOne").value)*10 + Number(document.getElementById("numberTwo").value)*10)/10;
	alert (+sum.toFixed(10)); //вывод результата сложения учитывая возможность неточных чисел
}

button.addEventListener('click', mySum);