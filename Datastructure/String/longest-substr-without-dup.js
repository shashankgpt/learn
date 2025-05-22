function longestSubstringWithoutDuplication(string) {
  if (string.length === 1) {
    return string;
  }
  let start = 0;
  let end = 0;
  let answer = "";
  let map = {};

  while (end < string.length) {
    debugger;
    const char = string[end];
    if (map[char] > -1 && map[char] >= start) {
      answer =
        string.substr(start, end - start).length > answer.length
          ? string.substr(start, end - start)
          : answer;
      start = map[char] + 1;
    }
    map[char] = end;
    end++;
  }
  answer =
        string.substr(start, end - start).length > answer.length
          ? string.substr(start, end - start)
          : answer;
  return answer;
}

longestSubstringWithoutDuplication("abcbde");
