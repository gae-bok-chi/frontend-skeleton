"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/gaebokchi/layout",{

/***/ "(app-client)/./components/TodayBtn.tsx":
/*!*********************************!*\
  !*** ./components/TodayBtn.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _atoms_gaebokchi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/atoms/gaebokchi */ \"(app-client)/./atoms/gaebokchi.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-client)/./node_modules/recoil/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst TodayBtn = ()=>{\n    _s();\n    const todayDate = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_gaebokchi__WEBPACK_IMPORTED_MODULE_1__.todayDateState);\n    const setTodayDate = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_atoms_gaebokchi__WEBPACK_IMPORTED_MODULE_1__.todayDateState);\n    const handleTodayClick = ()=>{\n        setTodayDate(new Date().toISOString().split(\"T\")[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"date-button\",\n        onClick: handleTodayClick,\n        style: {\n            cursor: \"pointer\"\n        },\n        children: [\n            \"Today\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Render Count: \",\n                    renderCount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tmdwn\\\\OneDrive\\\\바탕 화면\\\\frontend-skeleton\\\\gaebokchi\\\\components\\\\TodayBtn.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tmdwn\\\\OneDrive\\\\바탕 화면\\\\frontend-skeleton\\\\gaebokchi\\\\components\\\\TodayBtn.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodayBtn, \"NfwquP8PGNoQWO4NqfeAHLPn2DQ=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState\n    ];\n});\n_c = TodayBtn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayBtn);\nvar _c;\n$RefreshReg$(_c, \"TodayBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ub2RheUJ0bi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBQ1E7QUFFM0QsTUFBTUcsV0FBVzs7SUFDZixNQUFNQyxZQUFZSCxzREFBY0EsQ0FBQ0QsNERBQWNBO0lBQy9DLE1BQU1LLGVBQWVILHlEQUFpQkEsQ0FBQ0YsNERBQWNBO0lBRXJELE1BQU1NLG1CQUFtQjtRQUN2QkQsYUFBYSxJQUFJRSxPQUFPQyxjQUFjQyxNQUFNLElBQUksQ0FBQyxFQUFFO0lBQ3JEO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsU0FBU047UUFDVE8sT0FBTztZQUNMQyxRQUFRO1FBQ1Y7O1lBQ0Q7MEJBRUMsOERBQUNDOztvQkFBRTtvQkFBZUM7Ozs7Ozs7Ozs7Ozs7QUFHeEI7R0FwQk1iOztRQUNjRixrREFBY0E7UUFDWEMscURBQWlCQTs7O0tBRmxDQztBQXNCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZGF5QnRuLnRzeD9lNTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvZGF5RGF0ZVN0YXRlIH0gZnJvbSBcIkAvYXRvbXMvZ2FlYm9rY2hpXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmNvbnN0IFRvZGF5QnRuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvZGF5RGF0ZSA9IHVzZVJlY29pbFZhbHVlKHRvZGF5RGF0ZVN0YXRlKTtcclxuICBjb25zdCBzZXRUb2RheURhdGUgPSB1c2VTZXRSZWNvaWxTdGF0ZSh0b2RheURhdGVTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZGF5Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRUb2RheURhdGUobmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiZGF0ZS1idXR0b25cIlxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVUb2RheUNsaWNrfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIFRvZGF5XHJcbiAgICAgIDxwPlJlbmRlciBDb3VudDoge3JlbmRlckNvdW50fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RheUJ0bjtcclxuIl0sIm5hbWVzIjpbInRvZGF5RGF0ZVN0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJ1c2VTZXRSZWNvaWxTdGF0ZSIsIlRvZGF5QnRuIiwidG9kYXlEYXRlIiwic2V0VG9kYXlEYXRlIiwiaGFuZGxlVG9kYXlDbGljayIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInN0eWxlIiwiY3Vyc29yIiwicCIsInJlbmRlckNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/TodayBtn.tsx\n"));

/***/ })

});