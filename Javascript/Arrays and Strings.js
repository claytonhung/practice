//1.1 Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// uniqueCharacters("habuiqyerta");
// reverse("hello");
// stringPermutation("word1", "1wrod");
// spaceReplacement("This is Clayton and im trying this to test");
// stringCompression("aabccccccaaa");

function uniqueCharacters(string) { //Time Complexity O(n^2), Space Complexity O(1)
	var word = [];
	word = string;
	var length = string.length;
	var unique = 1;

	if (length === 0 || length === 1) {
		unique = 1;
	}

	for (var i = 0; length > i ; i++) {
		var letter = word[i];
		
		if (unique === 0) {
			break;
		}

		for (var j = 0; length >j ; j++) {
			if (i == j) {
				continue;
				
			}

			if (letter === word[j]) {
				unique = 0;
				break;
			}
		}
	}

	var result = (unique === 1) ? "string is unique" : "string is not unique";
	console.log(result);

}

//1.2 Implement a function which reverses a null-terminated string

function reverse(string) {
	var newWord = "";
	var length = string.length;
	
	for (var i = length-1; i >= 0; i--) {
		newWord += string[i];
		
	}
	console.log(newWord);
}

//1.3 Given two strings, write a method to decide if one is a permutation of the other

function stringPermutation(string1, string2) {
	var word1 = [];
	var word2 = [];

	//First check if the length of two words match
	if (string1.length === string2.length) {

		word1 = string1.split('');
		word2 = string2.split('');
		console.log(word1);
		console.log(word2);

		//Sort the two arrays and check if theyre the same
		if (word1.sort().toString() === word2.sort().toString()) {

			console.log("string is permutation");
		} else { console.log("string is not a permutation")}
	} else {
		console.log("string is not a permutation");

	}
}

//1.4 Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end of the string
//to hold the additional characters, and that you are given the "true" length of the string.

function spaceReplacement(string) {
	var length = string.length;
	var newString = ""; 

	for (var i = 0; i < length; i++) {
		if (string[i] === " ") {
			newString += '%20';
		} else {
			newString += string[i];
		}
	}

	console.log(newString);

}

//1.5 Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabccccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string your method should return the original string.

function stringCompression(string) {
	var newWord = "";
	var length = string.length;

	for (var i=0 ;length > i; i++) {
		var letter = string[i];
		var count = 0;

		for (var j=0; length > j; j++) {
			if (letter === string[j]) {
				count++;
			}
			string.splice(j, 1);
		}

		newWord += letter;
		newWord += count;
		count = 0;
	}
}


//1.6 Given an image represented by an NxN matrix, where each pixel n the image is 4 bytes, write a method to rotate the 
// image by 90 degrees Can you do this in place?

function imageRotation(x, y) {
// x is the x-direction length of image
// y is the y-direction length of image

for(var i = 0; x > i; i++) {
	for (var j = 0; y >j; j++) {
		image[i + 2, j] = image [i, j];
		image[i+2, j +2] = image [i+2, j];
		image[i, j + 2] = image [i+2, j+2];
		image[i, j] = image [i, j + 2];
	}
}
}

//1.8 Assume you have a method isSubString which checks if one word is a substring of another. Given two strings, s1 and s2,
// write code to check if s2 is a rotation of s1 using only one call to isSubString

function isSubstring(string1, string2) {

}


function colourCheck(balls) {
	var len = balls.length;
	var p1 = 0;
	var p2 = len - 1;

	if (balls[p1] == 'B' && balls[p2] == 'R') {
		swap
	}

	if (balls[p1] == 'R') {
		p1 += 1;
	}
	if (balls[p2] == 'B') {
		p2 -= 1;
	}


}

console.log(Fib(6));

function Fib(n) {
	if (n == 1)
		return 1;
	else if (n == 0) 
		return 0;
	else return(Fib(n-1) + Fib(n-2))


		input = input.split("\n");
}