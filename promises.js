const Posts=[
    {title:'post one', body:'this is post one'},
    {title:"post two", body:'this is post two'}
];

function getPost(){
           
            setTimeout(()=>{
                let Output='';
                for(let i=0;i<Posts.length;i++){
                
                Output+=`<li>${Posts[i].title} </li>`;
            }
            document.body.innerHTML=Output;
    
            } ,1000  )
        }
        

    


function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            Posts.push(post)
            const error=false;

            if(!error){
                resolve();

            }else{
                reject('Error: something went wrong')
            }
    
        },1000)

    });
   
}

getPost()
function DeletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           
        //    if (Posts){
        //     // error=false
        //     resolve()
        //     Posts.pop()
        //    }else{
        //     error=true
        //     reject('error : array is empty now')
        //    }
           
           
           
           
           Posts.pop()
            const error=false;  
           
            
            
            if(!error){
                resolve()
            }else{
                reject('error : array is empty now')
            }
            
        },3000)
    })
}

DeletePost(Posts).then(getPost)
DeletePost(Posts).then(getPost)
// createPost({title:'third post', body:'this is third post'}).then(getPost)
// DeletePost(Posts).then(getPost).catch(err=>console.log(err))
DeletePost(Posts).then(getPost)
createPost({title:'fourth post', body:'this is fourth post'}).then(()=>{
    getPost()
    
    DeletePost().then(()=>{
        getPost()
    })
})
// DeletePost(Posts).then(getPost)


// let promise1=Promise.resolve('hello world');
// let Promise2=10;
// let promise3=new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'goodbye'));
// Promise.all([promise1,Promise2,promise3]).then(values=>console.log(values))

// function LastuserActivity(post){
//     return new Promise((resolve,reject)=>{
       
//     },1000)
    
// }
// createPost({title:'fifth post', body:'this is fifth post'}).then(LastuserActivity)