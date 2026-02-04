class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    insert(suffix, node = this.root, depth = 0) {
      if (!suffix) {
        node[this.endSymbol] = true;
        console.log('insert base case', { suffix, node, depth })
        return;
      }
  
      const firstChar = suffix[0];
      const remainingStr = suffix.substr(1);
  
      // If no object yet for this char, make new obj
      if (!node[firstChar]) {
        node[firstChar] = {};
      }

      // Recurse until no suffix remains
      this.insert(remainingStr, node[firstChar], depth+1);
    }
  
    // start from the end of the string and insert each suffix
    populateSuffixTrieFrom(string) {
      for (let i = string.length -1; i > -1; i--) {
        const suffix = string.substr(i);
  
        this.insert(suffix);
  
        console.log(JSON.stringify(this.root, null, 2))
      }
      // Write your code here.
    }
  
    _contains(string, ) {
      if (node === undefined) return false;
      // Write your code here.
      if (!string) {
        return Boolean(node[this.endSymbol]);
      }
  
      const firstChar = string[0];
      const remainingStr = string.substr(1);
  
      console.log('contains', { firstChar, remainingStr, string, node, nextNode: node[firstChar],  depth })
  
      return this._contains(remainingStr, node[firstChar], depth+1);
    }
  
    contains(string) {
       return this._contains(string, this.root)
    }
  }