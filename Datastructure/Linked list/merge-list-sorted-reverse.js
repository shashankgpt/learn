// Merge two sorted linked lists such that merged list is in reverse order

// Recursive function to print reverse of a Linked List

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(5);
const node2 = new Node(10);
const node3 = new Node(15);
const node4 = new Node(40);
node1.next = node2;
node2.next = node3;
node3.next = node4;

const list1 = node1;

const node5 = new Node(2);
const node6 = new Node(3);
const node7 = new Node(20);
node5.next = node6;
node6.next = node7;

const list2 = node5;
console.log(JSON.stringify(list1))
console.log(JSON.stringify(list2))

const mergeListReverse = (nodeList1, nodeList2)  => {
    let newList = null;
    while(nodeList1 || nodeList2) {
        const data1 = nodeList1 && nodeList1.data ? nodeList1.data : Infinity;
        const data2 = nodeList2 && nodeList2.data ? nodeList2.data : Infinity;
        if(data1 > data2) {
            let node = new Node(nodeList2.data, newList)
            nodeList2 = nodeList2.next;
            newList = node;
        } else {
            let node = new Node(nodeList1.data, newList)
            nodeList1 = nodeList1.next;
            newList = node;
        }
    }
    return newList;
}

console.log(JSON.stringify(mergeListReverse(list1, list2)));