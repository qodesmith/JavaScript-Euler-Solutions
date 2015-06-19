// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million,
// find the sum of the even-valued terms.

function fib(num) {
	var array 	= [1,2],
			counter = 1;

	while(true) {
		array[counter + 1] = array[counter] + array[counter - 1];
		counter += 1;

		if(array[array.length - 1] > num) {
			array.pop()
			var length = array.length,
					sum  	 = 0;
					
			for(var i = 0; i < length; i++) {
				if(array[i] % 2 === 0) { sum += array[i];	};
				if(i === length -1 ) { return sum; };
			}
		}
	}
};

fib(4000000);