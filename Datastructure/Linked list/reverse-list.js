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
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const reverseList = () => {
    let h = node1;
    let newList= null;
    while(h) {
        const data = h.data;
        const newNode = new Node(data);
        newNode.next = newList;
        newList = newNode;
        h = h.next;
    }
    return newList;
}

const reverseListRecursive = (h,newList) => {
    const data = h.data;
        const newNode = new Node(data);
        newNode.next = newList;
        newList = newNode; 
        h = h.next;
        if (h) {
            return reverseListRecursive(h, newList)
        }
        return newList;
    
}

const reverseListRecursiveWithZeroSpaceComplexity = () => {
   let prev = null;
   let current = node1;
   let nextNode =null;

   while(current) {
    nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
   }
   return prev;
}

console.log(JSON.stringify(reverseListRecursiveWithZeroSpaceComplexity()));
// console.log(JSON.stringify(reverseListRecursive(node1, null)))
// console.log(JSON.stringify(reverseList()));