function validIPAddresses(string) {
    if (string.length < 4) {
        return []
    }
  const result = [];
  for (let i =1;i<4 && i< string.length; i++) {
    debugger;
    const part1 = string.substr(0,i)
    if (!isValidIp(part1)) {
        continue;
    }
    for (let j = i+1; j<i+4 && j< string.length;j++) {
        const part2 = string.substr(i,j-i)
        if (!isValidIp(part2)) {
            continue;
        }
        for (let k = j+1; k<j+4 && k< string.length;k++) {
            const part3 = string.substr(j, k - j)
            const part4 = string.substr(k, string.length - k)
            if (!isValidIp(part3) || !isValidIp(part4)) {
                continue;
            }
            result.push(`${part1}.${part2}.${part3}.${part4}`)
        }
    }
  }
  return result;
}

function isValidIp(ipPart) {
    return ipPart.length < 4 && Number(ipPart) < 256
}

validIPAddresses("1921680");
