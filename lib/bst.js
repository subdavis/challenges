/**
 * create a new node
 * @param {Number} value 
 * @param {Object} left 
 * @param {Object} right 
 */
let Node = function(value, left = null, right = null){
    this.val = value;
    this.left = left;
    this.right = right;
}

let put = (root, node) => {

}

let find = (root, val) => {

}

/**
 * The larger height
 * @param {Object} root the tree root node
 */
let height = (root) => {
    if (root == null) {
        return 0;
    }
    return Math.max(height(root.left), height(root.right)) + 1
}

/**
 * fromSortedArray returns a balanced bst given some sorted list
 * @param {Number[]} arr 
 * @returns {Object}
 */
let fromSortedArray = (arr) => {
    if (arr.length == 0){
        return null;
    }
    let pivot = arr.length / 2 >> 0
    let n = new Node(arr[pivot])
    if (pivot != 0) {
        let left = arr.slice(0, pivot)
        let right = arr.slice(pivot+1, arr.length)
        n.left = fromSortedArray(left)
        n.right = fromSortedArray(right)
    }
    return n
}

module.exports = {
    Node, 
    put, 
    find, 
    height,
    fromSortedArray
}