function deepClone(obj) {
    if (!obj ||  typeof obj !== 'object') {
        return obj
    }

    const newObj = Array.isArray(obj) ? []: {};
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key])
        }
        
    }
    return newObj
}

