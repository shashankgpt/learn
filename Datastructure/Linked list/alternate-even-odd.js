class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    }
}

let node1 = new Node(17);
const node2 = new Node(15);
const node3 = new Node(8);
const node4 = new Node(12);
const node5 = new Node(10);
const node6 = new Node(5);
const node7 = new Node(4);
const node8 = new Node(1);
const node9 = new Node(7);
const node10 = new Node(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;


let isEven = false;

const alternateEvenOddList = (head) => {
    let current = head;
    let prev = null;
    while(current && current.next !== null) {
        if(!(current.data % 2) === isEven) {
            isEven = !isEven;
            prev = current;
            current = current.next;
        } else {
           const newListData = skipNode(current, !isEven);
           prev.next = newListData[1];
           current = newListData[1];
        }
    }
    return head;
}

const skipNode = (node, removeType) => {
    const list = node;
    let current = node;
    let prev = null;
    while(current && current.next !== null) {
        if(!(current.data % 2) === removeType) {
            prev = current;
            current = current.next;
            continue;
        }
        prev.next = current.next;
        current.next = list;
        return [list, current]
    }
}

console.log(JSON.stringify(alternateEvenOddList(node1)));