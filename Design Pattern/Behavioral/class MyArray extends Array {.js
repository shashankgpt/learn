class MyArray extends Array {
    constructor() {
        super();
    }

    flat() {
        const flatten = (arr) => {
            return arr.reduce((acc, c) => {
                return Array.isArray(c) ? acc.concat(flatten(c)) : acc.concat(c)
            }, [])
        }
        return flatten(this)
    }
}

const a = new MyArray();
a.push([1,2,[3,3,[5,6,7], [1]],9])

a.flat()

1. constructor
2. componentDidMount
3. getDerivedStatefromProps
4. ShouldComponentUpdate
5. ComponentWillUpdate
6. ComponentDidUpdate
7. componentWillUnMount