const bucketList = [
    {
        id : 1,
        text : "여행가기",
        done : false,
    },
    {
        id : 2,
        text : "치킨먹기",
        done : true,
    },
    {
        id : 3,
        text : "코딩하기",
        done : true,
    },
    {
        id : 4,
        text : "요리하기",
        done : false,
    },
]

const nowList = bucketList.filter((a) => a.done === false);
console.log(nowList)