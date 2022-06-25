
var s= '(){}';
 function isvalid(s) {
    const stack = [];
     
     for(let i = 0; i< s.length ; i++){
 
         if(s.charAt(i) === '(')
             stack.push(')')
         else if(s.charAt(i) === '[')
           {  stack.push(']')}
         else if(s.charAt(i) === '{')
             stack.push('}')
         else 
 
             if(stack.pop() !== s.charAt(i))
                 return false;  
     }
     
     if(stack.length !== 0)
         return false
     else
         return true;
 }
 console.log(isvalid(s));