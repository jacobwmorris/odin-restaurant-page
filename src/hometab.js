import {makeTextElement, makeClassDiv, makeList} from "./htmlelements.js";

function makeHomeTitle() {
    const homeTitle = makeClassDiv("home-title");
    homeTitle.appendChild(makeTextElement("h1", "Odin's Chicken Wings"));
    return homeTitle;
}

function makeChickenSection() {
    const section = makeClassDiv("body-section");
    section.appendChild(makeTextElement("h2", "Divine Quality Chicken"));
    section.appendChild(makeTextElement("p", "The best wings in all the nine realms! \
        Odin's serves only the finest free range \
        chicken from family-owned Asgardian farms, \
        prepared with our secret Aesir family recipe."));
    return section;
}

function makeHoursSection() {
    const section = makeClassDiv("body-section");
    section.appendChild(makeTextElement("h2", "Hours"));

    section.appendChild(makeList(["Sunday: 8am - 8pm", "Monday: 6am - 6pm", "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm", "Thursday: 6am - 10pm", "Friday: 6am - 10pm", "Saturday: 8am - 10pm"]));

    /* const hourList = document.createElement("ul");
    hourList.appendChild(makeTextElement("li", "Sunday: 8am - 8pm"));
    hourList.appendChild(makeTextElement("li", "Monday: 6am - 6pm"));
    hourList.appendChild(makeTextElement("li", "Tuesday: 6am - 6pm"));
    hourList.appendChild(makeTextElement("li", "Wednesday: 6am - 6pm"));
    hourList.appendChild(makeTextElement("li", "Thursday: 6am - 10pm"));
    hourList.appendChild(makeTextElement("li", "Friday: 6am - 10pm"));
    hourList.appendChild(makeTextElement("li", "Saturday: 8am - 10pm")); */

    //section.appendChild(hourList);
    return section;
}

function makeLocationSection() {
    const section = makeClassDiv("body-section");
    section.appendChild(makeTextElement("h2", "Location"));
    section.appendChild(makeTextElement("p", "123 Valhalla Street, Asgard"));
    return section;
}

function makeHomeTab() {
    const tab = makeClassDiv("tab");
    tab.appendChild(makeHomeTitle());
    tab.appendChild(makeChickenSection());
    tab.appendChild(makeHoursSection());
    tab.appendChild(makeLocationSection());
    return tab;
}

export default makeHomeTab;
