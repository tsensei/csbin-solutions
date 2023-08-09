// CHALLENGE 1
function createFunction() {
	function innerFunction() {
		console.log("hello");
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
	function innerFunction() {
		console.log(input);
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
	let counter = 0; // this variable is outside incrementCounter's scope
	function incrementCounter() {
		counter++;
		console.log("counter", counter);
	}
	return incrementCounter;
}

// const willCounter = outer();
// const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
	function innerFunction(input) {
		return input + x;
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
	let persistentResult = null;
	function innerFunction(input) {
		if (!persistentResult) {
			persistentResult = func(input);
		}

		return persistentResult;
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5
function after(count, func) {
	let timesExecuted = 0;
	function innerFunction() {
		if (timesExecuted < count - 1) {
			timesExecuted++;
		} else {
			func();
		}
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const called = function () {
// 	console.log('hello');
// };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait, ...args) {
	setTimeout(() => func(...args), wait);
}

// CHALLENGE 7
function rollCall(names) {
	let count = 0;
	function innerFunction() {
		if (count < names.length) {
			console.log(names[count]);
			count++;
		} else {
			console.log("Everyone accounted for");
		}
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);
// rollCaller(); // => should log 'Victoria'
// rollCaller(); // => should log 'Juan'
// rollCaller(); // => should log 'Ruth'
// rollCaller(); // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
	let store = {};

	function innerFunction(input) {
		if (input === magicWord) {
			return store;
		} else {
			let output = func(input);
			store[input] = output;

			return output;
		}
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function (num) {
// 	return num * 2;
// };

// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
	let count = 0;
	function innerFunction() {
		let day = array[count];

		count = ++count % array.length;

		return day;
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
	function innerFunction(input) {
		return func(arg, input);
	}
	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
	function innerFunction(input) {
		return {
			date: new Date().toLocaleDateString(),
			output: func(input),
		};
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp((n) => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
	const store = {};
	function innerFunction(...args) {
		if (args.length === 2) {
			store[args[0]] = args[1];
		} else {
			let string = args[0];
			let separatedString = string.split(/([\s.,!?])/); // Split by spaces and punctuation

			for (let i = 0; i < separatedString.length; i++) {
				// Check the word without punctuation
				let wordWithoutPunctuation = separatedString[i].replace(/[.,!?]/g, "");

				if (store[wordWithoutPunctuation]) {
					// If there's a punctuation at the end, keep it
					let punctuation = separatedString[i].match(/[.,!?]/g);
					if (punctuation) {
						separatedString[i] = store[wordWithoutPunctuation] + punctuation[0];
					} else {
						separatedString[i] = store[wordWithoutPunctuation];
					}
				}
			}

			string = separatedString.join("");

			return string;
		}
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
	return {
		getSecret: function () {
			return secret;
		},
		setSecret: function (newSecret) {
			secret = newSecret;
		},
	};
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5);
// obj.getSecret(); // => returns 5
// obj.setSecret(2);
// obj.getSecret(); // => returns 2

// CHALLENGE 14
function callTimes() {
	let numCalled = 0;
	function innerFunction() {
		numCalled++;
		return numCalled;
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2

// CHALLENGE 15
function roulette(num) {
	let count = 1;
	function innerFunction() {
		if (count < num) {
			count++;
			return "spin";
		} else if (count === num) {
			count++;
			return "win";
		} else {
			return "pick a number to play again";
		}
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

// CHALLENGE 16
function average() {
	let num = 0;
	let sum = 0;
	function innerFunction(input) {
		if (!input) {
			return num === 0 ? 0 : sum / num;
		} else {
			sum += input;
			num++;
			return sum / num;
		}
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
	function innerFunction(functionToBeChecked) {
		let flag = true;
		for (let i = 0; i < arrOfTests.length; i++) {
			let firstEl = arrOfTests[i][0];
			let secondEl = arrOfTests[i][1];

			let transformedFirstEl = functionToBeChecked(firstEl);

			if (transformedFirstEl !== secondEl) {
				flag = false;
			}
		}

		return flag;
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
	const historyArray = [];
	function innerFunction(input) {
		if (input === "undo") {
			if (historyArray.length === 0) {
				return "nothing to undo";
			}

			const undone = historyArray.pop();

			return `${undone} undone`;
		} else {
			if (historyArray.length === limit) {
				historyArray.shift();
			}
			historyArray.push(input);
			return `${input} done`;
		}
	}

	return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
	function dealer(firstNum, secondNum) {
		let sum = 0;
		let busted = false;
		let count = 0;

		function player() {
			if (busted) {
				return "you are done!";
			}

			if (count === 0) {
				sum = firstNum + secondNum;
				count++;
				return sum;
			}

			sum += array.shift();

			if (sum > 21) {
				busted = true;
				return "bust";
			}

			count++;

			return sum;
		}

		return player;
	}

	return dealer;
}

// /*** Uncomment these to check your work! ***/

/*** DEALER ***/
// const deal = blackjack([
// 	2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
// ]);

/*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

/*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
