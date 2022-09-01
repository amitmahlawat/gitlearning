var Name=document.getElementById('Username').value
var Email = document.getElementById('Emailid').value

var Ul=document.getElementById('Items')
// var li=document.createElement("li")

// var read=document.getElementById('read')
window.onload=function(){
    

   var keys=Object.keys(localStorage);
   for(var key of keys){
    var element=JSON.parse(localStorage.getItem(key))
   var li= `<li id=${key}>${element.Name}-${element.Email}<Button onclick=EditUserDeatils(${key.Name},${key.Email})>Edit</button><button onclick=deleteUserFromScreen()>Delete</button>  `
    // li.appendChild(document.createTextNode(element.Name))
    // li.appendChild(document.createTextNode(element.Email))
   
        Ul.innerHTML=Ul.innerHTML+li

    
    
   
    
   }
}

function SubmitData(event){
    var Name=document.getElementById('Username').value
var Email = document.getElementById('Emailid').value

var Ul=document.getElementById('Items')
    event.preventDefault()
   
       
        
        var li=document.createElement('li')
        li.id=Email
        li.appendChild(document.createTextNode(`${Name}- `))
        li.appendChild(document.createTextNode(Email))
        var EditBtn=document.createElement("button");
        EditBtn.textContent="Edit";
        // EditBtn.className="Edit";
        li.appendChild(EditBtn);
        EditBtn.addEventListener('click' ,EditUserDeatils)
        var deleteBtn=document.createElement('button');
        // deleteBtn.className="btn btn-danger btn-sm float-right delete";
        deleteBtn.textContent=("Delete")
            li.appendChild(deleteBtn);
            var obj={
                Name:Name,
                Email:Email
            }
            localStorage.setItem(obj.Email,JSON.stringify(obj))
            Ul.appendChild(li)
            
                if(localStorage.getItem(Email)!==null){

                Ul.removeChild(document.getElementById(Email))
                Ul.appendChild(li);
            }else{
                Ul.appendChild(li);
            }
            
          

            document.getElementById("Username").value='';
            document.getElementById("Emailid").value='';
            
            deleteBtn.addEventListener("click",deleteUserFromScreen);

        function EditUserDeatils(Name,Email){
                document.getElementById("Username").value=obj.Name
                document.getElementById("Emailid").value=obj.Email
                localStorage.removeItem(obj.Email)
                Ul.removeChild(li)

        }
            
                
            
}function deleteUserFromScreen(){

    // var li=e.target.parentElement
    Ul.removeChild(li)
    localStorage.removeItem(Email);
}