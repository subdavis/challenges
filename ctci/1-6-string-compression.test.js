const compress = require("./1-6-string-compression")

test('should not compress simple strings', () => {
    expect(compress('foobar')).toBe('foobar')
    expect(compress('asdf')).toBe('asdf')
    expect(compress('aAabBbcCc')).toBe('aAabBbcCc')
    expect(compress('aabbcc')).toBe('aabbcc')
    expect(compress('')).toBe('')
    expect(compress('a')).toBe('a')
})

test('should compress repeated characters', () => {
    expect(compress('foooofeee')).toBe("f1o4f1e3")
    expect(compress('aaaabbccccd')).toBe("a4b2c4d1")
    expect(compress('12222555599')).toBe("11245492")
})