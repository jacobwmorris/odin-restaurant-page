//General
function makeTextElement(type, content) {
    const textElem = document.createElement(type);
    textElem.textContent = content;
    return textElem;
}

function makeClassDiv(className) {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
}

function makeList(listItems) {
    const list = document.createElement("ul");

    for (const item of listItems) {
        list.appendChild(makeTextElement("li", item));
    }
    return list;
}

export {makeTextElement, makeClassDiv, makeList};
