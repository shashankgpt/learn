// Remove duplicates from an unsorted linked list

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(4);
const node4 = new Node(3);
const node5 = new Node(4);
const node6 = new Node(2);
const node7 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
const head = node1;


const removeDuplicate = () => {
    const data = {
        [head.data]: 1
    };
    let prevPointer = head;
    let nextPointer = head.next;
    while(nextPointer !== null) {
       
        if(data[nextPointer.data]) {
            prevPointer.next = nextPointer.next
            nextPointer = nextPointer.next; // previous won't change after swap
            continue;
        }
        data[nextPointer.data] = 1;
        prevPointer = nextPointer;
        nextPointer = nextPointer.next
        
    }
}
console.log(JSON.stringify(head))
removeDuplicate()
console.log(JSON.stringify(head))