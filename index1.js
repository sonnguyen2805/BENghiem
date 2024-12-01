// // Number
// let age= 25;
// let pi = 3.14;
// let bigNumber = 1e6;
// let notNumber = 2 * 'hi';
// // console.log(notNumber);
// let inf = 10/0;
// // console.log(inf);


// // Boolean: true false
// let isLoggedIn = true;
// console.log(isLoggedIn);


// //String
// let firstName = 'Son';
// let first_name = "Duc";
// let hello = `Xin chao ${firstName} and ${first_name}`;
// console.log(hello);



// //Null
// // let user = null;
// // console.log(user);


// //Underfined
// // let user;
// // console.log(user);


// //Object
// const user = {
//     name: "Son",
//     age: 18,
//     gender: "Male",
//     isStudent: true
// }

// console.log(user);
// // console.log(user['age']);

// user.isStudent = false;
// console.log(user);


// let user = {
//     name: "Son"
// }

// Tạo một chương trình tính tổng hai số được nhập từ người dùng và in kết quả ra console.
// const a = Number(prompt(`Nhap so A: `));
// const b = Number(prompt(`Nhap so B: `));
// const z = a+b;
// alert(`a+b = ${z}`);

for (let i = 1; i <= 10; i++) {
    if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log("FizzBuzz");
    }
}


//unshift: them phan tu vao dau
//shift: xoa phan tu dau
