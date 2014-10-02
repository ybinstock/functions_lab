
// Problem 1
var sayHello = function () {
    console.log("Hello, World!");
};


// Problem 2

var sayHello = function (name) {
    console.log("Hello"+ " " +name);
};


// Problem 3

var sayHello = function (name) {
    return ("Hello" + name);
};

var shoutout = sayHello("Yoni");
console.log (shoutour);

// Problem 4

var add = function (num1, num2) {
    return num1 + num2;
};
var sum = add(2, 3);
console.log("2 + 3 = " + sum);


var sub = function (num1, num2) {
    return num1 - num2;
};
var subtraction = sub(10, 7);
console.log("10 - 7 = " + subtraction);



var combine = function (num1, num2, hello) {
    if (hello === true) {
    	return num1 + num2;
    } else {
    	return num2 - num1;
    }
};

var combination = combine(2, 3, true);
console.log(combination);


// Problem 5

var called = 0;
var numberOfFunctions = function () {
	called++;
return ("I have been called"+called+"number of times");
};
numberOfFunctions();

// Bonus 1
function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}


 var primary = primeNumber(21);
console.log (primary);

// Bonus 2 ????

var merge = function (arr1, arr2)  {
var totalMerge = []+[];
return totalMerge.merge;

};
mergeFunction = merge([1,2,3,4],[1,2,3,4]);
console.log(mergeFunction);

// Bonus 3

var letterCount = function (letter, word)
  {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) === letter) {
        count++;
    }
  }
  return count;
};

var finalLetterCount = letterCount(T, Timbukto);
console.log(finalLetterCount);










