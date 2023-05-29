// querySelector 은 맨 처음 요소를 찾음
// querySelectorAll 은 모든 요소를 찾음

// all은 nodeList값을 리턴해줌
const all = document.querySelectorAll(".lalala")
for(let i = 0; i<3; i++){
    console.log(all[i].textContent)
}



