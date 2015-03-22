var arr = [0,1,2,3,4,5,6,7,8,9,10];
var x = 5;
var a = 4;
var b = 10;

foobar(arr,x,a,b);

function foobar(arr, x, a, b) {
	var mid = parseInt((a+b) /2);
	console.log(mid);

	if (arr[mid] > x) {
		console.log("greater");
		return foobar(arr, x, a, mid-1);
	  } else if(arr[mid] < x) {
	  	console.log("lower");
	    return foobar(arr, x, mid+1, b);
	  } else {
	    console.log(mid);// mid;
	  }
}


// int foobar(int[] arr, int x, int a, int b){
//   int mid = (a + b) / 2;

//   if(arr[mid] > x) {
//     return foobar(arr, x, a, mid-1);
//   } else if(arr[mid] < x) {
//     return foobar(arr, x, mid+1, b);
//   } else {
//     return mid;
//   }
// }