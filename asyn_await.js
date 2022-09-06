console.log('person1: show tickets')
console.log('person2: show tickets')

// const promisewifeBringingTics=new Promise((resolve,reject)=>{
// setTimeout(() => {
//     resolve('ticket')
// }, 3000);

// });
// const getPopcorn=promisewifeBringingTics.then((t)=>{
//     console.log('husbasnd: we should go in')
//     console.log('wife:no i am hungry')
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))

// })
// const getButter=getPopcorn.then((t)=>{
//     console.log('husbasnd: we should go in')    
//     console.log('wife:no i  need butter on popcorn')
//     return new Promise((resolve,reject)=>resolve( `${t}butter`))
// })
// getButter.then((t)=>console.log(t))

const preMovie=async()=>{
    const promisewifeBringingTics=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve('ticket')
}, 3000);

});
const getPopcorn= new Promise((resolve,reject)=>resolve(`Popcorn`))
const addButter=new Promise((resolve,reject)=>resolve(`butter`))
let Ticket= await promisewifeBringingTics

console.log('wife: i have the ticks')
console.log('husbasnd: we should go in')
console.log('wife: no i am hungry')



let popcorn=await getPopcorn;
console.log(`husbasnd: i got some ${popcorn}`)
console.log('husbasnd: we should go in')
console.log('wife: i need butter on my popcorn')

await getColdDrink()
 function getColdDrink(){
    return new Promise((resolve,reject)=>{
    console.log(`husbasnd: i got some colddrink`)
    console.log('husbasnd: we should go in')
    console.log('wife: ok lets go')
    })
}

}
preMovie().then((m)=>console.log(`person3: show ${m}`));

console.log('person4: show tickets')
console.log('person5: show tickets')
