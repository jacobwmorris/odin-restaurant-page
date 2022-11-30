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

//Header/Nav
function makeNavItem(tabName, isSelected) {
    const navItem = document.createElement("li");

    const navButton = document.createElement("button");
    navButton.textContent = tabName;
    if (isSelected) {
        navButton.classList.add("nav-selected");
    }
    navItem.appendChild(navButton);

    return navItem;
}

function makeNavItemList() {
    const navItemList = document.createElement("ul");
    navItemList.classList.add("nav-items");

    navItemList.appendChild(makeNavItem("Home", true));
    navItemList.appendChild(makeNavItem("Menu", false));
    navItemList.appendChild(makeNavItem("Contact", false));
    return navItemList;
}

function makeNav() {
    const nav = document.createElement("nav");

    const odinP = document.createElement("p");
    odinP.textContent = "Odin";

    nav.appendChild(odinP);
    nav.appendChild(makeNavItemList());
    return nav;
}

//Home tab
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

    const hourList = document.createElement("ul");
    hourList.appendChild(makeTextElement("li", "Sunday: 8am - 8pm"));
    hourList.appendChild(makeTextElement("li", "Monday: 6am - 6pm"));
    hourList.appendChild(makeTextElement("li", "Tuesday: 6am - 6pm"));
    hourList.appendChild(makeTextElement("li", "Wednesday: 6am - 6pm"));
    hourList.appendChild(makeTextElement("li", "Thursday: 6am - 10pm"));
    hourList.appendChild(makeTextElement("li", "Friday: 6am - 10pm"));
    hourList.appendChild(makeTextElement("li", "Saturday: 8am - 10pm"));

    section.appendChild(hourList);
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

//Menu tab
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

//Footer
function makeLink(text, href) {
    const link = document.createElement("a");
    link.textContent = text;
    link.setAttribute("href", href);
    return link;
}

function makeImageCreditList() {
    const creditList = document.createElement("ul");

    const bgCredit = makeTextElement("li", "Table cloth background: ");
    bgCredit.appendChild(makeLink("Image by kjpargeter on Freepik",
        "https://www.freepik.com/free-vector/gingham-style-background_897919.htm#query=tablecloth&position=10&from_view=search&track=sph"));

    const chickCredit = makeTextElement("li", "Fried chicken photo: ");
    chickCredit.appendChild(makeLink("Image by jcomp on Freepik",
        "https://www.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_6632395.htm#query=fried%20chicken&position=4&from_view=search&track=sph"));

    creditList.appendChild(bgCredit);
    creditList.appendChild(chickCredit);
    return creditList;
}

function makeFooter() {
    const footer = document.createElement("footer");
    footer.appendChild(makeTextElement("p", "Image credits"));
    footer.appendChild(makeImageCreditList());
    return footer;
}

//Generate initial page
function makeInitialPage() {
    const content = document.querySelector("#content");
    content.appendChild(makeNav());
    //content.appendChild(makeHomeTab());
    content.appendChild(makeMenuTab());
    content.appendChild(makeFooter());
}

makeInitialPage();
