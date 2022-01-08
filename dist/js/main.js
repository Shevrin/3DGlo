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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst deadline = '13 january 2022 00:00'\r\n\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(deadline)\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n\tconst calcSelect = document.querySelector('.calc-item ')\r\n\tconst inputs = document.querySelectorAll('.calc-block > input[type=text]')\r\n\tconst total = document.getElementById('total')\r\n\tcalcSelect.value = ''\r\n\tlet calcSelectData = 0\r\n\r\n\tinputs.forEach(element => {\r\n\t\telement.value = ''\r\n\t});\r\n\r\n\tinputs.forEach(item => item.addEventListener('input', (e) => {\r\n\t\tlet reg = new RegExp('^[0-9]*$')\r\n\t\tif (reg.test(e.target.value)) {\r\n\t\t} else {\r\n\t\t\talert('Введите число')\r\n\t\t\titem.value = ''\r\n\t\t}\r\n\t\ttotal.textContent = calcSelectData * inputs[0].value * inputs[1].value * inputs[2].value\r\n\t}))\r\n\r\n\tcalcSelect.addEventListener('input', (e) => {\r\n\t\tif (e.target.value) {\r\n\t\t\tcalcSelectData = e.target.value\r\n\t\t} else {\r\n\t\t\tcalcSelectData = 0\r\n\t\t}\r\n\t\ttotal.textContent = calcSelectData * inputs[0].value * inputs[1].value * inputs[2].value\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\tconst menuBtn = document.querySelector('.menu')\r\n\tconst menu = document.querySelector('menu')\r\n\t// const closeBrn = menu.querySelector('.close-btn')\r\n\t// const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n\tconst handleMenu = () => {\r\n\t\t// if (!menu.style.transform) {\r\n\t\t// \tmenu.style.transform = `translateX(00%)`\r\n\t\t// } else {\r\n\t\t// \tmenu.style.transform = ''\r\n\t\t// }\r\n\t\tmenu.classList.toggle('active-menu')\r\n\t}\r\n\r\n\tmenuBtn.addEventListener('click', handleMenu)\r\n\r\n\tmenu.addEventListener('click', (e) => {\r\n\t\tif (e.target.classList.contains('close-btn') || e.target.matches('a')) {\r\n\t\t\thandleMenu()\r\n\t\t} else {\r\n\r\n\t\t}\r\n\t})\r\n\r\n\r\n\t// closeBrn.addEventListener('click', handleMenu)\r\n\r\n\t// menuItems.forEach(item => item.addEventListener('click', handleMenu))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n\tconst popupBtn = document.querySelectorAll('.popup-btn')\r\n\tconst modal = document.querySelector('.popup')\r\n\t// const closeBtn = modal.querySelector('.popup-close')\r\n\tconst widthScreen = document.documentElement.offsetWidth\r\n\t// const submitBtn = modal.querySelector('.form-btn')\r\n\tlet opacity = 0\r\n\r\n\tconst openModal = () => {\r\n\t\tmodal.style.display = 'block'\r\n\t\tmodal.style.opacity = opacity\r\n\t\tconst anim = () => {\r\n\t\t\topacity += 0.1\r\n\t\t\tmodal.style.opacity = opacity\r\n\t\t\tif (opacity < 1) requestAnimationFrame(anim)\r\n\t\t}\r\n\t\trequestAnimationFrame(anim)\r\n\t}\r\n\r\n\tconst closeModal = () => {\r\n\t\tconst anim = () => {\r\n\t\t\topacity -= 0.1\r\n\t\t\tmodal.style.opacity = opacity\r\n\t\t\tif (opacity > 0) {\r\n\t\t\t\trequestAnimationFrame(anim)\r\n\t\t\t} else {\r\n\t\t\t\tmodal.style.display = ''\r\n\t\t\t}\r\n\t\t}\r\n\t\trequestAnimationFrame(anim)\r\n\t}\r\n\r\n\tpopupBtn.forEach(item => item.addEventListener('click', () => {\r\n\t\tconsole.log(widthScreen);\r\n\t\twidthScreen >= '768' ? openModal() : modal.style.display = 'block'\r\n\t}\r\n\t))\r\n\r\n\tmodal.addEventListener('click', (e) => {\r\n\t\tif (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n\t\t\twidthScreen >= '768' ? closeModal() : modal.style.display = ''\r\n\t\t}\r\n\t})\r\n\t// closeBtn.addEventListener('click', () => {\r\n\t// \twidthScreen >= '768' ? closeModal() : modal.style.display = ''\r\n\t// })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\tconst tabContent = document.querySelectorAll('.service-tab')\r\n\tconst tabPanel = document.querySelector('.service-header')\r\n\tconst tabs = document.querySelectorAll('.service-header-tab')\r\n\r\n\ttabPanel.addEventListener('click', (e) => {\r\n\t\tif (e.target.closest('.service-header-tab')) {\r\n\t\t\tconst tabBtn = e.target.closest('.service-header-tab')\r\n\t\t\ttabs.forEach((tab, index) => {\r\n\t\t\t\tif (tab === tabBtn) {\r\n\t\t\t\t\ttab.classList.add('active')\r\n\t\t\t\t\ttabContent[index].classList.remove('d-none')\r\n\t\t\t\t} else {\r\n\t\t\t\t\ttab.classList.remove('active')\r\n\t\t\t\t\ttabContent[index].classList.add('d-none')\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\t})\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\tconst timerDays = document.getElementById('timer-days')\r\n\tconst timerHours = document.getElementById('timer-hours')\r\n\tconst timerMinutes = document.getElementById('timer-minutes')\r\n\tconst timerSeconds = document.getElementById('timer-seconds')\r\n\r\n\tconst getTimeRemaining = () => {\r\n\t\tlet dateStop = new Date(deadline).getTime()\r\n\t\tlet dateNow = new Date().getTime()\r\n\t\tlet timeRemaining = (dateStop - dateNow) / 1000\r\n\r\n\t\tlet days = ~~((timeRemaining / 3600 / 24))\r\n\t\tlet houres = ~~((timeRemaining / 3600) % 24)\r\n\t\tlet minutes = ~~((timeRemaining / 60) % 60)\r\n\t\tlet seconds = ~~(timeRemaining % 60)\r\n\r\n\t\treturn (timeRemaining > 0) ? {\r\n\t\t\tdays,\r\n\t\t\thoures,\r\n\t\t\tminutes,\r\n\t\t\tseconds,\r\n\t\t\ttimeRemaining\r\n\t\t} : {\r\n\t\t\t// days: 0,\r\n\t\t\thoures: 0,\r\n\t\t\tminutes: 0,\r\n\t\t\tseconds: 0,\r\n\t\t}\r\n\t}\r\n\t// countTimer(deadline)\r\n\t// setInterval(countTimer, 1000, deadline)\r\n\r\n\tconst updateClock = () => {\r\n\t\tlet getTime = getTimeRemaining()\r\n\t\t// console.log('getTime');\r\n\t\t// timerDays.textContent = getTime.days\r\n\t\ttimerHours.textContent = (getTime.houres < 10) ? '0' + getTime.houres : getTime.houres\r\n\t\ttimerMinutes.textContent = (getTime.minutes < 10) ? '0' + getTime.minutes : getTime.minutes\r\n\t\ttimerSeconds.textContent = (getTime.seconds < 10) ? '0' + getTime.seconds : getTime.seconds\r\n\r\n\t\t/**setTimeout*/\r\n\t\t// if (getTime.timeRemaining > 0) {\r\n\t\t// \tsetTimeout(updateClock, 1000)\r\n\t\t// }\r\n\r\n\t\t/**setInterval */\r\n\t\tlet interval = setInterval(() => {\r\n\t\t\tif (getTime.timeRemaining > 0) {\r\n\t\t\t\tupdateClock()\r\n\t\t\t\tclearInterval(interval)\r\n\t\t\t}\r\n\t\t}, 1000)\r\n\t}\r\n\tupdateClock()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n\tconst inputPhone = document.querySelectorAll('.form-phone')\r\n\tconst inputEmail = document.querySelectorAll('.form-email')\r\n\tconst inputName = document.querySelectorAll('.form-name')\r\n\t// const submitBtn = document.querySelectorAll('button[type=submit]')\r\n\tlet regName = /^([а-яА-ЯёЁ]+\\s)*[а-яА-ЯёЁ]*$/\r\n\tlet regEmail = /^(((\\w*\\.)|(\\w*\\-))*\\w*)@(\\w*\\.)+([a-z]+)$/\r\n\tlet regPhone = /^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$/\r\n\r\n\r\n\tinputName.forEach(item => {\r\n\t\titem.value = ''\r\n\t\titem.addEventListener('input', () => {\r\n\t\t\tif (!regName.test(item.value)) {\r\n\t\t\t\talert('Введите имя на кирилице')\r\n\t\t\t\titem.value = ''\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n\tinputEmail.forEach(item => {\r\n\t\titem.value = ''\r\n\t\titem.addEventListener('change', () => {\r\n\t\t\tconsole.log(regEmail.test(item.value));\r\n\t\t\tif (!regEmail.test(item.value)) {\r\n\t\t\t\talert('Некорректный e-mail')\r\n\t\t\t\titem.value = ''\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n\tinputPhone.forEach(item => {\r\n\t\titem.value = ''\r\n\t\titem.addEventListener('input', () => {\r\n\t\t\tif (!regPhone.test(item.value)) {\r\n\t\t\t\talert('Некорректный номер телефона')\r\n\t\t\t\titem.value = ''\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;