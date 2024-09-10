// Задание 1
"use strict";

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for (let num of arr) {
      if (num > max) {
          max = num;
      }
      if (num < min) {
          min = num;
      }
      sum += num;
  }
  
  const avg = (sum / arr.length).toFixed(2);
  
  return { min, max, avg: parseFloat(avg) };
}




//Задача 2
function summElementsWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}
	return arr.reduce((a, b) => (a + b));
}

function differenceMaxMinWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}
	let min = Math.min(...arr);
	let max = Math.max(...arr);

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (!arr.length > 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}




//Задача 3
function makeWork(arrOfArr, func) {
	let maxWorkResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const maximum = func(...arrOfArr[i]);
		if (maxWorkResult < maximum) {
			maxWorkResult = maximum;
		}
	}
	return maxWorkResult;
}

