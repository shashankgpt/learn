// Add two numbers represented by linked lists | Set 2

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(5);
const node2 = new Node(6);
const node3 = new Node(3);

const node4 = new Node(9);
const node5 = new Node(9);
const node6 = new Node(5);
const node7 = new Node(9);
const node8 = new Node(6);

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;


let carry = 0;
let newNode = null;

const calculateLength = (n,m) => {
    let i = 0;
    let head = n;
    while(head) {
        i = i +1;
        head = head.next;
    }

    let j = 0;
    head = m;
    while(head) {
        j = j +1;
        head = head.next;
    }
    return [i, j]
}

const computeSum = (n, m) => {
    if (n === null)
    return;

    computeSum(n.next, m && m.next ? m.next : new Node(0))
    const sum = n.data + m.data + carry;
    carry = 0
    carry = parseInt (sum / 10);
    let sumVal = sum % 10;
    const node = new Node(sumVal, newNode);
    newNode = node;
}

const traversedNode = (n, m, i, j) => {
    let head1 = n;
    let head2 = m;
    let diffNode = null;
    if (i> j) {
        let k = i - j
         while (head1 && k) {
             k = k -1;
             if (!diffNode) diffNode = new Node(head1.data) 
             else diffNode.next = new Node(head1.data) 
            head1 = head1.next;
         }
    } else if (i< j){
        let k = j - i
         while (head2 && k) {
             k = k -1;
             if (!diffNode) diffNode = new Node(head2.data) 
             else diffNode.next = new Node(head2.data) 
            head2 = head2.next;
         }
        }
        return [head1, head2, diffNode];
}

const computeFinalSum = (n, m) => {
    let [i,j] =calculateLength(n, m);
    let [head1, head2, diffNode] = traversedNode(n, m, i, j);
    computeSum(head1, head2);
    computeSum(diffNode, new Node(0));
    if (carry) {
        newNode = new Node(carry, newNode);
    }
    return newNode;
}



console.log(JSON.stringify(computeFinalSum(node1, node4)));