/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home/fileComponent.js":
/*!***********************************!*\
  !*** ./src/home/fileComponent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileComponent)
/* harmony export */ });
/* harmony import */ var _nui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nui/components */ "./src/nui/components.js");
/* harmony import */ var _nui_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nui/style */ "./src/nui/style.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var FileComponent = /*#__PURE__*/function (_Column) {
  function FileComponent() {
    var _this;
    _classCallCheck(this, FileComponent);
    _this = _callSuper(this, FileComponent, [{
      styles: _objectSpread({
        width: '130px',
        height: '160px',
        backgroundColor: _nui_style__WEBPACK_IMPORTED_MODULE_1__.Color.FileColor,
        borderRadius: '8px'
      }, _nui_style__WEBPACK_IMPORTED_MODULE_1__.Style.Pointer)
    }]);
    var preview = new _nui_components__WEBPACK_IMPORTED_MODULE_0__.Column({
      styles: {
        height: '100%',
        padding: '6px'
      }
    });
    var icon = new _nui_components__WEBPACK_IMPORTED_MODULE_0__.Column({
      styles: {
        backgroundColor: _nui_style__WEBPACK_IMPORTED_MODULE_1__.Color.FileInnerColor,
        borderRadius: '4px',
        height: '100%',
        width: '100%'
      }
    });
    preview.add(icon);
    _this.add(preview);
    var info = new _nui_components__WEBPACK_IMPORTED_MODULE_0__.Row({
      styles: {}
    });
    info.add(new _nui_components__WEBPACK_IMPORTED_MODULE_0__.Text({
      text: "File name",
      styles: {
        width: '100%',
        padding: '6px 10px',
        alignContent: 'center'
      }
    }));
    info.add(new _nui_components__WEBPACK_IMPORTED_MODULE_0__.IconButton({
      svgName: 'moreVertical'
    }));
    _this.hoverStyle({
      backgroundColor: _nui_style__WEBPACK_IMPORTED_MODULE_1__.Color.FileColor
    }, {
      backgroundColor: _nui_style__WEBPACK_IMPORTED_MODULE_1__.Color.HoveredFileColor
    });
    _this.add(info);
    return _this;
  }
  _inherits(FileComponent, _Column);
  return _createClass(FileComponent);
}(_nui_components__WEBPACK_IMPORTED_MODULE_0__.Column);


/***/ }),

/***/ "./src/home/files.js":
/*!***************************!*\
  !*** ./src/home/files.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilesTab)
/* harmony export */ });
/* harmony import */ var _fileComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileComponent */ "./src/home/fileComponent.js");
/* harmony import */ var _nui_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nui/element */ "./src/nui/element.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var filesUi = function filesUi(props) {};
var FilesTab = /*#__PURE__*/function (_Element) {
  function FilesTab(props) {
    var _this;
    _classCallCheck(this, FilesTab);
    _this = _callSuper(this, FilesTab, [{
      tag: 'div',
      styles: {
        display: 'inline-flex',
        flexFlow: 'wrap',
        padding: '16px',
        gap: '16px',
        justifyContent: 'center'
      }
    }]);
    for (var i = 0; i <= 20; ++i) {
      _this.add(new _fileComponent__WEBPACK_IMPORTED_MODULE_0__["default"]());
    }
    return _this;
  }
  _inherits(FilesTab, _Element);
  return _createClass(FilesTab);
}(_nui_element__WEBPACK_IMPORTED_MODULE_1__.Element);

var ViewModel = /*#__PURE__*/_createClass(function ViewModel() {
  _classCallCheck(this, ViewModel);
});

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeScreen)
/* harmony export */ });
/* harmony import */ var _nui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nui/components */ "./src/nui/components.js");
/* harmony import */ var _nui_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nui/ref */ "./src/nui/ref.js");
/* harmony import */ var _nui_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nui/api */ "./src/nui/api.js");
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files */ "./src/home/files.js");
/* harmony import */ var _nui_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nui/style */ "./src/nui/style.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






// https://www.youtube.com/watch?v=0fONene3OIA&ab_channel=BeyondFireship
// web vitals chrome extesion

var homeUi = function homeUi(props) {
  var screen = new _nui_components__WEBPACK_IMPORTED_MODULE_0__.Column();
  var topBar = new _nui_components__WEBPACK_IMPORTED_MODULE_0__.Row({
    styles: {
      padding: '8px',
      alignItems: 'center',
      position: 'sticky',
      top: '0',
      backgroundColor: _nui_style__WEBPACK_IMPORTED_MODULE_4__.Color.BgColor,
      zIndex: '100'
    }
  });
  var selectedTitle = (0,_nui_ref__WEBPACK_IMPORTED_MODULE_1__.ref)('Files');
  var titles = _nui_components__WEBPACK_IMPORTED_MODULE_0__.Tabs.createTabItems('Files', 'Text');
  var titleTabs = new _nui_components__WEBPACK_IMPORTED_MODULE_0__.TitleTabs({
    tabItems: titles,
    selectedItem: selectedTitle
  });
  topBar.add(titleTabs);
  topBar.add(new _nui_components__WEBPACK_IMPORTED_MODULE_0__.HorizontalSpace('auto'));
  topBar.add(new _nui_components__WEBPACK_IMPORTED_MODULE_0__.IconButton({
    svgName: 'refresh',
    attrs: {
      onclick: function onclick() {
        var _props$onRefreshClick;
        return props === null || props === void 0 || (_props$onRefreshClick = props.onRefreshClicked) === null || _props$onRefreshClick === void 0 ? void 0 : _props$onRefreshClick.call(props);
      }
    }
  }));
  topBar.add(new _nui_components__WEBPACK_IMPORTED_MODULE_0__.HorizontalSpace('4px'));
  var themeIcon = (0,_nui_ref__WEBPACK_IMPORTED_MODULE_1__.ref)('sun');
  topBar.add(new _nui_components__WEBPACK_IMPORTED_MODULE_0__.IconButton({
    svgName: themeIcon,
    attrs: {
      onclick: function onclick() {
        var body = document.body;
        body.classList.toggle('darkTheme');
        body.classList.toggle('lightTheme');
        if (themeIcon.value === 'moon') themeIcon.value = 'sun';else themeIcon.value = 'moon';
      }
    }
  }));
  topBar.add(new _nui_components__WEBPACK_IMPORTED_MODULE_0__.HorizontalSpace('4px'));
  topBar.add(new _nui_components__WEBPACK_IMPORTED_MODULE_0__.IconButton({
    svgName: 'settings',
    attrs: {
      onclick: function onclick() {
        var _props$onSettingsClic;
        return props === null || props === void 0 || (_props$onSettingsClic = props.onSettingsClicked) === null || _props$onSettingsClic === void 0 ? void 0 : _props$onSettingsClic.call(props);
      }
    }
  }));
  screen.add(topBar);
  var textCol = new _nui_components__WEBPACK_IMPORTED_MODULE_0__.Column();
  var s = new _nui_components__WEBPACK_IMPORTED_MODULE_0__.StateSet({
    selectedItem: selectedTitle,
    states: {
      'Files': new _files__WEBPACK_IMPORTED_MODULE_3__["default"](),
      'Text': textCol
    }
  });
  screen.add(s);
  return {
    selectedTitle: selectedTitle,
    el: screen
  };
};
var HomeScreen = /*#__PURE__*/function (_Screen) {
  function HomeScreen() {
    var _this;
    _classCallCheck(this, HomeScreen);
    _this = _callSuper(this, HomeScreen);
    var count = (0,_nui_ref__WEBPACK_IMPORTED_MODULE_1__.ref)('-1');
    var ui = homeUi({
      count: count,
      onSettingsClicked: function onSettingsClicked() {
        return _this.onSettingsClicked();
      }
    });
    var viewModel = new HomeViewModel();
    viewModel.itemsApi.subscribe(function (data) {
      count.value = data.totalItems.toString();
    });
    viewModel.itemsApi.isLoading.addObserver(function (data) {
      console.log("isLoading: " + data);
    });
    viewModel.getItems();
    _this.add(ui.el);
    _this.ui = ui;
    return _this;
  }
  _inherits(HomeScreen, _Screen);
  return _createClass(HomeScreen, [{
    key: "onSettingsClicked",
    value: function onSettingsClicked() {
      console.log("settings");
      this.ui.selectedTitle.value = 'Text';
    }
  }]);
}(_nui_components__WEBPACK_IMPORTED_MODULE_0__.Screen);

