var arr = ['가','나','다','라'];

arr.forEach(function(item,index,arr2){
    console.log(item,index,arr2[index+1]);
})
//첫번쨰 인수는 배열의 각각의 item
//두번쨰 인수는 배열의 index
//세번째 인수는 배열 그자체

arr.forEach((i) => {
    console.log(i);
})