// Sort a linked list of 0s, 1s and 2s

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    } 
}

const node1 = new Node(1);
const node2 = new Node(1);
const node3 = new Node(2);
const node4 = new Node(1);
const node5 = new Node(0);
//const node6 = new Node(0);
// const node7 = new Node(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// node5.next = node6;
// node6.next = node7;

const sort = (head) => {
    let list1 = null;
    let list2 = null;
    let list3 = null;
    let current = head;

    while(current) {
        if (current.data === 0) {
            list1 = new Node(0,list1);
        } else if (current.data === 1) {
            list2 = new Node(1,list2);
        } else if (current.data === 2) {
            list3 = new Node(2,list3);
        }
        current = current.next;
    }

    current = list1;
    while(current) {
        if (current.data === 0 && current.next === null) {
            current.next = list2;
        } else if (current.data === 1 && current.next === null){
            current.next = list3;
        }
        current = current.next;
    }
    console.log(JSON.stringify(list1));
   return list1;
}

const sort2 = (head) => {
const arr = [];
let current = head;

while(current) {
   arr.push(current.data);
   current = current.next;
}
arr.sort();
let list = null;
for(let i =arr.length -1; i >= 0;i--) {
    list = new Node(arr[i], list)
}
console.log(JSON.stringify(list));
return list;
}

sort2(node1);