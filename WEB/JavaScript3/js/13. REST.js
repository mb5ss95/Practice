const chicken = {
    t : "양념",
    d : 2,
    w : 2,
}

const {t, ...another} = chicken;
console.log(t);
console.log(another);


const arr = [1,2,3,4,5,6];
const [one, two, ...other] = arr;

console.log(one)
console.log(two)
console.log(other)