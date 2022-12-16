/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Rubik\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  background: #111111;\n  display: grid;\n  grid-template-columns: 26vw 1fr;\n}\nbody > div:not(.menu) {\n  height: 100%;\n}\n\n:where(.flex-center) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton,\nselect,\ninput:where([type=submit],\n[type=color],\n[type=radio],\n[type=checkbox],\n[type=range]) {\n  cursor: pointer;\n}\n\n.press-button {\n  padding: 5px;\n  border: 0;\n  transition: transform 0.1s, box-shadow 0.1s;\n}\n.press-button:active {\n  transform: translate(2px, 2px);\n  box-shadow: 0 0 0 #fff;\n}\n\n.terrain-selected {\n  display: none;\n}\n\n.menu {\n  height: 100vh;\n  background: #222;\n  color: #fff;\n  flex-direction: column;\n  justify-content: flex-start;\n  overflow-y: auto;\n  padding-bottom: 20px;\n}\n.menu h1 {\n  padding: 10px;\n}\n.menu .option-group {\n  width: 90%;\n  font-size: 1.4rem;\n  cursor: pointer;\n  background: #333;\n  padding: 5px;\n  text-align: center;\n  position: relative;\n  margin-top: 10px;\n}\n.menu .option-group span {\n  position: absolute;\n  right: 10px;\n  transform: rotate(90deg);\n}\n.menu .option {\n  width: 90%;\n  font-size: 1.3rem;\n  background: #444;\n  padding: 10px;\n  display: none;\n}\n.menu .option h3 {\n  margin-bottom: 10px;\n}\n.menu .option div {\n  margin-bottom: 10px;\n}\n.menu .option input:not([type=radio], [type=checkbox], [type=number]) {\n  display: block;\n  margin: 5px 0;\n  width: 100%;\n  font-size: 1.1rem;\n}\n.menu .option input[type=number] {\n  width: 7ch;\n  font-size: 1.1rem;\n  display: inline-block;\n  padding: 3px 0;\n  text-align: center;\n}\n.menu select {\n  width: 100%;\n  font-size: 1.1rem;\n  text-align: center;\n  margin-bottom: 10px;\n  border-radius: 0;\n  border: 1px solid #fff;\n  background: #fff;\n  padding: 5px 0;\n}\n.menu form label:not(:last-of-type) {\n  display: inline-block;\n}\n.menu form input[type=submit],\n.menu form button {\n  background: green;\n  color: #fff;\n  box-shadow: 2px 2px 2px darkgreen;\n}\n\n#delete-terrain-btn {\n  background: red;\n  color: #fff;\n  width: 100%;\n  box-shadow: 2px 2px darkred;\n  font-size: 1.1rem;\n  margin-bottom: 5px;\n}\n\n.setup {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  color: #fff;\n  background: #111;\n  flex-direction: column;\n  gap: 40px;\n  display: none;\n}\n.setup > div {\n  gap: 20px;\n  width: 70%;\n}\n.setup > div > div {\n  flex-direction: column;\n  gap: 5px;\n}\n.setup input {\n  width: 10ch;\n  text-align: center;\n  font-size: 1.6rem;\n  display: block;\n}\n.setup button {\n  padding: 5px 10px;\n  background: red;\n  color: #fff;\n  font-size: 1.6rem;\n  box-shadow: 2px 2px 2px darkred;\n}\n\ncanvas {\n  background: #555;\n  background-size: cover;\n}", "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,gCAAA;AAAF;;AAGA;EACE,aAAA;EACA,WAAA;EACA,gBAAA;EACA,mBAAA;EACA,aAAA;EACA,+BAAA;AAAF;AAEE;EACE,YAAA;AAAJ;;AAIA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AADF;;AAIA;;;;;;;EASE,eAAA;AAHF;;AAMA;EACE,YAAA;EACA,SAAA;EACA,2CAAA;AAHF;AAKE;EACE,8BAAA;EACA,sBAAA;AAHJ;;AAOA;EACE,aAAA;AAJF;;AAOA;EACE,aAAA;EACA,gBAAA;EACA,WAAA;EACA,sBAAA;EACA,2BAAA;EACA,gBAAA;EACA,oBAAA;AAJF;AAME;EACE,aAAA;AAJJ;AAOE;EACE,UAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;AALJ;AAOI;EACE,kBAAA;EACA,WAAA;EACA,wBAAA;AALN;AASE;EACE,UAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;AAPJ;AASI;EACE,mBAAA;AAPN;AAUI;EACE,mBAAA;AARN;AAWI;EACE,cAAA;EACA,aAAA;EACA,WAAA;EACA,iBAAA;AATN;AAYI;EACE,UAAA;EACA,iBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;AAVN;AAcE;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,sBAAA;EACA,gBAAA;EACA,cAAA;AAZJ;AAgBI;EACE,qBAAA;AAdN;AAiBI;;EAEE,iBAAA;EACA,WAAA;EACA,iCAAA;AAfN;;AAoBA;EACE,eAAA;EACA,WAAA;EACA,WAAA;EACA,2BAAA;EACA,iBAAA;EACA,kBAAA;AAjBF;;AAoBA;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,gBAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;AAjBF;AAmBE;EACE,SAAA;EACA,UAAA;AAjBJ;AAmBI;EACE,sBAAA;EACA,QAAA;AAjBN;AAqBE;EACE,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,cAAA;AAnBJ;AAsBE;EACE,iBAAA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;EACA,+BAAA;AApBJ;;AAwBA;EACE,gBAAA;EACA,sBAAA;AArBF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background: #111111;\r\n  display: grid;\r\n  grid-template-columns: 26vw 1fr;\r\n\r\n  > div:not(.menu) {\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n:where(.flex-center) {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nbutton,\r\nselect,\r\ninput:where(\r\n    [type='submit'],\r\n    [type='color'],\r\n    [type='radio'],\r\n    [type='checkbox'],\r\n    [type='range']\r\n  ) {\r\n  cursor: pointer;\r\n}\r\n\r\n.press-button {\r\n  padding: 5px;\r\n  border: 0;\r\n  transition: transform 0.1s, box-shadow 0.1s;\r\n\r\n  &:active {\r\n    transform: translate(2px, 2px);\r\n    box-shadow: 0 0 0 #fff;\r\n  }\r\n}\r\n\r\n.terrain-selected {\r\n  display: none;\r\n}\r\n\r\n.menu {\r\n  height: 100vh;\r\n  background: #222;\r\n  color: #fff;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  overflow-y: auto;\r\n  padding-bottom: 20px;\r\n\r\n  h1 {\r\n    padding: 10px;\r\n  }\r\n\r\n  .option-group {\r\n    width: 90%;\r\n    font-size: 1.4rem;\r\n    cursor: pointer;\r\n    background: #333;\r\n    padding: 5px;\r\n    text-align: center;\r\n    position: relative;\r\n    margin-top: 10px;\r\n\r\n    span {\r\n      position: absolute;\r\n      right: 10px;\r\n      transform: rotate(90deg);\r\n    }\r\n  }\r\n\r\n  .option {\r\n    width: 90%;\r\n    font-size: 1.3rem;\r\n    background: #444;\r\n    padding: 10px;\r\n    display: none;\r\n\r\n    h3 {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n    div {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n    input:not([type='radio'], [type='checkbox'], [type='number']) {\r\n      display: block;\r\n      margin: 5px 0;\r\n      width: 100%;\r\n      font-size: 1.1rem;\r\n    }\r\n\r\n    input[type='number'] {\r\n      width: 7ch;\r\n      font-size: 1.1rem;\r\n      display: inline-block;\r\n      padding: 3px 0;\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n  select {\r\n    width: 100%;\r\n    font-size: 1.1rem;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    border-radius: 0;\r\n    border: 1px solid #fff;\r\n    background: #fff;\r\n    padding: 5px 0;\r\n  }\r\n\r\n  form {\r\n    label:not(:last-of-type) {\r\n      display: inline-block;\r\n    }\r\n\r\n    input[type='submit'],\r\n    button {\r\n      background: green;\r\n      color: #fff;\r\n      box-shadow: 2px 2px 2px darkgreen;\r\n    }\r\n  }\r\n}\r\n\r\n#delete-terrain-btn {\r\n  background: red;\r\n  color: #fff;\r\n  width: 100%;\r\n  box-shadow: 2px 2px darkred;\r\n  font-size: 1.1rem;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.setup {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  color: #fff;\r\n  background: #111;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n  display: none;\r\n\r\n  > div {\r\n    gap: 20px;\r\n    width: 70%;\r\n\r\n    > div {\r\n      flex-direction: column;\r\n      gap: 5px;\r\n    }\r\n  }\r\n\r\n  input {\r\n    width: 10ch;\r\n    text-align: center;\r\n    font-size: 1.6rem;\r\n    display: block;\r\n  }\r\n\r\n  button {\r\n    padding: 5px 10px;\r\n    background: red;\r\n    color: #fff;\r\n    font-size: 1.6rem;\r\n    box-shadow: 2px 2px 2px darkred;\r\n  }\r\n}\r\n\r\ncanvas {\r\n  background: #555;\r\n  background-size: cover;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/factories/Cell.js":
/*!*******************************!*\
  !*** ./src/factories/Cell.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Cell = (backgroundColor) => {
  const getColor = () => backgroundColor;
  const setColor = (newColor) => (backgroundColor = newColor);

  return {
    getColor,
    setColor,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);


/***/ }),

