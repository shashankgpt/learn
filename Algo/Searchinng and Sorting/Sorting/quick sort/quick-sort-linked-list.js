class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    }
}

const node1 = new Node(45);
const node2 = new Node(100);
const node3 = new Node(110);
const node4 = new Node(90);
const node5 = new Node(40);
const node6 = new Node(50);
const node7 = new Node(70);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

const partition = (start, end) => {
    let current = start;
    let prev = start
    let lastPivot = start;
    while(lastPivot && lastPivot.next !== end) {
        lastPivot = lastPivot.next
    }
    const pivoit = end.data;
    console.log("piv", pivoit);
    const stopper = end;
    while (current !== stopper) {
        if (pivoit < current.data) {
            const next = current.next;
            current.next = null
            end.next  = current;
            end = end.next
            prev.next = next;
            current = next;
        } else {
            prev = current;
            current = current.next
        }
        
    }
    // console.log(JSON.stringify(start));
    return lastPivot;
}
//console.log(JSON.stringify(node1));
const part = partition(node1, node7);
console.log(JSON.stringify(node1),part, '\n');

const part2 = partition(part.next, node7.next.next.next);
console.log(JSON.stringify(node1),part2, '\n')
