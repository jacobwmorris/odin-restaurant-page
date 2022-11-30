/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacttab.js":
/*!***************************!*\
  !*** ./src/contacttab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _htmlelements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlelements.js */ \"./src/htmlelements.js\");\n\n\nfunction makeOdinSection() {\n    const section = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"body-section\");\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"h2\", \"Odin\"));\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeList)([\"Manager\", \"111-111-1111\", \"OdinAllFather@godmail.com\"]));\n    return section;\n}\n\nfunction makeThorSection() {\n    const section = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"body-section\");\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"h2\", \"Thor\"));\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeList)([\"Head Chef\", \"111-111-1112\", \"AwesomeThunderCrusherMan420@godmail.com\"]));\n    return section;\n}\n\nfunction makeLokiSection() {\n    const section = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"body-section\");\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"h2\", \"Loki\"));\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeList)([\"I don't actually work here lul.\", \"Also the food is terrible.\", \"( ͡° ͜ʖ ͡°).\"]));\n    return section;\n}\n\nfunction makeContactTab() {\n    const tab = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"tab\");\n    tab.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"h1\", \"Questions? Comments? Suggestions? Contact us here!\"));\n    tab.appendChild(makeOdinSection());\n    tab.appendChild(makeThorSection());\n    tab.appendChild(makeLokiSection());\n    return tab;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeContactTab);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contacttab.js?");

/***/ }),

/***/ "./src/hometab.js":
/*!************************!*\
  !*** ./src/hometab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _htmlelements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlelements.js */ \"./src/htmlelements.js\");\n\n\nfunction makeHomeTitle() {\n    const homeTitle = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"home-title\");\n    homeTitle.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"h1\", \"Odin's Chicken Wings\"));\n    return homeTitle;\n}\n\nfunction makeChickenSection() {\n    const section = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"body-section\");\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"h2\", \"Divine Quality Chicken\"));\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"p\", \"The best wings in all the nine realms! \\\n        Odin's serves only the finest free range \\\n        chicken from family-owned Asgardian farms, \\\n        prepared with our secret Aesir family recipe.\"));\n    return section;\n}\n\nfunction makeHoursSection() {\n    const section = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"body-section\");\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"h2\", \"Hours\"));\n\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeList)([\"Sunday: 8am - 8pm\", \"Monday: 6am - 6pm\", \"Tuesday: 6am - 6pm\",\n        \"Wednesday: 6am - 6pm\", \"Thursday: 6am - 10pm\", \"Friday: 6am - 10pm\", \"Saturday: 8am - 10pm\"]));\n\n    /* const hourList = document.createElement(\"ul\");\n    hourList.appendChild(makeTextElement(\"li\", \"Sunday: 8am - 8pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Monday: 6am - 6pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Tuesday: 6am - 6pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Wednesday: 6am - 6pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Thursday: 6am - 10pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Friday: 6am - 10pm\"));\n    hourList.appendChild(makeTextElement(\"li\", \"Saturday: 8am - 10pm\")); */\n\n    //section.appendChild(hourList);\n    return section;\n}\n\nfunction makeLocationSection() {\n    const section = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"body-section\");\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"h2\", \"Location\"));\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"p\", \"123 Valhalla Street, Asgard\"));\n    return section;\n}\n\nfunction makeHomeTab() {\n    const tab = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"tab\");\n    tab.appendChild(makeHomeTitle());\n    tab.appendChild(makeChickenSection());\n    tab.appendChild(makeHoursSection());\n    tab.appendChild(makeLocationSection());\n    return tab;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHomeTab);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/hometab.js?");

/***/ }),

/***/ "./src/htmlelements.js":
/*!*****************************!*\
  !*** ./src/htmlelements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeClassDiv\": () => (/* binding */ makeClassDiv),\n/* harmony export */   \"makeList\": () => (/* binding */ makeList),\n/* harmony export */   \"makeTextElement\": () => (/* binding */ makeTextElement)\n/* harmony export */ });\n//General\nfunction makeTextElement(type, content) {\n    const textElem = document.createElement(type);\n    textElem.textContent = content;\n    return textElem;\n}\n\nfunction makeClassDiv(className) {\n    const div = document.createElement(\"div\");\n    div.classList.add(className);\n    return div;\n}\n\nfunction makeList(listItems) {\n    const list = document.createElement(\"ul\");\n\n    for (const item of listItems) {\n        list.appendChild(makeTextElement(\"li\", item));\n    }\n    return list;\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/htmlelements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _htmlelements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlelements.js */ \"./src/htmlelements.js\");\n/* harmony import */ var _navfooter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navfooter.js */ \"./src/navfooter.js\");\n/* harmony import */ var _hometab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hometab.js */ \"./src/hometab.js\");\n/* harmony import */ var _menutab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menutab.js */ \"./src/menutab.js\");\n/* harmony import */ var _contacttab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacttab.js */ \"./src/contacttab.js\");\n\n\n\n\n\n\nfunction switchTab() {\n    if (this.classList.contains(\"nav-selected\")) {\n        return;\n    }\n\n    const content = document.querySelector(\"#content\");\n    const currentTab = document.querySelector(\".tab\");\n    const newTabName = this.textContent;\n\n    switch (newTabName) {\n        case \"Home\":\n            content.replaceChild((0,_hometab_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), currentTab);\n            break;\n        case \"Menu\":\n            content.replaceChild((0,_menutab_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), currentTab);\n            break;\n        case \"Contact\":\n            content.replaceChild((0,_contacttab_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), currentTab);\n            break;\n    }\n\n    document.querySelector(\".nav-selected\").classList.remove(\"nav-selected\");\n    this.classList.add(\"nav-selected\");\n}\n\nfunction makeInitialPage() {\n    const content = document.querySelector(\"#content\");\n    content.appendChild((0,_navfooter_js__WEBPACK_IMPORTED_MODULE_1__.makeNav)());\n    content.appendChild((0,_hometab_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    content.appendChild((0,_navfooter_js__WEBPACK_IMPORTED_MODULE_1__.makeFooter)());\n\n    const navButtons = document.querySelectorAll(\".nav-items button\");\n    for (const button of navButtons) {\n        button.addEventListener(\"click\", switchTab);\n    }\n}\n\nmakeInitialPage();\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menutab.js":
