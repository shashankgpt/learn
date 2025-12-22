function printPattern1(n) {
    for (let i =0;i<n;i++) {
        for (let j=0;j<n;j++) {
            process.stdout.write('*')
        }
        console.log('')
    }
}

//printPattern1(4);

function pattern2(n) {
    for (let i=0;i<n;i++) {
        let row = '';
        for (let j=0;j<=i;j++) {
            row += '*' 
        }
        console.log(row)
    }
}

// pattern2(4)

function pattern3(n) {
    for (let i =0;i<n;i++) {
        let row = '';
        for (let j=0;j<=i;j++) {
            row += ' ' + (j + 1)
        }
        console.log(row)
    }
}

// pattern3(5)


function pattern4(n) {
    for (let i =0;i<n;i++) {
        let row = '';
        for (let j=0;j<=i;j++) {
            row += ' ' + (i + 1)
        }
        console.log(row)
    }
}

// pattern4(5)

function pattern6(n) {
    for (let i =0;i<n;i++) {
        let row = '';
        for (let j =0; j<n-i;j++) {
            row += '' + (j+1)
        }
        console.log(row)
    }
}

//pattern6(5)

function pattern7(n) {
    for (let i =0;i<n;i++) {
        let row = '';
        for (let j =0; j<n-i;j++) {
            row += '*'
        }
        console.log(row)
    }
}

// pattern7(5)

function pattern8(n) {
    for (let i =1;i<n+1;i++) {
        let row = '';
        for (let j =n; j>0;j--) {
            if (i >= j) {
                row += '*'
            } else {
                row += ' '
            }
        }
        console.log(row)
    }
}

// pattern8(5)


function pattern9(n) {
    for (let i =0;i<n;i++) {
        let row = '';
       for (let j =0;j<=i;j++) {
        row += ' ' + (j%2 === 0 ? '1': '0')
       }
        console.log(row)
    }
}

// pattern9(6)

function pattern9(n) {
    let val = 0;
    for (let i =0;i<n;i++) {
        let row = '';
       for (let j =0;j<=i;j++) {
        val = val === 1 ? 0: 1
        row += ' ' + (val)
       }
        console.log(row)
    }
}

pattern9(6)