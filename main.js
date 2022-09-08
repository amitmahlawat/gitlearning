<<<<<<< HEAD
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
=======
//AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'



// GET REQUEST
// function getTodos() {
//   axios({
//     method:"get",
//     url:'https://jsonplaceholder.typicode.com/todos',
//     params:{
//       _limit: 5
//     }
//   })
//   .then(res=>showOutput(res))
//   .catch(err=>console.error(err));
// }
function getTodos() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5' )
 
  .then(res=>showOutput(res))
  .catch(err=>console.error(err));
}
// POST REQUEST
function addTodo() {
axios.post('https://jsonplaceholder.typicode.com/todos',{title:'New Todo',completed: false})
.then(res=>showOutput(res))
  .catch(err=>console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.patch('https://jsonplaceholder.typicode.com/todos/1',{title:'New Todo',completed: true})
.then(res=>showOutput(res))
  .catch(err=>console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/1')
  .then(res=>showOutput(res))
    .catch(err=>console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  ])
  .then(axios.spread((todos,posts)=>showOutput(posts)))
    .catch(err=>console.error(err));
  }

// CUSTOM HEADERS
function customHeaders() {
  const config={
    headers:{
      'Content-Type':'application/json',
      Authorization:'Sometoken'
    }
  }
    axios.post('https://jsonplaceholder.typicode.com/todos',{title:'New Todo',completed: false},config)
    
    .then(res=>showOutput(res))
      .catch(err=>console.error(err));
    
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options={
    method:'post',
    url:"https://jsonplaceholder.typicode.com/todos",
    data:{
      title:'Hello World'
    },
    transformResponse:axios.defaults.transformResponse.concat(data=>{
      data.title=data.title.toUpperCase();
      return data
    })
  }
  axios(options).then(res=>showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
  axios.get('https://jsonplaceholder.typicode.com/todoss',{
    ValidateStatus: function(status){
      return status<500;
    }
  })
 
  .then(res=>showOutput(res))
  .catch(err=>{
    if(err.response){
      console.log(err.response.data)
    console.log(err.response.status)

    console.log(err.response.headers)
      if(err.response.status===404){
        alert('error: page not found')
      }
  }else if(err.request){
    console.error(err.request)
  }else{
    console.error(err.message);
  }

    
  });
}

// CANCEL TOKEN
function cancelToken() {
  const source=axios.CancelToken.source();
  axios.get('https://jsonplaceholder.typicode.com/todos',{
    CancelToken:source.token
    
  })
  
 
  .then(res=>showOutput(res))
  .catch(thrown=>{
    if(axios.isCancel(thrown)){
      console.log('Request Canceld', thrown.message);
    }
  });
  if(true){
    source.cancel('Request Canceled!');
  }
} 

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  config=>{
    console.log(`${config.method.toUpperCase()} request sent to${config.url} at ${new Date().getTime()}`)
    return config;
  },
  error=>{Promise.reject(error)} 
);

// AXIOS INSTANCES
const axiosInstance=axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
});
axiosInstance.get('/comments').then(res=>showOutput(res))


// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
>>>>>>> 14a64a0a6743b327e9c8c8494cacfcb8979f81ee
