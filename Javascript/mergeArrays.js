var a = [-2,3,6,8,9];
var b = [1,4,5,7,8, 8, 8];


mergeArrays(a, b);
function mergeArrays(Array1, Array2) {
	var newArray = [Array1.length + Array2.length]; //Set size of new array to the size of both arrays combined
	var a1 = 0; //counter for Array1
	var a2 = 0; //counter for Array2
	var a3 = 0; //Counter for newArray
	while (a1< Array1.length && a2 < Array2.length) {
		if (Array1[a1] < Array2[a2]) {
			newArray[a3] = Array1[a1];
			a3++;
			a1++;
		}
		else {
			newArray[a3] = Array2[a2];
			a3++;
			a2++;
		}
	}

	while (a1 < Array1.length) {
		newArray[a3] = Array1[a1];
		a3++;
		a1++;
	}

	while (a2 < Array2.length) {
		newArray[a3] = Array2[a2];
		a3++;
		a2++;
	}

	console.log(newArray);
}