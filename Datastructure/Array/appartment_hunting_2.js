function apartmentHunting(blocks, reqs) {
    const obj = {};
    for (let i =0;i<reqs.length;i++) {
        const d = []
        for (let j=0;j<blocks.length;j++) {
            if (blocks[j][reqs[i]]) {
                d.push(j)
            }
        }
        obj[reqs[i]] = d
    }
    debugger;

    const blk = [];
    for (let i = 0;i<blocks.length;i++) {
        const pivotBlock = blocks[i];
        const v = []
        for (let j =0;j<reqs.length;j++) {
            if (pivotBlock[reqs[j]]) {
                v.push(0)
            } else {
                let values = obj[reqs[j]]
                let min = Math.abs(values[0] - i)
                for (let k =1;k<values.length;k++) {
                    if (min > Math.abs(values[k] - i)) {
                        min = Math.abs(values[k] - i)
                    }
                }

                v.push(min)
            }
        }
        blk.push(v)
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
    return index;
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
