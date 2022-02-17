// Point to next higher value node in a linked list with an arbitrary pointer

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
        this.arbit = null
    }
}
const node1 = new Node(5);
const node2 = new Node(10);
const node3 = new Node(2);
const node4 = new Node(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;

const createArbit = (head) => {
    let current = head;
    const nodeList = [];

    while(current) {
        nodeList.push(current);
        current = current.next;
    }
    nodeList.sort((a,b) => a.data - b.data);
    nodeList.forEach((_node, i) => {
        nodeList[i].arbit = nodeList[i+1];
    })
    current = nodeList[0];
    while(current) {
        console.log(current.data);
        current = current.arbit
    }
    return head;
}

const createArbit = (head) => {
    let current = head;
    const nodeList = [];

    while(current) {
        nodeList.push(current);
        current = current.next;
    }
    nodeList.sort((a,b) => a.data - b.data);
    nodeList.forEach((_node, i) => {
        nodeList[i].arbit = nodeList[i+1];
    })
    current = nodeList[0];
    while(current) {
        console.log(current.data);
        current = current.arbit
    }
    return head;
}

// createArbit(node1);