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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\r\n    --bg-main:rgb(245, 157, 245);\r\n    --bg-sides:rebeccapurple;\r\n    --color-main:#fff;\r\n    --color-sides:#1A1A1A;\r\n\r\n}\r\nbody {\r\n    background-color: #663399;\r\n    \r\n}\r\nnav{\r\n    width:100%;\r\n    display:flex;\r\n    padding-bottom: 12px;\r\n    justify-content: center;\r\n}\r\n.menu{\r\n    display:flex;\r\n    align-items: flex-start;\r\n}\r\n.left,.right,.middle{\r\n    display:flex;\r\n    flex-direction: column;\r\n    padding:24px;\r\n    gap:8px;\r\n}\r\nh1{\r\n    text-align: center;\r\n}\r\n.left{\r\n    color:var(--color-sides);\r\n    opacity: 0.6;\r\n    filter: grayscale(30%) blur(0.5px);\r\n    transition: all 0.3s ease;\r\n    flex:1;\r\n}\r\n.right {\r\n    color: var(--color-sides);\r\n    opacity: 0.6;\r\n    filter: grayscale(30%) blur(0.5px);\r\n    transition: all 0.3s ease;\r\n    flex:1;\r\n}\r\n.middle {\r\n    background-color: var(--bg-main);\r\n    color: var(--color-main);\r\n    filter: brightness(1.2);\r\n    transform: scale(1.05);\r\n    box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);\r\n    z-index:1;\r\n    flex:2;\r\n    transform-origin:top center ;\r\n    border-radius: 24px;\r\n}\r\n.left:hover,.right:hover{\r\n    opacity: 1;\r\n        filter: grayscale(0%) blur(0px);\r\n        background-color: rgba(102, 51, 153, 0.8)\r\n}\r\n.artist{\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    color:grey;\r\n}\r\np{\r\n    margin-top:0;\r\n}\r\n.menu-item{\r\n    border:1px solid var(--color-main);\r\n    display: flex;\r\n    border-radius:24px;\r\n    overflow:hidden;\r\n    gap:8px;\r\n    height:160px;\r\n    \r\n}\r\n.price{\r\n    justify-self:right;\r\n    bottom:0;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n.dish-pic{\r\n    height:100%;\r\n    aspect-ratio:1/1;\r\n}\r\n.rest{\r\n    padding:12px;\r\n}\r\n.dish-description{\r\n    font-size: x-small;\r\n    margin-top:24px;\r\n    margin-bottom: 12px;;\r\n}\r\n.side-menu-item{\r\n    border: 1px solid var(--color-sides);\r\n        display: flex;\r\n        flex-direction: column;\r\n        border-radius: 24px;\r\n        overflow: hidden;\r\n        gap: 8px;\r\n        height: 300px;\r\n        margin-bottom:30px;\r\n}\r\n.side-image{\r\n    height:100%;\r\n    width:100%;\r\n    object-fit: cover;\r\n}\r\n.side-image-div{\r\n    height:50%;\r\n}\r\n.side-rest{\r\n    flex:1;\r\n    padding:12px;\r\n}\r\nbutton{\r\n    color:#fff;\r\n    border:1px solid #fff;\r\n    border-radius:24px;\r\n    margin-right:24px;\r\n    padding:8px 16px;\r\n    background-color: rebeccapurple;\r\n\r\n}\r\nbutton:hover{\r\n    background-color: var(--bg-main);\r\n}\r\nheader{\r\n    z-index:2;\r\n    position:relative;\r\n}\r\n\r\n.flex{\r\n    display:flex;\r\n    gap:24px;\r\n    height:480px;\r\n    overflow:hidden;\r\n    color:#fff;\r\n    border-radius: 24px;\r\n    margin:50px;\r\n    justify-content: space-between;\r\n}\r\n.flex-left{\r\n    display:flex;\r\n    flex-direction: column;\r\n    flex:1; \r\n    justify-content: center;   \r\n   align-items: center;\r\n   text-align:justify;\r\n\r\n}\r\n.flex-right{\r\n    flex:1;\r\n    overflow: hidden;\r\n}\r\n.flex-image{\r\n    width:100%;\r\n    height:100%;\r\n    object-fit: cover;\r\n    border-radius: 24px;\r\n}\r\n.body-text{\r\n    width:400px;\r\n    margin-bottom: 36px;\r\n}\r\n.buttons{\r\n    display:flex;\r\n}\r\n\r\n#about{\r\n    margin-top: 80px;\r\n}\r\n\r\n.bold{\r\n    font-weight: bolder;\r\n}\r\n.justify{\r\n    text-align: justify;\r\n    margin:0 auto;\r\n    max-width: 500px;\r\n}\r\n.center-text{\r\n    text-align: center;\r\n}\r\n#contact{\r\n    align-items: center;\r\n}\r\nform{\r\n    display:grid;\r\n    gap:24px;\r\n\r\n}\r\nfieldset{\r\n   border:none;\r\n   display:flex;\r\n   max-width:600px;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\ninput{\r\n    border:none;\r\n    padding:8px 10px;\r\n    border-radius:24px;\r\n}\r\n\r\ninput:focus{\r\n    outline:none;\r\n    border:2px solid var(--bg-main);\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/images/amy.jpg"
/*!****************************!*\
  !*** ./src/images/amy.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9c0425af8e7154ba8f18.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/amy.jpg?\n}");

/***/ },

