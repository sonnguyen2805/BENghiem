const reverseArray = (arr)=>{
    for(let i = 0; i < Math.floor(arr.length/2); i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(`Mang dao nguoc: ${reverseArray([1, 2, 3, 4, 5, 6])}`);