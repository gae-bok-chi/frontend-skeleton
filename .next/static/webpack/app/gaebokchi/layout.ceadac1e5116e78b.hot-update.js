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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _atoms_gaebokchi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/atoms/gaebokchi */ \"(app-client)/./atoms/gaebokchi.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-client)/./node_modules/recoil/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst TodayBtn = (param)=>{\n    let { setCurrentDate  } = param;\n    _s();\n    const [todayDate, setTodayDate] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_gaebokchi__WEBPACK_IMPORTED_MODULE_1__.todayDateState);\n    const handleTodayClick = ()=>{\n        setTodayDate(new Date().toISOString().split(\"T\")[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"date-button\",\n        onClick: handleTodayClick,\n        style: {\n            cursor: \"pointer\"\n        },\n        children: \"Today\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tmdwn\\\\OneDrive\\\\바탕 화면\\\\frontend-skeleton\\\\gaebokchi\\\\components\\\\TodayBtn.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodayBtn, \"rAC8BPDZxasRuALUESLxl5a4eRU=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = TodayBtn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayBtn);\nvar _c;\n$RefreshReg$(_c, \"TodayBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ub2RheUJ0bi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBQ1g7QUFNeEMsTUFBTUUsV0FBVztRQUFDLEVBQUVDLGVBQWMsRUFBaUI7O0lBQ2pELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSixzREFBY0EsQ0FBQ0QsNERBQWNBO0lBRS9ELE1BQU1NLG1CQUFtQjtRQUN2QkQsYUFBYSxJQUFJRSxPQUFPQyxjQUFjQyxNQUFNLElBQUksQ0FBQyxFQUFFO0lBQ3JEO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsU0FBU047UUFDVE8sT0FBTztZQUNMQyxRQUFRO1FBQ1Y7a0JBQ0Q7Ozs7OztBQUlMO0dBbEJNWjs7UUFDOEJELGtEQUFjQTs7O0tBRDVDQztBQW9CTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZGF5QnRuLnRzeD9lNTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvZGF5RGF0ZVN0YXRlIH0gZnJvbSBcIkAvYXRvbXMvZ2FlYm9rY2hpXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2RheUJ0blByb3BzIHtcclxuICBzZXRDdXJyZW50RGF0ZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nPj47XHJcbn1cclxuXHJcbmNvbnN0IFRvZGF5QnRuID0gKHsgc2V0Q3VycmVudERhdGUgfTogVG9kYXlCdG5Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0b2RheURhdGUsIHNldFRvZGF5RGF0ZV0gPSB1c2VSZWNvaWxTdGF0ZSh0b2RheURhdGVTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZGF5Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRUb2RheURhdGUobmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiZGF0ZS1idXR0b25cIlxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVUb2RheUNsaWNrfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIFRvZGF5XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kYXlCdG47XHJcbiJdLCJuYW1lcyI6WyJ0b2RheURhdGVTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwiVG9kYXlCdG4iLCJzZXRDdXJyZW50RGF0ZSIsInRvZGF5RGF0ZSIsInNldFRvZGF5RGF0ZSIsImhhbmRsZVRvZGF5Q2xpY2siLCJEYXRlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzdHlsZSIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/TodayBtn.tsx\n"));

/***/ })

});