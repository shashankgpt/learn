function sweetAndSavory(dishes, target) {
    const sweet = dishes.filter((val) => val < 0).sort((a,b) => b -a);
    const savory = dishes.filter((val) => val > 0).sort((a,b) => a -b);
    let sweetIndex = 0;
    let savoryIndex = 0;
    let data = [0, 0]
    debugger;
    if (sweet.length === 0 || savory.length === 0) {
        return data
    }
    while (sweetIndex < sweet.length && savoryIndex < savory.length) {
        let sum = sweet[sweetIndex] + savory[savoryIndex];
        if (sum === target) {
            return [sweet[sweetIndex], savory[savoryIndex]]
        } else if (sum < target) {
            let newS = sweet[sweetIndex] + savory[savoryIndex]
            if (newS > data[0] + data[1] || data[0] === 0) data = [sweet[sweetIndex], savory[savoryIndex]]
            savoryIndex++
            
        } else {
            sweetIndex++
        }
    }
    return data
}

sweetAndSavory([2, 4, -4, -7, 12, 100, -25], -1)