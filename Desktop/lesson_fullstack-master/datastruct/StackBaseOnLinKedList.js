// node 节点 代替数组里的每个元素
class Node {
    constructor(element) {
        this.element = element;// 值
        // 链表因为有指针， 是不连续的， 可以把新的节点 new出来， 每次都去申请新的内存空间
        // next 指向下一个节点
        this.next = null;// 
    }
}

class StackBaseOnLinKedList {
    constructor() {
        this.top = null; // 空栈
    }
    push(value) {
        const node = new Node(value);
        if (this.top === null) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
    }
    pop() {
        if (this.top == null) {
            let temp = this.top;
            while(temp != null) {
                console.log(temp.element);
                temp = temp.next;
            }
        }
    }
}

module.exports = {
    StackBaseOnLinKedList,
    Node
}