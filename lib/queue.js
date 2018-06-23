let Queue = function(init = []) {

    this.arr = init
    this.head = -1
    this.tail = 0

    this.put = (val) => {

    }

    this.get = () => {

    }

    this.peek = () => {

    }
}

Queue.prototype = {
    get length() {
        return this.pointer + 1;
    }
}

module.exports = Queue;