/***/ "./src/images/ayra.jpg"
/*!*****************************!*\
  !*** ./src/images/ayra.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4213b805693323806562.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ayra.jpg?\n}");

/***/ },

/***/ "./src/images/bien.jpg"
/*!*****************************!*\
  !*** ./src/images/bien.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"228509a01ac0af2742fb.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/bien.jpg?\n}");

/***/ },

/***/ "./src/images/billie.jpg"
/*!*******************************!*\
  !*** ./src/images/billie.jpg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"78574517cf80a1ace889.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/billie.jpg?\n}");

/***/ },

/***/ "./src/images/bruno.jpg"
/*!******************************!*\
  !*** ./src/images/bruno.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e962be3bb327884452fd.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/bruno.jpg?\n}");

/***/ },

/***/ "./src/images/contact.png"
/*!********************************!*\
  !*** ./src/images/contact.png ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6612be973503a6273d4b.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/contact.png?\n}");

/***/ },

/***/ "./src/images/daniel.jpg"
/*!*******************************!*\
  !*** ./src/images/daniel.jpg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"eeb9535b54cd543b4ced.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/daniel.jpg?\n}");

/***/ },

/***/ "./src/images/dean.jpg"
/*!*****************************!*\
  !*** ./src/images/dean.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a0cfcc8aba718e32977b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/dean.jpg?\n}");

/***/ },

/***/ "./src/images/food.jpg"
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"271ad62503be1dfa14bf.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food.jpg?\n}");

/***/ },

/***/ "./src/images/nikita.jpg"
/*!*******************************!*\
  !*** ./src/images/nikita.jpg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"913b1958d35505c97469.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/nikita.jpg?\n}");

/***/ },

/***/ "./src/images/olivia.jpg"
/*!*******************************!*\
  !*** ./src/images/olivia.jpg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a72271cad1d6c5890773.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/olivia.jpg?\n}");

/***/ },

/***/ "./src/images/pic.jpg"
/*!****************************!*\
  !*** ./src/images/pic.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b7edc2a9f12583a83beb.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pic.jpg?\n}");

/***/ },

/***/ "./src/images/raye.jpg"
/*!*****************************!*\
  !*** ./src/images/raye.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"bbe425d6a819ff0a3a7d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/raye.jpg?\n}");

/***/ },

/***/ "./src/images/rema.jpg"
/*!*****************************!*\
  !*** ./src/images/rema.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"42c9f66715c21d9926f7.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/rema.jpg?\n}");

/***/ },

