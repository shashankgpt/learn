function missing(arr, n) {
    const obj = {}
    for (let i=0;i<arr.length;i++) {
        obj[arr[i]] = 1
    }
    console.log(obj)
    for (let i=0;i<n;i++ ){
        if (!obj[i+1]) {
            return (i+1);
        }
    }
    return null
}