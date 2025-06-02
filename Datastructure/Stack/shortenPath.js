function shortenPath(path) {
  let startWithSlash = false;
  if (path[0] === "/") {
    startWithSlash = true;
  }
  debugger;
  let splitedPath = path.split("/").filter((v) => v != "." && v);
  debugger;
  const stack = [];
  for (let i = 0; i < splitedPath.length; i++) {
    const ele = splitedPath[i];
    if (ele === ".." && stack.length > 0 && stack[stack.length-1] !== '..') {
      stack.pop();
    } else if (ele != '..' || ele === '..' && !startWithSlash) {
      stack.push(ele);
    }
  }
  let newPath = stack.join("/");
  return startWithSlash ? "/" + newPath : newPath;
}

shortenPath("/foo/../test/../test/../foo//bar/./baz");
