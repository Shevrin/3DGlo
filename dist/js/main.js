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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst deadline = '13 january 2022 00:00'\r\nconst price = 100\r\nconst scrollBtn = document.querySelector('a[href=\"#service-block\"]')\r\nconst menuItems = document.querySelector('menu').querySelectorAll('ul>li>a')\r\nconsole.log(deadline.length);\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(deadline)\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(price)\r\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n\tformId: 'form1',\r\n\tsomeElement: [\r\n\t\t{\r\n\t\t\ttype: 'block',\r\n\t\t\tid: 'total'\r\n\t\t}\r\n\t]\r\n})\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n\tformId: 'form2',\r\n\tsomeElement: [\r\n\t\t{\r\n\t\t\ttype: 'input',\r\n\t\t\tid: 'form2-message'\r\n\t\t},\r\n\t\t{\r\n\t\t\ttype: 'block',\r\n\t\t\tid: 'total'\r\n\t\t}\r\n\t]\r\n})\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n\tformId: 'form3',\r\n})\r\n\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(scrollBtn)\r\nmenuItems.forEach(item => (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(item))\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price) => {\r\n\tconst calcSelect = document.querySelector('.calc-item ')\r\n\tconst inputs = document.querySelectorAll('.calc-block > input[type=text]')\r\n\tconst total = document.getElementById('total')\r\n\tcalcSelect.value = ''\r\n\tlet calcSelectData = 0\r\n\r\n\tinputs.forEach(element => {\r\n\t\telement.value = ''\r\n\t});\r\n\r\n\tconst countCalc = () => {\r\n\t\tlet totalValue = 0\r\n\t\tlet countOptionalRoom = 1\r\n\t\tlet countOptionlDay = 1\r\n\r\n\t\tif (inputs[1].value > 1) {\r\n\t\t\tcountOptionalRoom += +inputs[1].value / 10\r\n\t\t}\r\n\r\n\t\tif (inputs[2].value && inputs[2].value < 5) {\r\n\t\t\tcountOptionlDay = 2\r\n\t\t} else if (inputs[2].value && inputs[2].value < 10) {\r\n\t\t\tcountOptionlDay = 1.5\r\n\t\t}\r\n\r\n\t\tif (calcSelectData && inputs[0].value) {\r\n\t\t\ttotalValue = price * calcSelectData * +inputs[0].value * countOptionalRoom * countOptionlDay\r\n\t\t} else {\r\n\t\t\ttotalValue = 0\r\n\t\t}\r\n\t\ttotal.textContent = totalValue\r\n\t}\r\n\r\n\tinputs.forEach(item => item.addEventListener('input', (e) => {\r\n\t\tlet reg = new RegExp('^[0-9]*$')\r\n\t\tif (reg.test(e.target.value)) {\r\n\t\t} else {\r\n\t\t\talert('Введите число')\r\n\t\t\titem.value = ''\r\n\t\t}\r\n\t\tcountCalc()\r\n\t}))\r\n\r\n\tcalcSelect.addEventListener('input', (e) => {\r\n\t\tif (e.target.value) {\r\n\t\t\tcalcSelectData = +e.target.value\r\n\t\t} else {\r\n\t\t\tcalcSelectData = 0\r\n\t\t}\r\n\t\tcountCalc()\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"browserSupportsCSSProperty\": () => (/* binding */ browserSupportsCSSProperty)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n\tlet start = performance.now();\r\n\r\n\trequestAnimationFrame(function animate(time) {\r\n\t\t// timeFraction изменяется от 0 до 1\r\n\t\tlet timeFraction = (time - start) / duration;\r\n\t\tif (timeFraction > 1) timeFraction = 1;\r\n\r\n\t\t// вычисление текущего состояния анимации\r\n\t\tlet progress = timing(timeFraction);\r\n\r\n\t\tdraw(progress); // отрисовать её\r\n\r\n\t\tif (timeFraction < 1) {\r\n\t\t\trequestAnimationFrame(animate);\r\n\t\t}\r\n\r\n\t});\r\n}\r\n\r\n\r\nconst browserSupportsCSSProperty = (propertyName) => {\r\n\tconst elm = document.createElement('div');\r\n\tpropertyName = propertyName.toLowerCase();\r\n\r\n\tif (elm.style[propertyName] != undefined)\r\n\t\treturn true;\r\n\r\n\tconst propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),\r\n\t\tdomPrefixes = 'Webkit Moz ms O'.split(' ');\r\n\r\n\tfor (const i = 0; i < domPrefixes.length; i++) {\r\n\t\tif (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)\r\n\t\t\treturn true;\r\n\t}\r\n\r\n\treturn false;\r\n}\r\n\r\n// Use it to check for animation support:\r\n\r\nif (!browserSupportsCSSProperty('animation')) {\r\n\t// fallback…\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n\tconst menu = document.querySelector('menu')\r\n\tconst body = document.querySelector('body')\r\n\r\n\r\n\tconst handleMenu = () => {\r\n\t\tmenu.classList.toggle('active-menu')\r\n\t}\r\n\r\n\tbody.addEventListener('click', (e) => {\r\n\r\n\t\tif (e.target.classList.contains('close-btn') || e.target.matches('menu>a')\r\n\t\t\t|| e.target.closest('.menu')) {\r\n\t\t\thandleMenu();\r\n\t\t}\r\n\t\telse if (menu.classList.contains('active-menu') && !e.target.matches('menu') && !e.target.matches('li')) {\r\n\t\t\thandleMenu()\r\n\t\t}\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\n\r\nconst modal = () => {\r\n\tconst popupBtn = document.querySelectorAll('.popup-btn')\r\n\tconst modal = document.querySelector('.popup')\r\n\tconst inputs = modal.querySelectorAll('input')\r\n\tconst widthScreen = document.documentElement.offsetWidth\r\n\tlet validate = false\r\n\tconst openModal = () => {\r\n\t\tmodal.style.display = 'block'\r\n\t\tmodal.style.opacity = 0\r\n\r\n\t\t;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n\t\t\tduration: 130,\r\n\t\t\ttiming(timeFraction) {\r\n\t\t\t\treturn timeFraction\r\n\t\t\t},\r\n\t\t\tdraw(progress) {\r\n\t\t\t\tmodal.style.opacity = 0 + progress\r\n\t\t\t}\r\n\t\t})\r\n\t\t// const anim = () => {\r\n\t\t// \topacity += 0.1\r\n\t\t// \tmodal.style.opacity = opacity\r\n\t\t// \tif (opacity < 1) requestAnimationFrame(anim)\r\n\t\t// }\r\n\t\t// requestAnimationFrame(anim)\r\n\t}\r\n\r\n\tconst closeModal = () => {\r\n\t\tconsole.log('close');\r\n\t\t(0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n\t\t\tduration: 130,\r\n\t\t\ttiming(timeFraction) {\r\n\t\t\t\treturn timeFraction\r\n\t\t\t},\r\n\t\t\tdraw(progress) {\r\n\t\t\t\tif (Math.floor(modal.style.opacity * 10) > 0) {\r\n\t\t\t\t\tmodal.style.opacity = 1 - progress\r\n\t\t\t\t} else {\r\n\t\t\t\t\tmodal.style.display = ''\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t})\r\n\r\n\t\t// \tconst anim = () => {\r\n\t\t// \t\topacity -= 0.1\r\n\t\t// \t\tmodal.style.opacity = opacity\r\n\t\t// \t\tif (opacity > 0) {\r\n\t\t// \t\t\trequestAnimationFrame(anim)\r\n\t\t// \t\t} else {\r\n\t\t// \t\t\tmodal.style.display = ''\r\n\t\t// \t\t}\r\n\t\t// \t}\r\n\t\t// \trequestAnimationFrame(anim)\r\n\t}\r\n\r\n\tpopupBtn.forEach(item => item.addEventListener('click', () => {\r\n\t\twidthScreen >= '768' ? openModal() : modal.style.display = 'block'\r\n\t}\r\n\t))\r\n\r\n\tmodal.addEventListener('click', (e) => {\r\n\t\tinputs.forEach(input => {\r\n\t\t\tif (input.classList.contains('success')) {\r\n\t\t\t\tvalidate = true\r\n\t\t\t}\r\n\t\t})\r\n\t\tif (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')\r\n\t\t\t|| (e.target.classList.contains('form-btn') && validate)) {\r\n\r\n\t\t\twidthScreen >= '768' ? closeModal() : modal.style.display = ''\r\n\t\t}\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = (elem) => {\r\n\telem.addEventListener('click', (e) => {\r\n\t\te.preventDefault()\r\n\t\tconst blockId = elem.getAttribute('href')\r\n\t\tdocument.querySelector(elem.getAttribute('href') + blockId).scrollIntoView({\r\n\t\t\tbehavior: \"smooth\",\r\n\t\t\tblock: 'start'\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElement = [] }) => {\r\n\tconst form = document.getElementById(formId)\r\n\r\n\tconst statusBlock = document.createElement('div')\r\n\r\n\t// const loadText = 'Загрузка...'\r\n\tconst errorText = 'Ошибка!'\r\n\tconst successText = 'Благодарим, наш менеджер свяжется с Вами!'\r\n\r\n\tconst validate = (list) => {\r\n\t\tlet success = true\r\n\t\tlist.forEach(input => {\r\n\t\t\tif (!input.classList.contains('success')) {\r\n\t\t\t\tsuccess = false\r\n\t\t\t}\r\n\t\t})\r\n\t\treturn success\r\n\t}\r\n\r\n\tconst sendData = (data) => {\r\n\t\treturn fetch('https://jsonplaceholder.typicode.com/posts', {\r\n\t\t\tmethod: 'POST',\r\n\t\t\tbody: JSON.stringify(data),\r\n\t\t\t// body: data,\r\n\t\t\theaders: {\r\n\t\t\t\t// 'Content-type': 'multipart/form-data'\r\n\t\t\t\t'Content-type': 'application/json; charset=UTF-8',\r\n\t\t\t}\r\n\t\t}).then((res) => res.json())\r\n\t}\r\n\r\n\tconst submitForm = () => {\r\n\t\tconst formElements = form.querySelectorAll('input')\r\n\t\tconst formData = new FormData(form)\r\n\t\tconst formBody = {}\r\n\r\n\t\tstatusBlock.innerHTML = `<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" \r\nxmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.0\" width=\"158px\" \r\nheight=\"24px\" viewBox=\"0 0 158 24\" xml:space=\"preserve\">\r\n<path fill=\"#ffffff\" d=\"M64 4h10v10H64V4zm20 0h10v10H84V4zm20 0h10v10h-10V4zm20 \r\n0h10v10h-10V4zm20 0h10v10h-10V4zM4 4h10v10H4V4zm20 0h10v10H24V4zm20 0h10v10H44V4z\"/>\r\n<path fill=\"#ffffff\" d=\"M144 14V4h10v10h-10zm9-9h-8v8h8V5zm-29 9V4h10v10h-10zm9-9h-8v8h8V5zm-29 \r\n9V4h10v10h-10zm9-9h-8v8h8V5zm-29 9V4h10v10H84zm9-9h-8v8h8V5zm-29 9V4h10v10H64zm9-9h-8v8h8V5zm-29 \r\n9V4h10v10H44zm9-9h-8v8h8V5zm-29 9V4h10v10H24zm9-9h-8v8h8V5zM4 14V4h10v10H4zm9-9H5v8h8V5z\"/><g>\r\n<path fill=\"#ffffff\" d=\"M-58 16V2h14v14h-14zm13-13h-12v12h12V3z\"/>\r\n<path fill=\"#ffffff\" fill-opacity=\"0.3\" d=\"M-40 0h18v18h-18z\"/>\r\n<path fill=\"#ffffff\" d=\"M-40 18V0h18v18h-18zm17-17h-16v16h16V1z\"/>\r\n<path fill=\"#ffffff\" fill-opacity=\"0.7\" d=\"M-20 0h18v18h-18z\"/>\r\n<path fill=\"#ffffff\" d=\"M-20 18V0h18v18h-18zM-3 1h-16v16h16V1z\"/>\r\n<animateTransform attributeName=\"transform\" type=\"translate\" \r\nvalues=\"20 0;40 0;60 0;80 0;100 0;120 0;140 0;160 0;180 0;200 0\" calcMode=\"discrete\" \r\ndur=\"800ms\" repeatCount=\"indefinite\"/></g>\r\n</svg>`\r\n\t\t// statusBlock.textContent = loadText\r\n\t\tform.append(statusBlock)\r\n\r\n\t\tformData.forEach((val, key) => {\r\n\t\t\tformBody[key] = val\r\n\t\t})\r\n\r\n\t\tsomeElement.forEach(elem => {\r\n\t\t\tconst element = document.getElementById(elem.id)\r\n\r\n\t\t\tif (elem.type === 'block') {\r\n\t\t\t\tformBody[elem.id] = element.textContent\r\n\t\t\t} else if (elem.type === 'input') {\r\n\t\t\t\tformBody[elem.id] = element.value\r\n\t\t\t}\r\n\t\t})\r\n\r\n\t\tif (validate(formElements)) {\r\n\t\t\tsendData(formBody)\r\n\t\t\t\t.then((data) => {\r\n\t\t\t\t\t// console.log(data)\r\n\t\t\t\t\tstatusBlock.textContent = successText\r\n\t\t\t\t\t// statusBlock.textContent = successText\r\n\t\t\t\t\tformElements.forEach(input => {\r\n\t\t\t\t\t\tinput.value = ''\r\n\t\t\t\t\t\tinput.classList.remove('success')\r\n\t\t\t\t\t})\r\n\t\t\t\t})\r\n\t\t\t\t.catch(err => {\r\n\t\t\t\t\tstatusBlock.textContent = errorText\r\n\t\t\t\t})\r\n\t\t} else {\r\n\t\t\talert('Данные не валидны!')\r\n\t\t}\r\n\t}\r\n\r\n\ttry {\r\n\t\tif (!form) {\r\n\t\t\tthrow new Error('Верните форму на место')\r\n\t\t}\r\n\t\tform.addEventListener('submit', (e) => {\r\n\t\t\te.preventDefault()\r\n\t\t\tsubmitForm()\r\n\t\t})\r\n\t} catch (error) {\r\n\t\tconsole.log(error.message);\r\n\t}\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n\tconst sliderBlock = document.querySelector('.portfolio-content')\r\n\tconst slides = document.querySelectorAll('.portfolio-item')\r\n\tconst dotsBlock = document.querySelector('.portfolio-dots')\r\n\r\n\tfor (let i = 0; i < slides.length; i++) {\r\n\t\tconst dot = document.createElement('li')\r\n\t\tdot.classList.add('dot')\r\n\t\tdotsBlock.append(dot)\r\n\t}\r\n\r\n\tconst dots = document.querySelectorAll('.dot')\r\n\tlet currentSlide = 0\r\n\tconst timeIntarval = 2000\r\n\tlet interval\r\n\r\n\tconst prevSlide = (elems, index, className) => {\r\n\t\telems[index].classList.remove(className)\r\n\t}\r\n\r\n\tconst nextSlide = (elems, index, className) => {\r\n\t\telems[index].classList.add(className)\r\n\t}\r\n\r\n\tconst autoSlide = () => {\r\n\t\tprevSlide(slides, currentSlide, 'portfolio-item-active')\r\n\t\tprevSlide(dots, currentSlide, 'dot-active')\r\n\t\tcurrentSlide++\r\n\r\n\t\tif (currentSlide >= slides.length) {\r\n\t\t\tcurrentSlide = 0\r\n\t\t}\r\n\r\n\t\tnextSlide(slides, currentSlide, 'portfolio-item-active')\r\n\t\tnextSlide(dots, currentSlide, 'dot-active')\r\n\t}\r\n\r\n\tconst startSlide = (timer = 1500) => {\r\n\t\tinterval = setInterval(autoSlide, timer)\r\n\t}\r\n\r\n\tconst stopSlide = () => {\r\n\t\tclearInterval(interval)\r\n\t}\r\n\r\n\tsliderBlock.addEventListener('click', (e) => {\r\n\t\te.preventDefault()\r\n\r\n\t\tif (!e.target.matches('.dot, .portfolio-btn')) {\r\n\t\t\treturn\r\n\t\t}\r\n\r\n\t\tprevSlide(slides, currentSlide, 'portfolio-item-active')\r\n\t\tprevSlide(dots, currentSlide, 'dot-active')\r\n\r\n\t\tif (e.target.matches('#arrow-right')) {\r\n\t\t\tcurrentSlide++\r\n\t\t} else if (e.target.matches('#arrow-left')) {\r\n\t\t\tcurrentSlide--\r\n\t\t} else if (e.target.classList.contains('dot')) {\r\n\t\t\tdots.forEach((dot, index) => {\r\n\t\t\t\tif (e.target === dot) {\r\n\t\t\t\t\tcurrentSlide = index\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t}\r\n\t\tif (currentSlide >= slides.length) {\r\n\t\t\tcurrentSlide = 0\r\n\t\t}\r\n\t\tif (currentSlide < 0) {\r\n\t\t\tcurrentSlide = slides.length - 1\r\n\t\t}\r\n\r\n\t\tnextSlide(slides, currentSlide, 'portfolio-item-active')\r\n\t\tnextSlide(dots, currentSlide, 'dot-active')\r\n\r\n\t})\r\n\r\n\tsliderBlock.addEventListener('mouseenter', (e) => {\r\n\t\tif (e.target.matches('.dot, .portfolio-btn')) {\r\n\t\t\tstopSlide()\r\n\t\t}\r\n\t}, true)\r\n\r\n\tsliderBlock.addEventListener('mouseleave', (e) => {\r\n\t\tif (e.target.matches('.dot, .portfolio-btn')) {\r\n\t\t\tstartSlide(timeIntarval)\r\n\t\t}\r\n\t}, true)\r\n\r\n\tstartSlide(timeIntarval)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n\tconst inputPhone = document.querySelectorAll('.form-phone')\r\n\tconst inputEmail = document.querySelectorAll('.form-email')\r\n\tconst inputName = document.querySelectorAll('.form-name')\r\n\tconst topForm = document.getElementById('form2-name')\r\n\tconst formMessage = document.getElementById('form2-message')\r\n\t// const submitBtn = document.querySelectorAll('button[type=submit]')\r\n\tlet regName = /^([а-яА-ЯёЁ]+\\s)*[а-яА-ЯёЁ]*$/\r\n\tlet regMessage = /^[:;'\"()?!,.а-яА-ЯёЁ0-9\\s]+$/\r\n\tlet regEmail = /^(((\\w*\\.)|(\\w*\\-))*\\w*)@(\\w*\\.)+([a-z]+)$/\r\n\tlet regPhone = /^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$/\r\n\r\n\r\n\tinputName.forEach(item => {\r\n\t\titem.value = ''\r\n\t\titem.addEventListener('input', () => {\r\n\t\t\tif (!regName.test(item.value)) {\r\n\t\t\t\talert('Введите имя на кирилице')\r\n\t\t\t\titem.value = ''\r\n\t\t\t}\r\n\t\t\tif (regName.test(item.value)) {\r\n\t\t\t\titem.classList.add('success')\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n\ttopForm.addEventListener('input', () => {\r\n\t\tif (!regName.test(topForm.value)) {\r\n\t\t\talert('Введите имя на кирилице')\r\n\t\t\ttopForm.value = ''\r\n\t\t}\r\n\t\tif (regName.test(topForm.value)) {\r\n\t\t\ttopForm.classList.add('success')\r\n\t\t}\r\n\t})\r\n\r\n\tformMessage.addEventListener('input', () => {\r\n\t\tif (!regMessage.test(formMessage.value)) {\r\n\t\t\talert('Введите текст на кирилице')\r\n\t\t\tformMessage.value = ''\r\n\t\t}\r\n\t\tif (regMessage.test(formMessage.value)) {\r\n\t\t\tformMessage.classList.add('success')\r\n\t\t}\r\n\t})\r\n\r\n\tinputEmail.forEach(item => {\r\n\t\titem.value = ''\r\n\t\titem.addEventListener('change', () => {\r\n\t\t\tif (!regEmail.test(item.value)) {\r\n\t\t\t\talert('Некорректный e-mail')\r\n\t\t\t\titem.value = ''\r\n\t\t\t}\r\n\t\t\tif (regEmail.test(item.value)) {\r\n\t\t\t\titem.classList.add('success')\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n\tinputPhone.forEach(item => {\r\n\t\titem.value = ''\r\n\t\titem.addEventListener('change', () => {\r\n\t\t\tif (!regPhone.test(item.value)) {\r\n\t\t\t\talert('Некорректный номер телефона')\r\n\t\t\t\titem.value = ''\r\n\t\t\t}\r\n\t\t\tif (regPhone.test(item.value)) {\r\n\t\t\t\titem.classList.add('success')\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

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