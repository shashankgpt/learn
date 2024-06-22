class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(64);
const node2 = new Node(25);
const node3 = new Node(12);
const node4 = new Node(22);
const node5 = new Node(11);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const selectionSort = (head, result = null) => {
    if (head.next === null) {
        head.next = result;
        return head;
    }
    let current = head;

    let largestPrev = null;
    let largest = head;
    while(current.next) {
        if(largest.data < current.next.data) {
            largestPrev = current;
            largest = current.next;
        }
        current = current.next;
    }
    
    if (largestPrev) {
    largestPrev.next = largest.next;
    } else {
        head = head.next
    }
    largest.next = result;
    return selectionSort(head, largest)
}

console.log(JSON.stringify(selectionSort(node1)));