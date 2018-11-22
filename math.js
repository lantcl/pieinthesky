console.log("connected");

function getRandomInt(min, max) {
	min = Math.ceil(1);
  	max = Math.floor(10);
	return Math.floor(Math.random() *(max - min + 1)) + min;
}

var a = getRandomInt();
var b = getRandomInt();

var sum = a + b;

console.log(a, b, sum);


