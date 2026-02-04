
class linkedListGenerator {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add nodes to tail
  addToTail(node) {
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    // all cases set tail to newly added node
    this.tail = node;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  // ------- advanced methods -------
  // removeHead() {
  //   if (this.head === null) return null;

  //   const toRet = this.head;
  //   this.head = this.head.next;

  //   return toRet;
  // }

  // removeTail() {
  //   if (this.head === null) return null;

  //   let cur = this.head;
  //   let prev;

  //   while (cur.next) {
  //     prev = cur;
  //     cur = cur.next;
  //   }

  //   if (prev) {
  //     prev.next = null;
  //   } else {
  //     this.head = null;
  //   }

  //   this.tail = prev;

  //   return cur;
  // }

  // contains(val) {
  //   let cur = this.head;

  //   while (cur) {
  //     if (cur.val === val) return true;
  //     cur = cur.next;
  //   }

  //   return false;
  // }
}

