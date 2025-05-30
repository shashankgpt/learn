function longestBalancedSubstring(string) {
    if (string.length < 2) {
        return 0;
    }
    const stack = [
      {
        value: string[0],
        index: 0,
      },
    ];
    const result = [];
  debugger;
    for (let i = 1; i < string.length; i++) {
      if (string[i] === ")" && stack.length > 0) {
        const { value, index } = stack[stack.length - 1];
        if (value === "(") {
          result.push([index, i]);
          stack.pop()
          continue;
        }
      }
      stack.push({
        value: string[i],
        index: i,
      });
    }
    if (result.length === 0) {
        return 0
    } else if (result.length === 1) {
        return 2
    }
    const final = [result[result.length-1]];
    for (let i =result.length-2;i>=0;i--) {
        if (final[final.length-1][0] < result[i][0]) {
            continue
        } else if (final[final.length-1][0]-1 === result[i][1]) {
            final[final.length-1][0] = result[i][0]
        } else {
            final.push(result[i])
        }
    }

    return Math.max(...final.map((v) => {
        const a = (v[1] - v[0]) + 1
        return a
    }))
    
  }
  
  longestBalancedSubstring("())()(()())");
  