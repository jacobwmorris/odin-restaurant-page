import {makeTextElement} from "./htmlelements.js";
import {makeNav, makeFooter} from "./navfooter.js";
import makeHomeTab from "./hometab.js";
import makeMenuTab from "./menutab.js";
import makeContactTab from "./contacttab.js"

function switchTab() {
    if (this.classList.contains("nav-selected")) {
        return;
    }

    const content = document.querySelector("#content");
    const currentTab = document.querySelector(".tab");
    const newTabName = this.textContent;

    switch (newTabName) {
        case "Home":
            content.replaceChild(makeHomeTab(), currentTab);
            break;
        case "Menu":
            content.replaceChild(makeMenuTab(), currentTab);
            break;
        case "Contact":
            content.replaceChild(makeContactTab(), currentTab);
            break;
    }

    document.querySelector(".nav-selected").classList.remove("nav-selected");
    this.classList.add("nav-selected");
}

function makeInitialPage() {
    const content = document.querySelector("#content");
    content.appendChild(makeNav());
    content.appendChild(makeHomeTab());
    content.appendChild(makeFooter());

    const navButtons = document.querySelectorAll(".nav-items button");
    for (const button of navButtons) {
        button.addEventListener("click", switchTab);
    }
}

makeInitialPage();
