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

test('should implement equality', () => {
    let l1 = new LList()
    l1.put(1).put(2).put(3)
    let l2 = new LList()
    l2.put(1).put(2).put(3)
    expect(l1.equals(l2)).toBe(true)
    expect(l2.equals(l1)).toBe(true)

    l1 = new LList()
    l1.put(1).put(2)
    l2 = new LList()
    l2.put(1).put(2).put(3)
    expect(l1.equals(l2)).toBe(false)
    expect(l2.equals(l1)).toBe(false)
})

test('should implement reverse', () => {
    let l1 = new LList()
    l1.put('a').put('b')
    let l2 = new LList()
    l2.put('b').put('a')
    l1.reverse(l1.head)
    let l3 = new LList()
    l3.put('a')
    expect(l1.equals(l2)).toBe(true)
    expect(l1.equals(l3)).toBe(false)
})