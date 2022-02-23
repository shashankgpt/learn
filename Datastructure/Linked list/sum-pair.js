// Find pair for given sum in a sorted singly linked without extra space

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(3);
const node2 = new Node(6);
const node3 = new Node(7);
const node4 = new Node(8);
const node5 = new Node(9);
const node6 = new Node(10);
const node7 = new Node(11);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

const getPair = (head, sum) => {
    let current1 = head;
    while(current1) {
        let current2 = current1.next;
        while(current2) {
            let sum1 = current1.data + current2.data
            if(sum1 === sum) {
                console.log(current1.data, current2.data);
            }
            current2 = current2.next;
        }
        current1 = current1.next;
    }
}

getPair(node1, 17)