
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
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
    "space"
];

function createKeyboard(){
    for (let i = 0; i < keyLayout.length; i++) {
        
        const key = document.createElement("button");
        key.classList.add("keyboard__key")
        console.log(key);
        keyboardKeys.appendChild(key)
        key.innerText = keyLayout[i]
    }
    
}

createKeyboard()
