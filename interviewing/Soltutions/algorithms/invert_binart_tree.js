function invertBinaryTree(tree) {
    // Write your code here.

    if (!tree) return null;

    const { left, right, value } = tree;

    tree.right = left;
    tree.left = right;

    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);

    return tree;
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}