const Stack = require('../lib/stack')

let oneAway = (a, b) => {
    if (Math.abs(a.length - b.length) > 1)
        return false;
    let s = new Stack();
    let i = j = 0;
    let longer, shorter;
    if (a.length >= b.length) {
        longer = a
        shorter = b
    } else {
        longer = b
        shorter = a
    }

    // push the diff to the stack
    while(i < longer.length){
        if (j >= shorter.length) {
            s.push(a[i++]); //finish pushing the rest of the longer string
        } else if (longer[i] != shorter[j]){
            s.push(a[i++]);
        } else {
            i++;
            j++;
        }
    }
    // try to resolve the diff from the other side.
    j = b.length - 1;
    while (s.length > 1) {
        if (b[j--] != s.pop()) {
            return false;
        }
    }
    return true;
}

module.exports = oneAway;