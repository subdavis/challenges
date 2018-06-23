const LList = require('./llist').LList

test('empty list should have null head and tail', () => {
    let l = new LList();
    expect(l.head).toBeNull()
    expect(l.tail).toBeNull()
})

test('list with one item should have same head and tail', () => {
    let l = new LList();
    expect(l.put("foo")).toBe(l);
    expect(l.head).toBe(l.tail);
})

test('should support basic adds and removes', () => {
    let l = new LList();
    l.put('foo')
    l.put('bar')
    expect(l.peek()).toBe('foo')
    expect(l.get()).toBe('foo')
    expect(l.get()).toBe('bar')
    expect(l.get()).toBeNull()
})

test('should be able to delete a node given only that node', () => {
    let l = new LList()
    l.put('foo').put('bar').put('baz')
    expect(l.head.val).toBe('foo')

    expect(l.head.next.val).toBe('bar')
    l.delete(l.head.next) // delete bar
    expect(l.head.next.val).toBe("baz")
    l.delete(l.head.next) // delete baz
    // expect(l.head.next).toBeNull();
})