class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
      const queue = [this];
    
      // loop until all nodes are processed
      while (queue.length) {
        const head = queue.shift();
  
        array.push(head.name);
  
        // push all children into queue for processing
        head.children.forEach(child => {
          queue.push(child);
        });
      }
  
      return array;
    }

    depthFirstSearch(array) {
        // Base case: went past leaf node
        if (!this) return;

        // Add current node to array
        array.push(this.name);
        
        // Recurse on all children
        this.children.forEach(child => child.depthFirstSearch(array))

        return array;
    }
}