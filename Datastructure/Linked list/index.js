class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.next = node2;
node2.next = node3;
let head = node1

const printList = (node, arr = []) => {
    arr.push(node.data);
    if(node.next === null) {
        return arr.join('=>');
    }
    return printList(node.next, arr);
}

const insertionAtStart =(node) => {
    node.next = head;
    head = node;
}

const insertionAtGiveNode = (prevNode, data) => {
    const node = new Node(data)
    node.next = prevNode.next;
    prevNode.next = node;
}

const insertionAtEnd = (data) => {
    const node = new Node(data);

    fetchLastNode = (node) => {
        if(node.next !== null)
        {
            return fetchLastNode(node.next)
        }
        return node 
    }
    const finalNode = fetchLastNode(head);
    finalNode.next = node;
}


const node = new Node(0);
insertionAtStart(node);
insertionAtGiveNode(node1, 1.1)
insertionAtEnd(4);
console.log(printList(head))