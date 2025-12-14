class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    } 
}

let current = null
var isPalindrome = function(head) {
    if (!head) {
        return true
    } else if (!head.next) {
        return false
    }
    current = head;
    return reccur(head, current)
};

const reccur = (head) => {
    if (head === null ) {
        return true
    }
    const ans = reccur(head.next)
    if (current.val !== head.val) {
        return false;
    }
    current = current.next;
    return ans;
}



const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(2);
const n4 = new Node(1);
n1.next = n2; 
//n2.next = n3;
n3.next = n4;

console.log(isPalindrome(n1))