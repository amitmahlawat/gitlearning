class StackUsingQueue{
constructor(){
     this.stack1=[]
    this.stack2=[]
    this.front=0;
    this.rear=0;
}



push(value){
    this.stack1.push(value)
    // this.rear+=1;
    
}

pop(){
    if(this.stack1.length!==0){ 
        while(this.stack1.length!==1){
        this.stack2.push(this.stack1.shift())
    }
    console.log(this.stack1.shift());
    while(this.stack2.length!==0){
        this.stack1.push(this.stack2.shift())
    }}else{
        console.log('List is empty')
    }
   
}

    
    



display(){
    console.log(this.stack1)
}
peak(){
    console.log(this.stack1[this.stack1.length-1])
}}


let s1=new StackUsingQueue()

// s1.push(10) 
// s1.push(20)
// s1.push(30)
// s1.pop()
s1.pop()
// // s1.push(20)

// s1.pop()
// s1.pop()
// // s1.pop()
// s1.peak()
s1.display()