var HomeViewModel = /*#__PURE__*/function () {
  function HomeViewModel() {
    _classCallCheck(this, HomeViewModel);
    this.itemsApi = new _nui_api__WEBPACK_IMPORTED_MODULE_2__.ApiCall({
      url: 'https://raw.githubusercontent.com/SatyaSnehith/posts/main/projects.json'
    });
  }
  return _createClass(HomeViewModel, [{
    key: "getItems",
    value: function () {
      var _getItems = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.itemsApi.call();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getItems() {
        return _getItems.apply(this, arguments);
      }
      return getItems;
    }()
  }]);
}();

/***/ }),

/***/ "./src/nui/api.js":
/*!************************!*\
  !*** ./src/nui/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiCall: () => (/* binding */ ApiCall)
/* harmony export */ });
/* harmony import */ var _ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ref */ "./src/nui/ref.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ApiCall = /*#__PURE__*/function () {
  /**
   *
   * @param { {
   * url: String,
   * } } props
   */
  function ApiCall() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, ApiCall);
    this.url = props === null || props === void 0 ? void 0 : props.url;
    this.isLoading = (0,_ref__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    this.data = null;
    this.subscribers = [];
  }
  return _createClass(ApiCall, [{
    key: "api",
    value: function () {
      var _api = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(this.url);
            case 3:
              response = _context.sent;
              if (response.ok) {
                _context.next = 6;
                break;
              }
              throw new Error('Network response was not ok');
            case 6:
              _context.next = 8;
              return response.json();
            case 8:
              return _context.abrupt("return", _context.sent);
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.error('Failed to fetch users:', _context.t0);
              return _context.abrupt("return", null);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 11]]);
      }));
      function api() {
        return _api.apply(this, arguments);
      }
      return api;
    }()
  }, {
    key: "call",
    value: function () {
      var _call = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.isLoading.value = true;
              _context2.next = 3;
              return this.api();
            case 3:
              this.data = _context2.sent;
              this.isLoading.value = false;
              this.notify();
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function call() {
        return _call.apply(this, arguments);
      }
      return call;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      this.subscribers.push(callback);
    }
  }, {
    key: "notify",
    value: function notify() {
      var _this = this;
      if (this.data) {
        this.subscribers.forEach(function (callback) {
          return callback(_this.data);
        });
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/nui/components.js":
/*!*******************************!*\
  !*** ./src/nui/components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   Column: () => (/* binding */ Column),
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   HorizontalDivider: () => (/* binding */ HorizontalDivider),
/* harmony export */   HorizontalSpace: () => (/* binding */ HorizontalSpace),
/* harmony export */   IconButton: () => (/* binding */ IconButton),
/* harmony export */   MenuPopup: () => (/* binding */ MenuPopup),
/* harmony export */   Nav: () => (/* binding */ Nav),
/* harmony export */   Popup: () => (/* binding */ Popup),
/* harmony export */   Route: () => (/* binding */ Route),
/* harmony export */   Row: () => (/* binding */ Row),
/* harmony export */   Screen: () => (/* binding */ Screen),
/* harmony export */   State: () => (/* binding */ State),
/* harmony export */   StateSet: () => (/* binding */ StateSet),
/* harmony export */   SvgIcon: () => (/* binding */ SvgIcon),
/* harmony export */   Tabs: () => (/* binding */ Tabs),
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   TitleTabs: () => (/* binding */ TitleTabs),
/* harmony export */   UnderlineTabs: () => (/* binding */ UnderlineTabs),
/* harmony export */   VerticalSpace: () => (/* binding */ VerticalSpace)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/nui/element.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/nui/style.js");
/* harmony import */ var _ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ref */ "./src/nui/ref.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var body = document.body;
var SizeObserver = {
  observers: [],
  mobileMaxWidth: 760,
  isMobile: body.clientWidth < 760,
  isMobileListening: false,
  listen: function listen() {
    var _this = this;
    this.isMobileListening = true;
    window.matchMedia("(max-width: " + SizeObserver.mobileMaxWidth + "px)").addEventListener("change", function (x) {
      _this.isMobile = x.matches;
      var _iterator = _createForOfIteratorHelper(_this.observers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer(_this.isMobile);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  },
  addObserver: function addObserver(observer) {
    if (!this.isMobileListening) {
      this.listen();
    }
    this.observers.push(observer);
  }
};
SizeObserver.addObserver(function (isMobile) {
  return console.log("isMobile: " + isMobile);
});
var VerticalSpace = /*#__PURE__*/function (_Element) {
  function VerticalSpace(margin) {
    _classCallCheck(this, VerticalSpace);
    return _callSuper(this, VerticalSpace, [{
      tag: 'div',
      styles: {
        marginTop: margin
      }
    }]);
  }
  _inherits(VerticalSpace, _Element);
  return _createClass(VerticalSpace);
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);
var HorizontalSpace = /*#__PURE__*/function (_Element2) {
  function HorizontalSpace(margin) {
    _classCallCheck(this, HorizontalSpace);
    return _callSuper(this, HorizontalSpace, [{
      tag: 'div',
      styles: {
        marginLeft: margin
      }
    }]);
  }
  _inherits(HorizontalSpace, _Element2);
  return _createClass(HorizontalSpace);
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);
var HorizontalDivider = /*#__PURE__*/function (_Element3) {
  /**
   *
   * @param { { styles } } props
   */
  function HorizontalDivider(props) {
    _classCallCheck(this, HorizontalDivider);
    return _callSuper(this, HorizontalDivider, [{
      tag: 'div',
      styles: _objectSpread({
        height: '1px',
        backgroundColor: _style__WEBPACK_IMPORTED_MODULE_1__.Color.BorderColor
      }, props.styles)
    }]);
  }
  _inherits(HorizontalDivider, _Element3);
  return _createClass(HorizontalDivider);
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);
var Row = /*#__PURE__*/function (_Element4) {
  /**
   *
   * @param { { id, items, styles, attrs } } props
   */
  function Row() {
    var _props$items;
    var _this2;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Row);
    _this2 = _callSuper(this, Row, [_objectSpread({
      tag: 'div'
    }, props)]);
    _this2.style(_style__WEBPACK_IMPORTED_MODULE_1__.Style.Row);
    var _iterator2 = _createForOfIteratorHelper((_props$items = props === null || props === void 0 ? void 0 : props.items) !== null && _props$items !== void 0 ? _props$items : []),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var e = _step2.value;
        _this2.add(e);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return _this2;
  }
  _inherits(Row, _Element4);
  return _createClass(Row);
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);
var Column = /*#__PURE__*/function (_Element5) {
  /**
   *
   * @param { { id, items, styles, attrs } } props
   */
  function Column() {
    var _props$items2;
    var _this3;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Column);
    _this3 = _callSuper(this, Column, [_objectSpread({
      tag: 'div'
    }, props)]);
    _this3.style(_style__WEBPACK_IMPORTED_MODULE_1__.Style.Column);
    var _iterator3 = _createForOfIteratorHelper((_props$items2 = props === null || props === void 0 ? void 0 : props.items) !== null && _props$items2 !== void 0 ? _props$items2 : []),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var e = _step3.value;
        _this3.add(e);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return _this3;
  }
  _inherits(Column, _Element5);
  return _createClass(Column);
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);
var Text = /*#__PURE__*/function (_Element6) {
  /**
   *
   * @param { { text, styles, attrs } } props
   */
  function Text() {
    var _this4;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Text);
    _this4 = _callSuper(this, Text, [{
      tag: 'div',
      attrs: props.attrs,
      styles: _objectSpread(_objectSpread({}, {
        margin: '0px',
        color: _style__WEBPACK_IMPORTED_MODULE_1__.Color.TextColor,
        fontWeight: '300'
      }), props.styles)
    }]);
    _this4.checkRef(props.text, function (value) {
      _this4.content(value);
    });
    return _this4;
  }
  _inherits(Text, _Element6);
  return _createClass(Text);
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);
var SvgIcon = /*#__PURE__*/function (_Element7) {
  /**
   *
   * @param { { svgName, size, styles, attrs } } props
   */
  function SvgIcon() {
    var _this5;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, SvgIcon);
    _this5 = _callSuper(this, SvgIcon);
    _this5.size = props.size || '18px';
    _this5.node = (0,_element__WEBPACK_IMPORTED_MODULE_0__.fromHTML)(_style__WEBPACK_IMPORTED_MODULE_1__.Icon.icons[props.svgName]);
    _this5.style(_objectSpread(_objectSpread(_objectSpread({}, _style__WEBPACK_IMPORTED_MODULE_1__.Style.Size(_this5.size)), props.styles), {}, {
      stoke: _style__WEBPACK_IMPORTED_MODULE_1__.Color.TextColor
    }, _style__WEBPACK_IMPORTED_MODULE_1__.Style.Size(_this5.size)));
    _this5.attr(props.attrs);
    return _this5;
  }

  /**
   *
   * @param { { svg, size, styles } } props
   */
  _inherits(SvgIcon, _Element7);
  return _createClass(SvgIcon, [{
    key: "content",
    value: function content(props) {
      if (props.svg) {
        _superPropGet(SvgIcon, "content", this, 3)([props.svg]);
      }
      this.style(_objectSpread(_objectSpread(_objectSpread({}, props.styles), {}, {
        verticalAlign: 'top',
        // svg bug
        pointerEvents: 'none'
      }, _style__WEBPACK_IMPORTED_MODULE_1__.Style.Size(this.size)), {}, {
        stoke: _style__WEBPACK_IMPORTED_MODULE_1__.Color.TextColor
      }));
    }
  }]);
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);
var IconButton = /*#__PURE__*/function (_Element8) {
  /**
   *
   * @param { { svgName, styles, attrs } } props
   */
  function IconButton() {
    var _this6;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, IconButton);
    _this6 = _callSuper(this, IconButton, [_objectSpread({
      tag: 'div'
    }, props)]);
    _this6.style(_objectSpread({
      display: 'flex',
      padding: '8px',
      borderRadius: '6px'
    }, _style__WEBPACK_IMPORTED_MODULE_1__.Style.Pointer));
    _this6.svg = new SvgIcon({
      svgName: _ref__WEBPACK_IMPORTED_MODULE_2__.Ref.getValue(props.svgName),
      size: '16px'
    });
    _this6.checkRef(props.svgName, function (value) {
      console.log("svg change " + value);
      _this6.svg.replaceNode((0,_element__WEBPACK_IMPORTED_MODULE_0__.fromHTML)(_style__WEBPACK_IMPORTED_MODULE_1__.Icon.icons[value]));
    });
    _this6.add(_this6.svg);
    _this6.hoverStyle(_style__WEBPACK_IMPORTED_MODULE_1__.Style.EmptyBg, _style__WEBPACK_IMPORTED_MODULE_1__.Style.CardBg);
    return _this6;
  }
  _inherits(IconButton, _Element8);
  return _createClass(IconButton);
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);
var Button = /*#__PURE__*/function (_Element9) {
  /**
   *
   * @param { { text, href, svgName, styles, attrs } } props
   */
  function Button() {
    var _this7;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Button);
    _this7 = _callSuper(this, Button, [_objectSpread({
      tag: 'div'
    }, props)]);
    _this7.hoverStyle(_style__WEBPACK_IMPORTED_MODULE_1__.Style.EmptyBg, _style__WEBPACK_IMPORTED_MODULE_1__.Style.CardBg);
    _this7.style({
      margin: '0px',
      color: _style__WEBPACK_IMPORTED_MODULE_1__.Color.TextColor
    }, _style__WEBPACK_IMPORTED_MODULE_1__.Style.BorderRadius('4px'), _style__WEBPACK_IMPORTED_MODULE_1__.Style.Padding('4px 8px'), _style__WEBPACK_IMPORTED_MODULE_1__.Style.Pointer);
    if (props.svgName) {
      _this7.style({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      });
      _this7.svg = new SvgIcon({
        svgName: props.svgName,
        size: '16px'
      });
      _this7.add(_this7.svg);
      _this7.add(new HorizontalSpace('8px'));
    }
    _this7.add(new Text({
      text: props.text
    }));
    if (props.href) {
      _this7.href(props.href);
    }
    return _this7;
  }
  _inherits(Button, _Element9);
  return _createClass(Button, [{
    key: "href",
    value: function href(ref) {
      this.node.href = ref;
    }
  }]);
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);
var Tabs = /*#__PURE__*/function (_RefElementCollection) {
  /**
   * @param { {
   * id: String,
   * selectedItem: Ref,
   * tabItems: RefArray,
   * toElement: Function,
   * styles: Object,
   * attrs: Object
   * } } props
   */
  function Tabs() {
    var _this8;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Tabs);
    _this8 = _callSuper(this, Tabs, [{
      tag: 'div',
      items: props.tabItems,
      toElement: props.toElement,
      styles: _objectSpread({
        display: 'flex'
      }, props.styles),
      attrs: props.attrs
    }]);
    _this8.tabItems = props.tabItems;
    _this8.checkRef(props.selectedItem, function (value, oldValue) {
      if (oldValue === value) return;
      _this8.swapSelection(value);
      _this8.swapSelection(oldValue);
    });
    return _this8;
  }
  _inherits(Tabs, _RefElementCollection);
  return _createClass(Tabs, [{
    key: "swapSelection",
    value: function swapSelection(text) {
      if (!text) return;
      var item = this.tabItems.find(function (i) {
        return i.text === text;
      });
      if (!item) return;
      item.selected.value = !item.selected.value;
    }
  }], [{
    key: "createTabItem",
    value: function createTabItem(text) {
      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return {
        text: text,
        selected: (0,_ref__WEBPACK_IMPORTED_MODULE_2__.ref)(selected)
      };
    }

    /**
     *
     * @param { String } textList
     * @returns
     */
  }, {
    key: "createTabItems",
    value: function createTabItems() {
      for (var _len = arguments.length, textList = new Array(_len), _key = 0; _key < _len; _key++) {
        textList[_key] = arguments[_key];
      }
      return _ref__WEBPACK_IMPORTED_MODULE_2__.refArray.apply(void 0, _toConsumableArray(textList.map(function (t) {
        return Tabs.createTabItem(t);
      })));
    }
  }]);
}(_element__WEBPACK_IMPORTED_MODULE_0__.RefElementCollection);
var TitleTabs = /*#__PURE__*/function (_Tabs) {
  /**
   * @param { {
   * id: String,
   * selectedItem: Ref,
   * tabItems: RefArray,
   * styles: Object,
   * attrs: Object
   * } } props
   */
  function TitleTabs() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, TitleTabs);
    return _callSuper(this, TitleTabs, [_objectSpread(_objectSpread({}, props), {}, {
      toElement: function toElement(item) {
        var text = new Text({
          text: item.text,
          styles: _objectSpread({
            padding: '6px'
          }, _style__WEBPACK_IMPORTED_MODULE_1__.Style.Pointer),
          attrs: {
            onclick: function onclick() {
              props.selectedItem.value = item.text;
            }
          }
        });
        text.checkRef(item.selected, function (selected) {
          text.style({
            color: selected ? _style__WEBPACK_IMPORTED_MODULE_1__.Color.TextColor : _style__WEBPACK_IMPORTED_MODULE_1__.Color.DescriptionColor,
            fontWeight: selected ? '400' : '300'
          });
        });
        return text;
      }
    })]);
  }
  _inherits(TitleTabs, _Tabs);
  return _createClass(TitleTabs);
}(Tabs);
var UnderlineTabs = /*#__PURE__*/function (_Tabs2) {
  /**
   * @param { {
   * id: String,
   * selectedItem: Ref,
   * tabItems: RefArray,
   * styles: Object,
   * attrs: Object
   * } } props
   */
  function UnderlineTabs() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, UnderlineTabs);
    return _callSuper(this, UnderlineTabs, [_objectSpread(_objectSpread({}, props), {}, {
      toElement: function toElement(item) {
        var column = new Column({
          attrs: {
            onclick: function onclick() {
              props.selectedItem.value = item.text;
            }
          }
        });
        var text = new Text({
          text: item.text,
          styles: _objectSpread({
            padding: '6px'
          }, _style__WEBPACK_IMPORTED_MODULE_1__.Style.Pointer)
        });
        var underline = new HorizontalDivider({
          styles: {
            height: '2px',
            backgroundColor: _style__WEBPACK_IMPORTED_MODULE_1__.Color.BgColor,
            margin: '0px 6px'
          }
        });
        column.add(text);
        column.add(underline);
        column.checkRef(item.selected, function (selected) {
          text.style({
            color: selected ? _style__WEBPACK_IMPORTED_MODULE_1__.Color.TextColor : _style__WEBPACK_IMPORTED_MODULE_1__.Color.DescriptionColor,
            fontWeight: selected ? '300' : '200'
          });
          underline.style({
            backgroundColor: selected ? _style__WEBPACK_IMPORTED_MODULE_1__.Color.TextColor : _style__WEBPACK_IMPORTED_MODULE_1__.Color.BgColor
          });
        });
        return column;
      }
    })]);
  }
  _inherits(UnderlineTabs, _Tabs2);
  return _createClass(UnderlineTabs);
}(Tabs);
var State = /*#__PURE__*/function (_Element10) {
  /**
   *
   * @param { { id, styles, attrs } } props
   */
  function State() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, State);
    return _callSuper(this, State, [_objectSpread({
      tag: 'div'
    }, props)]);
  }
  _inherits(State, _Element10);
  return _createClass(State, [{
    key: "el",
    set: function set(el) {
      this.replaceNode(el.node);
    }
  }]);
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);
var StateSet = /*#__PURE__*/function (_State) {
  /**
   *
   * @param { { id, states, selectedItem, styles, attrs } } props
   */
  function StateSet() {
    var _this9;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, StateSet);
    _this9 = _callSuper(this, StateSet, [props]);
    _this9.states = props.states;
    _this9.checkRef(props.selectedItem, function (key) {
      _this9.el = _this9.states[key];
    });
    return _this9;
  }
  _inherits(StateSet, _State);
  return _createClass(StateSet, [{
    key: "addState",
    value: function addState(key, element) {
      this.states[key] = element;
    }
  }]);
}(State);
var Route = /*#__PURE__*/function (_Element11) {
  /**
   *
   * @param { { id, el, styles, attrs } } props
   */
  function Route() {
    var _props$id;
    var _this10;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Route);
    _this10 = _callSuper(this, Route, [{
      tag: 'div',
      styles: {
        width: '100%',
        height: '100%'
      },
      attrs: props === null || props === void 0 ? void 0 : props.attrs
    }]);
    _this10._id = (_props$id = props === null || props === void 0 ? void 0 : props.id) !== null && _props$id !== void 0 ? _props$id : 'route';
    _this10.style(props === null || props === void 0 ? void 0 : props.styles);
    _this10.add(props === null || props === void 0 ? void 0 : props.el);
    _this10.id = (0,_element__WEBPACK_IMPORTED_MODULE_0__.createTagName)(_this10._id || 'route');
    return _this10;
  }
  _inherits(Route, _Element11);
  return _createClass(Route, [{
    key: "onmount",
    value: function onmount() {
      console.log('onmount ' + this.id);
    }
  }, {
    key: "onunmount",
    value: function onunmount() {
      console.log('onunmount ' + this.id);
    }
  }]);
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);
var Screen = /*#__PURE__*/function (_Route) {
  /**
   *
   * @param { { id, el, styles, attrs } } props
   */
  function Screen() {
    var _props$id2;
    var _this11;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Screen);
    _this11 = _callSuper(this, Screen, [{
      id: (_props$id2 = props === null || props === void 0 ? void 0 : props.id) !== null && _props$id2 !== void 0 ? _props$id2 : 'screen',
      el: props === null || props === void 0 ? void 0 : props.el,
      styles: props === null || props === void 0 ? void 0 : props.styles,
      attrs: props === null || props === void 0 ? void 0 : props.attrs
    }]);
    _this11.style({
      backgroundColor: _style__WEBPACK_IMPORTED_MODULE_1__.Color.BgColor
    });
    return _this11;
  }
  _inherits(Screen, _Route);
  return _createClass(Screen);
}(Route);
var Popup = /*#__PURE__*/function (_Route2) {
  /**
   *
   * @param { { id, el, cancelOnClickOutside } } props
   */
  function Popup() {
    var _this12;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Popup);
    _this12 = _callSuper(this, Popup, [{
      id: 'popup',
      attrs: {
        onclick: function onclick(e) {
          if (e.target == _this12.node && props.cancelOnClickOutside) {
            _this12.dismiss();
          }
        }
      }
    }]);
    _this12.popupContent = new _element__WEBPACK_IMPORTED_MODULE_0__.Element({
      tag: 'div',
      styles: {
        backgroundColor: _style__WEBPACK_IMPORTED_MODULE_1__.Color.BgColor
      }
    });
    _this12.add(_this12.popupContent);
    _this12.popupContent.add(props === null || props === void 0 ? void 0 : props.el);
    return _this12;
  }
  _inherits(Popup, _Route2);
  return _createClass(Popup, [{
    key: "show",
    value: function show() {
      body.appendChild(this.node);
      this.onmount();
    }
  }, {
    key: "dismiss",
    value: function dismiss() {
      this.onunmount();
      body.removeChild(this.node);
    }
  }]);
}(Route);
var MenuPopup = /*#__PURE__*/function (_Popup) {
  /**
   *
   * @param { { id, items } } props
   */
  function MenuPopup() {
    var _this13;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, MenuPopup);
    _this13 = _callSuper(this, MenuPopup, [{
      cancelOnClickOutside: true
    }]);
    _this13.popupContent.style(_objectSpread({
      width: 'auto',
      padding: '4px',
      position: 'absolute',
      borderRadius: '6px',
      display: 'flex',
      flexDirection: 'column'
    }, _style__WEBPACK_IMPORTED_MODULE_1__.Style.Border));
    var _iterator4 = _createForOfIteratorHelper(props.items),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var e = _step4.value;
        _this13.popupContent.add(e);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return _this13;
  }
  _inherits(MenuPopup, _Popup);
  return _createClass(MenuPopup, [{
    key: "position",
    value: function position(event) {
      var targetRect = event.target.getBoundingClientRect();
      var nodeRect = this.node.getBoundingClientRect();
      var popupNodeRect = this.popupContent.node.getBoundingClientRect();
      var x, y;
      if (targetRect.left <= nodeRect.width - popupNodeRect.width) x = targetRect.left;else x = targetRect.right - popupNodeRect.width;
      if (targetRect.bottom <= nodeRect.height - popupNodeRect.height) y = targetRect.bottom;else y = targetRect.top - popupNodeRect.height;
      this.popupContent.style({
        left: x + "px",
        top: y + "px"
      });
    }
  }, {
    key: "show",
    value: function show(event) {
      _superPropGet(MenuPopup, "show", this, 3)([]);
      this.position(event);
    }
  }]);
}(Popup);
var Dialog = /*#__PURE__*/function (_Popup2) {
  /**
   *
   * @param { { id, items } } props
   */
  function Dialog() {
    var _this14;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Dialog);
    _this14 = _callSuper(this, Dialog, [{
      styles: {
        backgroundColor: '#55555555'
      }
    }]);
    _this14.popupContent.style({
      width: '300px',
      padding: '16px',
      margin: 'auto'
    });
    var _iterator5 = _createForOfIteratorHelper(props.items),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var e = _step5.value;
        _this14.popupContent.add(e);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return _this14;
  }
  _inherits(Dialog, _Popup2);
  return _createClass(Dialog);
}(Popup);
var Nav = /*#__PURE__*/function () {
  function Nav(el) {
    _classCallCheck(this, Nav);
    this.currentScreen = null;
    this.body = el;
  }

  /**
   *
   * @param {Screen} newScreen
   */
  return _createClass(Nav, [{
    key: "screen",
    set: function set(newScreen) {
      if (!(newScreen instanceof Screen)) return;
      if (this.currentScreen) {
        this.currentScreen.onunmount();
        this.currentScreen.node.replaceWith(newScreen.node);
      } else {
        this.body.appendChild(newScreen.node);
      }
      this.currentScreen = newScreen;
      this.currentScreen.onmount();
    }
  }]);
}();

