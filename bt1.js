//C1
let arr = [2, 5, 6, 7];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
}
console.log(`Total: ${sum}`);

//C2
const total = (arr) =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(`Total: ${total([2, 5, 6, 7])}`);