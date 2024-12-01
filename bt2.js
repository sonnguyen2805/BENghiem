const maxNumber = (arr)=>{
    let isMax = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > isMax){
            isMax = arr[i];
        }
    }
    return isMax;
}

console.log(`Max number: ${maxNumber([1, 3, 4, 5])}`);