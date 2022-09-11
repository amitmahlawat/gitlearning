class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        // root of a binary search tree
        this.root = null;
    }

    insert(data) {
        var newnode = new Node(data)
        if (this.root === null) {
            this.root = newnode
        } else {
            insertnode(this.root, newnode)
        }
    }
    search(value) {
        var result;

        if (this.root === null) return 'tree is empty';
        if (value === this.root.data) {
            result= this.root.data

        } else if (this.root.data > value) {
            result=searchNode(this.root.left, value)
        } else {
          result=  searchNode(this.root.right, value)
        }
        if (result){
            console.log(result)
        }else{
            console.log("not found")
        }
    }
}



function searchNode(node, value) {
    if(node==null){
        return null
        
    }
    if (node.data == value) {
        return node.data

    } else if (node.data > value) {
        return searchNode(node.left, value)

    } else if (node.data < value) {
      return  searchNode(node.right, value)
    } 
}
function insertnode(node, newnode) {
    if (node == null) {
        node = newnode
    }
    if (node.data > newnode.data) {
        if (node.left == null) {
            node.left = newnode
            return node
        } else {
            insertnode(node.left, newnode)
        }
    } else {
        if (node.right === null) {
            node.right = newnode
            return node
        } else {
            insertnode(node.right, newnode)
        }
    }
}

s1 = new BinarySearchTree()
// s1.insert(6)
// console.log(s1)
// s1.insert(4)
// console.log(s1)

// s1.insert(5)
// console.log(s1)

// s1.insert(8)
// s1.insert(9)
s1.insert(10)
console.log(s1)

    //  s1.search(4)
     s1.search(12)