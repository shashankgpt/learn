function apartmentHunting(blocks, reqs) {
    const blk = blocks.map((b) => {
        const d = []
        reqs.forEach(element => {
            d.push(b[element] ? 0 : null)
        });
        return d;
    })
    for (let i =0;i<blk.length;i++) {
        const pivot = blk[i];
        for (let j = i+1;j<blk.length;j++) {
            for (let k =0;k<pivot.length;k++) {
                if (blk[j][k] !== null && (pivot[k] === null || pivot[k] > j)) {
                    pivot[k] = j - i
                }
            }
        }
    }

    for (let i =blk.length-1;i>-1;i--) {
        const pivot = blk[i];
        for (let j = i-1;j>-1;j--) {
            for (let k =0;k<pivot.length;k++) {
                if (blk[j][k] !== null && blocks[j][reqs[k]] && (pivot[k] === null || pivot[k] > i -j) ) {
                    pivot[k] =  i -j
                }
            }
        }
    }

    let sum = blk[0].reduce((a,b) => a +b, 0)
    let maxVal = Math.max(...blk[0])
    let index = 0
    debugger;

    for (i = 1;i<blk.length;i++) {
        if (maxVal > Math.max(...blk[i])) {
            maxVal =  Math.max(...blk[i])
            sum = blk[i].reduce((a,b) => a +b, 0)
            index = i
        }
    }

    console.log(blk)

    return index
}

apartmentHunting(
    [
        {
          "gym": true,
          "office": false,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": true,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": true,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": true
        },
        {
          "gym": true,
          "office": true,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": true,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": false,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": false,
          "school": true,
          "store": false
        },
        {
          "gym": false,
          "office": false,
          "pool": true,
          "school": false,
          "store": false
        }
      ],
  ["gym", "pool", "school", "store"]
);

