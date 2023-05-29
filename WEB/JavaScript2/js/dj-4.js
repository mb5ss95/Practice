const toggleButton = document.querySelector(".toggle-button")
const body = document.querySelector("body")
const hearderNav = document.querySelector(".header-nav")
const bookmarkWrapper = document.querySelector(".bookmark-wrapper")
const texts = document.querySelectorAll(".text")

toggleButton.addEventListener("click", () =>{
    console.log("clicked")
    toggleButton.textContent = "다크모드"

    toggleButton.classList.toggle("toggle-button-darkmode")
    body.classList.toggle("body-background-darkmode")

    hearderNav.classList.toggle("text-darkmode")

    //bookmarkWrapper.classList.toggle("text-darkmode")

    for(let i = 0; i < texts.length; i++){
        texts[i].classList.toggle("text-darkmode")
    }

    if(toggleButton.classList.contains("toggle-button-darkmode")){
        toggleButton.textContent = "일반모드"
    }
})

const searchInput = document.querySelector(".search-input")
searchInput.addEventListener("keyup", (e) => {
    if(e.code=="Enter"){
        if(!e.target.value){
            alert("검색어를 입력하지 않았습니다")
            return
        }
        // https://www.google.com/search?q=
        
        const target = "https://www.google.com/search?q="
        // 첫번째 그냥 이동
        // location.href
        //location.href = target + e.target.value
        
        // 새탭 이동
        // window.open
        window.open(target + e.target.value)
    }
})