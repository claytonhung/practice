var array = [[4,5], [12,5], [14,7]];
var array2 = [[12, 5], [15, 8]];

var startDay = 10;
var endDay = 20;
var day = 0;
var miles = 0;
var totalMiles = [];

function getMiles (inputArray, startDay, endDay) {

	for (var i = 0; inputArray.length > i; i++) {
		day = inputArray[i][0];
		miles = inputArray[i][1];

		if (day < startDay || day > endDay) {
			continue;
		}


	}
	console.log(totalMiles);
}

getMiles(array, startDay, endDay);
getMiles(array2, startDay, endDay);
