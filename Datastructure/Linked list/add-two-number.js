// Add two numbers represented by linked lists

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    }
}


let node1 = new Node(5);
const node2 = new Node(6);
const node3 = new Node(3);
const node4 = new Node(8);
const node5 = new Node(4);
const node6 = new Node(2);

const node7 = new Node(4)
const node8 = new Node(6)


node1.next = node2;
node2.next = node3;
//node3.next = node7;
// node7.next = node8;
node4.next = node5;
node5.next = node6;

let head;
let current;
let carry = 0;
const addNumber = (num1, num2) => {
    if (num1 === null || num2 === null) {
        return;
    }
    addNumber(num1.next, num2.next);
    const sum = num1.data + num2.data + carry;
    console.log(sum, num1.data, num2.data);
    carry = 0;
    const node = new Node(sum % 10);
    carry = parseInt(sum / 10)
    if (!head) {
        head = node;
        current = node;
    } else if(current) {
        current.next = node;
        current = current.next;
    }
    return head;    
}

const equaliseNode = (node1, node4) => {
    let len1 = 0;
    let current1 = node1 
    while(current1.next) {
        len1 += 1;
        current1 = current1.next;
    }

    // console.log(current1);
    let len2 = 0;
    current2 = node4 
    while(current2.next) {
        len2 += 1;
        current2 = current2.next;
    }

    console.log(len1, len2);

    if (len1 === len2) {
        return [node1, node4];
    } else if (len1 > len2) {
        const len = len1 - len2;
        for (let i =0 ;i< len;i++) {
            const node = new Node(0);
            node.next = node4
            node4 = node;
        }
       
    } else {
        const len = len2 - len1;
        for (let i =0 ;i< len;i++) {
            const node = new Node(0);
            node.next = node1
            node1 = node;
        }
        
    }
    return [node1, node4];
}

let newListHead;
let newListCurrent;
const revereNode = (head) => {
    if(!head) {
        return
    }
    revereNode(head.next);
    const node = new Node(head.data);
    if (!newListHead) {
        newListHead = node;
        newListCurrent = node;
    } else if(newListCurrent) {
        newListCurrent.next = node;
        newListCurrent = newListCurrent.next;
    }
    
}
console.log(JSON.stringify(node1), JSON.stringify(node4));
const [head1, head4] = equaliseNode(node1, node4);
console.log(JSON.stringify(head1), JSON.stringify(head1));
addNumber(head1, head4);
if(carry) {
current.next = new Node(carry);
}
console.log(JSON.stringify(head));
revereNode(head);
console.log(JSON.stringify(newListHead));