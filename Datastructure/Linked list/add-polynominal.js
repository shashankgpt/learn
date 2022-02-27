// Adding two polynomials using Linked List

class Node {
    constructor(val, pow, next = null) {
        this.data = val;
        this.pow = pow
        this.next = next;
    }
}

const node1 = new Node(5, 3);
const node2 = new Node(4, 2);
const node3 = new Node(2, 0);

node1.next = node2;
node2.next = node3;

const node4 = new Node(5, 1);
const node5 = new Node(-5, 0);
node4.next = node5;

const add = (head1, head2) => {
    let listStart = null;
let list = null;
let list1 = head1;
let list2 = head2;
while(list1 || list2) {
    let node;
if (list1.pow === list2.pow) {
    node = new Node(list1.data + list2.data, list1.pow);
    list1 = list1.next;
    list2 = list2.next;
} else if(list1.pow > list2.pow) {
    node = new Node(list1.data, list1.pow);
    list1 = list1.next; 
} else {
    node = new Node(list2.data, list2.pow);
    list2 = list2.next;
}
if (listStart) {
    list.next = node;
    list = list.next
} else {
    list = node;
    listStart = node;
}
}

return listStart;
}

console.log(JSON.stringify(add(node1, node4)))