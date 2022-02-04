// Insertion Sort for Singly Linked List
// 30 -> 3 ->4 -> 20 -> 5 -> 9 -> 67
// 3 -> 30 
class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(99);
const node2 = new Node(3);
const node3 = new Node(4);
const node4 = new Node(20);
const node5 = new Node(5);
const node6 = new Node(9);
const node7 = new Node(67);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
let head = node1;

const sort = (head) => {
    let pivot = head.next;
    let last = head;
    while(pivot) {
        let start = null;
        let current = head;
        while(current != pivot) {
            if(pivot.data < current.data){
                last.next = pivot.next;
                pivot.next = current
                if (start) {
                    start.next = pivot;
                } else {
                    start = pivot;
                    head = pivot;
                }
                break;
            }
            start = current;
            current = current.next;
        }
        last = pivot;
        pivot = pivot.next;
    }

    return head;
}

console.log(JSON.stringify(sort(head)));