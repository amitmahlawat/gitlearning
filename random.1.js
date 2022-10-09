window.onload=function(){
    var key=Object.keys(localStorage);
    for(key of key){
        var user=JSON.parse(localStorage.getItem(key));
        var ChildNode=`<li id=${user.Email}>${user.Name}--${user.Email}<button onclick=EditUserDetails('${user.Name}','${user.Email}')>Edit</button><button onclick=DeleteUserFromScreen('${user.Email}')>Delete</button> </li>`
        var ParentNode=document.getElementById('Items')
        ParentNode.innerHTML=ParentNode.innerHTML+ChildNode

    }
}
  




function SubmitData(event){
    event.preventDefault();
    var Name=document.getElementById('Username').value
    var Email=document.getElementById('Emailid').value
    var obj={
        Name:Name,
        Email:Email
    }
    // localStorage.setItem(obj.Email,JSON.stringify(obj))
    
    document.getElementById("Username").value='';
    document.getElementById("Emailid").value='';
    ShowUserOnScreen(obj)
   



}


function ShowUserOnScreen(user){
    var ParentNode=document.getElementById('Items')
    var ChildNode=`<li id=${user.Email}>${user.Name}--${user.Email}<button onclick=EditUserDetails('${user.Name}','${user.Email}')>Edit</button><button onclick=DeleteUserFromScreen('${user.Email}')>Delete</button> </li>`
    if(localStorage.getItem(user.Email)!==null){
        DeleteUserFromScreen(user.Email)
        ParentNode.innerHTML=ParentNode.innerHTML+ChildNode
        localStorage.setItem(user.Email,JSON.stringify(user))
    }else{
        ParentNode.innerHTML=ParentNode.innerHTML+ChildNode
    }
    
}

function EditUserDetails(Name,Email){
    document.getElementById('Username').value=Name
    document.getElementById('Emailid').value=Email
    localStorage.removeItem(Email)
    DeleteUserFromScreen(Email)


}
function DeleteUserFromScreen(Email){
    var ParentNode=document.getElementById('Items')
    var ChildNodeToBeDeleted=document.getElementById(Email)
    if(ChildNodeToBeDeleted){
        ParentNode.removeChild(ChildNodeToBeDeleted)
    }
    
    localStorage.removeItem(Email)
}