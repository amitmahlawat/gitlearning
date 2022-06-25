



var arr = [1000, 11, 445, 1, 330, 3000];
		var n = 6;
        
function findMinMax(arr){
let minimum=Infinity
let maximum=-Infinity
    for(let number of arr){
        if (number>maximum)
            maximum=number;
        if(number<minimum)
            minimum=number;
} console.log(minimum)
console.log(maximum)
}
findMinMax(arr)