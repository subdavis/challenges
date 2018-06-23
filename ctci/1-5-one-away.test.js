const oneAway = require('./1-5-one-away')

test('should consider the same string true', () => {
    let a = "asdf"
    let b = "asdf"
    expect(oneAway(a, b)).toBe(true)
    expect(oneAway(b, a)).toBe(true)
})

test('should expect strings with 1 char removed/added to be true', () => {
    let a = "asdf"
    let b = "asf"
    expect(oneAway(a, b)).toBe(true)
    expect(oneAway(b, a)).toBe(true)
    a = "farther than me"
    b = "arther than me"
    expect(oneAway(a, b)).toBe(true)
    expect(oneAway(b, a)).toBe(true)
    a = "asf"
    b = "asdf"
    expect(oneAway(a, b)).toBe(true)
    a = "fo"
    b = "foo"
    expect(oneAway(a, b)).toBe(true)
    expect(oneAway(b, a)).toBe(true)
    a = "s"
    b = ""
    expect(oneAway(a, b)).toBe(true)
    expect(oneAway(b, a)).toBe(true)
    a = ""
    b = ""
    expect(oneAway(a, b)).toBe(true)
    expect(oneAway(b, a)).toBe(true)
})

test('should expect strings with 1 replaced character to be true', () => {
    let a = "a"
    let b = "b"
    expect(oneAway(a, b)).toBe(true)
    expect(oneAway(b, a)).toBe(true)
    a = "fam"
    b = "far"
    expect(oneAway(a, b)).toBe(true)
    expect(oneAway(b, a)).toBe(true)
    a = "123"
    b = "223"
    expect(oneAway(a, b)).toBe(true)
    expect(oneAway(b, a)).toBe(true)
})

test('should expect various strings to be false', () => {
    let a = "foo"
    let b = "bar"
    expect(oneAway(a, b)).toBe(false)
    expect(oneAway(b, a)).toBe(false)
    a = "foe"
    b = "boa"
    expect(oneAway(a, b)).toBe(false)
    expect(oneAway(b, a)).toBe(false)
    a = ""
    b = "ss"
    expect(oneAway(a, b)).toBe(false)
    expect(oneAway(b, a)).toBe(false)
    a = "ar"
    b = "azy"
    expect(oneAway(a, b)).toBe(false)
    expect(oneAway(b, a)).toBe(false)
})