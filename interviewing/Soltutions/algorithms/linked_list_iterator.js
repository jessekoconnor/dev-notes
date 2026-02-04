class LLIterator {
    constructor(head) {
        this.head = head;
        this.cur = head;
        this.last = null;
    }

    next() {
        if (this.cur === null || this.cur === undefined) return undefined;

        const toRet = this.cur.val;

        // // Only include for last method support
        // this.last = this.cur;

        this.cur = this.cur.next;

        // Only include for tail method support
        // if (this.cur === null) {
        //     this.tail = this.last;
        // }

        return toRet;
    }

    // last() {
    //     return this.last;
    // }

    // head() {
    //     return this.head;
    // }

    tail() {

    }
}

module.exports = Iterator;