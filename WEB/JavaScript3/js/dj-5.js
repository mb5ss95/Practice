const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,];

const result = arr.reduce((acc, cur) => {
    if(cur % 2 === 0) {
        if(acc[0]) acc[0] = 1;
        else acc[0] = acc[0] + 1;
    }
    else {
        if(acc[1]) acc[1] = 1;
        acc[1] = acc[1] + 1; 
    }

    return acc;
}, {});

console.log(result);
