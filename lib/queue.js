const LList = require('./llist').LList

let Queue = function(init = []) {
    this.llist = new LList();
    this.length = 0;

    this.put = (val) => {
        this.llist.put(val)
        this.length++;
        return this
    }

    this.get = () => {
        if (this.llist.head !== null) {
            this.length--
            return this.llist.get()
        }
        return null;
    }

    this.peek = () => {
        return this.llist.peek()
    }
}

module.exports = Queue;