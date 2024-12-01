// let a = Number(prompt(`Nhập số A: `));
// let b = Number(prompt(`Nhập số B: `));
// let z = a + b;
// alert(`Tong 2 so: ${z}`);

// for (let i = 1; i <= 100; i++) {
//     if(i % 3 === 0){
//         console.log("Fizz");
//     }else if(i % 5 === 0){
//         console.log("Buzz");
//     }else if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }
// }

//Tim hoc sinh co diem cao nhat trong mang
const student = [{name: "Hùng", score: 75}, {name: "Mai", score: 85}, {name: "Lan", score: 90}];

// C1
// let maxx = student[0].score;
// let studentIndex = student[0];
// for (let index = 0; index < student.length; index++) {
//     if(maxx < student[index].score){
//         maxx = student[index].score;
//         studentIndex = student[index];
//     }
// }
// console.log(`${studentIndex.name} : ${maxx}đ`);

//C2
// const maxScore = student.reduce((highest, student)=>
//     student.score > highest.score ? student : highest
// );
// console.log(maxScore);


/*
    Viết một chương trình quản lý danh sách sản phẩm với các chức năng: 
    Thêm sản phẩm mới vào danh sách. 
    Hiển thị danh sách sản phẩm. 
    Tìm kiếm sản phẩm theo tên. 
    Tính tổng giá trị các sản phẩm.


    let products = [ { name: "Laptop", price: 1500 }, { name: "Phone", price: 800 }, { name: "Tablet", price: 400 } ];
*/
let products = [ { name: "Laptop", price: 1500 }, { name: "Phone", price: 800 }, { name: "Tablet", price: 400 } ];
function add(name, price) {
    products.push({name, price});
    console.log(`Sản phẩm ${name} đã được thêm vào danh sách`);
}

function display() {
    console.log("Danh sách sản phẩm: ");
    products.forEach((product, index)=>{
        console.log(`${index + 1}.${product.name} - ${product.price} USD`);
    })
}

function found(name) {
    const result = products.filter(product=>product.name.toLowerCase().includes(name.toLowerCase()));
    if(result.length > 0){
        console.log("Kết quả tìm kiếm");
        result.forEach(product=>console.log(`${product.name} - ${product.price} USD`));
    }else{
        console.log(`Không tìm thấy sản phẩm với tên ${name}`);
    }
}

function sum() {
    const totalValute = products.reduce((total, product)=>total+product.price, 0);
    console.log(`${totalValute}`);
}

add("AppleWatch", 400);
display();
found("Phone"); 
sum();