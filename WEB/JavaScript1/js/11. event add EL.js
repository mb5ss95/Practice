function showAlert2(){
    alert("나를 눌렀지롱~22");
}

const showAlert = () => {
    alert("나를 눌렀지롱~");
}

const sampleBtn = document.querySelector(".sample-btn");

sampleBtn.addEventListener("click", showAlert);