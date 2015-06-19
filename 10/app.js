// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

function sumOfPrimesBelow(num) {
	var primes = [2], // 2 is the first prime #.
			total  = 0,
			i 		 = 3; // Our iterator to check primes should start at 3.

	// Prime # checking function.
	function isPrime(n) {
		var root = Math.sqrt(n);

		if(n === 2) { return true }; // 2 is always prime.
		if(n < 2) { return false }; // Anything below 2 is not prime.
		if(n % 2 === 0) { return false }; // Even numbers (besides 2 above) are never prime.

		// Iterate every other, skipping even #'s.
		for(var i = 3; i <= root; i += 2) {
			if(n % i === 0) { return false }
		}

		return true;
	}

	while(i < num) {
		isPrime(i) ? primes.push(i) : true;

		// We only need to check odd #'s above 2,
		// so we iterate over every other #.
		i += 2;
	}

	var length = primes.length;
	for(var j = 0; j < length; j++) {
		total += primes[j];
	}

	return total;
};

sumOfPrimesBelow(2000000);