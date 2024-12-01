const element = (arr)=>{
    const count = {};
    for(let i of arr){
        count[i] = (count[i] || 0) + 1;
    }
    let phanTu = null;
    let xuatHien = 0;
    for(let i in count){
        if(count[i] > xuatHien){
            phanTu = i;
            xuatHien = count[i];
        }
    }
    return phanTu;
}

console.log(`Phan tu xuat hien nhieu nhat la: ${element([1, 3, 2, 1, 1])}`);