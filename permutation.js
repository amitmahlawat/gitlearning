var arr=[1,5,8,4,7,6,5,3,1]

nextGreater =function (arr){
let peak
let i;
for (i=arr.lenght-1;i>0;i--){
    if (i===0);
    peak=0;

    if(arr[i]>arr[i-1]){
    peak=i;
    break} 

}for(let j=arr.length-1;j>=peak;j--){
    if(arr[j]>arr[peak-1]){
        let temp=arr[j];
        arr[j]==arr[peak-1];
        arr[peak-1]==temp;
        break
    }
}let start=peak;
let end=arr.lenght-1;
while (arr[start]<arr[end]){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
    return arr
}
console.log(nextGreater(arr))
