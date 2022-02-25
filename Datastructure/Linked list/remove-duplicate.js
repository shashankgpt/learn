// Remove all occurrences of duplicates from a sorted Linked List

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(23);
const node2 = new Node(28);
const node3 = new Node(28);
const node4 = new Node(35);
const node5 = new Node(49);
const node6 = new Node(49);
const node7 = new Node(53);
const node8 = new Node(53);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

const removeDuplicate = (head) => {
    let current = head;
    let prev = null;
    while(current) {
        if (current.next && current.data == current.next.data) {
            if (prev) {
                prev.next = current.next.next;
            } else {
                head = current.next.next;
            }
            current = current.next.next;
        } else {
            prev = current;
            current = current.next;
        }
    }
    return head;
}

console.log(JSON.stringify(removeDuplicate(node1)));