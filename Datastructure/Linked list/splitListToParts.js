    var splitListToParts = function(head, k) {
        let len = 0;
        let current = head;
        while (current) {
            len++;
            current = current.next;
        }

        const listNode = [];
        let currentHead = head;
        let D = k;
        while (currentHead) {
            let spilt = Math.ceil(len/D)
            let current = spilitNode(currentHead, spilt)
            len = len - spilt;
            D = D - 1;
        
            if (current) {
                let next = current.next
                current.next = null
                listNode.push(currentHead);
                currentHead = next;
            } else {
                currentHead = null
            }
        }
        while (D > 0) {
            listNode.push(null)
            D = D-1
        }
        return listNode;
    };

    const spilitNode = (head, jump) => {
        let current = head;
        let i = 1;
        while (i < jump) {
            current = current.next
            i++
        }
        return current
    }


    class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
    }

    const n1 = new ListNode(1);
    const n2 = new ListNode(2);
    const n3 = new ListNode(3);
    const n4 = new ListNode(4);
    const n5 = new ListNode(5);

    n1.next = n2;
    n2.next = n3;
    // n3.next = n4;
    n4.next = n5;

    console.log(splitListToParts(n1, 5))