/***/ }),

/***/ "./src/nui/element.js":
/*!****************************!*\
  !*** ./src/nui/element.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   ElementCollection: () => (/* binding */ ElementCollection),
/* harmony export */   RefElementCollection: () => (/* binding */ RefElementCollection),
/* harmony export */   createTagName: () => (/* binding */ createTagName),
/* harmony export */   fromHTML: () => (/* binding */ fromHTML),
/* harmony export */   tagMap: () => (/* binding */ tagMap)
/* harmony export */ });
/* harmony import */ var _ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ref */ "./src/nui/ref.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function fromHTML(html) {
  var trim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  html = trim ? html.trim() : html;
  var template = document.createElement('template');
  template.innerHTML = html;
  return template.content.children[0];
}
var tagMap = {};
function createTagName(tag) {
  var count = 1;
  if (tagMap[tag]) {
    count = tagMap[tag];
    count++;
  }
  tagMap[tag] = count;
  return count == 1 ? tag : tag + (count - 1);
}
var Element = /*#__PURE__*/function () {
  /**
   *
   * @param { { tag, id, styles, attrs } } props
   */
  function Element() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Element);
    this.createElement(props === null || props === void 0 ? void 0 : props.tag);
    this.style(props === null || props === void 0 ? void 0 : props.styles);
    this.attr({
      tabindex: (++Element.tabIndex).toString()
    }, props === null || props === void 0 ? void 0 : props.attrs);
    if (props !== null && props !== void 0 && props.id) {
      this.id = createTagName(props.id);
    }
  }
  return _createClass(Element, [{
    key: "createElement",
    value: function createElement(tag) {
      if (tag) {
        this.node = document.createElement(tag);
      }
    }

    /**
     * Resets styles and attributes
     *
     * @param { string } c
     */
  }, {
    key: "content",
    value: function content(c) {
      this.node.innerHTML = c;
    }
  }, {
    key: "style",
    value: function style() {
      var _this = this;
      for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }
      if (styles) {
        for (var i = 0; i < styles.length; ++i) {
          var _style = styles[i];
          if (_style) {
            var _loop = function _loop() {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              if (typeof value == 'string') {
                _this.node.style[key] = value;
              } else if (value instanceof _ref__WEBPACK_IMPORTED_MODULE_0__.Ref) {
                _this.node.style[key] = value.value;
                value.addObserver(function (v) {
                  _this.node.style[key] = value.value;
                });
              }
            };
            for (var _i = 0, _Object$entries = Object.entries(_style); _i < _Object$entries.length; _i++) {
              _loop();
            }
          }
        }
      }
    }
  }, {
    key: "attr",
    value: function attr() {
      if (!this.node) return;
      for (var _len2 = arguments.length, attrs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        attrs[_key2] = arguments[_key2];
      }
      if (attrs) {
        for (var i = 0; i < attrs.length; ++i) {
          var _attr = attrs[i];
          if (_attr) {
            for (var _i2 = 0, _Object$entries2 = Object.entries(_attr); _i2 < _Object$entries2.length; _i2++) {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                key = _Object$entries2$_i[0],
                value = _Object$entries2$_i[1];
              this.node[key] = value;
            }
          }
        }
      }
    }
  }, {
    key: "add",
    value: function add(element) {
      if (element instanceof Element) {
        if (element.id) {
          this[element.id] = element;
        }
        this.node.appendChild(element.node);
      }
    }
  }, {
    key: "onClick",
    value: function onClick(onclick) {
      this.node.onclick = onclick;
    }
  }, {
    key: "onMouse",
    value: function onMouse(over, out) {
      this.node.onmouseover = over;
      this.node.onmouseout = out;
    }
  }, {
    key: "hoverStyle",
    value: function hoverStyle(defaultStyle, overStyle) {
      var _this2 = this;
      this.onMouse(function () {
        return _this2.style(overStyle);
      }, function () {
        return _this2.style(defaultStyle);
      });
    }
  }, {
    key: "checkRef",
    value: function checkRef(data, onUpdate) {
      if (data instanceof _ref__WEBPACK_IMPORTED_MODULE_0__.Ref) {
        data.addObserver(function (value, oldValue) {
          onUpdate(value, oldValue);
        });
        onUpdate(data.value);
      } else {
        onUpdate(data);
      }
    }
  }, {
    key: "replaceNode",
    value: function replaceNode(node) {
      this.node.replaceWith(node);
      this.node = node;
    }
  }], [{
    key: "fromNode",
    value: function fromNode(node) {
      var element = new Element();
      element.node = node;
      return element;
    }
  }]);
}();
_defineProperty(Element, "tabIndex", 0);
var ElementCollection = /*#__PURE__*/function (_Element2) {
  /**
   *
   * @param { { tag, id, items, styles, attrs } } props
   */
  function ElementCollection(props) {
    var _this3;
    _classCallCheck(this, ElementCollection);
    _this3 = _callSuper(this, ElementCollection, [props]);
    if (props) {
      _this3.items = props.items;
    }
    return _this3;
  }
  _inherits(ElementCollection, _Element2);
  return _createClass(ElementCollection, [{
    key: "add",
    value: function add(element) {
      if (element instanceof ElementCollection) {
        this.addChildInstances(element);
      }
      _superPropGet(ElementCollection, "add", this, 3)([element]);
    }
  }, {
    key: "addAll",
    value: function addAll(elements) {
      var _iterator = _createForOfIteratorHelper(elements),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;
          this.add(el);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "addChildInstances",
    value: function addChildInstances(collection) {
      var _iterator2 = _createForOfIteratorHelper(collection.items),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var el = _step2.value;
          if (el instanceof ElementCollection) {
            this.addChildInstances(el);
          }
          if (el instanceof Element) {
            if (el.id) {
              this[el.id] = el;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);
}(Element);
var RefElementCollection = /*#__PURE__*/function (_Element3) {
  /**
   *
   * @param { { tag, id, items, toElement, styles, attrs } } props
   */
  function RefElementCollection(props) {
    var _this4;
    _classCallCheck(this, RefElementCollection);
    _this4 = _callSuper(this, RefElementCollection, [props]);
    _this4.toElement = props.toElement;
    if (props.items instanceof _ref__WEBPACK_IMPORTED_MODULE_0__.RefArray) {
      var _iterator3 = _createForOfIteratorHelper(props.items.values),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          _this4.onAdd(item);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      props.items.addObserver({
        onAdd: function onAdd(value) {
          return _this4.onAdd(value);
        },
        onRemove: function onRemove(value, index) {
          return _this4.onRemove(value, index);
        },
        onInsert: function onInsert(value, index) {
          return _this4.onInsert(value, index);
        },
        onReplace: function onReplace(index, value) {
          return _this4.onReplace(index, value);
        },
        onAddAll: function onAddAll(values) {
          return _this4.onAddAll(values);
        },
        onRemoveAll: function onRemoveAll(values) {
          return _this4.onRemoveAll(values);
        }
      });
    }
    return _this4;
  }
  _inherits(RefElementCollection, _Element3);
  return _createClass(RefElementCollection, [{
    key: "onUpdate",
    value: function onUpdate(values) {}
  }, {
    key: "onReplace",
    value: function onReplace(index, value) {
      var child = this.node.children[index];
      if (child) {
        child.replaceWith(this.toElement(value).node);
      }
    }
  }, {
    key: "onAdd",
    value: function onAdd(value) {
      this.node.appendChild(this.toElement(value).node);
    }
  }, {
    key: "onRemove",
    value: function onRemove(value, index) {
      var child = this.node.children[index];
      if (child) {
        this.node.removeChild(child);
      }
    }
  }, {
    key: "onInsert",
    value: function onInsert(value, index) {
      var child = this.node.children[index];
      if (child) {
        this.node.insertBefore(this.toElement(value).node, child);
      }
    }
  }, {
    key: "onAddAll",
    value: function onAddAll(values) {
      for (var value in values) {
        this.onAdd(value);
      }
    }
  }, {
    key: "onRemoveAll",
    value: function onRemoveAll(values) {}
  }]);
}(Element);

/***/ }),

/***/ "./src/nui/ref.js":
/*!************************!*\
  !*** ./src/nui/ref.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ref: () => (/* binding */ Ref),
/* harmony export */   RefArray: () => (/* binding */ RefArray),
/* harmony export */   RefArrayObserver: () => (/* binding */ RefArrayObserver),
/* harmony export */   RefArrayObserverLogger: () => (/* binding */ RefArrayObserverLogger),
/* harmony export */   ref: () => (/* binding */ ref),
/* harmony export */   refArray: () => (/* binding */ refArray)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Ref = /*#__PURE__*/function () {
  function Ref(value) {
    _classCallCheck(this, Ref);
    this._value = value;
    this.observers = [];
  }
  return _createClass(Ref, [{
    key: "addObserver",
    value: function addObserver(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "removeObserver",
    value: function removeObserver(observer) {
      this.observers.pop(observer);
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      var oldValue = this._value;
      this._value = value;
      var _iterator = _createForOfIteratorHelper(this.observers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer(value, oldValue);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "observerCount",
    get: function get() {
      return this.observers.length;
    }
  }], [{
    key: "getValue",
    value: function getValue(pRef) {
      if (pRef instanceof Ref) return pRef.value;else return pRef;
    }
  }]);
}();
var RefArray = /*#__PURE__*/function () {
  function RefArray() {
    _classCallCheck(this, RefArray);
    this._values = [];
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }
    for (var _i = 0, _values = values; _i < _values.length; _i++) {
      var value = _values[_i];
      this._values.push(value);
    }
    this.observers = [];
  }
  return _createClass(RefArray, [{
    key: "addObserver",
    value: function addObserver(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "removeObserver",
    value: function removeObserver(observer) {
      this.observers.pop(observer);
    }
  }, {
    key: "callObservers",
    value: function callObservers(event, onFun) {
      var _iterator2 = _createForOfIteratorHelper(this.observers),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var observer = _step2.value;
          var fun = observer[event];
          if (fun) {
            onFun(fun);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "callAdd",
    value: function callAdd(value) {
      this.callObservers('onAdd', function (fun) {
        return fun(value);
      });
    }
  }, {
    key: "callRemove",
    value: function callRemove(value, index) {
      this.callObservers('onRemove', function (fun) {
        return fun(value, index);
      });
    }
  }, {
    key: "callInsert",
    value: function callInsert(value, index) {
      this.callObservers('onInsert', function (fun) {
        return fun(value, index);
      });
    }
  }, {
    key: "callReplace",
    value: function callReplace(index, value) {
      this.callObservers('onReplace', function (fun) {
        return fun(index, value);
      });
    }
  }, {
    key: "callUpdate",
    value: function callUpdate() {
      var _this = this;
      this.callObservers('onUpdate', function (fun) {
        return fun(_this._values);
      });
    }
  }, {
    key: "replaceValue",
    value: function replaceValue(index, value) {
      this._values.splice(index, 1, value);
      this.callReplace(index, value);
      this.callUpdate();
    }

    /**
     * replaces the first value which matches with `obj` with `value` 
     * 
     * @param {*} obj 
     * @param {*} value 
     */
  }, {
    key: "replaceValueMatching",
    value: function replaceValueMatching(obj, value) {
      this.replaceValueFor(function (v) {
        for (var _i2 = 0, _Object$entries = Object.entries(obj); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            va = _Object$entries$_i[1];
          if (v[key] != va) {
            return false;
          }
        }
        return true;
      }, value);
    }

    /**
     * 
     * @param {function} condition 
     * @param {*} value 
     */
  }, {
    key: "replaceValueFor",
    value: function replaceValueFor(condition, value) {
      this.replaceValue(this.findIndex(condition), value);
    }

    /**
     * 
     * @param {function} condition 
     * @param {*} defaultValue 
     */
  }, {
    key: "findIndex",
    value: function findIndex(condition, defaultValue) {
      return this._values.findIndex(condition, defaultValue);
    }

    /**
     * 
     * @param {function} condition 
     */
  }, {
    key: "find",
    value: function find(condition) {
      return this._values.find(condition);
    }
  }, {
    key: "addValue",
    value: function addValue(value) {
      this._values.push(value);
      this.callAdd(value);
      this.callUpdate();
    }
  }, {
    key: "add",
    value: function add() {
      for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
      }
      for (var _i3 = 0, _values2 = values; _i3 < _values2.length; _i3++) {
        var value = _values2[_i3];
        this.addValue(value);
      }
    }
  }, {
    key: "addAll",
    value: function addAll(values) {
      var _iterator3 = _createForOfIteratorHelper(values),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var value = _step3.value;
          this.addValue(value);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "remove",
    value: function remove(value) {
      var index = this._values.indexOf(value);
      this.removeIndex(index);
    }
  }, {
    key: "removeIndex",
    value: function removeIndex(index) {
      var len = this._values.length;
      if (index >= len || index < 0) return;
      var value = this._values.splice(index, 1)[0];
      this.callRemove(value, index);
      this.callUpdate();
    }
  }, {
    key: "removeLast",
    value: function removeLast() {
      this.removeIndex(this._values.length - 1);
    }
  }, {
    key: "insert",
    value: function insert(value, index) {
      this._values.splice(index, 0, value);
      this.callInsert(value, index);
      this.callUpdate();
    }
  }, {
    key: "values",
    get: function get() {
      return this._values;
    },
    set: function set(values) {
      this._values = values;
      this.callUpdate();
    }
  }, {
    key: "observerCount",
    get: function get() {
      return this.observers.length;
    }
  }]);
}();
var RefArrayObserver = /*#__PURE__*/function () {
  function RefArrayObserver() {
    _classCallCheck(this, RefArrayObserver);
  }
  return _createClass(RefArrayObserver, [{
    key: "onUpdate",
    value: function onUpdate(values) {}
  }, {
    key: "onAdd",
    value: function onAdd(value) {}
  }, {
    key: "onRemove",
    value: function onRemove(value, index) {}
  }, {
    key: "onInsert",
    value: function onInsert(value, index) {}
  }, {
    key: "onAddAll",
    value: function onAddAll(values) {}
  }, {
    key: "onRemoveAll",
    value: function onRemoveAll(values) {}
  }]);
}();
var RefArrayObserverLogger = /*#__PURE__*/function (_RefArrayObserver) {
  function RefArrayObserverLogger() {
    _classCallCheck(this, RefArrayObserverLogger);
    return _callSuper(this, RefArrayObserverLogger, arguments);
  }
  _inherits(RefArrayObserverLogger, _RefArrayObserver);
  return _createClass(RefArrayObserverLogger, [{
    key: "onUpdate",
    value: function onUpdate(values) {
      console.log("onUpdate: " + values);
    }
  }, {
    key: "onAdd",
    value: function onAdd(value) {
      console.log("onAdd: " + value);
    }
  }, {
    key: "onRemove",
    value: function onRemove(value) {
      console.log("onRemove: " + value);
    }
  }, {
    key: "onAddAll",
    value: function onAddAll(values) {
      console.log("onAddAll: " + values);
    }
  }, {
    key: "onRemoveAll",
    value: function onRemoveAll(values) {
      console.log("onRemoveAll: " + values);
    }
  }]);
}(RefArrayObserver);
var refArray = function refArray() {
  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }
  return _construct(RefArray, values);
};
var ref = function ref(value) {
  return new Ref(value);
};

/***/ }),

/***/ "./src/nui/style.js":
/*!**************************!*\
  !*** ./src/nui/style.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Color: () => (/* binding */ Color),
/* harmony export */   Icon: () => (/* binding */ Icon),
/* harmony export */   Style: () => (/* binding */ Style)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Color = {
  TextColor: 'var(--text-color)',
  BgColor: 'var(--bg-color)',
  CardColor: 'var(--card-color)',
  BorderColor: 'var(--border-color)',
  DescriptionColor: 'var(--description-color)',
  FileColor: 'var(--file-color)',
  HoveredFileColor: 'var(--hovered-file-color)',
  FileInnerColor: 'var(--file-inner-color)'
};
var Style = {
  CardBg: {
    backgroundColor: Color.CardColor
  },
  EmptyBg: {
    backgroundColor: ''
  },
  BorderRadius: function BorderRadius(br) {
    return {
      borderRadius: br
    };
  },
  Size: function Size(s) {
    return {
      height: s,
      width: s
    };
  },
  Height: function Height(h) {
    return {
      height: h
    };
  },
  Width: function Width(w) {
    return {
      width: w
    };
  },
  Pointer: {
    cursor: 'pointer'
  },
  Padding: function Padding(p) {
    return {
      padding: p
    };
  },
  Margin: function Margin(m) {
    return {
      margin: m
    };
  },
  TextColor: {
    color: Color.TextColor
  },
  Row: {
    display: 'flex',
    flexDirection: 'row'
  },
  Column: {
    display: 'flex',
    flexDirection: 'column'
  },
  Border: {
    borderWidth: '1px',
    borderColor: Color.BorderColor,
    borderStyle: 'solid'
  }
};
var Icon = {
  icons: {
    sun: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12.6364C11.0083 12.6364 12.6364 11.0083 12.6364 9.00001C12.6364 6.9917 11.0083 5.36365 9 5.36365C6.9917 5.36365 5.36364 6.9917 5.36364 9.00001C5.36364 11.0083 6.9917 12.6364 9 12.6364Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 1V2.45455" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 15.5455V17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.34182 3.3418L4.37455 4.37452" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.6255 13.6254L14.6582 14.6582" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 9H2.45455" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5455 9H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.34182 14.6582L4.37455 13.6254" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.6255 4.37452L14.6582 3.3418" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    moon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 9.72072C16.8599 11.237 16.2908 12.682 15.3594 13.8867C14.428 15.0914 13.1728 16.0059 11.7406 16.5232C10.3084 17.0405 8.7585 17.1392 7.27225 16.8078C5.786 16.4764 4.42487 15.7286 3.34813 14.6519C2.27138 13.5751 1.52356 12.214 1.19216 10.7277C0.860763 9.2415 0.959498 7.6916 1.47681 6.25942C1.99413 4.82724 2.90862 3.572 4.1133 2.64059C5.31797 1.70918 6.76299 1.14012 8.27928 1C7.39154 2.20101 6.96435 3.68075 7.07542 5.1701C7.18648 6.65945 7.82842 8.05947 8.88447 9.11553C9.94053 10.1716 11.3405 10.8135 12.8299 10.9246C14.3192 11.0356 15.799 10.6085 17 9.72072Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    settings: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99999 11.1818C10.205 11.1818 11.1818 10.205 11.1818 8.99999C11.1818 7.79501 10.205 6.81818 8.99999 6.81818C7.79501 6.81818 6.81818 7.79501 6.81818 8.99999C6.81818 10.205 7.79501 11.1818 8.99999 11.1818Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.3818 11.1818C14.285 11.4012 14.2561 11.6445 14.2989 11.8804C14.3417 12.1164 14.4542 12.3341 14.6218 12.5055L14.6655 12.5491C14.8007 12.6842 14.908 12.8446 14.9812 13.0212C15.0544 13.1978 15.0921 13.387 15.0921 13.5782C15.0921 13.7693 15.0544 13.9586 14.9812 14.1352C14.908 14.3118 14.8007 14.4722 14.6655 14.6073C14.5304 14.7425 14.3699 14.8498 14.1934 14.923C14.0168 14.9962 13.8275 15.0339 13.6364 15.0339C13.4452 15.0339 13.2559 14.9962 13.0794 14.923C12.9028 14.8498 12.7424 14.7425 12.6073 14.6073L12.5636 14.5636C12.3922 14.396 12.1745 14.2835 11.9386 14.2407C11.7027 14.1979 11.4594 14.2268 11.24 14.3236C11.0249 14.4158 10.8414 14.5689 10.7122 14.764C10.583 14.9591 10.5137 15.1878 10.5127 15.4218V15.5455C10.5127 15.9312 10.3595 16.3012 10.0867 16.574C9.81392 16.8468 9.44395 17 9.05818 17C8.67241 17 8.30244 16.8468 8.02966 16.574C7.75688 16.3012 7.60364 15.9312 7.60364 15.5455V15.48C7.59801 15.2393 7.52009 15.0058 7.38001 14.81C7.23993 14.6141 7.04417 14.4649 6.81818 14.3818C6.59882 14.285 6.3555 14.2561 6.11957 14.2989C5.88365 14.3417 5.66595 14.4542 5.49455 14.6218L5.45091 14.6655C5.31582 14.8007 5.1554 14.908 4.97882 14.9812C4.80224 15.0544 4.61297 15.0921 4.42182 15.0921C4.23067 15.0921 4.04139 15.0544 3.86481 14.9812C3.68824 14.908 3.52782 14.8007 3.39273 14.6655C3.25749 14.5304 3.1502 14.3699 3.077 14.1934C3.00381 14.0168 2.96613 13.8275 2.96613 13.6364C2.96613 13.4452 3.00381 13.2559 3.077 13.0794C3.1502 12.9028 3.25749 12.7424 3.39273 12.6073L3.43636 12.5636C3.60403 12.3922 3.7165 12.1745 3.75928 11.9386C3.80205 11.7027 3.77317 11.4594 3.67636 11.24C3.58417 11.0249 3.43109 10.8414 3.23597 10.7122C3.04085 10.583 2.81221 10.5137 2.57818 10.5127H2.45455C2.06878 10.5127 1.69881 10.3595 1.42603 10.0867C1.15325 9.81392 1 9.44395 1 9.05818C1 8.67241 1.15325 8.30244 1.42603 8.02966C1.69881 7.75688 2.06878 7.60364 2.45455 7.60364H2.52C2.76072 7.59801 2.99419 7.52009 3.19004 7.38001C3.38589 7.23993 3.53507 7.04417 3.61818 6.81818C3.71499 6.59882 3.74387 6.3555 3.70109 6.11957C3.65832 5.88365 3.54585 5.66595 3.37818 5.49455L3.33455 5.45091C3.19931 5.31582 3.09202 5.1554 3.01882 4.97882C2.94562 4.80224 2.90795 4.61297 2.90795 4.42182C2.90795 4.23067 2.94562 4.04139 3.01882 3.86481C3.09202 3.68824 3.19931 3.52782 3.33455 3.39273C3.46963 3.25749 3.63005 3.1502 3.80663 3.077C3.98321 3.00381 4.17249 2.96613 4.36364 2.96613C4.55479 2.96613 4.74406 3.00381 4.92064 3.077C5.09722 3.1502 5.25764 3.25749 5.39273 3.39273L5.43636 3.43636C5.60777 3.60403 5.82547 3.7165 6.06139 3.75928C6.29731 3.80205 6.54064 3.77317 6.76 3.67636H6.81818C7.03329 3.58417 7.21674 3.43109 7.34596 3.23597C7.47518 3.04085 7.54452 2.81221 7.54545 2.57818V2.45455C7.54545 2.06878 7.6987 1.69881 7.97148 1.42603C8.24426 1.15325 8.61423 1 9 1C9.38577 1 9.75574 1.15325 10.0285 1.42603C10.3013 1.69881 10.4545 2.06878 10.4545 2.45455V2.52C10.4555 2.75403 10.5248 2.98267 10.654 3.17779C10.7833 3.37291 10.9667 3.52599 11.1818 3.61818C11.4012 3.71499 11.6445 3.74387 11.8804 3.70109C12.1164 3.65832 12.3341 3.54585 12.5055 3.37818L12.5491 3.33455C12.6842 3.19931 12.8446 3.09202 13.0212 3.01882C13.1978 2.94562 13.387 2.90795 13.5782 2.90795C13.7693 2.90795 13.9586 2.94562 14.1352 3.01882C14.3118 3.09202 14.4722 3.19931 14.6073 3.33455C14.7425 3.46963 14.8498 3.63005 14.923 3.80663C14.9962 3.98321 15.0339 4.17249 15.0339 4.36364C15.0339 4.55479 14.9962 4.74406 14.923 4.92064C14.8498 5.09722 14.7425 5.25764 14.6073 5.39273L14.5636 5.43636C14.396 5.60777 14.2835 5.82547 14.2407 6.06139C14.1979 6.29731 14.2268 6.54064 14.3236 6.76V6.81818C14.4158 7.03329 14.5689 7.21674 14.764 7.34596C14.9591 7.47518 15.1878 7.54452 15.4218 7.54545H15.5455C15.9312 7.54545 16.3012 7.6987 16.574 7.97148C16.8468 8.24426 17 8.61423 17 9C17 9.38577 16.8468 9.75574 16.574 10.0285C16.3012 10.3013 15.9312 10.4545 15.5455 10.4545H15.48C15.246 10.4555 15.0173 10.5248 14.8222 10.654C14.6271 10.7833 14.474 10.9667 14.3818 11.1818Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    moreVertical: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 4.5C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75C8.25 4.16421 8.58579 4.5 9 4.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 15C9.41421 15 9.75 14.6642 9.75 14.25C9.75 13.8358 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.8358 8.25 14.25C8.25 14.6642 8.58579 15 9 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    refresh: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2.72552V7.08916H12.6364" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 14.3619V9.99829H5.36364" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.82545 6.36192C3.1943 5.31958 3.82119 4.38766 4.64761 3.65313C5.47404 2.91859 6.47307 2.40538 7.55148 2.16138C8.6299 1.91737 9.75255 1.95053 10.8147 2.25775C11.8768 2.56497 12.8438 3.13625 13.6255 3.91828L17 7.08919M1 9.99828L4.37455 13.1692C5.15618 13.9512 6.12318 14.5225 7.18532 14.8297C8.24745 15.1369 9.3701 15.1701 10.4485 14.9261C11.5269 14.6821 12.526 14.1689 13.3524 13.4343C14.1788 12.6998 14.8057 11.7679 15.1745 10.7256" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    search: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.1111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.1111C15.2222 4.18375 12.0385 1 8.1111 1C4.18375 1 1 4.18375 1 8.1111C1 12.0385 4.18375 15.2222 8.1111 15.2222Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 17L13.1333 13.1334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  strokeWidth: '1',
  set: function () {
    var _set = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(iconName, element) {
      var icon, svg;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            icon = Icon.icons[iconName];
            if (!icon) {
              _context.next = 4;
              break;
            }
            Icon.setIcon(icon, element);
            return _context.abrupt("return");
          case 4:
            _context.next = 6;
            return Icon.getTextAwait(iconName);
          case 6:
            svg = _context.sent;
            Icon.icons[iconName] = svg.replaceAll('stroke="white"', 'stroke="var(--text-color)"');
            // Icon.readSvg(
            //     iconName,
            //     (svg) => {
            Icon.setIcon(svg, element);
            //     }
            // )
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function set(_x, _x2) {
      return _set.apply(this, arguments);
    }
    return set;
  }(),
  readSvg: function readSvg(name, onRead) {
    Icon.getText(name, function (svg) {
      var i = svg.replaceAll('white', 'var(--text-color)');
      // .replaceAll('stroke-width="1.5"', `stroke-width="${Icon.strokeWidth}"`)
      // .replace(/(?:\r\n|\r|\n)/g, '')
      Icon.icons[name] = i;
      if (onRead) {
        onRead(i);
      }
    });
  },
  initIcons: function initIcons() {
    for (var _i = 0, _Object$entries = Object.entries(Icon.icons); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      Icon.icons[key] = value.replaceAll('stroke="white"', 'stroke="var(--text-color)"');
    }
  },
  init: function () {
    var _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _iterator, _step, name, svg;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _iterator = _createForOfIteratorHelper(Icon.names);
            _context2.prev = 1;
            _iterator.s();
          case 3:
            if ((_step = _iterator.n()).done) {
              _context2.next = 11;
              break;
            }
            name = _step.value;
            _context2.next = 7;
            return Icon.getTextAwait(name);
          case 7:
            svg = _context2.sent;
            Icon.icons[name] = svg.replaceAll('white', 'var(--text-color)');
          case 9:
            _context2.next = 3;
            break;
          case 11:
            _context2.next = 16;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](1);
            _iterator.e(_context2.t0);
          case 16:
            _context2.prev = 16;
            _iterator.f();
            return _context2.finish(16);
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 13, 16, 19]]);
    }));
    function init() {
      return _init.apply(this, arguments);
    }
    return init;
  }(),
  setIcon: function setIcon(icon, element) {
    if (element instanceof SvgIcon) {
      element.content({
        svg: icon
      });
    }
  },
  getTextAwait: function () {
    var _getTextAwait = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(iconName) {
      var response, text;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("images/" + iconName + ".svg", {
              cache: 'default',
              priority: 'high'
            });
          case 2:
            response = _context3.sent;
            _context3.next = 5;
            return response.text();
          case 5:
            text = _context3.sent;
            return _context3.abrupt("return", text);
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function getTextAwait(_x3) {
      return _getTextAwait.apply(this, arguments);
    }
    return getTextAwait;
  }(),
  getText: function getText(iconName, onRes) {
    fetch("images/" + iconName + ".svg", {
      cache: 'default'
    }).then(function (res) {
      return res.text();
    }).then(onRes)["catch"](function (e) {
      return console.error(e);
    });
  }
};
Icon.initIcons();

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nui/components */ "./src/nui/components.js");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home */ "./src/home/home.js");


var body = document.getElementsByTagName('body')[0];
var mainNav = new _nui_components__WEBPACK_IMPORTED_MODULE_0__.Nav(body);
mainNav.screen = new _home_home__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map