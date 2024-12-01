/*
    Bài 1: Tính tổng các số trong mảng 
    Viết một hàm nhận vào một mảng số và trả về tổng các phần tử trong mảng
*/

//C1
// let arr = [2, 5, 6, 7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i];
// }
// console.log(`Total: ${sum}`);

//C2
// const total = (arr) =>{
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(`Total: ${total([2, 5, 6, 7])}`);


/*
    Tìm số lớn nhất trong mảng 
    Viết một hàm để tìm giá trị lớn nhất trong mảng số
*/

// const maxNumber = (arr)=>{
//     let isMax = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > isMax){
//             isMax = arr[i];
//         }
//     }
//     return isMax;
// }

// console.log(`Max number: ${maxNumber([1, 3, 4, 5])}`);




/*
    Bài 3: Lọc số chẵn Viết một hàm để trả về một mảng mới chỉ chứa các số chẵn từ mảng đầu vào
*/

// const arrayFilter = (arr)=>{
//     let newArrayFilter = new Array();
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             newArrayFilter.push(arr[i]);
//         }
//     }
//     return newArrayFilter;
// }

// console.log(`Mang moi sau khi loc: ${arrayFilter([1, 4, 6, 7, 8])}`);


/*
    Bài 4: Đếm số lần xuất hiện của một phần tử 
    Viết một hàm đếm số lần xuất hiện của một phần tử cụ thể trong mảng
*/

// const countNumber = (arr)=>{
//     let count = {};
//     for(let i = 0; i < arr.length; i++){
//         let item = arr[i];
//         count[item] = (count[item] || 0) + 1;
//     }
//     return count;
// }

// console.log(countNumber([2, 1, 2, 2, 1, 5]));


/*
    Bài 5:Đảo ngược mảng 
    Viết một hàm để đảo ngược thứ tự các phần tử trong mảng
*/


// const reverseArray = (arr)=>{
//     for(let i = 0; i < Math.floor(arr.length/2); i++){
//         let temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }

// console.log(`Mang dao nguoc: ${reverseArray([1, 2, 3, 4, 5, 6])}`);

/*
    Bài 6: Loại bỏ phần tử trùng lặp 
    Viết một hàm để loại bỏ các phần tử trùng lặp trong mảng
*/

// const deleteNumber = (arr)=>{
//     let newArray = [];
//     let see = {}; // Tao 1 doi tuong de theo doi
//     for(let i = 0; i < arr.length; i++){
//         if(!see[arr[i]]){
//             newArray.push(arr[i]);
//             see[arr[i]] = true;
//         }
//     }
//     return newArray;
// }

// console.log(`Mang sau khi loc: ${deleteNumber([1, 2, 2, 3, 1, 4])}`);


/*
    Bài 7: Sắp xếp mảng tăng dần 
    Viết một hàm để sắp xếp mảng số theo thứ tự tăng dần
*/

// const arrangeArr = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log('Mang tang dan: ' + arrangeArr([5, 1, 2, 4, 3]));

/*
    Bài 9
    Gộp hai mảng và loại bỏ trùng lặp 
    Viết một hàm để gộp hai mảng thành một mảng mới và loại bỏ các phần tử trùng lặp
*/

// const vongLap = (arr1, arr2) => {
//     const arrTemp = [...arr1]; // Sao chép mảng đầu tiên vào
//     for (let i of arr2) {
//         if (!arrTemp.includes(i)) {
//             arrTemp.push(i);
//         }
//     }
//     return arrTemp;
// };

// console.log(`Vong lap: ${vongLap([1, 2, 3, 4], [3, 4, 5, 6])}`);

/*
    Bài 8: Tìm phần tử xuất hiện nhiều nhất 
    Viết một hàm để tìm phần tử xuất hiện nhiều nhất trong mảng
*/

// const element = (arr)=>{
//     const count = {};
//     for(let i of arr){
//         count[i] = (count[i] || 0) + 1;
//     }
//     let phanTu = null;
//     let xuatHien = 0;
//     for(let i in count){
//         if(count[i] > xuatHien){
//             phanTu = i;
//             xuatHien = count[i];
//         }
//     }
//     return phanTu;
// }

// console.log(`Phan tu xuat hien nhieu nhat la: ${element([1, 3, 2, 1, 1])}`);


/*
    Bài 10: Kiểm tra mảng đối xứng 
    Viết một hàm để kiểm tra xem mảng có phải là đối xứng hay không (phần tử đầu bằng phần tử cuối, phần tử thứ hai bằng phần tử áp cuối,...).
*/

const check = (arr)=>{
    const length = arr.length;
    for(let i = 0; i < Math.floor(length/2); i++){
        if(arr[i] !== arr[length-1-i]){
            return false;
        }
    }
    return true;
}