/***/ "./src/factories/Terrain.js":
/*!**********************************!*\
  !*** ./src/factories/Terrain.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Terrain = (props) => {
  const getProps = (propName = null) => {
    if (propName) {
      return props[propName];
    }
    return props;
  };

  const setColor = (newColor) => (props.color = newColor);
  const setName = (newName) => (props.name = newName);

  const getRandomHeightChange = () => {
    if (Math.random() * 101 < props.smoothness) return 0;
    const randomNumber = Math.floor(Math.random() * props.steepness);
    const randomNumber2 = Math.random();

    if (!randomNumber) return 0;
    switch (Math.floor(randomNumber / 20)) {
      case 4:
        return randomNumber2 < 0.5 ? 4 : 5;
      case 3:
        return randomNumber2 < 0.5 ? 3 : 4;
      case 2:
        return randomNumber2 < 0.5 ? 2 : 3;
      case 1:
        return randomNumber2 < 0.5 ? 1 : 2;
      case 0:
        return randomNumber2 < 0.5 ? 0 : 1;
    }
  };

  const generate = (() => {
    if (props.maxPoints.length) return;
    let direction = Math.random() < 0.5 ? -1 : 1;
    let currentPosition =
      Math.floor(Math.random() * (props.maxHeight - props.minHeight)) +
      props.minHeight;

    for (let i = 0; i < props.width; i++) {
      props.maxPoints.push(currentPosition);
      currentPosition += direction * getRandomHeightChange();
      if (currentPosition <= props.minHeight) {
        currentPosition = props.minHeight;
        direction = -direction;
      }
      if (currentPosition >= props.maxHeight) {
        currentPosition = props.maxHeight;
        direction = -direction;
      }
    }
  })();

  return {
    setName,
    setColor,
    getProps,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Terrain);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _modules_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Input */ "./src/modules/Input.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");
