// function func4(){
//     console.log('friends')
// }



// function func1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('hello')
//             resolve()
//         },1000)
        
//     })
// }

// function func3(){
//     return new Promise((resolve,reject)=>{
//         console.log('good bye')
//         resolve()
//     })
    
// }


// function func2(){
//     return new Promise((resolve,reject)=>{
//         console.log('world')
//         resolve()
//     })
   
// }

// // func1().then(()=>{
// //     func2().then(()=>{
// //         func3().then(func4)
// //         .catch(err=>console.log('something went wrong'))
// //     }) .catch(err=>console.log('something went wrong'))
// // })
// // let promise1=new Promise((resolve,reject)=>{
// //     reject()
// // })
// // let promise4=10
// // let prmoise2=new Promise((resolve,reject)=>{
// //     console.log('goodbye')
// //     resolve()
// // })

// // Promise.all([promise1,prmoise2]).then(()=>{
// //     console.log(promise4)
    
// // })    .catch(err=>console.log('something went wrong'))

// async function init(){
    
//     await func1();
//     await func2();
//     await func3();
//     func4()
// }



// init().catch(err=>console.log('something went wrong'))

// console.log('my name is Amit')
// console.log('i am a cool guy')


function todos(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res=>showOutput(res))
  .catch(err=>console.error(err));
}
todos()
