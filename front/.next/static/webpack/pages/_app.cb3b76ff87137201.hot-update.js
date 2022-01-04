/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reducers__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar configureStore = function() {\n    var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)((_reducers__WEBPACK_IMPORTED_MODULE_1___default()));\n    return store;\n};\nvar Wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {\n    debug: \"development\" === 'development'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper); /*\r\nredux → 코드량이 매우 많아짐 / action이 정렬되서 출력되기 때문에 error를 잡기 쉬움\r\n\r\n데이터 중앙 저장소 { name:je, age:25 }\r\n→ 각 컴포넌트가 필요할 때 데이터를 사용할 수 있음.\r\n\r\naction : 데이터를 바꿀 때 사용\r\nex) type : 'CHANGE_NICKNAME', data:'jaeeun'\r\n\r\ndispatch : action을 적용시킬 때 사용\r\n→ action을 dispatch 하는 순간 닉네임이 change됨\r\n\r\nreducer : 어떻게 change해야 하는지(action 타입에 따라 이렇게 행동해라)\r\nex) Swtich(action.type){ case 'CHANGE_NICKNAME':return{ ...state, name:action.data, } }\r\n→ action type이 'CHANGE_NICKNAME'면, action의 data를 바꿔라\r\n\r\n*왜 객체를 항상 새로 만드는 가*\r\nconst prev = { name : 'jaeeun' };\r\nconst next = { name : 'jaeeun2' };\r\n\r\n\r\n\r\n\r\n{} === {}  //false\r\nconst a = {};\r\nconst b = a;\r\na === b //true;\r\n\r\n객체를 새로 만드는 것은 false이지만, 참조면 true가 됨\r\n\r\n\r\n*/ \n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFDZjtBQUNGO0FBRWpDLEdBQUssQ0FBQ0csY0FBYyxHQUFHLFFBQVEsR0FBRixDQUFDO0lBQzFCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHSCxrREFBVyxDQUFDQyxrREFBTztJQUNqQyxNQUFNLENBQUNFLEtBQUs7QUFDaEIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsT0FBTyxHQUFHTCxpRUFBYSxDQUFDRyxjQUFjLEVBQUUsQ0FBQztJQUMzQ0csS0FBSyxFQVZULENBQWEsaUJBVXNCLENBQWE7QUFDaEQsQ0FBQztBQUVELCtEQUFlRCxPQUFPLEVBR3RCLENBK0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzP2YyMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IFxyXG4gICAgZGVidWc6cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlcjtcclxuXHJcblxyXG4vKlxyXG5yZWR1eCDihpIg7L2U65Oc65+J7J20IOunpOyasCDrp47slYTsp5AgLyBhY3Rpb27snbQg7KCV66Cs65CY7IScIOy2nOugpeuQmOq4sCDrlYzrrLjsl5AgZXJyb3Lrpbwg7J6h6riwIOyJrOybgFxyXG5cclxu642w7J207YSwIOykkeyVmSDsoIDsnqXshowgeyBuYW1lOmplLCBhZ2U6MjUgfVxyXG7ihpIg6rCBIOy7tO2PrOuEjO2KuOqwgCDtlYTsmpTtlaAg65WMIOuNsOydtO2EsOulvCDsgqzsmqntlaAg7IiYIOyeiOydjC5cclxuXHJcbmFjdGlvbiA6IOuNsOydtO2EsOulvCDrsJTqv4Ag65WMIOyCrOyaqVxyXG5leCkgdHlwZSA6ICdDSEFOR0VfTklDS05BTUUnLCBkYXRhOidqYWVldW4nXHJcblxyXG5kaXNwYXRjaCA6IGFjdGlvbuydhCDsoIHsmqnsi5ztgqwg65WMIOyCrOyaqVxyXG7ihpIgYWN0aW9u7J2EIGRpc3BhdGNoIO2VmOuKlCDsiJzqsIQg64uJ64Sk7J6E7J20IGNoYW5nZeuQqFxyXG5cclxucmVkdWNlciA6IOyWtOuWu+qyjCBjaGFuZ2XtlbTslbwg7ZWY64qU7KeAKGFjdGlvbiDtg4DsnoXsl5Ag65Sw6528IOydtOugh+qyjCDtlonrj5ntlbTrnbwpXHJcbmV4KSBTd3RpY2goYWN0aW9uLnR5cGUpeyBjYXNlICdDSEFOR0VfTklDS05BTUUnOnJldHVybnsgLi4uc3RhdGUsIG5hbWU6YWN0aW9uLmRhdGEsIH0gfVxyXG7ihpIgYWN0aW9uIHR5cGXsnbQgJ0NIQU5HRV9OSUNLTkFNRSfrqbQsIGFjdGlvbuydmCBkYXRh66W8IOuwlOq/lOudvFxyXG5cclxuKuyZnCDqsJ3ssrTrpbwg7ZWt7IOBIOyDiOuhnCDrp4zrk5zripQg6rCAKlxyXG5jb25zdCBwcmV2ID0geyBuYW1lIDogJ2phZWV1bicgfTtcclxuY29uc3QgbmV4dCA9IHsgbmFtZSA6ICdqYWVldW4yJyB9O1xyXG5cclxuXHJcblxyXG5cclxue30gPT09IHt9ICAvL2ZhbHNlXHJcbmNvbnN0IGEgPSB7fTtcclxuY29uc3QgYiA9IGE7XHJcbmEgPT09IGIgLy90cnVlO1xyXG5cclxu6rCd7LK066W8IOyDiOuhnCDrp4zrk5zripQg6rKD7J2AIGZhbHNl7J207KeA66eMLCDssLjsobDrqbQgdHJ1ZeqwgCDrkKhcclxuXHJcblxyXG4qLyJdLCJuYW1lcyI6WyJjcmVhdGVXcmFwcGVyIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwiY29uZmlndXJlU3RvcmUiLCJzdG9yZSIsIldyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ })

});