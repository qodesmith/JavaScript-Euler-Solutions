// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple(num) {
	var start = new Date();
	var msg;
	num < 0 ? msg = 'You\'re number was turned positive.' : false;

	// Prevent infinite loops from non-whole numbers,
	// and ensure num is positive.
	num = Math.abs(Math.round(num));

	var answer = num + 1,
			count = 0,
			iterations = 0;

	// The loop.
	for(var i = 1; i <= num + 1; i++) {
		// For curiosity, keep track of how many
		// iterations it takes to complete the task.
		iterations += 1; 

		// An answer has been found...
		if(count === num) {
			var end = new Date();
			var time = (end - start) / 1000;

			if(msg) { console.log(msg) }; // Did we enter a negative number?
			console.log('Total iterations:', iterations); // How many loops did we go through?
			console.log('Time:', time + 's'); // Computation time.
			return 'Answer: ' + answer;
		} else if(answer % i === 0) {
			count += 1;
		} else {
			
			// Reset the loop.
			i = 0;
			count = 0;
			answer += 1;
			continue;
		}
	}
};

smallestMultiple(20);