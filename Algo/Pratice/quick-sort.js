const parition = (a, p, r) => {
    const pivot = a[Math.floor((p+r)/2)];
    let i =p; 
    let j=r;
    while (i<=j) {
        while (a[i]> pivot) {
            i++;
        }
        while (a[j]< pivot) {
            j--;
        }

        if (i<=j) {
            [a[i], a[j]] = [a[j], a[i]];
            i++;
            j--;
        }
    }
    return i;
};

const quickSort = (arr, p, r) => {
    if (p<r) {
        const pi = parition(arr, p, r);
        quickSort(arr, p, pi-1);
        quickSort(arr,pi, r);
    }
}

const arr = [45, 7, 8, 9, 80, 10, 20];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // Array after sorting