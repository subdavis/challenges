
let _kth_to_last = (node, k) => {
    if (node === null)
        return {final: null, d: -1}
    let { final, d } = _kth_to_last(node.next, k)
    d++
    if (k == d){
        return {final: node, d: d }
    } else if (final !== null) {
        return {final, d}
    } else {
        return {final: null, d: d}
    }
}

let kth_to_last = (node, k) => {
    let {final, d} = _kth_to_last(node, k)
    return final !== null ? final.val : final;
}

module.exports = kth_to_last;