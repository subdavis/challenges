const kth_to_last = require('./2-2-kth-to-last')
const LList = require('../lib/llist').LList

test('it shoud find null for empty llist', () => {
    let l = new LList();
    expect(kth_to_last(l.head, 0)).toBeNull()
})

test('it should find the last node', () => {
    let l = new LList();
    l.put("foo").put("bar").put("baz")
    expect(kth_to_last(l.head, 0)).toBe("baz")
    expect(kth_to_last(l.head, 1)).toBe("bar")
    expect(kth_to_last(l.head, 2)).toBe("foo")
    expect(kth_to_last(l.head, 3)).toBeNull()
})

test('value should change when the linked list changes', () => {
    let l = new LList();
    l.put("foo").put("bar").put("baz");
    expect(kth_to_last(l.head, 1)).toBe("bar")
    expect(l.get()).toBe("foo")
    expect(kth_to_last(l.head, 2)).toBeNull()
    l.put("fizz").put("buzz")
    expect(kth_to_last(l.head, 2)).toBe("baz")
})