/***/ "./src/images/sam.jpg"
/*!****************************!*\
  !*** ./src/images/sam.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"d4b45be751a58cfdb726.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/sam.jpg?\n}");

/***/ },

/***/ "./src/images/shin.jpg"
/*!*****************************!*\
  !*** ./src/images/shin.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"261994244423df4ed774.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/shin.jpg?\n}");

/***/ },

/***/ "./src/images/sombr.jpg"
/*!******************************!*\
  !*** ./src/images/sombr.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"80c1a68b6c26dac56f4e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/sombr.jpg?\n}");

/***/ },

/***/ "./src/images/todd.jpg"
/*!*****************************!*\
  !*** ./src/images/todd.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c48fa49028743a43059a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/todd.jpg?\n}");

/***/ },

/***/ "./src/images/tyla.jpg"
/*!*****************************!*\
  !*** ./src/images/tyla.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9f40f8171de6a8f316e8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/tyla.jpg?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_contact_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/contact.png */ \"./src/images/contact.png\");\n\r\n\r\nconst contact = document.createElement(\"div\");\r\ncontact.classList.add(\"flex\");\r\ncontact.id = \"contact\";\r\n\r\nconst left = document.createElement(\"div\");\r\nleft.classList.add(\"flex-left\");\r\nconst contactPic = document.createElement(\"img\");\r\ncontactPic.classList.add(\"flex-image\");\r\ncontactPic.src = _images_contact_png__WEBPACK_IMPORTED_MODULE_0__;\r\nleft.appendChild(contactPic);\r\n\r\nconst right = document.createElement(\"div\");\r\nright.classList.add(\"flex-right\");\r\nconst form = document.createElement(\"form\");\r\nconst contactTitle = document.createElement(\"h3\");\r\ncontactTitle.classList.add(\"center-text\");\r\ncontactTitle.textContent = \"Make a Reservation\";\r\n\r\nconst names = document.createElement(\"fieldset\");\r\nconst fname = document.createElement(\"label\");\r\nfname.textContent = \"First Name:\";\r\nfname.setAttribute(\"for\", \"fname\");\r\nconst fnameInput = document.createElement(\"input\");\r\nfnameInput.type = \"text\";\r\nfnameInput.id = \"fname\";\r\nfnameInput.name = \"fname\";\r\nconst lname = document.createElement(\"label\");\r\nlname.textContent = \"Last Name:\";\r\nlname.setAttribute(\"for\", \"lname\");\r\nconst lnameInput = document.createElement(\"input\");\r\nlnameInput.type = \"text\";\r\nlnameInput.id = \"lname\";\r\nlnameInput.name = \"lname\";\r\nnames.appendChild(fname);\r\nnames.appendChild(fnameInput);\r\nnames.appendChild(lname);\r\nnames.appendChild(lnameInput);\r\n\r\nconst contacts = document.createElement(\"fieldset\");\r\nconst email = document.createElement(\"label\");\r\nemail.textContent = \"Email:\";\r\nemail.setAttribute(\"for\", \"email\");\r\nconst emailInput = document.createElement(\"input\");\r\nemailInput.type = \"email\";\r\nemailInput.id = \"email\";\r\nemailInput.name = \"email\";\r\nconst phoneNo = document.createElement(\"label\");\r\nphoneNo.textContent = \"Phone No:\";\r\nphoneNo.setAttribute(\"for\", \"phoneNo\");\r\nconst phoneNoInput = document.createElement(\"input\");\r\nphoneNoInput.type = \"number\";\r\nphoneNoInput.id = \"phoneNo\";\r\nphoneNoInput.name = \"phoneNo\";\r\ncontacts.appendChild(email);\r\ncontacts.appendChild(emailInput);\r\ncontacts.appendChild(phoneNo);\r\ncontacts.appendChild(phoneNoInput);\r\n\r\nconst dayAndTime = document.createElement(\"fieldset\");\r\nconst date = document.createElement(\"label\");\r\ndate.textContent = \"Date:\";\r\ndate.setAttribute(\"for\", \"date\");\r\nconst dateInput = document.createElement(\"input\");\r\ndateInput.type = \"date\";\r\ndateInput.id = \"date\";\r\ndateInput.name = \"date\";\r\nconst time = document.createElement(\"label\");\r\ntime.textContent = \"Phone No:\";\r\ntime.setAttribute(\"for\", \"time\");\r\nconst timeInput = document.createElement(\"input\");\r\ntimeInput.type = \"time\";\r\ntimeInput.id = \"time\";\r\ntimeInput.name = \"time\";\r\ndayAndTime.appendChild(date);\r\ndayAndTime.appendChild(dateInput);\r\ndayAndTime.appendChild(time);\r\ndayAndTime.appendChild(timeInput);\r\n\r\nconst bookBtn = document.createElement(\"button\");\r\nbookBtn.textContent = \"Book a Ticket\";\r\n\r\nform.appendChild(contactTitle);\r\nform.appendChild(names);\r\nform.appendChild(contacts);\r\nform.appendChild(dayAndTime);\r\nform.appendChild(bookBtn);\r\n\r\nright.appendChild(form);\r\ncontact.appendChild(left);\r\ncontact.appendChild(right);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about),\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/food.jpg */ \"./src/images/food.jpg\");\n/* harmony import */ var _images_pic_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pic.jpg */ \"./src/images/pic.jpg\");\n\r\n\r\n\r\nconst home = document.createElement(\"div\");\r\nhome.classList.add(\"flex\");\r\nhome.id = \"home\";\r\n\r\nconst homeLeft = document.createElement(\"div\");\r\nhomeLeft.classList.add(\"flex-left\");\r\nconst homeHeadline = document.createElement(\"h1\");\r\nhomeHeadline.classList.add(\"headline\");\r\nhomeHeadline.textContent = \"Where Flavor Meets the Beat.\";\r\n\r\nconst homeSubHeadline = document.createElement(\"h2\");\r\nhomeSubHeadline.classList.add(\"sub-headline\");\r\nhomeSubHeadline.textContent = \"A culinary world tour inspired by the icons.\";\r\n\r\nconst homeText = document.createElement(\"p\");\r\nhomeText.classList.add(\"body-text\");\r\nhomeText.textContent =\r\n  \"At The Setlist, we believe every meal should be a performance. Our menu is a curated collection of flavors inspired by the personal favorites of the artists who soundtrack our lives. From the streets of Nairobi to the stages of London, we’ve brought the intel to the table.\";\r\n\r\nconst buttons = document.createElement(\"div\");\r\nconst exploreBtn = document.createElement(\"button\");\r\nexploreBtn.textContent = \"Explore the Setlist\";\r\nbuttons.appendChild(exploreBtn);\r\nconst reserveBtn = document.createElement(\"button\");\r\nreserveBtn.textContent = \"Book Your Front Row Seat\";\r\nbuttons.appendChild(reserveBtn);\r\n\r\nconst homeRight = document.createElement(\"div\");\r\nhomeRight.classList.add(\"flex-right\");\r\nconst homeImage = document.createElement(\"img\");\r\nhomeImage.classList.add(\"flex-image\");\r\nhomeImage.src = _images_pic_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\nhomeRight.appendChild(homeImage);\r\n\r\nhomeLeft.append(homeHeadline, homeSubHeadline, homeText, buttons);\r\nhome.append(homeLeft, homeRight);\r\n\r\nconst about = document.createElement(\"div\");\r\nabout.classList.add(\"flex\");\r\nabout.id = \"about\";\r\n\r\nconst aboutLeft = document.createElement(\"div\");\r\naboutLeft.classList.add(\"flex-left\");\r\nconst aboutImage = document.createElement(\"img\");\r\naboutImage.classList.add(\"flex-image\");\r\naboutImage.src = _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\naboutLeft.appendChild(aboutImage);\r\n\r\nconst aboutRight = document.createElement(\"div\");\r\naboutRight.classList.add(\"flex-right\");\r\nconst aboutHeadline = document.createElement(\"h1\");\r\naboutHeadline.classList.add(\"headline\");\r\naboutHeadline.textContent = \"The Story Behind the Stage.\";\r\n\r\nconst aboutText = document.createElement(\"div\");\r\naboutText.classList.add(\"about-text\");\r\n\r\nconst aboutPara = document.createElement(\"p\");\r\naboutPara.textContent =\r\n  \"We believe that great music and great food come from the same place—soul, heritage, and a bit of proper magic. Our kitchen is a tribute to the icons who define our generations. We’ve scoured interviews, tour riders, and childhood stories to find the real intel on what fuels the world’s greatest creators.\";\r\nconst aboutPara2 = document.createElement(\"p\");\r\naboutPara2.textContent =\r\n  \"From Nyashinski’s favorite Kenyan staples to Billie Eilish’s vegan cravings, our menu is a global tour that bridges the gap between the studio and the dinner table.\";\r\n\r\nconst aboutPara3 = document.createElement(\"h3\");\r\naboutPara3.classList.add(\"center-text\");\r\naboutPara3.textContent = \"Our Philosophy\";\r\n\r\nconst justify = document.createElement(\"div\");\r\njustify.classList.add(\"justify\");\r\n\r\nconst headliners = document.createElement(\"p\");\r\nheadliners.innerHTML = `<strong>The Headliners:</strong> Only the freshest ingredients make it to the Main Stage.`;\r\n\r\nconst vibe = document.createElement(\"p\");\r\nvibe.innerHTML = `<strong>The Vibe:</strong> Low lights, high contrast, and a spotlight on what matters most—the flavor.`;\r\n\r\nconst encore = document.createElement(\"p\");\r\nencore.innerHTML = `<strong>The Encore:</strong> We believe every meal deserves a memorable finish, which is why our 'After Party' drinks are designed to keep the rhythm going long after the last bite.`;\r\n\r\nconst aboutPara7 = document.createElement(\"p\");\r\naboutPara7.textContent =\r\n  \"Every plate is a tribute. Every drink is an ode. Welcome to the show.\";\r\n\r\naboutRight.append(aboutHeadline, aboutText);\r\naboutText.append(aboutPara, aboutPara2, aboutPara3, justify);\r\njustify.append(headliners, vibe, encore);\r\naboutText.appendChild(aboutPara7);\r\nabout.append(aboutLeft, aboutRight);\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\nconst homeBtn = document.querySelector(\".home-btn\");\r\nconst menuBtn = document.querySelector(\".menu-btn\");\r\nconst contactBtn = document.querySelector(\".contact-btn\");\r\n\r\nfunction setContent(...elements) {\r\n  content.innerHTML = \"\";\r\n  content.append(...elements);\r\n}\r\n\r\nhomeBtn.addEventListener(\"click\", () => setContent(_home_js__WEBPACK_IMPORTED_MODULE_1__.home, _home_js__WEBPACK_IMPORTED_MODULE_1__.about));\r\nmenuBtn.addEventListener(\"click\", () => setContent(_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\r\ncontactBtn.addEventListener(\"click\", () => setContent(_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\r\n\r\nsetContent(_home_js__WEBPACK_IMPORTED_MODULE_1__.home, _home_js__WEBPACK_IMPORTED_MODULE_1__.about);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_olivia_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/olivia.jpg */ \"./src/images/olivia.jpg\");\n/* harmony import */ var _images_sombr_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sombr.jpg */ \"./src/images/sombr.jpg\");\n/* harmony import */ var _images_bruno_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bruno.jpg */ \"./src/images/bruno.jpg\");\n/* harmony import */ var _images_bien_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/bien.jpg */ \"./src/images/bien.jpg\");\n/* harmony import */ var _images_dean_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/dean.jpg */ \"./src/images/dean.jpg\");\n/* harmony import */ var _images_nikita_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/nikita.jpg */ \"./src/images/nikita.jpg\");\n/* harmony import */ var _images_sam_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/sam.jpg */ \"./src/images/sam.jpg\");\n/* harmony import */ var _images_ayra_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/ayra.jpg */ \"./src/images/ayra.jpg\");\n/* harmony import */ var _images_rema_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/rema.jpg */ \"./src/images/rema.jpg\");\n/* harmony import */ var _images_amy_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/amy.jpg */ \"./src/images/amy.jpg\");\n/* harmony import */ var _images_shin_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/shin.jpg */ \"./src/images/shin.jpg\");\n/* harmony import */ var _images_todd_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/todd.jpg */ \"./src/images/todd.jpg\");\n/* harmony import */ var _images_raye_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/raye.jpg */ \"./src/images/raye.jpg\");\n/* harmony import */ var _images_billie_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/billie.jpg */ \"./src/images/billie.jpg\");\n/* harmony import */ var _images_daniel_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/daniel.jpg */ \"./src/images/daniel.jpg\");\n/* harmony import */ var _images_tyla_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/tyla.jpg */ \"./src/images/tyla.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass MenuItem {\r\n  constructor(title, artist, description, price, image) {\r\n    this.title = title;\r\n    this.artist = artist;\r\n    this.description = description;\r\n    this.image = image;\r\n    this.price = price;\r\n  }\r\n\r\n  createSideMenuItem() {\r\n    const sideMenuItem = document.createElement(\"div\");\r\n    sideMenuItem.classList.add(\"side-menu-item\");\r\n\r\n    const sideImage = document.createElement(\"div\");\r\n    sideImage.classList.add(\"side-image-div\");\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.classList.add(\"side-image\");\r\n    image.src = this.image;\r\n\r\n    const sideRest = document.createElement(\"div\");\r\n    sideRest.classList.add(\"side-rest\");\r\n\r\n    const dishName = document.createElement(\"div\");\r\n    dishName.classList.add(\"dish-name\");\r\n    dishName.textContent = this.title;\r\n\r\n    const artist = document.createElement(\"div\");\r\n    artist.classList.add(\"artist\");\r\n    artist.textContent = this.artist;\r\n\r\n    const dishDescription = document.createElement(\"div\");\r\n    dishDescription.classList.add(\"dish-description\");\r\n    dishDescription.textContent = this.description;\r\n\r\n    const price = document.createElement(\"div\");\r\n    price.classList.add(\"price\");\r\n    price.textContent = this.price;\r\n\r\n    sideImage.appendChild(image);\r\n    sideRest.append(dishName, artist, dishDescription, price);\r\n    sideMenuItem.append(sideImage, sideRest);\r\n    return sideMenuItem;\r\n  }\r\n\r\n  createMenuItem() {\r\n    const mainMenuItem = document.createElement(\"div\");\r\n    mainMenuItem.classList.add(\"menu-item\");\r\n\r\n    const menuImage = document.createElement(\"div\");\r\n    menuImage.classList.add(\"image\");\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.classList.add(\"dish-pic\");\r\n    image.src = this.image;\r\n\r\n    const menuRest = document.createElement(\"div\");\r\n    menuRest.classList.add(\"rest\");\r\n\r\n    const dishName = document.createElement(\"div\");\r\n    dishName.classList.add(\"dish-name\");\r\n    dishName.textContent = this.title;\r\n\r\n    const artist = document.createElement(\"div\");\r\n    artist.classList.add(\"artist\");\r\n    artist.textContent = this.artist;\r\n\r\n    const dishDescription = document.createElement(\"div\");\r\n    dishDescription.classList.add(\"dish-description\");\r\n    dishDescription.textContent = this.description;\r\n\r\n    const price = document.createElement(\"div\");\r\n    price.classList.add(\"price\");\r\n    price.textContent = this.price;\r\n\r\n    menuImage.appendChild(image);\r\n    menuRest.append(dishName, artist, dishDescription, price);\r\n    mainMenuItem.append(menuImage, menuRest);\r\n    return mainMenuItem;\r\n  }\r\n}\r\n\r\nconst menu = document.createElement(\"div\");\r\nmenu.classList.add(\"menu\");\r\n\r\nconst menuLeft = document.createElement(\"div\");\r\nmenuLeft.classList.add(\"left\");\r\n\r\nconst menuMiddle = document.createElement(\"div\");\r\nmenuMiddle.classList.add(\"middle\");\r\n\r\nconst menuRight = document.createElement(\"div\");\r\nmenuRight.classList.add(\"right\");\r\n\r\nconst leftHeadline = document.createElement(\"h1\");\r\nleftHeadline.textContent = \"Opening Acts\";\r\n\r\nconst middleHeadline = document.createElement(\"h1\");\r\nmiddleHeadline.textContent = \"Main Acts\";\r\n\r\nconst rightHeadline = document.createElement(\"h1\");\r\nrightHeadline.textContent = \"After Party\";\r\n\r\nconst rodrigo = new MenuItem(\r\n  '\"The GUTS\" Lumpia',\r\n  \"Olivia Rodrigo\",\r\n  'Crispy, golden Filipino spring rolls served with a sweet chili \"sour\" sauce.',\r\n  \"Ksh.300\",\r\n  _images_olivia_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n).createSideMenuItem();\r\nconst ayra = new MenuItem(\r\n  '\"Sabi Girl\" Fried Yam',\r\n  \"Ayra Starr\",\r\n  'Perfectly seasoned fried yam spears served with a side of spicy \"scent leaf\" egg sauce',\r\n  \"Ksh. 350\",\r\n  _images_ayra_jpg__WEBPACK_IMPORTED_MODULE_7__,\r\n).createSideMenuItem();\r\nconst raye = new MenuItem(\r\n  \"Escapism Fish Bites\",\r\n  \"Raye\",\r\n  \"Mini beer-battered cod bites, a nod to the South London star’s favorite chippy comfort.\",\r\n  \"Ksh. 600\",\r\n  _images_raye_jpg__WEBPACK_IMPORTED_MODULE_12__,\r\n).createSideMenuItem();\r\nconst todd = new MenuItem(\r\n  \"Sweet Victory Madeleines\",\r\n  \"Malcom Todd\",\r\n  \"Light, buttery French sponge cakes served warm—studio fuel for the indie-soul vibe\",\r\n  \"Ksh. 400\",\r\n  _images_todd_jpg__WEBPACK_IMPORTED_MODULE_11__,\r\n).createSideMenuItem();\r\n\r\nconst daniel = new MenuItem(\r\n  '\"Best Part\" Honey Glazed Pork',\r\n  \"Daniel Caesar\",\r\n  'A soulful, slow-roasted pork neck glazed with honey and apples—the ultimate \"comfort\" headliner.',\r\n  \"Ksh. 800\",\r\n  _images_daniel_jpg__WEBPACK_IMPORTED_MODULE_14__,\r\n).createMenuItem();\r\nconst tyla = new MenuItem(\r\n  '\"Water\" Peri-Peri Chicken',\r\n  \"Tyla\",\r\n  'South African-style flame-grilled chicken that brings the heat, served with a cooling side of \"Jozi\" slaw.',\r\n  \"Ksh. 1200\",\r\n  _images_tyla_jpg__WEBPACK_IMPORTED_MODULE_15__,\r\n).createMenuItem();\r\nconst rema = new MenuItem(\r\n  '\"Calm Down\" Smoky Jollof',\r\n  \"Rema\",\r\n  \"Authentic, spicy Nigerian Jollof rice that's so good it’ll make you want to dance\",\r\n  \"Ksh. 1400\",\r\n  _images_rema_jpg__WEBPACK_IMPORTED_MODULE_8__,\r\n).createMenuItem();\r\nconst bien = new MenuItem(\r\n  \"Mama Oliech's Headliner\",\r\n  \"Bien\",\r\n  \"Deep-fried whole Tilapia served with traditional ugali and sukuma wiki—the pride of Nairobi.\",\r\n  \"Ksh. 2000\",\r\n  _images_bien_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n).createMenuItem();\r\nconst billie = new MenuItem(\r\n  '\"Where Are The Avocados?\" Ramen',\r\n  \"Billie Eilish\",\r\n  \"A 100% vegan miso broth loaded with silky tofu, mushrooms, and—of course—fresh avocado.\",\r\n  \"Ksh. 1000\",\r\n  _images_billie_jpg__WEBPACK_IMPORTED_MODULE_13__,\r\n).createMenuItem();\r\nconst bruno = new MenuItem(\r\n  '\"24K Magic\" Adobo',\r\n  \"Bruno Mars\",\r\n  \"A rich, savory Filipino chicken adobo marinated in soy, vinegar, and enough garlic to make you feel like a billionaire.\",\r\n  \"Ksh. 1300\",\r\n  _images_bruno_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n).createMenuItem();\r\nconst amy = new MenuItem(\r\n  '\"Back to Black\" Meatballs',\r\n  \"Amy Winehouse\",\r\n  \"Hearty, homemade Italian-style meatballs simmered in a rich tomato sauce,just like Amy used to make.\",\r\n  \"Ksh. 1600\",\r\n  _images_amy_jpg__WEBPACK_IMPORTED_MODULE_9__,\r\n).createMenuItem();\r\nconst nikita = new MenuItem(\r\n  '\"Ex\" Nyama Choma',\r\n  \"Nikita Kering'\",\r\n  \"Perfectly charred, tender grilled goat meat served with a vibrant kachumbari.\",\r\n  \"Ksh. 2700\",\r\n  _images_nikita_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n).createMenuItem();\r\n\r\nconst dean = new MenuItem(\r\n  'The \"Be My Baby\" Crepes',\r\n  \"Olivia Dean\",\r\n  \"Delicate crepes filled with Greek yogurt, drizzled with honey, and topped with toasted nuts.\",\r\n  \"Ksh. 500\",\r\n  _images_dean_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n).createSideMenuItem();\r\nconst shin = new MenuItem(\r\n  '\"Shin City\" Sparkler',\r\n  \"Nyashinski\",\r\n  'A crisp, sparkling passion fruit cooler with a spicy ginger kick. Perfect for the \"After Party\" when the lights stay low.',\r\n  \"Ksh. 1000\",\r\n  _images_shin_jpg__WEBPACK_IMPORTED_MODULE_10__,\r\n).createSideMenuItem();\r\nconst sam = new MenuItem(\r\n  '\"A Change is Gonna Come\" Soul Cobbler',\r\n  \"Sam Cooke\",\r\n  \"A warm, deep-dish peach cobbler that tastes like a classic Southern sunset.\",\r\n  \"Ksh. 500\",\r\n  _images_sam_jpg__WEBPACK_IMPORTED_MODULE_6__,\r\n).createSideMenuItem();\r\nconst sombr = new MenuItem(\r\n  \"Bedroom Pop Pizza & Cold Brew\",\r\n  \"Sombr\",\r\n  'A quirky dessert \"pizza\" (sweet dough with chocolate) paired with a tall, moody glass of cold brew.',\r\n  \"Ksh. 1000\",\r\n  _images_sombr_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n).createSideMenuItem();\r\n\r\nmenuLeft.append(leftHeadline, rodrigo, ayra, raye, todd);\r\nmenuMiddle.append(\r\n  middleHeadline,\r\n  daniel,\r\n  tyla,\r\n  rema,\r\n  bien,\r\n  nikita,\r\n  billie,\r\n  amy,\r\n  bruno,\r\n);\r\nmenuRight.append(rightHeadline, sam, dean, shin, sombr);\r\nmenu.append(menuLeft, menuMiddle, menuRight);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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