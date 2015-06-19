// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2.
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function pythTriplet(num) {
	var square = num * num;

	for(var a = 1; a < num; a++) {
		for(var b = 1; b < num; b++) {
			var ab = (a * a) + (b * b);
			var c = Math.sqrt(ab);

			if(c % Math.round(c) === 0) {
				if(a + b + c === num) {
					console.log('a:', a);
					console.log('b:', b);
					console.log('c:', c);
					return a * b * c;
				}
			}
		}
	}
};

pythTriplet(1000);