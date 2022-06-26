// examine the document object
// console.dir(document)

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// document.all[10].textContent = 'Hello'
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// get element by ID

// console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title')
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "goodbye";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>hello</h3>";

// headerTitle.style.borderBottom = 'solid 3px #000'

// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 5px #000';


// Getelement by class name

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold'
// items[2].style.backgroundColor = 'green'

// for( var i = 0; i<items.length; i++){
// items[i].style.fontWeight = "bold";

// // }
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold'
// li[2].style.backgroundColor = 'green'

// for( var i = 0; i<li.length; i++){
// li[i].style.fontWeight = "green";

// }

// queryselector

// var header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input');
// input.value = 'hello world'

// var submit = document.querySelector('input[type = "Submit"]');
// submit.value='send';
 
// var item= document.querySelector('.list-group-item');
// item.style.color= 'red'


// var seconditem= document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'Green'
// var thirditem= document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.color = 'green'
//queryselectorall

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[1].textContent= 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')
// for (var i=0; i<odd.length; i++){

//     odd[i].style.backgroundColor='green';
// // even[i].style.backgroundColor='#ccc';
// }
// var seconditems = document.querySelectorAll('li:nth-child(3)');
// seconditems.style.color='green';

// var items = document.querySelectorAll("li:nth-child(2)")

// items.style.Color= 'green'


var itemList= document.querySelector('#items')
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#f4f4f4"

// console.log(itemList.parentNode.parentNode.parentNode);

// // parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="#f4f4f4"

// console.log(itemList.parentElement.parentElement.parentElement);

// childNode

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.childNodes[1]);
// itemList.childNodes[1].style.backgroundColor='yellow'

// // FirstChild
// console.log(itemList.firstChild);

// // firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello world'

// // lastchild
// console.log(itemList.lastChild);
// // lastelemenchild

// itemList.lastElementChild.textContent='hello 4'

// nextsibling

// console.log(itemList.nextElementSibling);

// previoussibling
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green'

// createElement
// create a div
var newDiv= document.createElement('div');

// add class
newDiv.className = 'Hello'

// add ID
newDiv.id='hello 1'

// add attribute

newDiv.setAttribute('title','hello div')

// create text node

var newDivText= document.createTextNode('Hello World')

// add text to div

newDiv.appendChild(newDivText);

var container= document.querySelector('header .container');
var h1= document.querySelector('header .h1')

// console.log(newDiv);
newDiv.style.fontSize= '30px'

container.insertBefore(newDiv, h1);

var nuDiv=document.createElement('div');
nuDiv.className='HEllo'
nuDiv.id= 'HEllo 2'
nuDiv.setAttribute('title', 'HEllo WORld');
var nuDIvText= document.createTextNode('HEllo World');
nuDiv.appendChild(nuDIvText);
// console.log(nuDiv);

var item= document.getElementById('items');

item.insertBefore(nuDiv, h1);
 