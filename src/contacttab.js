import {makeTextElement, makeClassDiv, makeList} from "./htmlelements.js";

function makeOdinSection() {
    const section = makeClassDiv("body-section");
    section.appendChild(makeTextElement("h2", "Odin"));
    section.appendChild(makeList(["Manager", "111-111-1111", "OdinAllFather@godmail.com"]));
    return section;
}

function makeThorSection() {
    const section = makeClassDiv("body-section");
    section.appendChild(makeTextElement("h2", "Thor"));
    section.appendChild(makeList(["Head Chef", "111-111-1112", "AwesomeThunderCrusherMan420@godmail.com"]));
    return section;
}

function makeLokiSection() {
    const section = makeClassDiv("body-section");
    section.appendChild(makeTextElement("h2", "Loki"));
    section.appendChild(makeList(["I don't actually work here lul.", "Also the food is terrible.", "( ͡° ͜ʖ ͡°)."]));
    return section;
}

function makeContactTab() {
    const tab = makeClassDiv("tab");
    tab.appendChild(makeTextElement("h1", "Questions? Comments? Suggestions? Contact us here!"));
    tab.appendChild(makeOdinSection());
    tab.appendChild(makeThorSection());
    tab.appendChild(makeLokiSection());
    return tab;
}

export default makeContactTab;
