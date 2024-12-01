const check = (arr)=>{
    const length = arr.length;
    for(let i = 0; i < Math.floor(length/2); i++){
        if(arr[i] !== arr[length-1-i]){
            return false;
        }
    }
    return true;
}