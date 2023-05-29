
const buttons = document.querySelectorAll(".btn")
for(let btn in buttons){
    console.log(buttons[btn])
    buttons[btn].addEventListener("click", () =>{
        alert("hello!")
    })
}