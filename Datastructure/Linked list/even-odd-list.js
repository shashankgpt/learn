// Segregate even and odd nodes in a Linked List and keep the order same

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

const separateEvenOdd = () => {
    let last = node1;
    let listLen = 0
    while(last.next !== null) {
        last = last.next;
        listLen +=1;
    }
    let current = node1;
    let prev = null;
    let i = 0;
    while(current && current.next !== null && i< listLen) {
        i = i+1;
        if(current.data % 2 !== 0) {
            let addedToLast = current;
            if(prev && prev.next) {
                // deleting the node
                prev.next = current.next;
            } else {
                // node to be remove
                node1 = node1.next;
            }
            current = current.next;
            // adding to last (it will update current as well)
            addedToLast.next = null;
            last.next = addedToLast;

            // updating last
            last = last.next;
            
        } else {
        prev = current;
        current = current.next;
        }
    }
    console.log(JSON.stringify(node1));
}


const separateEvenByTwoListWay = () => {
    let current = node1;
    let prev = null;
    let newList = null;
    let nexter = null;
    while(current && current.next !== null) {
        if(current.data % 2 !== 0) {
            const currentNode = current;
            if(prev) {
            prev.next = current.next;
            } else {
                node1 = current.next;
            }
            current = current.next;
            currentNode.next = null;
            if(!newList) {
            newList = currentNode;
            nexter = currentNode;
            } else {
                nexter.next = currentNode;
                nexter = nexter.next;
            }
        } else {
            prev = current;
            current = current.next;
        }

    }
    current.next = newList; 
    console.log(JSON.stringify(node1));
}
separateEvenByTwoListWay();
// separateEvenOdd();