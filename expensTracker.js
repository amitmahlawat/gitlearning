function storeinlocalestorage(event){
    event.preventDefault()
    const amount= event.target.Amount.value;
    const description= event.target.description.value;
    const category = event.target.category.value;
    const id= Math.floor(Date.now() / 1000)
    // localStorage.setItem('name' , name);
    // localStorage.setItem('email' , email);
    // localStorage.setItem('phone' , Phone);
    const obj = {
        amount,
        description,
        category,
        id  
    }
localStorage.setItem(obj.id,JSON.stringify(obj))
ShowNewUsersOnScreen(obj)
}
function ShowNewUsersOnScreen(obj){

    if(localStorage.getItem(obj.id)!=null){
        removeUserFromScreen(obj.id);
    }
    const ParentNode = document.getElementById('listofobj');
    const ChildHTML = `<li id=${obj.id}> ${obj.amount}-${obj.description} -${obj.category}
         <button onclick=deleteUser('${obj.id}')> Delete item</button>
         <button onclick=EditUserDetails('${obj.id}','${obj.amount}','${obj.description}','${obj.category}')>Edit</button>
        </li>`
    ParentNode.innerHTML =  ChildHTML+ ParentNode.innerHTML
}
function EditUserDetails(id, amount, description,category){
        document.getElementById('amount').value = amount;
        document.getElementById('description').value = description;
        document.getElementById('category').value = category;
        deleteUser(id)
       

    }

function deleteUser(id){
    localStorage.removeItem(id)
    removeUserFromScreen(id)
}
function removeUserFromScreen(id){
    const ParentNode = document.getElementById('listofobj');
    const ChildNodeToBeDeleted =document.getElementById(id)
    if(ChildNodeToBeDeleted){
        ParentNode.removeChild(ChildNodeToBeDeleted);
    }
    
}