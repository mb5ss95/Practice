function sample(){
    console.log("일반형입니다")
}

const sample2 = () => console.log("축약형입니다");
const sample3 = function(){
    console.log("축약형2입니다")
};

sample()
// 일반형입니다

sample2()
// 축약형입니다

sample3()
// 축약형2입니다

console.log(sample)
/* 
ƒ sample(){
    console.log("일반형입니다")
}
*/

console.log(sample2)
// () => console.log("축약형입니다")

console.log(sample3)
/*
ƒ (){
    console.log("축약형2입니다")
}
*/