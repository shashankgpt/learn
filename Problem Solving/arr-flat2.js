 function flatten(value) {
 if (!value || !Array.isArray(value)) {
  return value
 }
 let data = [];
 for (let i = 0;i<value.length;i++) {
  if (Array.isArray(value[i])) {
    data.push(...flatten(value[i]))
  } else {
    data.push(value[i])
  }
 }
 return data;
}

console.log(flatten([
  [1, 2],
  [3, 4, [5,6]],
]));