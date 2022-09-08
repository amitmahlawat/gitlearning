const Posts=[
    {title:'post one', body:'this is post one',createdAt:new Date().getTime()},
    {title:"post two", body:'this is post two',createdAt:new Date().getTime()}
];
let intervalId=0;
function getPost(){
    
        clearInterval(intervalId)
        
       intervalId= setInterval(()=>{
            let Output="";
            setTimeout(()=>{
                for(let i=0;i<Posts.length;i++){
                
                Output+=`<li>${Posts[i].title}-last updated ${(new Date().getTime()-Posts[i].createdAt)/1000} seconds ago </li>`;
            }
            document.body.innerHTML=Output;
    
            } ,1000  )
        },1000)
        
        
    }


function createPost(post,callback){
    setTimeout(()=>{
        Posts.push({...post,createdAt:new Date().getTime()})
        callback();
    },2000)
}

// getPost();
createPost({title:'post three',body:'this is post three'},getPost);

function create4thpost(post,callback){
    setTimeout(()=>{
        Posts.push({...post,createdAt:new Date().getTime()});
        callback
    },3000)
};

create4thpost({title:"fourth post",body:"this is fourth post"},createPost);