/*!************************!*\
  !*** ./src/menutab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _htmlelements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlelements.js */ \"./src/htmlelements.js\");\n\n\nfunction makeChickenSection2() {//TODO: Name\n    const section = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"body-section\");\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"h2\", \"Chicken\"));\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeList)([\"6 Wings\", \"12 Wings\", \"Chicken Breast\"]));\n    return section;\n}\n\nfunction makeSauceSection() {\n    const section = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"body-section\");\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"h2\", \"Wing Sauces\"));\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeList)([\"Mild\", \"Medium\", \"Hot\", \"Flames of Muspelheim\"]));\n    return section;\n}\n\nfunction makeSideSection() {\n    const section = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"body-section\");\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"h2\", \"Sides\"));\n    section.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeList)([\"French Fries\", \"Slaw\", \"Baked Beans\", \"Mac & Cheese\"]));\n    return section;\n}\n\nfunction makeMenuTab() {\n    const tab = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeClassDiv)(\"tab\");\n    tab.appendChild(makeChickenSection2());\n    tab.appendChild(makeSauceSection());\n    tab.appendChild(makeSideSection());\n    return tab;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMenuTab);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menutab.js?");

/***/ }),

/***/ "./src/navfooter.js":
/*!**************************!*\
  !*** ./src/navfooter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeFooter\": () => (/* binding */ makeFooter),\n/* harmony export */   \"makeNav\": () => (/* binding */ makeNav)\n/* harmony export */ });\n/* harmony import */ var _htmlelements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlelements.js */ \"./src/htmlelements.js\");\n\n\n//Header/Nav\nfunction makeNavItem(tabName, isSelected) {\n    const navItem = document.createElement(\"li\");\n\n    const navButton = document.createElement(\"button\");\n    navButton.textContent = tabName;\n    if (isSelected) {\n        navButton.classList.add(\"nav-selected\");\n    }\n    navItem.appendChild(navButton);\n\n    return navItem;\n}\n\nfunction makeNavItemList() {\n    const navItemList = document.createElement(\"ul\");\n    navItemList.classList.add(\"nav-items\");\n\n    navItemList.appendChild(makeNavItem(\"Home\", true));\n    navItemList.appendChild(makeNavItem(\"Menu\", false));\n    navItemList.appendChild(makeNavItem(\"Contact\", false));\n    return navItemList;\n}\n\nfunction makeNav() {\n    const nav = document.createElement(\"nav\");\n\n    const odinP = document.createElement(\"p\");\n    odinP.textContent = \"Odin\";\n\n    nav.appendChild(odinP);\n    nav.appendChild(makeNavItemList());\n    return nav;\n}\n\n//Footer\nfunction makeLink(text, href) {\n    const link = document.createElement(\"a\");\n    link.textContent = text;\n    link.setAttribute(\"href\", href);\n    return link;\n}\n\nfunction makeImageCreditList() {\n    const creditList = document.createElement(\"ul\");\n\n    const bgCredit = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"li\", \"Table cloth background: \");\n    bgCredit.appendChild(makeLink(\"Image by kjpargeter on Freepik\",\n        \"https://www.freepik.com/free-vector/gingham-style-background_897919.htm#query=tablecloth&position=10&from_view=search&track=sph\"));\n\n    const chickCredit = (0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"li\", \"Fried chicken photo: \");\n    chickCredit.appendChild(makeLink(\"Image by jcomp on Freepik\",\n        \"https://www.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_6632395.htm#query=fried%20chicken&position=4&from_view=search&track=sph\"));\n\n    creditList.appendChild(bgCredit);\n    creditList.appendChild(chickCredit);\n    return creditList;\n}\n\nfunction makeFooter() {\n    const footer = document.createElement(\"footer\");\n    footer.appendChild((0,_htmlelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTextElement)(\"p\", \"Image credits\"));\n    footer.appendChild(makeImageCreditList());\n    return footer;\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/navfooter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;