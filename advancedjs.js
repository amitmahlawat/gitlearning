
// function multiply(x){
//     return function(y){
//         console.log(x*y)
//     }
// }
// let multiplyByTwo=multiply(2)
// multiplyByTwo(5)

// let multiplyByThree=multiply.bind(this,3)
// multiplyByThree(5)

function multiply(x,y){
    console.log(x*y)
}
let multiplyByTwo=multiply.bind(this,2)
multiplyByTwo(5)

let multiplyByThree=multiply.bind(this,3)
multiplyByThree(5)