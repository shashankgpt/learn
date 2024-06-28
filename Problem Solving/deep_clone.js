function deepClone(obj) {
    if (!obj || typeof obj !== 'object') {
        return obj
    }

    const newObj = Array.isArray(obj) ? []: {}
    for (const key in obj) {
        newObj[key] = deepClone(obj[key])
    }
    return newObj;
}

const a = {
    name: 'shashank',
    address: {
        city: 'Ghaziabad',
        country: 'India'
    }
}

const b = deepClone(a)