function reversePolishNotation(tokens) {
    if (tokens.length === 1) {
        return Number(tokens[0]);
    } else if (tokens.length < 3) {
        return -1;
    }
  const s = [];
  debugger;
  for (let i =0;i<tokens.length;i++) {
    if (isSign(tokens[i]) & s.length > 1) {
        let v1 = s.pop()
        let v2 = s.pop()
        s.push(parseInt(cal(Number(v2), Number(v1), tokens[i]))) 
    } else {
        s.push(tokens[i])
    }
  }
  return s.pop()
}

const isSign = (val) => {
    return ['+','-', '*','/'].includes(val)
}

const cal = (v1, v2, sign) => {
    switch (sign) {
        case '+':
            return v1 + v2;
        case '-':
            return v1 - v2
        case '*':
            return v1 * v2
        case '/':
            return v1/v2
    }
}



reversePolishNotation(["50", "3", "17", "+", "2", "-", "/"]);
