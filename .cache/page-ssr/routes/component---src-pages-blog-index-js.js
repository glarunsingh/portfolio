"use strict";
exports.id = 334;
exports.ids = [334];
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

/***/ 4624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6528);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6314);
const BlogPage=({data})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{pageTitle:"Blog"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"text-3xl font-bold my-4"},"Blog"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"mb-2"},"This is a blog. Don't hesitate to check the articles."),data.allMdx.nodes.map(node=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{key:node.id,className:"mb-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:"text-lg font-semibold"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:`/blog/${node.frontmatter.slug}`,className:"hover:underline"},node.frontmatter.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-sm mb-1"},node.frontmatter.date),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,node.excerpt))));};const query="3039944820";const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{title:"Blog",description:"My blog.",pathname:"/blog"});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-blog-index-js.js.map