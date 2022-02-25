// Partitioning a linked list around a given value and keeping the original order


class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(1);
const node2 = new Node(4);
const node3 = new Node(2);
const node4 = new Node(10);
node1.next = node2;
node2.next = node3;
node3.next = node4;

const paritioning = (head, pivot) => {
    let startListHead = null;
    let startList = null;

    let middleListHead = null;
    let middle = null;

    let endListHead = null;
    let endList = null;

    let current = head;
    while(current) {
        const node = new Node(current.data);
        if (current.data < pivot) {
            if (startListHead) {
                startList.next = node
                startList = startList.next;
            } else {
                startList = node
                startListHead = node;
            }
        } else if (current.data === pivot) {
            if (middleListHead) {
                middle.next = node
                middle = middle.next;
            } else {
                middle = node
                middleListHead = node;
            }
        } else {
            if (endListHead) {
                endList.next = node
                endList = endList.next;
            } else {
                endList = node
                endListHead = node;
            }
        }
        current = current.next;
    }

    if(startList && middle) {
        startList.next = middleListHead;
    } else if(startList && endList) {
        startList.next = endListHead;
    }
    
    if(middle && endList) {
        middle.next = endListHead;
    }
    return startListHead
}

console.log(JSON.stringify(paritioning(node1, 3)));