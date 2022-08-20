class Solution {
    divide(N,head){
      let odd = new Node(0);

      let ptr1 = odd;
         let even = new Node(0);
         let ptr2 = even;
         
         while(head !== null) {
             if(head.data % 2 !== 0) {
                 ptr1.next = head;
                 ptr1 = ptr1.next;
             }
             else {
                 ptr2.next = head;
                 ptr2 = ptr2.next;
             }
             head = head.next;
         }
         ptr2.next = odd.next;
         ptr1.next = null;
         return even.next;
    }
    }
  
  