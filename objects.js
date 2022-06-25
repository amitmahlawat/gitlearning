// const person={
//     firstName:'john',
//     lastName: 'Doe',
//     age: 30,
//     hobbies:['music','movies','sports'],
//     address:{
//         street:'50 main st',
//         city:'Boston',
//         state:'MA'
//     }
// }
//     const {age,address:{city}} = person;
//     console.log(age)
//     console.log(city)

const todos=[
    {
        id: 1,
        text: 'take out trash',
        iscompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        iscompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appt',
        iscompleted: false
    }

];
// const todoJASON=JSON.stringify(todos);
// console.log(todoJASON);

// const todocompleted = todos.filter(function(todo){
//     return todo.iscompleted===true;
// }).map(function(todo){
//     return todo.text
// })

// console.log(todocompleted);
// let i=0;
// while( i<todos.length){
//     console.log(todos[i].id)
//     i++
// }


// const x = 10;
// const color = 'green';


// switch(color){
//     case 'red' :
//         console.log('color is red');
//         break;
//         case 'blue':
//         console.log('colr is blue');
//         break;
//    default:
//     console.log('color is not blue or red');
//     break;
// }

const addNums= (num1=1,num2=1) =>{return      num1+num2;}
console.log(addNums(2,3))

function converTemp(value,unit){
//  let conversion = unit=='k' ? value+273 : value-273;
  switch(unit){
    case 'k' :
        console.log(value+273+'c');
        break;
        case "c":
            console.log(value-273+'k');

    }
  }


converTemp(35,'k')