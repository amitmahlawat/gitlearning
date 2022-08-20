class Node{
    constructor(value){
this.value = value
this.next = null
this.previous = null
}
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    append(value){
        if(!this.tail){
      this.tail = this.head= new Node(value)
        }
        else{
            // store reference to current tail of list
           let oldtail = this.tail
           // move tail to brand new node
           this.tail = new Node(value)
           // create next ponter or reference to new tail
           oldtail.next = this.tail
           // create previous reference to previous tail
           this.tail.previous =oldtail


        }

    }

    prepend(value){
        if(!this.head){
            this.head=this.tail =new Node(value)

        }
        else{
            //store reference to current head
           let oldhead = this.head
            // move head pointer to brand new node
            this.head = new Node(value)
            // connect old head to new head
            oldhead.previous = this.head
            // create the back link
            this.head.next = oldhead

        }
        }
        delete(valueToDelete){
            if(this.head.value ==valueToDelete){
                this.head = this.head.next
                this.head.previous = null
                return

            }
            let current = this.head
            let previous = current.previous
            let next = current.next

            while(current!=null && current.value != valueToDelete){
                previous = current
                current = current.next

                if(current!=null)
                next = current.next

            }
            previous.next = next
            if(next!=null)
            next.previous =previous

        }
        search(value){
            let current = this.head
            while(current!=null){
                if(current==value)
                return current
                current = current.next
            }
            return null
        }
       

        print(){
            let current =this.head
            while(current !=null){
            console.log(current.value)
            current = current.next
            }
    
        }
    }

    


const list = new LinkedList()
list.append(1)
list.append(5)
list.append(6)
list.append(10)
// list.prepend(9000)
// list.delete(9000)
// list.delete(10)
list.print();
console.log(list.search(0))
