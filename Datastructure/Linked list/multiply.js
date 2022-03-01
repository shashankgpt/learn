// Multiply two numbers represented by Linked Lists

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(9);
const node2 = new Node(4);
const node3 = new Node(6);
const node4 = new Node(8);
const node5 = new Node(4);

node1.next = node2;
node2.next = node3;

node4.next = node5;

const multiply = (head1, head2) => {
    let num1 = '', num2='';
    let current = head1;
    while(current) {
        num1 += current.data;
        current = current.next
    }

    current = head2
    while(current) {
        num2 += current.data;
        current = current.next;
    }

    return Number(num1) * Number(num2)

}

console.log(multiply(node1, node4))