const datas = [1,2,3,4,5,6,7,];

datas.find((data) => data > 4);


// 5, 6, 7
// 없으면 undefine

console.log(datas.findIndex(data => data > 4));

// 해당하는 인덱스 반환
// 없으면 -1 리턴