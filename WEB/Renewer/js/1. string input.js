const result = prompt("새 문자열 입력");
console.log(result);

// 문자열 -> 배열 형태

const splitResult = result.split(" ");
console.log(splitResult);

const array = [];

for(let i =0; i < splitResult.length; i++){
    array.push(splitResult[i]);
}

console.log(array);