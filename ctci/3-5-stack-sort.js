const Stack = require('../lib/stack')

let sort = (a) => {
    let b = new Stack()
    while (true) {
        let tmp = a.peek()
        if (tmp === null) {
            break;
        }

        if (b.length == 0) {
            b.push(a.pop())
        } else if (tmp < b.peek()) {
            let count = 0;
            tmp = a.pop();
            while (b.peek() !== null && tmp < b.peek()) {
                a.push(b.pop())
                count++
            }
            b.push(tmp)
            while(count--) {
                b.push(a.pop())
            }
        } else {
            b.push(a.pop())
        }
    }
    while (b.peek() !== null) {
        a.push(b.pop())
    }
    return a
}

module.exports = sort;