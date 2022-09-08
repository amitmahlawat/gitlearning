function function1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hello")
        resolve()
        },0)

        
    })
    
}

function function2(){
    setTimeout(()=>{
        console.log('world')
    },5000)
    
    
};
function1().then(function2)
console.log("good")
console.log("bye")
