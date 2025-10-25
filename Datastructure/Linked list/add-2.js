class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    } 
}

const n1 = new Node(2)
const n2 = new Node(4);
const n3 = new Node(3);
n1.next = n2;
n2.next = n3

const n4 = new Node(5);
const n5 = new Node(6);
const n6 = new Node(4)
const n7 = new Node(5)
n4.next = n5;
n5.next = n6
n6.next = n7;


var addTwoNumbers = function(l1, l2) {
    let c1 = l1;
    let c2 = l2;
    let pointer = null
    let final = null;
    debugger;
    let carry = 0
    while (c1 || c2) {
        const num1 = c1?.val || 0;
        const num2 = c2?.val || 0;
        const s = num1 + num2 + carry;
        let val = s%10
        const newNode = new Node(val)
        carry =Number.parseInt(s/10)
        if (!final) {
            final = newNode
            pointer = newNode;
        } else {
            final.next = newNode
            final = final.next
        }
        if (c1) {
            c1 = c1.next
        }
        if (c2) {
            c2 = c2.next
        }
    }
    if (carry) {
        const newNode = new Node(carry)
        final.next = newNode
    }
    return pointer;
};

addTwoNumbers(n1, n4)