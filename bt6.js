const deleteNumber = (arr)=>{
    let newArray = [];
    let see = {}; // Tao 1 doi tuong de theo doi
    for(let i = 0; i < arr.length; i++){
        if(!see[arr[i]]){
            newArray.push(arr[i]);
            see[arr[i]] = true;
        }
    }
    return newArray;
}

console.log(`Mang sau khi loc: ${deleteNumber([1, 2, 2, 3, 1, 4])}`);