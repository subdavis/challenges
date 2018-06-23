let Stack = function(init = []){

    this.arr = init;
    this.pointer = init.length - 1;

    this.push = val => {
        this.arr[++this.pointer] = val;
    }

    this.pop = () => {
        if (this.pointer >= 0)
            return this.arr[this.pointer--];
        return null;
    }

    this.peek = () => {
        if (this.pointer >= 0)
            return this.arr[this.pointer];
        return null;
    }
}

Stack.prototype = {
    get length() {
        return this.pointer + 1;
    }
}

module.exports = Stack;