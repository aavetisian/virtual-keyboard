
// creating h1

const heading = document.createElement("h1");

const body = document.querySelector("body")

const headingText = document.createTextNode("Type by clicking mouse or keyboard");
body.appendChild(heading)
heading.append(headingText);

//textarea block
const para = document.createElement("p");
const textArea = document.createElement("textarea");
const teaserText = document.createTextNode("please use ONLY double click for caps");
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


let keyLayout = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
   "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "'",  "enter", "del",
    "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "˄",  "shift", "ctrl",
    "home", "alt", " ", "alt", "<", "˅", ">", "ctrl"
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
        textAreaBlock.addEventListener("keydown", (event)=>{
            if (event.keyCode === 9){
                event.preventDefault();
                textArea.value += `${"  "}`
                    
            }
            
        })
        
        


        
        const keyElement = document.createElement("button");
        keyElement.classList.add("keyboard__key");
        keyboardKeys.appendChild(keyElement);
        keyElement.innerText = keyLayout[i];
        if (keyLayout[i] === " ") {
            keyElement.classList.add("space");
        } else if (keyLayout[i] === "˄"){
            keyElement.classList.add("up");
        }
        else if (keyLayout[i] === "˅") {
            keyElement.classList.add("down");
        }
         else {
            keyElement.classList.add(keyLayout[i]);
        }
        
        
        keyElement.addEventListener("click", ()=>{
            if (keyLayout[i] === "alt" || keyLayout[i] === "shift" || keyLayout[i] === "ctrl" || keyLayout[i] === "home" || keyLayout[i] === "caps") {
                return ""
            }
              else if (keyLayout[i] === "backspace"){
                textArea.value = textArea.value.slice(0, -1);
                return ""
            } else if (keyLayout[i] === "tab") {
                textArea.value += `${"   "}`
                return ""
            }
            
                textArea.value += keyLayout[i]  
        });
        keyElement.addEventListener("click", (event)=>{
            if (keyLayout[i] === "enter") {
                event.preventDefault();
                const currentCursorPosition = textArea.selectionStart;
                const valueBeforeCursor = textArea.value.substring(0, currentCursorPosition);
                const valueAfterCursor = textArea.value.substring(textArea.selectionEnd, textArea.value.length);
                const newTextAreaValue = `${valueBeforeCursor}\n${valueAfterCursor}`;
                textArea.value = newTextAreaValue;
                textArea.selectionStart = currentCursorPosition + 1;
                textArea.selectionEnd = currentCursorPosition + 1;
                return  `${""}`
            }

        })

        // caps

        keyElement.addEventListener("dblclick", () => {
            if (keyLayout[i] === "alt" || keyLayout[i] === "shift" || keyLayout[i] === "ctrl" || keyLayout[i] === "home" || keyLayout[i] === "caps") {
                return ""
            }
        });
        keyElement.addEventListener("dblclick", () => {
            if (keyLayout[i] === "caps") {
                keyElement.classList.add("active");
                const upper = keyLayout.map(element => {
                    return element.toUpperCase()
                })
                keyLayout = upper
            }  else if (keyElement.classList.contains("active")) {
                
                keyElement.classList.remove("active");
                const lower = keyLayout.map(element => {
                    return element.toLowerCase()
                })
                keyLayout = lower
                textArea.value = ""
            } 
                
        })
    }
    