import {makeTextElement} from "./htmlelements.js";

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

export {makeNav, makeFooter};
