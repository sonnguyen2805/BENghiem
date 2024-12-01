const arrayFilter = (arr)=>{
    let newArrayFilter = new Array();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newArrayFilter.push(arr[i]);
        }
    }
    return newArrayFilter;
}

console.log(`Mang moi sau khi loc: ${arrayFilter([1, 4, 6, 7, 8])}`);