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

function primeFactorial(num) {
	var sqrt   = Math.sqrt(num),
			array  = [];

	// Prime number checking function.
	// Only accounts for positive, whole numbers.
	function isPrime(n) {
		var root 		= Math.sqrt(n);

		if(n === 2) { return true };
		if(n < 2 === 0) { return false };

		for(var i = 2; i <= root; i++) {
			if(n % i === 0) { return false }
		}

		return true;
	}

	// Create an array populated with prime #'s from 2 to sqrt.
	for(var i = 2; i <= sqrt; i++) {
		var root = Math.sqrt(i);
		if(isPrime(i)) {
			array.push(i);
		}
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
	console.log('Prime Factors:', primeFactors);
	return primeFactors.last();
};

primeFactorial(600851475143);