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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./NotoSans-Regular.ttf */ \"./src/NotoSans-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./NotoSans-Bold.ttf */ \"./src/NotoSans-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./NotoSans-Italic.ttf */ \"./src/NotoSans-Italic.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'NotoSans';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('ttf'),\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('ttf'),\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('ttf');\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-family: 'NotoSans', sans-serif;\\n}\\n\\nbody {\\n    text-align: center;\\n    overflow: hidden;\\n    font-size: 1.2rem;\\n    color: white;\\n}\\n\\n.bg-img {\\n    position: absolute;\\n    display: block;\\n    overflow: hidden;\\n    z-index: -1;\\n    max-width: 100%;\\n    height: 100%;\\n}\\n\\n#UI {\\n    display: grid;\\n    position: relative;\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-template-rows: auto;\\n    grid-template-areas: \\n    \\\"MI loader loader search\\\"\\n    \\\". cityname cityname .\\\"\\n    \\\". curr-icon snapshot .\\\"\\n    \\\"atmospheric atmospheric atmospheric atmospheric\\\"\\n    \\\". fivedaytitle fivedaytitle .\\\"\\n    \\\". fiveday fiveday .\\\"\\n    \\\". hourlytitle hourlytitle .\\\"\\n    \\\"hourly hourly hourly hourly\\\"\\n    \\\". footer footer .\\\";\\n    min-width: 320px;\\n}\\n\\n#tempchange {\\n    grid-area: MI;\\n    display: inline-flex;\\n    margin: 0;\\n}\\n\\n#current-icon {\\n    grid-area: curr-icon;\\n    display: inline-block;\\n    justify-self: end;\\n    align-self: center;\\n    min-width: none;\\n    max-width: 13rem;\\n    max-height: fit-content;\\n}\\n\\n#search {\\n    grid-area: search;\\n}\\n\\n#cityName {\\n    grid-area: cityname;\\n    text-align: center;\\n    margin-top: 1rem;\\n    font-size: 1.5rem;\\n}\\n\\n#snapshot {\\n    grid-area: snapshot;\\n    display: inline-block;\\n    text-align: center;\\n    align-self: start;\\n    justify-items: left;\\n    margin-top: 3rem;\\n    font-size: 1.2rem;\\n    padding: 0.5rem;\\n    max-width: auto;\\n    max-height: fit-content;\\n}\\n\\n#current-temp {\\n    font-size: 3rem;\\n    justify-self: center;\\n}\\n\\n#atmospheric {\\n    grid-area: atmospheric;\\n    display: inline-flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin-bottom: 2rem;\\n    font-size: 1.2rem;\\n}\\n\\n#hourly {\\n    grid-area: hourly;\\n    display: inline-flex;\\n    font-size: 1.2rem;\\n    gap: .5rem;\\n    overflow: auto;\\n    justify-self: center;\\n    background: rgba(165, 165, 165, 0.1);\\n    border-radius: 1rem;\\n    backdrop-filter: blur(5px);\\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\\n}\\n\\n.hour {\\n    display: inline-block;\\n    padding: .2rem;\\n    text-align: center;\\n    max-width: 5rem;\\n    align-self: start;\\n}\\n\\nspan.hour img {\\n    max-width: 5rem;\\n}\\n\\n#fiveday {\\n    grid-area: fiveday;\\n    display: inline-flex;\\n    justify-content: space-around;\\n    margin: .5rem;\\n    padding: .5rem;\\n    font-size: 1.2rem;\\n    background: rgba(165, 165, 165, 0.1);\\n    border-radius: 1rem;\\n    backdrop-filter: blur(5px);\\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\\n}\\n\\n#fiveday_title {\\n    grid-area: fivedaytitle;\\n}\\n\\n#hourly_title {\\n    grid-area: hourlytitle;\\n    margin-top: .5rem;\\n    margin-bottom: .2rem;\\n}\\n\\n.footer {\\n    grid-area: footer;\\n    display: flex;\\n    justify-content: center;\\n    gap: 1.5rem;\\n    position: fixed;\\n    left: 0;\\n    bottom: 0;\\n    max-width: 100%;\\n    font-size: .8rem;\\n}\\n\\n.hidden {\\n    display: none;\\n}\\n\\n.loader {\\n    margin: 0 auto;\\n    margin-top: 5rem;\\n    width:120px;\\n    height:20px;\\n    -webkit-mask:linear-gradient(90deg,#000 70%,#0000 0) left/20% 100%;\\n    background:\\n     linear-gradient(#000 0 0) left -25% top 0 /20% 100% no-repeat\\n     #ddd;\\n    animation:ct7 1s infinite steps(6);\\n  }\\n  @keyframes ct7 {\\n      100% {background-position: right -25% top 0}\\n  }\\n\\n  @media only screen and (min-device-width: 319px) and (max-device-width: 480px) {\\n    h1 {\\n        font-size: 80%;\\n    }\\n    h2 {\\n        font-size: 80%;\\n    }\\n    h3 {\\n        font-size: 80%;\\n    }\\n    #atmospheric {\\n        width: 280px;\\n    }\\n    #fiveday {\\n        display: inline-flex;\\n        font-size: 66%;\\n        padding: 0;\\n    }\\n    #fiveday img {\\n        max-width: 50px;\\n    }\\n    #hourly {\\n        font-size: 50%;\\n        max-width: 300px;\\n    }\\n    span.hour img {\\n        max-width: 40px;\\n    }\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherImperial\": () => (/* binding */ getWeatherImperial),\n/* harmony export */   \"getWeatherMetric\": () => (/* binding */ getWeatherMetric),\n/* harmony export */   \"getWeatherPreload\": () => (/* binding */ getWeatherPreload),\n/* harmony export */   \"imperialPreLoad\": () => (/* binding */ imperialPreLoad)\n/* harmony export */ });\n\nconst city = document.querySelector('input#city');\nconst image = document.querySelector('.icon');\nconst temp = document.querySelector('#current-temp');\nconst description = document.querySelector('#description');\nconst feel = document.querySelector('#feels-like')\nconst hourly = document.querySelector('#hourly');\nconst fiveDay = document.querySelector('#fiveday');\nconst hourlyLabel = document.querySelector('#hourly_title');\nconst fiveDayLabel = document.querySelector('#fiveday_title');\nconst cityTitle = document.querySelector('#cityName');\nconst sunrise = document.querySelector('.sunrise');\nconst sunset = document.querySelector('.sunset');\nconst UI =document.querySelector('#UI');\nconst loader = document.querySelector('.loader');\n\n\nasync function getWeatherMetric() {\n    try {\n        loader.classList.remove('hidden');\n        UI.classList.add('hidden');\n        let classList = 'classList' in UI;\n        for (let i = 0; i < UI.children.length; i++) {\n            let child = UI.children[i];\n            child.classList.add('hidden');\n        }\n        hourlyLabel.innerHTML = `<h2>12 Hour Forecast<h2>`;\n        fiveDayLabel.innerHTML = `<h2>5 Day Outlook</h2>`;\n        const geoCode = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q='${city.value}'&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});\n        const coordinates = await geoCode.json();\n        const lat = await coordinates[0].lat;\n        const lon = await coordinates[0].lon;\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});\n        const rawData = await response.json();\n        const currentTemp = (rawData.current.temp).toFixed(0);\n        const feels_like = (rawData.current.feels_like).toFixed(0);\n        const sunUp = new Date(rawData.current.sunrise*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n        const sunDown = new Date(rawData.current.sunset*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n        const conditionsDescription = rawData.current.weather[0].description;\n        const icon = rawData.current.weather[0].icon;\n        hourly.innerHTML ='';\n        const hourlyData = Object.entries(rawData.hourly).slice(0,12).map(entry => entry[1]);\n        hourlyData.forEach(entry => {\n            const span = document.createElement('span');\n            const time = new Date(entry.dt*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n            const iconID = entry.weather[0].icon;\n            const hourlyDesc = entry.weather[0].description;\n            const hourlyTemp = (entry.temp).toFixed(0) + '\\u{00B0}C';\n            span.innerHTML=`<h3>`+time+`</h3><img src='http://openweathermap.org/img/wn/`+iconID+`@2x.png' alt=`+hourlyDesc+`> <p>`+hourlyTemp+`</p> <p>`+hourlyDesc+`</p>`;\n            span.classList.add('hour');\n            hourly.appendChild(span);\n        });\n        fiveDay.innerHTML = '';\n        const fiveDayData = Object.entries(rawData.daily).slice(0,5).map(entry => entry[1]);\n        fiveDayData.forEach(entry => {\n            const spanDay = document.createElement('span');\n            const day = new Date(entry.dt*1000).toLocaleDateString([], {weekday: 'long'});\n            const dailyIconID = entry.weather[0].icon;\n            const dailyDesc = entry.weather[0].description;\n            const dailyTempMax = (entry.temp.max).toFixed(0) + '\\u{00B0}C';\n            const dailyTempMin = (entry.temp.min).toFixed(0) + '\\u{00B0}C';\n            spanDay.innerHTML=`<h3>`+day+`</h3><img src='http://openweathermap.org/img/wn/`+dailyIconID+`@2x.png' alt=`+dailyDesc+`> <p>High: `+dailyTempMax+`</p> <p>Lo: `+dailyTempMin+`</p> <p>`+dailyDesc+`</p>`;\n            spanDay.classList.add('day');\n            fiveDay.appendChild(spanDay);\n        });\n        const GEOCODING = await fetch('https://www.mapquestapi.com/geocoding/v1/reverse?key=cJln77H3bnp4cNucmHd0ER4t1Y3WInJk&location=' + lat + '%2C' + lon + '&outFormat=json&thumbMaps=false');\n        const country = await GEOCODING.json();\n        if(country.results[0].locations[0].adminArea1 == 'US'){\n            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea4}, ${country.results[0].locations[0].adminArea3}<h1>`;\n        } else {\n            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea3}, ${country.results[0].locations[0].adminArea1}<h1>`;\n        };\n        image.src = await `http://openweathermap.org/img/wn/${icon}@2x.png`;\n        temp.innerHTML = currentTemp + '\\u{00B0}C';\n        description.innerHTML = conditionsDescription.toUpperCase();\n        feel.innerHTML = 'FEELS LIKE: ' + feels_like + '\\u{00B0}C';\n        sunrise.innerHTML = 'SUNRISE: ' + sunUp;\n        sunset.innerHTML = 'SUNSET: ' + sunDown;\n        UI.classList.remove('hidden');\n        for (let i = 0; i < UI.children.length; i++) {\n            let child = UI.children[i];\n            child.classList.remove('hidden');\n        }\n        loader.classList.add('hidden');\n        console.log(rawData, currentTemp, conditionsDescription, hourlyData, fiveDayData, country);\n    } catch (err) {\n        console.log(err);\n    }\n};\n\nasync function getWeatherImperial() {\n    try {\n        loader.classList.remove('hidden');\n        UI.classList.add('hidden');\n        let classList = 'classList' in UI;\n        for (let i = 0; i < UI.children.length; i++) {\n            let child = UI.children[i];\n            child.classList.add('hidden');\n        }\n        hourlyLabel.innerHTML = `<h2>12 Hour Forecast<h2>`;\n        fiveDayLabel.innerHTML = `<h2>5 Day Outlook</h2>`;\n        const geoCode = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q='${city.value}'&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});\n        const coordinates = await geoCode.json();\n        const lat = await coordinates[0].lat;\n        const lon = await coordinates[0].lon;\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});\n        const rawData = await response.json();\n        const currentTemp = (rawData.current.temp).toFixed(0);\n        const feels_like = (rawData.current.feels_like).toFixed(0);\n        const sunUp = new Date(rawData.current.sunrise*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n        const sunDown = new Date(rawData.current.sunset*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n        const conditionsDescription = rawData.current.weather[0].description;\n        const icon = rawData.current.weather[0].icon;\n        hourly.innerHTML ='';\n        const hourlyData = Object.entries(rawData.hourly).slice(0,12).map(entry => entry[1]);\n        hourlyData.forEach(entry => {\n            const span = document.createElement('span');\n            const time = new Date(entry.dt*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n            const iconID = entry.weather[0].icon;\n            const hourlyDesc = entry.weather[0].description;\n            const hourlyTemp = (entry.temp).toFixed(0) + '\\u{00B0}F';\n            span.innerHTML=`<h3>`+time+`</h3><img src='http://openweathermap.org/img/wn/`+iconID+`@2x.png' alt=`+hourlyDesc+`> <p>`+hourlyTemp+`</p> <p>`+hourlyDesc+`</p>`;\n            span.classList.add('hour');\n            hourly.appendChild(span);\n        });\n        fiveDay.innerHTML = '';\n        const fiveDayData = Object.entries(rawData.daily).slice(0,5).map(entry => entry[1]);\n        fiveDayData.forEach(entry => {\n            const spanDay = document.createElement('span');\n            const day = new Date(entry.dt*1000).toLocaleDateString([], {weekday: 'long'});\n            const dailyIconID = entry.weather[0].icon;\n            const dailyDesc = entry.weather[0].description;\n            const dailyTempMax = (entry.temp.max).toFixed(0) + '\\u{00B0}F';\n            const dailyTempMin = (entry.temp.min).toFixed(0) + '\\u{00B0}F';\n            spanDay.innerHTML=`<h3>`+day+`</h3><img src='http://openweathermap.org/img/wn/`+dailyIconID+`@2x.png' alt=`+dailyDesc+`> <p>High: `+dailyTempMax+`</p> <p>Lo: `+dailyTempMin+`</p> <p>`+dailyDesc+`</p>`;\n            spanDay.classList.add('day');\n            fiveDay.appendChild(spanDay);\n        });\n        const GEOCODING = await fetch('https://www.mapquestapi.com/geocoding/v1/reverse?key=cJln77H3bnp4cNucmHd0ER4t1Y3WInJk&location=' + lat + '%2C' + lon + '&outFormat=json&thumbMaps=false');\n        const country = await GEOCODING.json();\n        if(country.results[0].locations[0].adminArea1 == 'US'){\n            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea4}, ${country.results[0].locations[0].adminArea3}<h1>`;\n        } else {\n            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea3}, ${country.results[0].locations[0].adminArea1}<h1>`;\n        };\n        image.src = await `http://openweathermap.org/img/wn/${icon}@2x.png`;\n        temp.innerHTML = currentTemp + '\\u{00B0}F';\n        description.innerHTML = conditionsDescription;\n        feel.innerHTML = 'FEELS LIKE: ' + feels_like + '\\u{00B0}F';\n        sunrise.innerHTML = 'SUNRISE: ' + sunUp;\n        sunset.innerHTML = 'SUNSET: ' + sunDown;\n        UI.classList.remove('hidden');\n        for (let i = 0; i < UI.children.length; i++) {\n            let child = UI.children[i];\n            child.classList.remove('hidden');\n        }\n        loader.classList.add('hidden');\n        console.log(rawData, currentTemp, conditionsDescription, hourlyData, fiveDayData, sunUp);\n        } catch (err) {\n        console.log(err);\n    }\n};\n\nasync function getWeatherPreload(pos) {\n    try {\n        loader.classList.remove('hidden');\n        UI.classList.add('hidden');\n        let classList = 'classList' in UI;\n        for (let i = 0; i < UI.children.length; i++) {\n            let child = UI.children[i];\n            child.classList.add('hidden');\n        }\n        const crd = pos.coords;\n        const GEOCODING = await fetch('https://www.mapquestapi.com/geocoding/v1/reverse?key=cJln77H3bnp4cNucmHd0ER4t1Y3WInJk&location=' + crd.latitude + '%2C' + crd.longitude + '&outFormat=json&thumbMaps=false');\n        const country = await GEOCODING.json();\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});\n        const rawData = await response.json();\n        const currentTemp = (rawData.current.temp).toFixed(0);\n        const feels_like = (rawData.current.feels_like).toFixed(0);\n        const sunUp = new Date(rawData.current.sunrise*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n        const sunDown = new Date(rawData.current.sunset*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n        const conditionsDescription = rawData.current.weather[0].description;\n        const icon = rawData.current.weather[0].icon;\n        const hourlyData = Object.entries(rawData.hourly).slice(0,12).map(entry => entry[1]);\n        hourlyData.forEach(entry => {\n            const span = document.createElement('span');\n            const time = new Date(entry.dt*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n            const iconID = entry.weather[0].icon;\n            const hourlyDesc = entry.weather[0].description;\n            const hourlyTemp = (entry.temp).toFixed(0) + '\\u{00B0}C';\n            span.innerHTML=`<h3>`+time+`</h3><img src='http://openweathermap.org/img/wn/`+iconID+`@2x.png' alt=`+hourlyDesc+`> <p>`+hourlyTemp+`</p> <p>`+hourlyDesc+`</p>`;\n            span.classList.add('hour');\n            hourly.appendChild(span);\n        });\n        const fiveDayData = Object.entries(rawData.daily).slice(0,5).map(entry => entry[1]);\n        fiveDayData.forEach(entry => {\n            const spanDay = document.createElement('span');\n            const day = new Date(entry.dt*1000).toLocaleDateString([], {weekday: 'long'});\n            const dailyIconID = entry.weather[0].icon;\n            const dailyDesc = entry.weather[0].description;\n            const dailyTempMax = (entry.temp.max).toFixed(0) + '\\u{00B0}C';\n            const dailyTempMin = (entry.temp.min).toFixed(0) + '\\u{00B0}C';\n            spanDay.innerHTML=`<h3>`+day+`</h3><img src='http://openweathermap.org/img/wn/`+dailyIconID+`@2x.png' alt=`+dailyDesc+`> <p>High: `+dailyTempMax+`</p> <p>Lo: `+dailyTempMin+`</p> <p>`+dailyDesc+`</p>`;\n            spanDay.classList.add('day');\n            fiveDay.appendChild(spanDay);\n        });\n        image.src = await `http://openweathermap.org/img/wn/${icon}@2x.png`;\n        temp.innerHTML = currentTemp + '\\u{00B0}C';\n        description.innerHTML = conditionsDescription.toUpperCase();\n        feel.innerHTML = 'FEELS LIKE: ' + feels_like + '\\u{00B0}C';\n        if(country.results[0].locations[0].adminArea1 == 'US'){\n            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea4}, ${country.results[0].locations[0].adminArea3}<h1>`;\n        } else {\n            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea3}, ${country.results[0].locations[0].adminArea1}<h1>`;\n        };\n        hourlyLabel.innerHTML = `<h2>12 Hour Forecast<h2>`;\n        fiveDayLabel.innerHTML = `<h2>5 Day Outlook</h2>`;\n        sunrise.innerHTML = 'SUNRISE: ' + sunUp;\n        sunset.innerHTML = 'SUNSET: ' + sunDown;\n        UI.classList.remove('hidden');\n        for (let i = 0; i < UI.children.length; i++) {\n            let child = UI.children[i];\n            child.classList.remove('hidden');\n        }\n        loader.classList.add('hidden');\n        console.log(rawData, currentTemp, conditionsDescription, hourlyData, fiveDayData, country);\n    } catch (err) {\n        console.log(err);\n    }\n};\n\nasync function imperialPreLoad(pos) {\n    try {\n        loader.classList.remove('hidden');\n        UI.classList.add('hidden');\n        let classList = 'classList' in UI;\n        for (let i = 0; i < UI.children.length; i++) {\n            let child = UI.children[i];\n            child.classList.add('hidden');\n        }\n        const crd = pos.coords;\n        const GEOCODING = await fetch('https://www.mapquestapi.com/geocoding/v1/reverse?key=cJln77H3bnp4cNucmHd0ER4t1Y3WInJk&location=' + crd.latitude + '%2C' + crd.longitude + '&outFormat=json&thumbMaps=false');\n        const country = await GEOCODING.json();\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&units=imperial&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});\n        const rawData = await response.json();\n        const currentTemp = (rawData.current.temp).toFixed(0);\n        const feels_like = (rawData.current.feels_like).toFixed(0);\n        const sunUp = new Date(rawData.current.sunrise*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n        const sunDown = new Date(rawData.current.sunset*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n        const conditionsDescription = rawData.current.weather[0].description;\n        const icon = rawData.current.weather[0].icon;\n        hourly.innerHTML ='';\n        const hourlyData = Object.entries(rawData.hourly).slice(0,12).map(entry => entry[1]);\n        hourlyData.forEach(entry => {\n            const span = document.createElement('span');\n            const time = new Date(entry.dt*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n            const iconID = entry.weather[0].icon;\n            const hourlyDesc = entry.weather[0].description;\n            const hourlyTemp = (entry.temp).toFixed(0) + '\\u{00B0}F';\n            span.innerHTML=`<h3>`+time+`</h3><img src='http://openweathermap.org/img/wn/`+iconID+`@2x.png' alt=`+hourlyDesc+`> <p>`+hourlyTemp+`</p> <p>`+hourlyDesc+`</p>`;\n            span.classList.add('hour');\n            hourly.appendChild(span);\n        });\n        fiveDay.innerHTML = '';\n        const fiveDayData = Object.entries(rawData.daily).slice(0,5).map(entry => entry[1]);\n        fiveDayData.forEach(entry => {\n            const spanDay = document.createElement('span');\n            const day = new Date(entry.dt*1000).toLocaleDateString([], {weekday: 'long'});\n            const dailyIconID = entry.weather[0].icon;\n            const dailyDesc = entry.weather[0].description;\n            const dailyTempMax = (entry.temp.max).toFixed(0) + '\\u{00B0}F';\n            const dailyTempMin = (entry.temp.min).toFixed(0) + '\\u{00B0}F';\n            spanDay.innerHTML=`<h3>`+day+`</h3><img src='http://openweathermap.org/img/wn/`+dailyIconID+`@2x.png' alt=`+dailyDesc+`> <p>High: `+dailyTempMax+`</p> <p>Lo: `+dailyTempMin+`</p> <p>`+dailyDesc+`</p>`;\n            spanDay.classList.add('day');\n            fiveDay.appendChild(spanDay);\n        });\n        image.src = await `http://openweathermap.org/img/wn/${icon}@2x.png`;\n        temp.innerHTML = currentTemp + '\\u{00B0}F';\n        description.innerHTML = conditionsDescription;\n        feel.innerHTML = 'FEELS LIKE: ' + feels_like + '\\u{00B0}F';\n        if(country.results[0].locations[0].adminArea1 == 'US'){\n            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea4}, ${country.results[0].locations[0].adminArea3}<h1>`;\n        } else {\n            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea3}, ${country.results[0].locations[0].adminArea1}<h1>`;\n        };\n        hourlyLabel.innerHTML = `<h2>12 Hour Forecast<h2>`;\n        fiveDayLabel.innerHTML = `<h2>5 Day Outlook</h2>`;\n        sunrise.innerHTML = 'SUNRISE: ' + sunUp;\n        sunset.innerHTML = 'SUNSET: ' + sunDown;\n        UI.classList.remove('hidden');\n        for (let i = 0; i < UI.children.length; i++) {\n            let child = UI.children[i];\n            child.classList.remove('hidden');\n        }\n        loader.classList.add('hidden');\n        console.log(rawData, currentTemp, conditionsDescription, hourlyData, fiveDayData, country);\n    } catch (err) {\n        console.log(err);\n    }\n };\n\n//# sourceURL=webpack://weatherapp/./src/API.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API */ \"./src/API.js\");\n\n\n\nconst bgImage = document.querySelector('.bg-img');\nconst UI = document.querySelector('#UI');\nconst input = document.querySelector('input#city');\nconst image = document.querySelector('img');\nconst searchBtn = document.querySelector('#search');\nconst currentTemp = document.querySelector('#current-temp');\nconst conditions = document.querySelector('#conditions');\nconst description = document.querySelector('#description');\nconst body = document.querySelector('body');\nconst metric = document.querySelector('#metric');\nconst imperial = document.querySelector('#imperial');\n\nfunction bgSet() {\n    const now = (new Date()).getHours();\n    if(now <= 6 || now >= 19) {\n        bgImage.src = 'https://images.unsplash.com/photo-1513628253939-010e64ac66cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'\n    } else {\n        bgImage.src = 'https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80'\n    }\n};\n\n\n  \n  \ndocument.addEventListener('load', navigator.geolocation.getCurrentPosition(_API__WEBPACK_IMPORTED_MODULE_1__.getWeatherPreload));\nbgSet();\nmetric.addEventListener('click', _API__WEBPACK_IMPORTED_MODULE_1__.getWeatherMetric);\nimperial.addEventListener('click', e => { if(city.value === ''){\n    navigator.geolocation.getCurrentPosition(_API__WEBPACK_IMPORTED_MODULE_1__.imperialPreLoad);\n} else {\n    (0,_API__WEBPACK_IMPORTED_MODULE_1__.getWeatherImperial)();\n}\n});\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/NotoSans-Bold.ttf":
/*!*******************************!*\
  !*** ./src/NotoSans-Bold.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"23e70cfbbe0783c66804.ttf\";\n\n//# sourceURL=webpack://weatherapp/./src/NotoSans-Bold.ttf?");

/***/ }),

/***/ "./src/NotoSans-Italic.ttf":
/*!*********************************!*\
  !*** ./src/NotoSans-Italic.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"02294dd982a747d223ad.ttf\";\n\n//# sourceURL=webpack://weatherapp/./src/NotoSans-Italic.ttf?");

/***/ }),

/***/ "./src/NotoSans-Regular.ttf":
/*!**********************************!*\
  !*** ./src/NotoSans-Regular.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eae34fa8f1e0c4c6d797.ttf\";\n\n//# sourceURL=webpack://weatherapp/./src/NotoSans-Regular.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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