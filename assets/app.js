
// creating h1

const heading = document.createElement("h1");

const body = document.querySelector("body")

const headingText = document.createTextNode("Type by clicking mouse or keyboard");
body.appendChild(heading)
heading.append(headingText);

//textarea block
const para = document.createElement("p");
const textArea = document.createElement("textarea");
const teaserText = document.createTextNode("text");
const textAreaBlock = document.createElement("div");
body.appendChild(textAreaBlock);
textAreaBlock.appendChild(para);
textAreaBlock.appendChild(textArea);
para.append(teaserText);
textAreaBlock.classList.add("text_area_block");

//keyboard
const keyboardBlock = document.createElement("div");
keyboardBlock.classList.add("keyboard-block");
body.append(keyboardBlock)
const keyboardKeys = document.createElement("div");
keyboardKeys.classList.add("keyboard_keys");
keyboardBlock.appendChild(keyboardKeys);


const keyLayout = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
   "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "'", "enter",
    "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", ">", "shift", "ctrl",
    "home", "alt", " ", "alt", "<", ">", ">", "ctrl"
];
console.log(keyLayout.length);

    for (let i = 0; i < keyLayout.length; i++) {
        
            textAreaBlock.addEventListener("keydown", (e) => {
                if (e.key === keyLayout[i]) {
                    keyElement.classList.add("active")
                }
            });
        textAreaBlock.addEventListener("keyup", (e) => {
            if (e.key === keyLayout[i]) {
                keyElement.classList.remove("active")
            }
        });
        const keyElement = document.createElement("button");
        keyElement.classList.add("keyboard__key");
        keyboardKeys.appendChild(keyElement);
        keyElement.innerText = keyLayout[i];
        if (keyLayout[i] === " ") {
            keyElement.classList.add("space");
        }
        keyElement.addEventListener("click", ()=>{
            if (keyLayout[i] === "alt" || keyLayout[i] === "shift" || keyLayout[i] === "ctrl" || keyLayout[i] === "home") {
                return " "
            } //todo
              else if (keyLayout[i] === "backspace"){
                console.log("clicked");
                textArea.value = textArea.value.slice(0, -1);
                return ""
            }
                textArea.value += keyLayout[i]  
        });
    }
    