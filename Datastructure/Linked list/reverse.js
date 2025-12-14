var reverseList = function(head) {
    if (!head) {
        return head
    }
    let prev = null;
    current = head;
    while (current) {
        debugger;
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev
};

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    } 
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5

console.log(JSON.stringify(reverseList(n1)))