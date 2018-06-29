const stackSort = require('./3-5-stack-sort')
const Stack = require('../lib/stack')

test('should leave an empty stack alone', () => {
    let a = new Stack();
    stackSort(a)
    expect(a.peek()).toBeNull()
})

test('should leave a sorted stack alone', () =>{
    let a = new Stack();
    a.push(5).push(4).push(3).push(2)
    let b = new Stack();
    b.push(5).push(4).push(3).push(2)
    expect(b.equals(stackSort(a))).toBe(true)
})

test('should sort an unsorted stack', () => {
    let a = new Stack();
    a.push(2).push(3).push(4).push(5)
    let b = new Stack();
    b.push(5).push(4).push(3).push(2)
    expect(b.equals(stackSort(a))).toBe(true)

    a = new Stack();
    a.push(4).push(2).push(7).push(-50).push(14)
    b = new Stack();
    b.push(14).push(7).push(4).push(2).push(-50)
    expect(b.equals(stackSort(a))).toBe(true)
})