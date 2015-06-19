// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers
// and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first
// one hundred natural numbers and the square of the sum.

function sosDifference(num) {

	/////////////////////
	// Sum of squares. //
	/////////////////////
	var sum = 0;
	for(var i = 1; i <= num; i++) {
		sum += i * i;
	}

	/////////////////////
	// Square of sums. //
	/////////////////////
	var square = 0;
	for(var j = 1; j <= num; j++) {
		square += j;
		j === num ? square *= square : false;
	}

	return square - sum;
};

sosDifference(100);