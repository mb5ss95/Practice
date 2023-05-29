const datas = [1,2,3,4,5,6,7,];
console.log(datas.some(data => data > 6));


// 하나의 원소만 조건에 충족해도 true를 반환함

console.log(datas.every(data => data > 6));

// 모든 원소가 조건에 충족해야 true를 반환함