/* harmony import */ var _factories_Cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factories/Cell */ "./src/factories/Cell.js");
/* harmony import */ var _factories_Terrain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factories/Terrain */ "./src/factories/Terrain.js");







const App = (() => {
  // Temporary (or not, the other option is a buggy mess so I'll stick to this for now)
  _modules_UI__WEBPACK_IMPORTED_MODULE_2__["default"].setGridSize('54', '100');
  _modules_UI__WEBPACK_IMPORTED_MODULE_2__["default"].resizeCanvas();
  _modules_UI__WEBPACK_IMPORTED_MODULE_2__["default"].showOption(1);
  // ---------

  let terrainArray = [];
  const cells = [];

  // cell generation
  const generateCells = (numberOfCells) => {
    let numberOfColumns = _modules_UI__WEBPACK_IMPORTED_MODULE_2__["default"].getGridSize().columns;

    for (let i = 0; i < numberOfCells; i++) {
      if (!cells[i % numberOfColumns]) cells[i % numberOfColumns] = [];
      cells[i % numberOfColumns].push((0,_factories_Cell__WEBPACK_IMPORTED_MODULE_4__["default"])('#fff0'));
    }
  };

  generateCells(100 * 54);

  const prepareRender = () => {
    const gridHeight = _modules_UI__WEBPACK_IMPORTED_MODULE_2__["default"].getGridSize().rows;
    cells.forEach((row) => row.forEach((cell) => cell.setColor('#fff0')));

    for (let i = 0; i < terrainArray.length; i++) {
      let maxPoints = terrainArray[i].getProps('maxPoints');
      for (let j = 0; j < maxPoints.length; j++) {
        let maxPoint =
          maxPoints[j] < gridHeight ? maxPoints[j] : gridHeight - 1;
        for (let k = 0; k <= maxPoint; k++)
          cells[j][k].setColor(terrainArray[i].getProps('color'));
      }
    }

    _modules_UI__WEBPACK_IMPORTED_MODULE_2__["default"].renderScreen(cells);
  };

  // terrain-related functions
  const getTerrain = (terrainId) => {
    return terrainArray.find((terrain) => terrain.getProps('id') === terrainId);
  };

  const getTerrainIndex = (terrainId) =>
    terrainArray.findIndex((terrain) => terrain.getProps('id') === terrainId);

  const addTerrain = (terrain) => {
    terrainArray.push(terrain);
    _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].saveTerrains(terrainArray);
    prepareRender();
  };

  const deleteTerrain = (terrainId) => {
    terrainArray = terrainArray.filter(
      (terrain) => terrain.getProps('id') !== terrainId
    );

    _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].saveTerrains(terrainArray);
    prepareRender();
  };

  const updateTerrain = (updatedTerrain) => {
    let targetTerrain = getTerrainIndex(updatedTerrain.getProps('id'));
    if (targetTerrain !== -1) {
      terrainArray[targetTerrain] = updatedTerrain;
      _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].saveTerrains(terrainArray);
      prepareRender();
    }
  };

  const updateTerrainProps = (terrainId, propValue, prop) => {
    const targetTerrain = getTerrainIndex(terrainId);

    switch (prop) {
      case 'color':
        terrainArray[targetTerrain].setColor(propValue);
        prepareRender();
        break;
      case 'name':
        terrainArray[targetTerrain].setName(propValue);
        break;
    }

    _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].saveTerrains(terrainArray);
  };

  const moveTerrain = (terrainId, newIndex) => {
    const terrainIndex = terrainArray.findIndex(
      (terrain) => terrain.getProps('id') === terrainId
    );
    [terrainArray[terrainIndex], terrainArray[newIndex]] = [
      terrainArray[newIndex],
      terrainArray[terrainIndex],
    ];
    prepareRender();
  };

  const loadSavedTerrains = (() => {
    const savedTerrains = _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].loadTerrains();
    savedTerrains.forEach((props) => {
      const terrain = (0,_factories_Terrain__WEBPACK_IMPORTED_MODULE_5__["default"])(props);
      addTerrain(terrain);
      _modules_Input__WEBPACK_IMPORTED_MODULE_1__["default"].updateSelectInput(terrain, 'add');
    });
  })();

  return {
    getTerrainIndex,
    deleteTerrain,
    updateTerrain,
    updateTerrainProps,
    moveTerrain,
    prepareRender,
    generateCells,
    addTerrain,
    getTerrain,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/*
  TODO:
  - fix bug preventing image backgrounds (ETA: the end of the world)
  - find out why the App module is initialized twice
*/


/***/ }),

