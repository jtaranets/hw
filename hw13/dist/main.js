/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst form = document.querySelector(\".main-form\");\r\nconst input = form.querySelector(\"input\");\r\nconst url =\r\n  \"http://api.linkpreview.net/?key=5d0a4f2789c534b287f908bc71183ecd837b69d417c1a&q=\";\r\nconst box = document.querySelector(\".url-list\");\r\n\r\nconst linkAdder = {\r\n  linkAlredyExists: false,\r\n  linkURL: null,\r\n  deleteBtn: null,\r\n  resArr: [],\r\n  filteredArr: null,\r\n  linkValidator: /^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$/,\r\n  creatingCards: function(input, data, output) {\r\n    const source = document.querySelector(input).innerHTML.trim();\r\n    const template = Handlebars.compile(source);\r\n    const res = template(data);\r\n    output.insertAdjacentHTML(\"afterbegin\", res);\r\n  },\r\n  deleteCard: function(id, array, filter){\r\n    id.addEventListener(\"click\", e => {\r\n      const elTarget = e.target.parentNode;\r\n      console.log(e.target.previousElementSibling.href);\r\n      filter = array.filter(\r\n        el => el.url !== e.target.previousElementSibling.href\r\n      );\r\n      console.log(\"Array filt\", filter);\r\n      console.log(elTarget);\r\n      elTarget.remove();\r\n      localStorage.setItem(\"wasOpened\", JSON.stringify(filter));\r\n    });\r\n    form.reset();\r\n  },\r\n  linkPreview: function(e) {\r\n    e.preventDefault();\r\n    fetch(url + input.value)\r\n      .then(res => {\r\n        if (res.ok) return res.json();\r\n        throw new Error(\"hey, there is an error\");\r\n      })\r\n      .then(data => {\r\n        if (this.linkAlredyExists) {\r\n          alert(\"such link already exists\");\r\n          form.reset();\r\n          return;\r\n        }\r\n        if (this.linkValidator.test(input.value)) {\r\n          console.log(data);\r\n          this.creatingCards(\"#url-holder\", data, box);\r\n          // this.resArr.forEach(el => {\r\n          //   if(el !== data){\r\n          //     this.resArr.push(data)\r\n          //   }\r\n          //   return\r\n          // })\r\n          if (this.resArr.includes(data)) {\r\n            console.log(\"catattaj\");\r\n          } else {\r\n            this.resArr.push(data);\r\n          }\r\n          console.log(this.resArr);\r\n          localStorage.setItem(\"wasOpened\", JSON.stringify(this.resArr));\r\n        }\r\n        this.deleteBtn = document.querySelector(\".delete-btn\");\r\n        this.deleteCard(this.deleteBtn, this.resArr, this.filteredArr);\r\n      });\r\n  },\r\n  funct: function(e) {\r\n    e.preventDefault();\r\n    this.linkURL = Array.from(document.querySelectorAll(\".url-link\"));\r\n    console.log(this.linkURL);\r\n    console.log(e.target.value);\r\n    this.linkURL.some(el => {\r\n      if (el.href === e.target.value) {\r\n        console.log(\"yep\");\r\n        this.linkAlredyExists = true;\r\n      }\r\n    });\r\n    this.linkURL.every(el => {\r\n      if (el.href !== e.target.value) {\r\n        console.log(\"nope\");\r\n        this.linkAlredyExists = false;\r\n      }\r\n    });\r\n    if (this.linkURL.length === 0) {\r\n      console.log(\"here we go\");\r\n      this.linkAlredyExists = false;\r\n    }\r\n    console.log(this.linkAlredyExists);\r\n  }\r\n};\r\n\r\nwindow.onload = function() {\r\n  const check = localStorage.getItem(\"wasOpened\");\r\n  if (check) {\r\n    const checkToObg = JSON.parse(check);    linkAdder.creatingCards(\"#url-holder-saved-cards\", checkToObg, box);\r\n    const deleteBtn = document.querySelector(\".delete-btn\");\r\n    if(checkToObg.length > 0){\r\n      linkAdder.deleteCard(deleteBtn, linkAdder.resArr, linkAdder.filteredArr);\r\n    }\r\n  } else {\r\n    return;\r\n  }\r\n};\r\nform.addEventListener(\"submit\", linkAdder.linkPreview.bind(linkAdder));\r\nform.addEventListener(\"input\", linkAdder.funct.bind(linkAdder));\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });