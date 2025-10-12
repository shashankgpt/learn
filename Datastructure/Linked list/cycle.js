class Node {
    constructor(v, n) {
        this.val = v
        this.next = n;
    }
}


const n1 = new Node(3)
const n2 = new Node(2);
const n3 = new Node(0);
const n4 = new Node(-4)

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n2;

var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while (slow !== null && fast!== null) {
        slow = slow.next;
        if (fast.next === null) return f
        fast = fast.next.next;
        if (slow === fast) {
            return true
        }
    }
    return false;
};

hasCycle(n1)