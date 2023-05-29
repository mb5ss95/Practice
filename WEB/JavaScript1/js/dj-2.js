const textContents = document.querySelector("#NM_FAVORITE").textContent.split('\n')
const contents = []

for (const content in textContents) {
    const temp = textContents[content]
    if(temp !== ""){
        contents.push(temp)
    }
  }

console.log(contents)