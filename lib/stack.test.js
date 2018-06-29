const Stack = require('./stack')

test('returns null for empty Stack', () => {
    let q = new Stack();
    expect(q.peek()).toBeNull();
    q.push("foo")
    expect(q.pop()).toEqual("foo");
    expect(q.peek()).toBeNull();
    expect(q.pop()).toBeNull();
})

test('can peek without popping.', () => {
    let q = new Stack();
    q.push("foo");
    q.push("bar");
    expect(q.peek()).toEqual("bar")
    expect(q.peek()).toEqual("bar")
    expect(q.pop()).toEqual("bar")
    expect(q.peek()).toEqual("foo")
})

test('can get Stack size', () => {
    let q = new Stack();
    expect(q).toHaveLength(0);
    q.push("foo");
    expect(q).toHaveLength(1);
    q.pop();
    expect(q).toHaveLength(0);
})

test('implement equality', () => {
    let s1 = new Stack();
    s1.push('a').push('b')
    let s2 = new Stack();
    s2.push('a').push('b')
    expect(s1.equals(s2)).toBe(true)
})