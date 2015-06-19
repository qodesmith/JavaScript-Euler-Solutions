// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10,001st prime number?

function howManyPrimes(num) {
	var primes = [];

	// Prime number checking function.
	// Only accounts for positive, whole numbers.
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

	// Create an array populated with prime #'s from 2 to num.
	var i = 2;
	while(primes.length < num) {
		if(isPrime(i)) {
			primes.push(i);
		}
		i++;
	}

	var lastPrime = primes[primes.length - 1];
	return 'The ' + num + ' prime number is ' + lastPrime;
};

howManyPrimes(10001);