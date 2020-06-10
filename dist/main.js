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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Work+Sans&display=swap);\"]);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Work Sans', sans-serif; }\\n\\nbutton {\\n  border: none;\\n  background-color: transparent; }\\n\\np,\\nspan,\\nli {\\n  font-family: 'Work Sans', sans-serif; }\\n\\nsvg:hover {\\n  cursor: pointer; }\\n\\n.content {\\n  width: 100%;\\n  display: flex; }\\n  .content h2 {\\n    font-size: 50px; }\\n\\n.top-header {\\n  width: 100%;\\n  height: 70px;\\n  background-color: #f23a2c; }\\n\\n#main-content {\\n  width: 70%; }\\n  #main-content .top-header {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 15px;\\n    color: white; }\\n    #main-content .top-header span {\\n      font-size: 18px; }\\n  #main-content .date {\\n    padding: 15px;\\n    border-bottom: 0.6px solid #f6f6f6; }\\n    #main-content .date b {\\n      font-size: 18px;\\n      color: #8e8e8e; }\\n    #main-content .date span {\\n      font-size: 12px;\\n      color: #bfbfbf; }\\n  #main-content .todos .todo {\\n    padding: 20px 15px;\\n    display: flex;\\n    flex-direction: column;\\n    border-bottom: 0.6px solid #f6f6f6;\\n    justify-content: space-between; }\\n    #main-content .todos .todo .check-done {\\n      border-radius: 100%;\\n      border: 1px solid #8e8e8e;\\n      background: white;\\n      width: 25px;\\n      height: 25px;\\n      margin-right: 20px; }\\n      #main-content .todos .todo .check-done.done {\\n        background-color: #f23a2c; }\\n    #main-content .todos .todo .todo-header {\\n      display: flex;\\n      align-items: center;\\n      justify-content: space-between; }\\n      #main-content .todos .todo .todo-header .right-section {\\n        display: flex;\\n        align-items: center; }\\n        #main-content .todos .todo .todo-header .right-section .due-date {\\n          color: gray;\\n          font-size: 12px;\\n          margin-bottom: -3px; }\\n        #main-content .todos .todo .todo-header .right-section .priority {\\n          margin-right: 3px; }\\n        #main-content .todos .todo .todo-header .right-section .actions {\\n          margin-left: 8px; }\\n    #main-content .todos .todo .description {\\n      color: gray;\\n      font-size: 14px;\\n      padding: 10px 45px; }\\n  #main-content .todos #button-add-todo {\\n    margin: 15px;\\n    padding: 7px;\\n    font-size: 16px;\\n    border-radius: 7px;\\n    border: none;\\n    color: #f2f2f3;\\n    background: #f23a2c; }\\n    #main-content .todos #button-add-todo:hover {\\n      cursor: pointer;\\n      color: white; }\\n  #main-content .todos .new-todo-input {\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 15px; }\\n    #main-content .todos .new-todo-input input,\\n    #main-content .todos .new-todo-input select,\\n    #main-content .todos .new-todo-input button {\\n      padding: 4px;\\n      font-size: 16px; }\\n    #main-content .todos .new-todo-input button {\\n      color: #f2f2f3;\\n      background: #f23a2c;\\n      padding: 7px;\\n      font-size: 16px;\\n      border-radius: 7px;\\n      border: none;\\n      width: 100px; }\\n    #main-content .todos .new-todo-input .cancel-button {\\n      background-color: gray;\\n      width: 100px; }\\n\\n#side-bar {\\n  position: sticky;\\n  top: 0;\\n  left: 0;\\n  width: 30%;\\n  height: 100vh;\\n  border-right: 2px #c2c2c2 solid; }\\n  #side-bar .top-header {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    align-items: center;\\n    color: white;\\n    padding: 15px; }\\n    #side-bar .top-header div {\\n      display: flex;\\n      flex-direction: row;\\n      align-items: center; }\\n    #side-bar .top-header .left-icons span {\\n      font-size: 18px;\\n      margin-left: 4px; }\\n    #side-bar .top-header .right-icons *:first-child {\\n      margin-right: 15px; }\\n  #side-bar #projects .projects-header {\\n    padding: 15px;\\n    display: flex;\\n    background: #f2f2f3;\\n    justify-content: space-between; }\\n    #side-bar #projects .projects-header #addProjectButton {\\n      border: none;\\n      background-color: transparent; }\\n  #side-bar #projects #list-projects li {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: flex-start;\\n    align-items: center;\\n    padding: 15px;\\n    border-bottom: 0.6px solid #f6f6f6; }\\n    #side-bar #projects #list-projects li:hover {\\n      cursor: pointer; }\\n    #side-bar #projects #list-projects li .new-project-name {\\n      width: 100%;\\n      border: none;\\n      border-bottom: 1px solid black;\\n      font-size: 16px;\\n      padding: 4px; }\\n  #side-bar #projects #list-projects li:last-child {\\n    border-bottom: none; }\\n  #side-bar #projects #list-projects .li_bullet {\\n    display: block;\\n    border-radius: 100%;\\n    width: 10px;\\n    height: 10px;\\n    background-color: #85c3f1;\\n    margin-right: 10px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/styles/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/project */ \"./src/model/project.js\");\n/* harmony import */ var _model_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/todo */ \"./src/model/todo.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/styles/styles.scss */ \"./src/assets/styles/styles.scss\");\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n_ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeUi();\nif (_initialize__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length == 0) {\n  const project1 = new _model_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Tutorial');\n  const todo1 = new _model_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('First step', 'Add a project', '2020-06-10', 'High');\n  project1.addTodo(todo1);\n  const todo2 = new _model_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Second step', 'Select the project', '2020-06-10', 'High');\n  project1.addTodo(todo2);\n  const todo3 = new _model_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Third step', 'Add a todo task', '2020-06-10', 'High');\n  project1.addTodo(todo3);\n  const todo4 = new _model_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Fourth step', 'Mark the task as done', '2020-06-10', 'High');\n  project1.addTodo(todo4);\n  _initialize__WEBPACK_IMPORTED_MODULE_3__[\"default\"].push(project1);\n  _ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderTodos(project1);\n}\nelse {\n  _ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderTodos(_initialize__WEBPACK_IMPORTED_MODULE_3__[\"default\"][0]);\n}\n_ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderProjects(_initialize__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/project */ \"./src/model/project.js\");\n/* harmony import */ var _model_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/todo */ \"./src/model/todo.js\");\n\n\n\nconst projects = [];\nif (!window.localStorage.getItem('projects')) {\n  window.localStorage.setItem('projects', JSON.stringify([]));\n}\nelse {\n  projects.length = 0;\n\n  const loadedFromStorage = JSON.parse(window.localStorage.getItem('projects'));\n  console.log(loadedFromStorage);\n  loadedFromStorage.forEach(element => {\n    const newProject = new _model_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element.name);\n    element.todoList.forEach(todo => {\n      const newTodo = new _model_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](todo.title,todo.description, todo.dueDate, todo.priority);\n      newProject.addTodo(newTodo);\n    });\n    projects.push(newProject);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (projects);\n\n//# sourceURL=webpack:///./src/initialize.js?");

