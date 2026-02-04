/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n, depth = 0, max) {

    // Base Case: return total length as base case
    if (!head) {
        return depth;
    }
    
    // Find total len by recursing to end
    const totalLength = removeNthFromEnd(head.next, n, depth+1)
    // Calculate len from end
    const lenFromEnd = totalLength - depth;

    // remove the Nth node by pointing prev to next.next
    if (n === lenFromEnd-1) {
        head.next = head.next?.next;
    }
    // Case where we must remove head
    else if (depth === 0 && n === lenFromEnd) {
        if (head.next) {
            head = head.next;
        } else {
            return null
        }
    }

    // pass total len to upper levels of recursion
    if (depth !== 0) {
        return totalLength;
    }
    
    // Return head when at top level recursion
    return head;
};