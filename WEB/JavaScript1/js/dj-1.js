const showAlert = (e) =>{
    alert("무야호~")
    console.log(e.target.value)
}

for(let i = 1; i<6; i++){
    const btn = document.createElement("button");
    btn.setAttribute("class", "sample-btn-"+i);
    btn.setAttribute("value", "버튼"+i);
    btn.append(document.createTextNode("버튼"+i));
    btn.addEventListener("click", showAlert);
    document.querySelector("body").append(btn);
}