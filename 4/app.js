// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// This solution is slower than I'd like,
// and will freeze the console when num > 4. :/

function palindrome(num) {
	// num = how many digits to try.
	// For this Euler, we'll be doing 3.

	// Get the highest number we're working with.
	var highNum = '',
			answer  = 0;

	for(var i = 0; i < num; i++) {
		highNum += '9';
	}

	highNum = parseInt(highNum);

	// Symetrical check function.
	function symCheck(n) {
		var nString 	= n.toString();
		var nReversed = nString.split('').reverse().join('');

		return nString === nReversed ? true : false;
	}

	// Find the largest palindrome
	for(var j = highNum; j > 0; j--) {
		for(var k = highNum; k > 0; k--) {
			var product = j * k;
			if(symCheck(product)) {
				product > answer ? answer = product : true;
			};
		}
	}

	return answer;
};

palindrome(3);