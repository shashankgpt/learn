// Detect loop in a linked list
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    } 
}



var deleteDuplicates = function(head) {
    if (!head || head.next == null) {
        return head
    }
    let prev = null;
    let current = head;
    while (current !== null) {
        if (current.next && current.val === current.next.val) {
            const val = current.val
            current = current.next;
            while (current!==null && current.val === val) {
                current = current.next;
            }
            if (prev) {
                prev.next = current;
            } else {
                head = current;
            }
        } else {
            prev = current
            current = current.next;
        }
    }
    return head;
};

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(3);
const n5 = new Node(4);
const n6 = new Node(4);
const n7 = new Node(5)
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
console.log(JSON.stringify(deleteDuplicates(n1)));