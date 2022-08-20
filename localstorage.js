// localStorage.setItem('name', 'bob')
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('name');

// sessionStorage.setItem('name', 'john')
// console.log(sessionStorage.getItem('name'))
// sessionStorage.setItem('name', 'bob')

document.cookie='name= kyle; expires=' + new Date(9999, 0, 1).toUTCString();
console.log(document.cookie)