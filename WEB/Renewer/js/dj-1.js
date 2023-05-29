const str = "ABCABCMCABCABCMCBBQABC";
const fstr = "ABC";
let index = -1;
let cnt = 0;

while(1){
    index = str.indexOf(fstr, ++index);
    if(index == -1) break;
    console.log(index);
    cnt++;
}
console.log(cnt);