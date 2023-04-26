
// creating h1

const heading = document.createElement("h1");

const body = document.querySelector("body")

const headingText = document.createTextNode("Type by clicking mouse or keyboard");
body.appendChild(heading)
heading.append(headingText);

//textarea
const para = document.createElement("p");
const textArea = document.createElement("textarea");
const teaserText = document.createTextNode("text");
const textAreaBlock = document.createElement("div");
body.appendChild(textAreaBlock);
textAreaBlock.appendChild(para);
textAreaBlock.appendChild(textArea);
para.append(teaserText);
textAreaBlock.classList.add("text_area_block")

