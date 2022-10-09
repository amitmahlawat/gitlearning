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
//queue using stack

// async function fun1(){
//     return new Promise((resolve,reject)=>{
//         console.log('a');
//         console.log('b');
//          await setTimeout(() => console.log('c'), 1000)
//          await setTimeout(() => console.log('d'), 0)
//         console.log('e');
//     })

//     }
// let input= 600
// function commision(x){
//     let output=0
//     if(x>=1 && x<=400){
//         output=5
//     }else if(x>=401 && x<=800){
//         output=4
//     }else if(x>=802 && x<=1200){
//         output=3
//     }else if(x>=1201 && x<=9000){
//         output=2
//     }else if(x>=9001 && x<=15000){
//         output=1
//     }
// return output
// }
// var x=commision(input)
// function calculate(input,x){
//     return `your commision rate is ${x} and your commision is ${(x*input)/100} and remaining amount is ${input-(x*input)/100}`
// }
// // console.log(x)

// console.log(calculate(input,x))

// var obj = {

//     age: '25',

//     findageArrowFn: () => {

//      console.log(this   .age)

//     },

//     findAgeNormalFn: function(){

//      console.log(this.age)

//     }

//    }



//    obj.findageArrowFn();

//    obj.findAgeNormalFn();

let obj={
    name:'Amit',
    age:29,
    const :function(){
        console.log(this.age)
        
        }
    }
    

    



obj.const()
    
    
