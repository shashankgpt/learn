function apartmentHunting(blocks, reqs) {
    const B = blocks.length;
    const R = reqs.length;
    const blk = Array.from({ length: B }, () => Array(R).fill(Infinity));

    // Left-to-right pass
    for (let i = 0; i < B; i++) {
        const pivotBlock = blocks[i];
        const v = []
        for (let j = 0; j < R; j++) {
            if (pivotBlock[reqs[j]]) {
                v.push(0)
            } else if (i > 0 && blk[i - 1][j] !== Infinity) {
                blk[i][j] = blk[i - 1][j] + 1;
            }
        }
    }

    // Right-to-left pass
    for (let i = B - 1; i >= 0; i--) {
        for (let j = 0; j < R; j++) {
            if (i < B - 1) {
                blk[i][j] = Math.min(blk[i][j], blk[i + 1][j] + 1);
            }
        }
    }

    // Finding the best block
    let index = 0;
    let minMaxDist = Infinity;

    for (let i = 0; i < B; i++) {
        let maxDist = Math.max(...blk[i]);
        if (maxDist < minMaxDist) {
            minMaxDist = maxDist;
            index = i;
        }
    }

    console.log(blk);
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
