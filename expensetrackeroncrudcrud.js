window.onload=function(){

    axios.get("https://crudcrud.com/api/35481998b92c49a183641426bc162813/expense").then((res)=>{
        
        for (let i=0;i<res.data.length;i++){
            ShowUserOnScreen(res.data[i])
            console.log(res.data[i])
        }
    }).catch((err)=>{
        console.log(err)
    })
}




function SubmitData(event){
    event.preventDefault();
    var Amount=document.getElementById('amount').value
    var Category=document.getElementById('category').value
    var Description=document.getElementById('description').value
    var obj={
        Amount:Amount,
        Category:Category,
        Description:Description
    }
    
    
    document.getElementById("amount").value='';
    document.getElementById("category").value='';
    document.getElementById("description").value='';
    ShowUserOnScreen(obj)
    axios.post("https://crudcrud.com/api/35481998b92c49a183641426bc162813/expense",obj)
    .then((res)=>{
        console.log(res.data)

    })
    .catch((err=>{
        console.log(err)
    }))



}


function ShowUserOnScreen(user){
    var ParentNode=document.getElementById('Items')
    var ChildNode=`<li id=${user._id}>amount is ${user.Amount} for ${user.Category} in ${user.Description}<button onclick=EditUserDetails('${user.Amount}','${user.Category}','${user.Description}','${user._id}')>Edit</button>
    <button onclick=DeleteUserFromScreen('${user._id}')>Delete</button></li>`
  
        ParentNode.innerHTML=ParentNode.innerHTML+ChildNode
   
    
}

function EditUserDetails(Amount,Category,Description,userid){
    document.getElementById('amount').value=Amount
    document.getElementById('category').value=Category
    document.getElementById('description').value=Description
    localStorage.removeItem(userid)
    DeleteUserFromScreen(userid)
  

}
function DeleteUserFromScreen(userid){
    axios.delete(`https://crudcrud.com/api/35481998b92c49a183641426bc162813/expense/${userid}`)
    .then((res)=>{
        console.log(res)
        
    }).catch((err)=>{
        console.log(err)
    })
    var ParentNode=document.getElementById('Items')
    var ChildNodeToBeDeleted=document.getElementById(userid)
    
        ParentNode.removeChild(ChildNodeToBeDeleted)
    
    
    
    
}