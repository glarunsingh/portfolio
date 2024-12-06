"use strict";
exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 6314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ seo)
});

// EXTERNAL MODULE: external "C:\\Users\\JANU\\OneDrive\\Documents\\GitHub\\portfolio\\node_modules\\react\\index.js"
var external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_ = __webpack_require__(6528);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// ./src/hooks/use-site-metadata.jsx
const useSiteMetadata=()=>{const data=(0,gatsby_browser_entry.useStaticQuery)("3764592887");return data.site.siteMetadata;};
;// ./src/components/seo.js
const Seo=({title,description,pathname,children})=>{const{title:siteTitle,description:siteDescription,siteUrl}=useSiteMetadata();const seo={title:title,description:description||siteDescription,url:`${siteUrl}${pathname||``}`};return/*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_.createElement(external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_.Fragment,null,/*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_.createElement("title",null,seo.title," | ",siteTitle),/*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_.createElement("meta",{name:"description",content:seo.description}),children);};/* harmony default export */ const seo = (Seo);

/***/ }),

/***/ 3049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6528);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9584);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(123);
const ProjectEntry=({title,description,tags,projectLink,codeLink})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"rounded-lg shadow dark:bg-slate-700 bg-slate-200 transition ease-in-out duration-300"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"p-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"text-xl font-medium flex flex-row space-x-4 place-items-center"},projectLink?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{href:projectLink,target:"_blank",className:"flex flex-row space-x-1 group cursor-pointer place-items-center hover:underline"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__/* .RiArrowRightUpLine */ .SJ3,{size:20,className:"group-hover:scale-125 group-hover:-translate-y-1 cursor-pointer transition-transform ease-in-out duration-300"})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,title),codeLink&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{href:codeLink,target:"_blank",className:"hover:scale-125 cursor-pointer transition-transform ease-in-out duration-300"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__/* .RiGithubFill */ .sAW,{size:24}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"mt-1"},description),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"mt-4 flex flex-wrap gap-4"},tags.map((tag,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{key:index,className:"inline-flex items-center gap-1 rounded-full bg-slate-300 dark:bg-slate-500 px-2 py-1 text-xs font-semibold"},tag)))));};const ProjectsPage=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{pageTitle:"Projects",className:"px-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"text-3xl font-bold mt-4"},"Projects"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"py-4"},"These are my projects, don't hesitate to have a look at them if you are curious !"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pt-2 pb-4 grid grid-cols-1 xl:grid-cols-2 place-items-start xl:place-items-center gap-8 transition ease-in-out duration-300"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectEntry,{title:'Automated Project Estimation Assistant',description:'Developed an AI-driven tool for generating accurate project estimates based on user inputs from either a Process Definition Document (PDD) or a high-level project summary.',tags:['Azure OpenAI','Python','MultiAgent Framework','Autogen','Azure Functions','Flask'],projectLink:'/',codeLink:'https://github.com/'}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectEntry,{title:'Sales Digest',description:'Developed a Sales Digest application for sales executives by extracting data from various sources and utilizing Generative AI to summarize content, perform sentiment analysis, and implement a feedback mechanism.',tags:['Azure OpenAI','Python','LangChain','AI Search','Azure Functions','Logic Apps','Cosmos DB'],projectLink:'/',codeLink:'https://github.com/'}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectEntry,{title:'HRSS_Chatbot',description:'Developed a chatbot application to assist users with HR policies and address queries efficiently, leveraging advanced document processing techniques for accurate and timely responses.',tags:['Azure OpenAI','Python','LangChain','AI Search','Azure Functions','Logic Apps','Chroma VectorDB','Mango DB'],projectLink:'/',codeLink:'https://github.com/'})));};const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{title:"Projects",description:"Projects.",pathname:"/projects"});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-projects-js.js.map