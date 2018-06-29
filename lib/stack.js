let Stack = function(init = []){

    this.arr = init;
    this.pointer = init.length - 1;

    this.push = val => {
        this.arr[++this.pointer] = val;
        return this
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

    // Destructive equality.
    this.equals = (other) => {
        while (true) {
            if (other.pop() != this.pop())
                return false
            // Both are empty
            if (other.peek() == null && this.peek() == null)
                return true
        }
    }
}

Stack.prototype = {
    get length() {
        return this.pointer + 1;
    }
}

module.exports = Stack;