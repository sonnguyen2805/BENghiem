const countNumber = (arr)=>{
    let count = {};
    for(let i = 0; i < arr.length; i++){
        let item = arr[i];
        count[item] = (count[item] || 0) + 1;
    }
    return count;
}

console.log(countNumber([2, 1, 2, 2, 1, 5]));