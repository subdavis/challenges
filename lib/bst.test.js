const fromSorted = require('./bst').fromSortedArray
const height = require('./bst').height

test('height should return the height of a tree', ()=> {
    let tree = fromSorted([1,2,3,4,5,6,7,8,9])
    expect(height(tree)).toBe(4)
})

test('should create a simple balanced bst from a sorted array', () => {
    let sorted = [1, 2, 3]
    let root = fromSorted(sorted)
    expect(root.left.val).toBe(1)
    expect(root.right.val).toBe(3)
    expect(root.val).toBe(2)
})

test('should create a more elaborate balanced bst from a sorted array', () => {
    let sorted = [1, 1, 3, 5, 8, 13, 21, 34, 55, 89]
    let root = fromSorted(sorted)
    expect(height(root)).toBe(4)
})