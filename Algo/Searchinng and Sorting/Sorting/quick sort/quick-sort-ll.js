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
    if (start == end || start == null || end == null)
        return start;

    var pivot_prev = start;
    var curr = start;
    var pivot = end.data;

    // iterate till one before the end,
    // no need to iterate till the end
    // because end is pivot
    while (start != end) {
        if (start.data < pivot) {
            // keep tracks of last modified item
            pivot_prev = curr;
            var temp = curr.data;
            curr.data = start.data;
            start.data = temp;
            curr = curr.next;
        }
        start = start.next;
    }

    // swap the position of curr i.e.
    // next suitable index and pivot
    var temp = curr.data;
    curr.data = pivot;
    end.data = temp;

    // return one previous to current
    // because current is now pointing to pivot
    return pivot_prev;
}

const findEnd = (head) => {
    let end = head;
    while (end.next) {
        end = end.next
    }
    return end;
}

const sort = (start, end) => {
    if (start == null || start == end || start == end.next) {
        // console.log('ok', start, end)
        return;
    }
    const lastPart = partition(start, end);
    sort(start, lastPart)
    sort(lastPart.next, end)
    return start;
}

const end = findEnd(node1);
sort(node1, end);

console.log(JSON.stringify(node1))