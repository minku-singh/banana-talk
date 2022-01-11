//references
let btn = document.querySelector("button");
let txtInput = document.querySelector(".input");
let content = document.querySelector(".content");

//events
btn.addEventListener("click", handleBtnClick);

//logic----------

//minion api url
let serverUrl = "https://api.funtranslations.com/translate/minion.json";

//mock url
// let serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

//translate the urlText
function translatedUrl(inputText){
    return `${serverUrl}?text=${inputText}`;
} 

function handleBtnClick(){
    let text = txtInput.value;
    fetch(translatedUrl(text))
    .then(response => response.json())
    .then(json => {
        translatedText = json.contents.translated;
        return(content.textContent = translatedText);
    })
    .catch(error => console.log(error));
}



