const Queue = require('./queue')

test('should return null for empty', () => {
    let q = new Queue();
    expect(q.get()).toBeNull();
})

test('should return a single item when one is put in', () => {
    let q = new Queue();
    expect(q.put("foo")).toBe(q)
    expect(q.get()).toBe("foo");
    expect(q.get()).toBeNull();
})

test('should do queue stuff', () => {
    let q = new Queue()
    q.put("foo").put("fee")
    expect(q).toHaveLength(2)
    expect(q.peek()).toBe("foo")
})

test('can get the size of the queue', () => {
    let q = new Queue();
    expect(q).toHaveLength(0)
    q.put("foo")
    expect(q).toHaveLength(1)
    q.get()
    expect(q).toHaveLength(0)
})