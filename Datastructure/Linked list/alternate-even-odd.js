class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    }
}

let node1 = new Node(10);
const node2 = new Node(1);
const node3 = new Node(2);
const node4 = new Node(3);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;



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
           if (prev) {
           prev.next = newListData[1];
           } else {
               head = newListData[1];
           }
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

const alternateEvenOddListWay2 = (node) => {
    let current = node;
    let evenList = 0;
    let evenListPointer = null;
    let oddList = 0;
    let oddListPointer = null;
    while(current) {
        const nexter = current.next;
        current.next = null;
        if((current.data % 2) === 0) { 
            if(evenList === 0) {
                evenList = current;
                evenListPointer = current;
            } else {
                evenListPointer.next = current;
                evenListPointer = evenListPointer.next;
            }
        } else {
            if (oddList === 0) {
                oddList = current;
                oddListPointer = current;
            } else {
                oddListPointer.next = current;
                oddListPointer = oddListPointer.next;
            }
        }
        current = nexter;
    }
    return combineList(evenList, oddList)
}
const combineList = (evenList, oddList) => {
    let oddListPointer = oddList.next;
    let evenListPointer = evenList;
    oddList.next = null;
    let list = oddList;
    let current = oddList;

    while(oddListPointer || evenListPointer) {
        const oddListNexter = oddListPointer ? oddListPointer.next: null;
        const evenListNexter = evenListPointer ? evenListPointer.next: null;
        if (oddListPointer) {
        oddListPointer.next = null;
        }
        if(evenListPointer) {
        evenListPointer.next = oddListPointer;
        }
        current.next = evenListPointer;
        current = oddListPointer;
        oddListPointer = oddListNexter;
        evenListPointer = evenListNexter;
    }
    return list;
}


// console.log(JSON.stringify(alternateEvenOddListWay2(node1)));