/***/ }),

/***/ "./src/model/project.js":
/*!******************************!*\
  !*** ./src/model/project.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.todoList = [];\n  }\n\n  addTodo(todo) {\n    this.todoList.push(todo);\n  }\n\n  removeTodo(indTodo) {\n    this.todoList.splice(indTodo, 1);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/model/project.js?");

/***/ }),

/***/ "./src/model/todo.js":
/*!***************************!*\
  !*** ./src/model/todo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.done = false;\n  }\n\n  markAsDone() {\n    this.done = !(this.done);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n//# sourceURL=webpack:///./src/model/todo.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/project */ \"./src/model/project.js\");\n/* harmony import */ var _model_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/todo */ \"./src/model/todo.js\");\n\n\n\n\nconst uiManager = (() => {\n  const buttonAddProject = document.querySelector('#addProjectButton');\n  const listProjects = document.getElementById('list-projects');\n  const todosList = document.getElementById('todos_list');\n  const headerProjectName = document.querySelector('#header-project-name');\n  const date = document.querySelector('#date');\n\n  let newProjectOpen = false;\n\n  const initializeUi = () => {\n    date.textContent = new Date().toDateString();\n  };\n\n  buttonAddProject.addEventListener('click', () => {\n    if (newProjectOpen) {\n      return;\n    }\n    newProjectOpen = true;\n    const liProject = document.createElement('li');\n    const newProjectInput = document.createElement('input');\n    newProjectInput.type = 'text';\n    newProjectInput.classList.add('new-project-name');\n    newProjectInput.placeholder = 'Add new project title';\n    newProjectInput.addEventListener('keypress', (e) => {\n      if (e.code === 'Enter') {\n        const newProject = new _model_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newProjectInput.value);\n        _initialize__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(newProject);\n        newProjectInput.remove();\n        /* eslint-disable */\n        renderProjects(_initialize__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        /* eslint-enable */\n        newProjectOpen = false;\n      }\n    });\n\n    newProjectInput.focus();\n\n    liProject.appendChild(newProjectInput);\n    listProjects.appendChild(liProject);\n  });\n\n  const renderTodos = (project) => {\n    todosList.innerHTML = '';\n    headerProjectName.textContent = project.name.charAt(0).toUpperCase() + project.name.slice(1);\n    let count = 0;\n    project.todoList.forEach(todoElement => {\n      const idEl = count;\n      const todo = document.createElement('li');\n      todo.classList = 'todo';\n      const idCheckDone = `check_${count}`;\n      const idEdit = `edit_${count}`;\n      const idDelete = `delete_${count}`;\n      todo.innerHTML = `<div class=\"todo-header\">\n                          <div style=\"display:flex;align-items:center\"><div id=\"${idCheckDone}\" class=\"check-done ${todoElement.done ? 'done' : ''}\"></div>\n                            <span>${todoElement.title}</span>\n                          </div>\n                          <div class=\"right-section\">\n                            <span class=\"priority\">${todoElement.priority}</span>\n                            <span class=\"due-date\">${todoElement.dueDate}</span>\n                            <div class=\"actions\" > \n                              <button id=\"${idEdit}\"><span class=\"iconify\" data-inline=\"false\" data-icon=\"bytesize:edit\" style=\"color: gray; font-size: 18px;\"></span></button>\n                              <button id=\"${idDelete}\"><span class=\"iconify\" data-inline=\"false\" data-icon=\"typcn:delete\" style=\"color: gray; font-size: 18px;\"></span></button>\n                            </div>\n                          </div>\n                        </div>\n                        <span class=\"description\">${todoElement.description}</span>`;\n      todosList.appendChild(todo);\n      document.getElementById(idCheckDone).addEventListener('click', () => {\n        todoElement.markAsDone();\n        renderTodos(project);\n      });\n      document.getElementById(idEdit).addEventListener('click', () => {\n        todo.innerHTML = '';\n        const showAddInput = document.createElement('div');\n        showAddInput.classList.add('new-todo-input');\n        const inputTodoTitle = document.createElement('input');\n        inputTodoTitle.type = 'text';\n        inputTodoTitle.placeholder = 'Add Title';\n        inputTodoTitle.value = todoElement.title;\n        showAddInput.appendChild(inputTodoTitle);\n        const inputTodoDesc = document.createElement('input');\n        inputTodoDesc.type = 'text';\n        inputTodoDesc.placeholder = 'Add Description';\n        inputTodoDesc.value = todoElement.description;\n        showAddInput.appendChild(inputTodoDesc);\n        const inputTodoDate = document.createElement('input');\n        inputTodoDate.type = 'date';\n        inputTodoDate.value = todoElement.dueDate;\n        showAddInput.appendChild(inputTodoDate);\n        const inputTodoPriority = document.createElement('select');\n        inputTodoPriority.innerHTML = `<option value=\"High\">High</option>\n                                  <option value=\"Medium\"> Medium </option>\n                                  <option value=\"Low\"> Low </option>`;\n        inputTodoPriority.value = todoElement.priority;\n        showAddInput.appendChild(inputTodoPriority);\n\n        const buttonSubmitTodo = document.createElement('button');\n        buttonSubmitTodo.textContent = 'Save';\n        buttonSubmitTodo.classList.add('button-accent');\n        showAddInput.appendChild(buttonSubmitTodo);\n        const buttonCancelTodo = document.createElement('button');\n        buttonCancelTodo.textContent = 'Cancel';\n        buttonCancelTodo.classList.add('cancel-button');\n        showAddInput.appendChild(buttonCancelTodo);\n\n        buttonSubmitTodo.addEventListener('click', () => {\n          todoElement.title = inputTodoTitle.value;\n          todoElement.description = inputTodoDesc.value;\n          todoElement.dueDate = inputTodoDate.value;\n          todoElement.priority = inputTodoPriority.value;\n\n          renderTodos(project);\n          showAddInput.remove();\n        });\n\n        buttonCancelTodo.addEventListener('click', () => {\n          showAddInput.remove();\n          renderTodos(project);\n        });\n\n        todo.appendChild(showAddInput);\n      });\n      document.getElementById(idDelete).addEventListener('click', () => {\n        project.removeTodo(idEl);\n        renderTodos(project);\n      });\n      count += 1;\n    });\n    /* eslint-disable */\n    addTodolist(project);\n    \n    localStorage.setItem('projects', JSON.stringify(_initialize__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    /* eslint-enable */\n  };\n\n  const addTodolist = (currentProject) => {\n    const buttonAddtodo = document.createElement('button');\n    buttonAddtodo.id = 'button-add-todo';\n    buttonAddtodo.innerHTML = '+ Add Todo';\n    todosList.appendChild(buttonAddtodo);\n    const showAddInput = document.createElement('div');\n    showAddInput.classList.add('new-todo-input');\n    buttonAddtodo.addEventListener('click', () => {\n      todosList.appendChild(showAddInput);\n      buttonAddtodo.remove();\n      const inputTodoTitle = document.createElement('input');\n      inputTodoTitle.type = 'text';\n      inputTodoTitle.placeholder = 'Add Title';\n      showAddInput.appendChild(inputTodoTitle);\n      const inputTodoDesc = document.createElement('input');\n      inputTodoDesc.type = 'text';\n      inputTodoDesc.placeholder = 'Add Description';\n      showAddInput.appendChild(inputTodoDesc);\n      const inputTodoDate = document.createElement('input');\n      inputTodoDate.type = 'date';\n      showAddInput.appendChild(inputTodoDate);\n      const inputTodoPriority = document.createElement('select');\n      inputTodoPriority.innerHTML = `<option value=\"High\">High</option>\n                                <option value = \"Medium\"> Medium </option>\n                                <option value = \"Low\"> Low </option>`;\n      showAddInput.appendChild(inputTodoPriority);\n      const buttonSubmitTodo = document.createElement('button');\n      buttonSubmitTodo.textContent = 'Add';\n      buttonSubmitTodo.classList.add('button-accent');\n      showAddInput.appendChild(buttonSubmitTodo);\n      const buttonCancelTodo = document.createElement('button');\n      buttonCancelTodo.textContent = 'Cancel';\n      buttonCancelTodo.classList.add('cancel-button');\n      showAddInput.appendChild(buttonCancelTodo);\n\n      buttonSubmitTodo.addEventListener('click', () => {\n        const newTodo = new _model_todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](inputTodoTitle.value,\n          inputTodoDesc.value, inputTodoDate.value,\n          inputTodoPriority.value);\n        console.log(currentProject);\n        currentProject.addTodo(newTodo);\n        renderTodos(currentProject);\n        showAddInput.remove();\n      });\n      buttonCancelTodo.addEventListener('click', () => {\n        showAddInput.remove();\n        renderTodos(currentProject);\n      });\n    });\n  };\n\n  const renderProjects = (projects) => {\n    listProjects.innerHTML = '';\n    projects.forEach(project => {\n      const projList = document.createElement('li');\n      projList.addEventListener('click', () => {\n        renderTodos(project);\n      });\n      const bullet = document.createElement('div');\n      bullet.classList = 'li_bullet';\n      projList.appendChild(bullet);\n      projList.innerHTML = `<div class=\"li_bullet\"></div>${project.name}`;\n      listProjects.appendChild(projList);\n    });\n    localStorage.setItem('projects', JSON.stringify(projects));\n  };\n  return { renderTodos, renderProjects, initializeUi };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (uiManager);\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });