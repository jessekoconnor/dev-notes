
// Iterative Solution
function reverseLinkedList(head) {
    // Write your code here.
  
    let cur = head;
    let prev;
  

    while (cur) {
      // save next in a temp var
      const nextNode = cur.next;
      
      // set cur.next to prev
      if (prev) {
        cur.next = prev;
      } else {
        cur.next = null
      }
  
      // move forward to next node
      prev = cur;
      cur = nextNode;
    }
  
    return prev
}

