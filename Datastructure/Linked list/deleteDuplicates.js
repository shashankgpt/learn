class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    } 
}

const n1 = new Node(1);
const n2 = new Node(1);
const n3 = new Node(2);
const n4 = new Node(3);
const n5 = new Node(3);
n1.next = n2;
//n2.next = n3;
n3.next = n4;
n4.next = n5

var deleteDuplicates = function(head) {
    if (!head.next) {
        return head;
    }
    let prev = head;
    let current = prev.next;
    debugger;
    while (current) {
        if (prev.val === current.val) {
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
        current = current.next;
    }
    return head
};

deleteDuplicates(n1)