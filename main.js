// console.log(document.getElementById("my-form"));
// console.log(document.querySelector('h1'));

// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))

// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'hello';
// ul.children[1].innerText = 'brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'
// ul.firstElementChild.style.background = 'green'
// ul.children[1].style.background = 'yellow'



// const btn = document.querySelector('.btn');

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc'; 
//     document.querySelector('.item')
//     .lastElementChild.innerHTML = '<h1>Hello</h1> ';
// });
// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault();
//     console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc'; 
//     document.querySelector('.item')
//     .lastElementChild.innerHTML = '<h1>Hello</h1>';
// }); 
// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc'; 
//     document.querySelector('.item')
//     // .lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit(e));

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value ==='' || emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields'
        setTimeout(()=> msg.remove(),1000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
         
        userList.appendChild(li);
          nameInput.value = '';
          emailInput.value = '';
    }
    
}