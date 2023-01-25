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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Car\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n  constructor(id, make, model, year) {\n    this.id = id;\n    this.make = make;\n    this.model = model;\n    this.year = year;\n  }\n}\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.js */ \"./src/wishlist.js\");\nconsole.log(\"Hello World\");\n\n\n\nconst submitForm = document.getElementById(\"submitForm\");\nconst yearInput = document.getElementById(\"yearInput\");\nconst makeInput = document.getElementById(\"makeInput\");\nconst modelInput = document.getElementById(\"modelInput\");\nconst carYear = document.getElementById(\"car-year\");\nconst carMake = document.getElementById(\"car-make\");\nconst carModel = document.getElementById(\"car-model\");\nconst removeBtn = document.querySelector(\".removeBtn\");\nconst wishListEle = document.querySelector(\"#wishListContainer > ul\");\n\nconst wishList = new _wishlist_js__WEBPACK_IMPORTED_MODULE_0__.WishList();\n\nfunction showCarDetails(car) {\n  carYear.textContent = car.year;\n  carMake.textContent = car.make;\n  carModel.textContent = car.model;\n  removeBtn.disabled = false;\n  removeBtn.setAttribute(\"data-carId\", car.id);\n}\n\nfunction updateDOMList() {\n  // Deletes old list, w/o replaceChildren you get redundant lists\n  wishListEle.replaceChildren(); \n  // Re-creates/Creates new list \n  wishList.list.forEach((car) => {\n    const li = document.createElement(\"li\");\n    li.style.cursor = \"pointer\";\n    li.textContent = `${car.make} ${car.model}`;\n    li.addEventListener(\"click\", () => showCarDetails(car));\n    wishListEle.appendChild(li);\n  });\n}\n\nfunction addCar(event) {\n  event.preventDefault();\n  // Set car values\n  let make = makeInput.value;\n  let model = modelInput.value;\n  let year = yearInput.value;\n\n  // Add car onto list\n  wishList.add(make, model, year);\n  // Rebuild the new list\n  updateDOMList();\n\n  // Clear inputs once car has been added to list\n  makeInput.value = \"\";\n  modelInput.value = \"\";\n  yearInput.value = \"\";\n}\n\nfunction removeCar() {\n  // Get car Id\n  let carId = Number(removeBtn.getAttribute(\"data-carId\"));\n\n  // Remove Car from list\n  wishList.remove(carId);\n  // Rebuild the new list\n  updateDOMList();\n\n  // Clear vehicle info and disable remove button\n  carMake.textContent = \"\";\n  carModel.textContent = \"\";\n  carYear.textContent = \"\";\n  removeBtn.disabled = true;\n}\n\nsubmitForm.addEventListener(\"submit\", addCar);\nremoveBtn.addEventListener(\"click\", removeCar);\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WishList\": () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\n\nclass WishList {\n  constructor() {\n    this.list = [];\n    this.nextID = 0;\n  }\n\n  add(make, model, year) {\n    let car = new _car_js__WEBPACK_IMPORTED_MODULE_0__.Car(++this.nextID, make, model, year);\n    this.list.push(car);\n  }\n\n  remove(carId) {\n    this.list = this.list.filter(car => car.id != carId);\n\n    /* Other methods of removing. However only the method above would remove more than 1. \n    The methods below will only remove 1 item */ \n    // this.list.forEach((car, index) => {\n    //   if(car.id == carId) {\n    //     this.list.splice(index, 1);\n    //   }\n    // });\n\n    // const foundIndex = this.list.findIndex(ele => ele.id == cardId);\n    // this.list.splice(foundIndex, 1);\n  }\n}\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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