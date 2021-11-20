class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
head.next = node2;
node2.next = node3;

const printList = (node, arr = []) => {
    arr.push(node.data);
    if(node.next === null) {
        return arr.join('=>');
    }
    return printList(node.next, arr);
}

const insertionAtStart =(head, node) => {
    node.next = head;
    return node;
}

const node = new Node(0);
const newList = insertionAtStart(head,node);
console.log(printList(newList))