/***/ "./src/modules/Input.js":
/*!******************************!*\
  !*** ./src/modules/Input.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _factories_Terrain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/Terrain */ "./src/factories/Terrain.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");





const Input = (() => {
  const selectInput = document.querySelector('select'),
    terrainOptionsForm = document.querySelector('#terrain-options'),
    zIndexInput = document.querySelector('#z-index');

  let terrainIndex = 0; // for terrain naming purposes
  let currentSelection = null; // tracks the current selected terrain

  // add or remove <option> elements when a terrain is added or removed
  const updateSelectInput = (entry, updateType, updatePayload) => {
    let targetOption = null;

    if (typeof entry === 'string')
      targetOption = Array.from(selectInput.children).filter(
        (el) => el.value === entry
      )[0];

    switch (updateType) {
      case 'add':
        if (
          Array.from(document.querySelectorAll('option')).some(
            (option) => option.value === entry.getProps('id')
          )
        )
          return;
        const option = document.createElement('option');
        option.value = entry.getProps('id');
        option.textContent = entry.getProps('name');
        selectInput.append(option);
        break;
      case 'remove':
        selectInput.value = 'new';
        targetOption.remove();
        break;
      case 'update':
        targetOption.textContent = updatePayload;
    }
  };

  // get current selection's props and set the input values to them
  const updateTerrainOptions = (newInputValues) => {
    const form = terrainOptionsForm;
    form.minHeight.value = newInputValues.minHeight;
    form.maxHeight.value = newInputValues.maxHeight;
    form.steepness.value = newInputValues.steepness;
    form.smoothness.value = newInputValues.smoothness;
    form.terrainColor.value = newInputValues.color;
    form.terrainName.value = newInputValues.name;

    form.minHeight.max = newInputValues.maxHeight;
    form.maxHeight.min = newInputValues.minHeight;
  };

  const handleSelectInputChange = () => {
    if (selectInput.value === 'new') {
      currentSelection = null;
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].changeGenerateButtonText('Generate');
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].toggleSelectedTerrainOptions(false);
      updateTerrainOptions({
        minHeight: 0,
        maxHeight: 1,
        steepness: 50,
        smoothness: 0,
        color: '#00ff00',
        name: '',
      });
      return;
    }

    currentSelection = selectInput.value;
    _UI__WEBPACK_IMPORTED_MODULE_0__["default"].changeGenerateButtonText('Re-generate');
    _UI__WEBPACK_IMPORTED_MODULE_0__["default"].toggleSelectedTerrainOptions(true);
    const targetTerrain = _index__WEBPACK_IMPORTED_MODULE_1__["default"].getTerrain(currentSelection);
    updateTerrainOptions(targetTerrain.getProps());
    zIndexInput.value = _index__WEBPACK_IMPORTED_MODULE_1__["default"].getTerrainIndex(currentSelection);
  };

  // TERRAIN OPTIONS
  // -- form & select input
  selectInput.onchange = handleSelectInputChange;

  terrainOptionsForm.onsubmit = (ev) => {
    ev.preventDefault();

    let minHeight = Number(ev.target.minHeight.value),
      maxHeight = Number(ev.target.maxHeight.value);

    if (minHeight > maxHeight) return;

    const steepness = Number(ev.target.steepness.value),
      smoothness = Number(ev.target.smoothness.value),
      color = ev.target.terrainColor.value,
      width = _UI__WEBPACK_IMPORTED_MODULE_0__["default"].getGridSize().columns;

    let name = ev.target.terrainName.value;
    if (!name.length && !currentSelection) {
      name = 'terrain' + terrainIndex;
      terrainIndex++;
    }

    const props = {
      id: currentSelection ?? (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      name,
      maxPoints: [],
      minHeight,
      maxHeight,
      steepness,
      smoothness,
      color,
      width,
    };

    const newTerrain = (0,_factories_Terrain__WEBPACK_IMPORTED_MODULE_2__["default"])(props);

    if (!currentSelection) {
      updateSelectInput(newTerrain, 'add');
      _index__WEBPACK_IMPORTED_MODULE_1__["default"].addTerrain(newTerrain);
      zIndexInput.max = Number(zIndexInput.max) + 1;
    } else {
      _index__WEBPACK_IMPORTED_MODULE_1__["default"].updateTerrain(newTerrain);
    }
  };

  // -- buttons
  document.querySelector('#delete-terrain-btn').onclick = () => {
    _index__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTerrain(currentSelection);
    updateSelectInput(currentSelection, 'remove');
    handleSelectInputChange();
    zIndexInput.max = Number(zIndexInput.max) - 1;
  };

  // -- individual input change events
  zIndexInput.onchange = (ev) => {
    if (!currentSelection) return;
    _index__WEBPACK_IMPORTED_MODULE_1__["default"].moveTerrain(currentSelection, ev.target.value);
  };

  terrainOptionsForm.maxHeight.onchange = (ev) => {
    const minHeight = Number(terrainOptionsForm.minHeight.value);
    terrainOptionsForm.minHeight.max = ev.target.value;
    ev.target.min = minHeight;
  };

  terrainOptionsForm.minHeight.onchange = (ev) => {
    const maxHeight = Number(terrainOptionsForm.maxHeight.value);
    terrainOptionsForm.maxHeight.min = ev.target.value;
    ev.target.max = maxHeight;
  };

  terrainOptionsForm.terrainColor.onchange = (ev) => {
    if (!currentSelection) return;
    _index__WEBPACK_IMPORTED_MODULE_1__["default"].updateTerrainProps(currentSelection, ev.target.value, 'color');
  };

  terrainOptionsForm.terrainName.onchange = (ev) => {
    if (!currentSelection) return;
    _index__WEBPACK_IMPORTED_MODULE_1__["default"].updateTerrainProps(currentSelection, ev.target.value, 'name');
    updateSelectInput(currentSelection, 'update', ev.target.value);
  };

  // GENERAL OPTIONS
  // makes sure only one background input is active
  document.querySelectorAll('.background-choice').forEach((choice) => {
    choice.onchange = (ev) => {
      switch (ev.target.value) {
        case 'color':
          backgroundImageInput.disabled = true;
          backgroundColorInput.disabled = false;
          break;
        case 'image':
          backgroundColorInput.disabled = true;
          backgroundImageInput.disabled = false;
      }
    };
  });

  document.querySelector('#background-color').onchange = (ev) => {
    _UI__WEBPACK_IMPORTED_MODULE_0__["default"].setCanvasBackground(ev.target.value);
  };

  document.querySelector('#background-image').onchange = (ev) => {
    if (/.+\.(png|jpg|gif|jpeg)$/.test(ev.target.value)) {
      ev.target.setCustomValidity('');
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].setCanvasBackground("url('" + ev.target.value + "')");
    } else {
      ev.target.setCustomValidity('File must end in png, jpg or gif');
      return;
    }
  };

  document.querySelector('#grid-toggle').onchange = (ev) => {
    _UI__WEBPACK_IMPORTED_MODULE_0__["default"].toggleGrid(ev.target.checked);
    _index__WEBPACK_IMPORTED_MODULE_1__["default"].prepareRender();
  };

  // OPTION GROUPS
  // switches between option groups on click
  document.querySelectorAll('.option-group').forEach((el) => {
    el.onclick = (ev) => {
      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].showOption(Number(ev.target.dataset.option));
    };
  });

  // SETUP SCREEN
  document.querySelector('#begin').onclick = () => {
    const rows = document.querySelector('#rows').value;
    const columns = document.querySelector('#columns').value;

    _UI__WEBPACK_IMPORTED_MODULE_0__["default"].setGridSize(rows, columns);
    _UI__WEBPACK_IMPORTED_MODULE_0__["default"].resizeCanvas();
    _UI__WEBPACK_IMPORTED_MODULE_0__["default"].hideSetupScreen();

    _index__WEBPACK_IMPORTED_MODULE_1__["default"].generateCells(rows * columns);
  };

  return {
    updateTerrainOptions,
    updateSelectInput,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Storage = (() => {
  const saveTerrains = (terrainArr) => {
    localStorage.setItem(
      'generated-terrains',
      JSON.stringify(terrainArr.map((terrain) => terrain.getProps()))
    );
  };

  const loadTerrains = () => {
    const savedTerrains =
      JSON.parse(localStorage.getItem('generated-terrains')) ?? [];
    return savedTerrains;
  };

  return {
    saveTerrains,
    loadTerrains,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UI = (() => {
  const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    optionGroups = document.querySelectorAll('.option-group'),
    arrows = document.querySelectorAll('.arrow'),
    options = document.querySelectorAll('.option'),
    selectedTerrainOptions = document.querySelectorAll('.terrain-selected');

  let unit = null;
  let columns = null;
  let rows = null;
  let isGridVisible = false;
  let lastOpenOption = 0;

  const toggleSelectedTerrainOptions = (state) => {
    selectedTerrainOptions.forEach(
      (option) => (option.style.display = state ? 'block' : 'none')
    );
  };

  const changeGenerateButtonText = (newText) =>
    (document.querySelector('#generate-terrain-btn').value = newText);

  const setCanvasBackground = (newBackground) => {
    canvas.style.background = newBackground;
  };

  const showOption = (index) => {
    options.forEach((option, i) => {
      if (i !== index) {
        option.style.display = 'none';
        arrows[i].style.transform = 'rotate(90deg)';
      }
    });

    let currentOpenState = options[index].style.display;
    options[index].style.display =
      currentOpenState === 'none' ? 'block' : 'none';
    arrows[index].style.transform =
      currentOpenState === 'none' ? 'rotate(-90deg)' : 'rotate(90deg)';
  };

  const toggleGrid = (newState) => {
    isGridVisible = newState;
  };

  const getGridSize = () => {
    return {
      rows,
      columns,
    };
  };

  const setGridSize = (rowsNum, columnsNum) => {
    rows = Number(rowsNum);
    columns = Number(columnsNum);
    unit = Math.floor((0.7 * innerHeight) / rows);
  };

  const hideSetupScreen = () => {
    document.querySelector('.setup').style.display = 'none';
  };

  const resizeCanvas = () => {
    canvas.width = unit * columns;
    canvas.height = unit * rows;
  };

  const drawGrid = () => {
    ctx.strokeStyle = '#fff';

    for (let i = 0; i <= columns; i++) {
      ctx.beginPath();
      ctx.moveTo(unit * i, 0);
      ctx.lineTo(unit * i, canvas.height);
      ctx.stroke();
    }

    for (let i = 0; i <= rows; i++) {
      ctx.beginPath();
      ctx.moveTo(0, unit * i);
      ctx.lineTo(canvas.width, unit * i);
      ctx.stroke();
    }
  };

  const renderCells = (cells) => {
    for (let i = 0; i < cells.length; i++)
      for (let j = 0; j < cells[i].length; j++) {
        ctx.fillStyle = cells[i][j].getColor();
        let x = i * unit;
        let y = (rows - j) * unit;
        ctx.fillRect(x, y, unit, unit);
      }
  };

  const renderScreen = (cells = null) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (cells) renderCells(cells);
    if (isGridVisible) drawGrid();
  };

  return {
    toggleSelectedTerrainOptions,
    changeGenerateButtonText,
    toggleGrid,
    renderScreen,
    showOption,
    hideSetupScreen,
    setCanvasBackground,
    getGridSize,
    setGridSize,
    resizeCanvas,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map