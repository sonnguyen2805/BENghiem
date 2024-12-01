const vongLap = (arr1, arr2) => {
    const arrTemp = [...arr1]; // Sao chép mảng đầu tiên vào
    for (let i of arr2) {
        if (!arrTemp.includes(i)) {
            arrTemp.push(i);
        }
    }
    return arrTemp;
};

console.log(`Vong lap: ${vongLap([1, 2, 3, 4], [3, 4, 5, 6])}`);