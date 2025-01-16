const a = [10, 10, 10]

const findSecondLargest = () => {
    if (a.length < 1) return -1;
    const newArray = Array.from(new Set(a));
    if (newArray.length < 2 ) return -1
    let largest = newArray[0] > a[1] ? a[0] : a[1];
    let second  = newArray[0] > a[1] ? a[1] : a[0]

    for (let i = 2; i< newArray.length;i++) {
        const item = newArray[i];
        if (item > largest) {
            largest = item
        } else if (item > second) {
            second = item
        }
    }
    return second;
}

findSecondLargest()