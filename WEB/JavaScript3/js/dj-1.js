const arr = [4,3,5,1,6,5];
let cnt = 0;
arr.forEach((a) => {
    if(a % 2 == 1) cnt++;
});

console.log(cnt);