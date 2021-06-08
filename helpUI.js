//help class to create elements html
export default class UI {
  createMsg(msg = "Hello world", size = "30", style = "") {
    const span = document.createElement("span");
    span.classList.add("stroke");
    span.style.fontSize = size + "px";
    span.style.display = style;
    span.innerHTML = msg;
    return span;
  }
}
