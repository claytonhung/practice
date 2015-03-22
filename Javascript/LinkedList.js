//Basics

//2.1 Write code to remove duplicates from an unsorted linked list

function LinkedList() {
	this.next = null;
}

LinkedList.prototype.put = function(value) {
	var node = {
		value: value,
		next: null
	}
	if (!this.head) {
		this.head = node;
	} else {
		current = this.head;
		while(current.next) {
			current = current.next;
		}
		current.next = node;
	}
};

var LinkedList = new LinkedList();

// LinkedList.put(3);
// LinkedList.put(4);
// LinkedList.put(50);
// console.log(LinkedList);




    // now we can read/parse input
    // input = input.split("\n");
    //     //Check if the length of the string matches
    // //If the length doesnt match, then they won't be anagrams for sure
    // if (input[0].length === input[1].length) {
    //     string1 = input[0].split();
    //     string2 = input[1].split();
        
    //     if (string1.sort().toString() === string2.sort().toString()) {
    //         console.log("Anagrams!");
    //     }
    // } else {
    //     console.log("Not anagrams!");
    // }



