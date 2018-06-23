let compress = str => {
    let i = 0
    let out = ""
    while (i < str.length) {
        let count = 1
        out += str[i]
        while (true) {
            if (i+1 < str.length && str[i] == str[i+1]) {
                i++
                count++
            } else {
                i++
                break
            }
        }
        out += count
    }
    if (out.length < str.length)
        return out
    return str
}

module.exports = compress