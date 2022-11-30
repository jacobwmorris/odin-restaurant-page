import {makeTextElement, makeClassDiv, makeList} from "./htmlelements.js";

function makeChickenSection2() {//TODO: Name
    const section = makeClassDiv("body-section");
    section.appendChild(makeTextElement("h2", "Chicken"));
    section.appendChild(makeList(["6 Wings", "12 Wings", "Chicken Breast"]));
    return section;
}

function makeSauceSection() {
    const section = makeClassDiv("body-section");
    section.appendChild(makeTextElement("h2", "Wing Sauces"));
    section.appendChild(makeList(["Mild", "Medium", "Hot", "Flames of Muspelheim"]));
    return section;
}

function makeSideSection() {
    const section = makeClassDiv("body-section");
    section.appendChild(makeTextElement("h2", "Sides"));
    section.appendChild(makeList(["French Fries", "Slaw", "Baked Beans", "Mac & Cheese"]));
    return section;
}

function makeMenuTab() {
    const tab = makeClassDiv("tab");
    tab.appendChild(makeChickenSection2());
    tab.appendChild(makeSauceSection());
    tab.appendChild(makeSideSection());
    return tab;
}

export default makeMenuTab;
