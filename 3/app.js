// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
// Prime factorization explained: https://goo.gl/jkHULR

// Example solution:
// 13195		// Starting number.
// 	5				// First divisible prime #.
// 	2639		// Answer to above.
// 		7			// Next divisible prime #.
// 		377		// Answer to above.
// 			13  // Next divisible prime #.
// 			29  // Final answer because it's a prime #.

// *** JAVASCRIPT WILL CRASH WITH A NUMBER AS LARGE AS 600851475143. ***
function findPrimes(num) {
	var sqrt  = Math.sqrt(num);
	var array = [];

	// Create an array populated from 2 to num (prime # range).
	for(var i = 2; i <= sqrt; i++) {
		array.push(i);
	}

	function filterType(array, type) {
		return array.filter(function(element) {
			return element.constructor.name === type ? element : false;
		});
	};

	// Seive of Eratosthenes prime number formula.
	// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
	// Filter out all non-prime numbers using filterType above.
	for(var j = 0; j < array.length; j++) {
		for(var k = j + 1; k < array.length; k++) {
			if(array[k] % array[j] === 0) {
				array[k] = 'X';
			}
		}
		array = filterType(array, 'Number');
	}

	// Create an array containing the prime factors.
	var index  			 = [num],
			primeFactors = [],
			length 			 = array.length;

	for(var l = 0; l < length; l++) {
		if(index[index.length -1] % array[l] === 0) {
			var x = index[index.length -1] / array[l];
			primeFactors.push(array[l]);
			index.push(x);
		}
	}

	Array.prototype.last = function() {
		return this[this.length -1];
	}
	
	// return index[index.length - 2];
	// return primeFactors[primeFactors.length - 1];
	return primeFactors.last();

};