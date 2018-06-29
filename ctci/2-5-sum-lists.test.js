const sumlittle = require('./2-5-sum-lists').little
const sumbig = require('./2-5-sum-lists').big
const LList = require('../lib/llist').LList

test('null case should work', () => {
    let l1 = new LList()
    let l2 = new LList()
    let r1 = new LList()
    expect(sumlittle(l1, l2).equals(r1)).toBe(true)
})

test('should sum "little endian" lists, equal length', () => {
    let l1 = new LList().put(7).put(1).put(6) // 617
    let l2 = new LList().put(5).put(9).put(2) // 295
    let r1 = new LList().put(2).put(1).put(9) // 912
    expect(sumlittle(l1, l2).equals(r1)).toBe(true)
})

test('should sum "little endian" lists, unequal length', () => {
    let l1 = new LList().put(2).put(9).put(2) // 292
    let l2 = new LList().put(5).put(9) // 95
    let r1 = new LList().put(7).put(8).put(3) // 387
    expect(sumlittle(l1, l2).equals(r1)).toBe(true)
})