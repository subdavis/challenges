let Node = function(val, next = null) {
    this.val = val
    this.next = next
    
    this.append = (val) => {
        let n = this
        let end = null
        while(n !== null) {
            end = n
            n = n.next
        }
        end.next = new Node(val)
        return end;
    }
}

// HEAD             TAIL
//   []-> []-> []-> X
let LList = function() {
    this.head = null
    this.tail = null;

    this.put = val => {
        if (this.head === null && this.tail === null) {
            this.head = new Node(val)
            this.tail = this.head
        } else {
            this.tail = this.tail.append(val)
        }
        return this
    }

    this.peek = () => {
        return this.head !== null ? this.head.val : null;
    }

    this.get = () => {
        if (this.head !== null) {
            let val = this.head.val
            this.head = this.head.next;
            return val;
        } else {
            return null;
        }
    }

    this.delete = (node) => {
        if (node !== null && node.next !== null) {
            node.val = node.next.val;
            node.next = node.next.next;
        } else if (node.next !== null) {
            // this is javascript, I cant set node = null
        }
    }
}

exports.LList = LList;
exports.Node = Node;