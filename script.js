var inputText = document.querySelector("#translate-input")
var translateButton = document.querySelector("#translate-button")
var outputText = document.querySelector("#translate-output")

var url = "https://api.funtranslations.com/translate/pirate.json"

function buildURL(text){
    return url + "?" + "text=" + text
}


function btnClicked(){
console.log(translateButton)
console.log(inputText.value)
console.log(buildURL(inputText.value))

fetch(buildURL(inputText.value))
.then(response => response.json())
.then(data => {
    outputText.innerText = data.contents.translated;
    console.log(data)
})
}

translateButton.addEventListener("click", btnClicked)