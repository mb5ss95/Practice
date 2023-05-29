const datas = [1,2,3,4,5,6];

const newDatas = datas.filter(data => data > 3);
// 조건에 만족하는 값들만 추출

console.log(newDatas)


//초기 값이 없을때
const sum = datas.reduce((acc, cur) => {
    console.log("acc : " + acc);
    console.log("cur : " + cur);
    return acc + cur;
});

console.log(sum);

// acc : 1
// cur : 2
// acc : 3
// cur : 3
// acc : 6
// cur : 4
// acc : 10
// cur : 5
// acc : 15
// cur : 6
// 21

//초기 값이 있을때
const sum2 = datas.reduce((acc, cur) => {
    acc.push(cur + 1);
    return acc;
}, []);

console.log(sum2);

//값 세기
const arr = ["피카츄", "라이츄", "파이리", "꼬부기", "피카츄", "파이리"];
const result = arr.reduce((acc, cur) => {
    if(acc[cur]) {
        console.log(acc[cur])
        acc[cur] = acc[cur] + 1;
    }
    else acc[cur] = 1;
    return acc;
}, {});

console.log(result);

