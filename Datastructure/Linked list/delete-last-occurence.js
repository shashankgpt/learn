// Delete last occurrence of an item from linked list


class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(4);
const node7 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

const deleteLastOccurence = (head, key) => {
    let current = head;
    let prev = null
    let lastOcc = [];
    while(current) {
        if (current.data === key) {
            lastOcc.push(prev)
        }
        prev = current;
        current = current.next
    }

    if(lastOcc.length > 1) {
        let prevNode = lastOcc[lastOcc.length - 1];
        prevNode.next = prevNode.next.next
    }

    return head;
}

console.log(JSON.stringify(deleteLastOccurence(node1, 4)))