class Solution {
    //Function to check if the linked list has a loop.
    detectLoop(head)
    {
        
        // your code here
        let slow=head;
       let fast=head;
        while(fast && fast.next)
        {
            slow=slow.next;
            fast=fast.next.next;
            if(slow==fast)
            return true;
            
        }
        return 0;
    }
    
}