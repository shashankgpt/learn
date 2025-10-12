var middleNode = function(head) {
    let slowerPointer = head
    let fastPointer = head
    debugger;
    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next
        slowerPointer = slowerPointer.next
    }
    const a = []
    while (slowerPointer) {
        a.push(slowerPointer.val)
        slowerPointer = slowerPointer.next
    } 
};

class Node {
    constructor(v, n) {
        this.val = v
        this.next = n;
    }
}


function createListFromArray(a = [1,2,3,4,5]) {
    let last = null
    for (let i =a.length-1;i>-1;i--) {
        const n = new Node(a[i], last)
        last = n
    }
    return last;
} 

console.log(middleNode(createListFromArray()))