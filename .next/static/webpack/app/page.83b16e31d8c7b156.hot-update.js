"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_MicrophoneIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MicrophoneIcon!=!@heroicons/react/20/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/20/solid/esm/MicrophoneIcon.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ \"(app-pages-browser)/./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAAoIm5yyPf4dBHH0Dk56AZ5_oXqR_hueA\",\n    authDomain: \"ai-ml-marvel-tam-vit-2023.firebaseapp.com\",\n    projectId: \"ai-ml-marvel-tam-vit-2023\",\n    storageBucket: \"ai-ml-marvel-tam-vit-2023.appspot.com\",\n    messagingSenderId: \"873705683113\",\n    appId: \"1:873705683113:web:438d133ecc0eb7021711b8\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();\nfunction Home() {\n    _s();\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleUploadAudioClick = ()=>{\n        var _fileInputRef_current;\n        (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();\n    };\n    const handleTextChange = (e)=>{\n        var _e_target;\n        e.preventDefault();\n        if ((_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target[\"prompt\"].value) {}\n    };\n    const handleAudioFileChange = (e)=>{\n        var _e_target_files;\n        if ((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) {\n            var _e_target_files1;\n            const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, \"some-child\");\n            // 'file' comes from the Blob or File API\n            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(storageRef, (_e_target_files1 = e.target.files) === null || _e_target_files1 === void 0 ? void 0 : _e_target_files1[0]).then((snapshot)=>{\n                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(snapshot.ref).then((url)=>{\n                    axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/api/v1/audio/assist?audio_url=\".concat(url)).then((res)=>{\n                        setMessage(res.data.message);\n                    }).catch((error)=>console.log(error));\n                });\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen p-8 flex flex-col items-center gap-8 text-white bg-gray-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl text-center font-bold\",\n                        children: \"LawLLaMa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl text-center font-medium\",\n                        children: [\n                            \"Your \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-blue-500\",\n                                children: \"AI Handbook\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 16\n                            }, this),\n                            \" for Indian Law.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-lg flex flex-col items-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleTextChange,\n                        className: \"w-full space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                rows: 10,\n                                placeholder: \"Enter Your Query\",\n                                className: \"w-full p-4 bg-gray-800 rounded-lg focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-full p-4 font-medium bg-blue-500 rounded-lg\",\n                                children: \"Ask LawLLama\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"w-full h-2 bg-gray-800\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xl text-gray-500\",\n                                children: \"OR\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"w-full h-2 bg-gray-800\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: fileInputRef,\n                        type: \"file\",\n                        onChange: handleAudioFileChange,\n                        className: \"hidden\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleUploadAudioClick,\n                        className: \"w-full p-4 flex items-center justify-center gap-2 text-black font-medium bg-yellow-300 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MicrophoneIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Upload Audio\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-lg space-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\",\n                        children: \"Output:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: 10,\n                        defaultValue: message,\n                        disabled: true,\n                        className: \"w-full p-4 bg-gray-800 rounded-lg focus:outline-none\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\harsh\\\\ai-ml-marvels-tam-vit-2023\\\\app\\\\page.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lDg/ZCDIh8m5Wyqm5thHvaiQ518=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHOzs7Ozs7a0NBQ25CLDhEQUFDTTt3QkFDQ0MsTUFBTTt3QkFDTk8sY0FBY3RDO3dCQUNkdUMsUUFBUTt3QkFDUmYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBdkZ3QjFCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBNaWNyb3Bob25lSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzIwL3NvbGlkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0RG93bmxvYWRVUkwsIGdldFN0b3JhZ2UsIHJlZiwgdXBsb2FkQnl0ZXMgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUFBb0ltNXl5UGY0ZEJISDBEazU2QVo1X29YcVJfaHVlQVwiLFxuICBhdXRoRG9tYWluOiBcImFpLW1sLW1hcnZlbC10YW0tdml0LTIwMjMuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJhaS1tbC1tYXJ2ZWwtdGFtLXZpdC0yMDIzXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiYWktbWwtbWFydmVsLXRhbS12aXQtMjAyMy5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4NzM3MDU2ODMxMTNcIixcbiAgYXBwSWQ6IFwiMTo4NzM3MDU2ODMxMTM6d2ViOjQzOGQxMzNlY2MwZWI3MDIxNzExYjhcIixcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCBoYW5kbGVVcGxvYWRBdWRpb0NsaWNrID0gKCkgPT4ge1xuICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50Py5jbGljaygpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudCk/LltcInByb21wdFwiXS52YWx1ZSkge1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBdWRpb0ZpbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXM/LlswXSkge1xuICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBcInNvbWUtY2hpbGRcIik7XG5cbiAgICAgIC8vICdmaWxlJyBjb21lcyBmcm9tIHRoZSBCbG9iIG9yIEZpbGUgQVBJXG4gICAgICB1cGxvYWRCeXRlcyhzdG9yYWdlUmVmLCBlLnRhcmdldC5maWxlcz8uWzBdKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgICBnZXREb3dubG9hZFVSTChzbmFwc2hvdC5yZWYpLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL2F1ZGlvL2Fzc2lzdD9hdWRpb191cmw9JHt1cmx9YClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgc2V0TWVzc2FnZShyZXMuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIHAtOCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtOCB0ZXh0LXdoaXRlIGJnLWdyYXktOTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+TGF3TExhTWE8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBmb250LW1lZGl1bVwiPlxuICAgICAgICAgIFlvdXIgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPkFJIEhhbmRib29rPC9zcGFuPiBmb3IgSW5kaWFuXG4gICAgICAgICAgTGF3LlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGcgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVRleHRDaGFuZ2V9IGNsYXNzTmFtZT1cInctZnVsbCBzcGFjZS15LTJcIj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHJvd3M9ezEwfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIFF1ZXJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTQgYmctZ3JheS04MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC00IGZvbnQtbWVkaXVtIGJnLWJsdWUtNTAwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgIEFzayBMYXdMTGFtYVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yIGJnLWdyYXktODAwXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS01MDBcIj5PUjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yIGJnLWdyYXktODAwXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBdWRpb0ZpbGVDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZEF1ZGlvQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIGJnLXllbGxvdy0zMDAgcm91bmRlZC1sZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8TWljcm9waG9uZUljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgPHNwYW4+VXBsb2FkIEF1ZGlvPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1sZyBzcGFjZS15LTJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+T3V0cHV0Ojwvc3Bhbj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBiZy1ncmF5LTgwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJNaWNyb3Bob25lSWNvbiIsImF4aW9zIiwiaW5pdGlhbGl6ZUFwcCIsImdldERvd25sb2FkVVJMIiwiZ2V0U3RvcmFnZSIsInJlZiIsInVwbG9hZEJ5dGVzIiwidXNlUmVmIiwidXNlU3RhdGUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsInN0b3JhZ2UiLCJIb21lIiwiZmlsZUlucHV0UmVmIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoYW5kbGVVcGxvYWRBdWRpb0NsaWNrIiwiY3VycmVudCIsImNsaWNrIiwiaGFuZGxlVGV4dENoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQXVkaW9GaWxlQ2hhbmdlIiwiZmlsZXMiLCJzdG9yYWdlUmVmIiwidGhlbiIsInNuYXBzaG90IiwidXJsIiwiZ2V0IiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwic3BhbiIsImZvcm0iLCJvblN1Ym1pdCIsInRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiZGVmYXVsdFZhbHVlIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});