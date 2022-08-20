let n = 4 
let  m = 4
let arr= {{0, 1, 1, 1},
           {0, 0, 1, 1},
           {1, 1, 1, 1},
           {0, 0, 0, 0}}

let i=0;
let j = m-1;
let finalrow=-1;

while(i<n && j>=m){

    if(arr[i][j]==1){
        finalrow=i;
        j--;
    }else{
        i++;
    }
}
return finalrow