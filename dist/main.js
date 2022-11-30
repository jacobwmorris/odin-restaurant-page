/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function makeNavItem(tabName, isSelected) {\n    const navButton = document.createElement(\"button\");\n    navButton.textContent = tabName;\n    if (isSelected) {\n        navButton.classList.add(\"nav-selected\");\n    }\n\n    const navItem = document.createElement(\"li\");\n    navItem.appendChild(navButton);\n    return navItem;\n}\n\nfunction makeNavItemList() {\n    const navItemList = document.createElement(\"ul\");\n    navItemList.classList.add(\"nav-items\");\n\n    navItemList.appendChild(makeNavItem(\"Home\", true));\n    //TODO: menu and contact items\n    return navItemList;\n}\n\nfunction makeNav() {\n    const nav = document.createElement(\"nav\");\n\n    const odinP = document.createElement(\"p\");\n    odinP.textContent = \"Odin\";\n\n    nav.appendChild(odinP);\n    nav.appendChild(makeNavItemList());\n    return nav;\n}\n\nfunction makeTextElement(type, content) {\n    const textElem = document.createElement(type);\n    textElem.textContent = content;\n    return textElem;\n}\n\nfunction makeHomeTitle() {\n    const homeTitle = document.createElement(\"div\");\n    homeTitle.classList.add(\"home-title\");\n    homeTitle.appendChild(makeTextElement(\"h1\", \"Odin's Chicken Wings\"));\n    return homeTitle;\n}\n\nfunction makeChickenSection() {\n    const section = document.createElement(\"div\");\n    section.classList.add(\"body-section\");\n    section.appendChild(makeTextElement(\"h2\", \"Divine Quality Chicken\"));\n    section.appendChild(makeTextElement(\"p\", \"The best wings in all the nine realms! \\\n        Odin's serves only the finest free range \\\n        chicken from family-owned Asgardian farms, \\\n        prepared with our secret Aesir family recipe.\"));\n    return section;\n}\n\nfunction makeHoursSection() {\n    const section = document.createElement(\"div\");\n    section.classList.add(\"body-section\");\n    section.appendChild(makeTextElement(\"h2\", \"Hours\"));\n\n    const hourList = document.createElement(\"ul\");\n    hourList.appendChild(makeTextElement(\"li\", \"Sunday: 8am - 8pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Monday: 6am - 6pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Tuesday: 6am - 6pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Wednesday: 6am - 6pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Thursday: 6am - 10pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Friday: 6am - 10pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Saturday: 8am - 10pm\"));\n\n    section.appendChild(hourList);\n    return section;\n}\n\nfunction makeLocationSection() {\n    const section = document.createElement(\"div\");\n    section.classList.add(\"body-section\");\n    section.appendChild(makeTextElement(\"h2\", \"Location\"));\n    section.appendChild(makeTextElement(\"p\", \"123 Valhalla Street, Asgard\"));\n    return section;\n}\n\nfunction makeHomeTab() {\n    const tab = document.createElement(\"div\");\n    tab.classList.add(\"tab\");\n    tab.appendChild(makeHomeTitle());\n    tab.appendChild(makeChickenSection());\n    tab.appendChild(makeHoursSection());\n    tab.appendChild(makeLocationSection());\n    return tab;\n}\n\nfunction makeLink(text, href) {\n    const link = document.createElement(\"a\");\n    link.textContent = text;\n    link.setAttribute(\"href\", href);\n    return link;\n}\n\nfunction makeImageCreditList() {\n    const creditList = document.createElement(\"ul\");\n\n    const bgCredit = makeTextElement(\"li\", \"Table cloth background: \");\n    bgCredit.appendChild(makeLink(\"Image by kjpargeter on Freepik\",\n        \"https://www.freepik.com/free-vector/gingham-style-background_897919.htm#query=tablecloth&position=10&from_view=search&track=sph\"));\n\n    const chickCredit = makeTextElement(\"li\", \"Fried chicken photo: \");\n    chickCredit.appendChild(makeLink(\"Image by jcomp on Freepik\",\n        \"https://www.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_6632395.htm#query=fried%20chicken&position=4&from_view=search&track=sph\"));\n\n    creditList.appendChild(bgCredit);\n    creditList.appendChild(chickCredit);\n    return creditList;\n}\n\nfunction makeFooter() {\n    const footer = document.createElement(\"footer\");\n    footer.appendChild(makeTextElement(\"p\", \"Image credits\"));\n    footer.appendChild(makeImageCreditList());\n    return footer;\n}\n\nfunction makeInitialPage() {\n    const content = document.querySelector(\"#content\");\n    content.appendChild(makeNav());\n    content.appendChild(makeHomeTab());\n    content.appendChild(makeFooter());\n}\n\nmakeInitialPage();\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;