const LList = require('../lib/llist').LList

let sum = (a, b, cin) => {
    let s = a + b + cin
    let cout = s >= 10 ? 1 : 0
    s = s % 10
    return {
        s, 
        cout
    }
}

// Little endian linked list sum
let little = (a, b) => {
    a = a.head
    b = b.head
    let cin = 0
    let out = new LList()
    while (a || b) {
        let { s, cout } = sum (a ? a.val : 0, b ? b.val : 0, cin);
        cin = cout
        out.put(s)
        a = a ? a.next : a
        b = b ? b.next : b
    }
    return out
}

// Big endian linked list sum
let big = (a, b) => {

    let _big = (a, b)
}

exports.little = little
exports.big = big