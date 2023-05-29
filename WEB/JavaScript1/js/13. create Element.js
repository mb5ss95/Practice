const btn = document.createElement("button"); // object 타입임
console.log(btn) // <button></button> 

const txt = document.createTextNode("나를 눌러라~");
console.log(txt) // 민코월드

btn.append(txt);
btn.addEventListener("click", showAlert);
btn.setAttribute("class", "sample-btn")

document.querySelector("body").append(btn)

function showAlert(){
    alert("무야호~")
}

