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

// }
var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2'
li[1].style.fontWeight = 'bold'
li[2].style.backgroundColor = 'green'

for( var i = 0; i<li.length; i++){
li[i].style.fontWeight = "bold";

}