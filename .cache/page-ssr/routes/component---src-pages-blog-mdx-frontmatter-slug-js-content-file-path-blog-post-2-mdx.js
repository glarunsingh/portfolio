"use strict";
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 9094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ GatsbyMDXWrapper)
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: external "C:\\Users\\JANU\\OneDrive\\Documents\\GitHub\\portfolio\\node_modules\\react\\index.js"
var external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_ = __webpack_require__(6528);
var external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_);
;// ./blog/post-2.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib/* useMDXComponents */.RP)(),props.components);return/*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_default().createElement(_components.p,null,"Blog post n°2. Write your post using Markdown syntax.");}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.RP)(),props.components);return MDXLayout?/*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_default().createElement(MDXLayout,props,/*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_default().createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ const post_2 = (MDXContent);
// EXTERNAL MODULE: ./src/components/seo.js + 1 modules
var seo = __webpack_require__(6314);
;// ./src/pages/blog/{mdx.frontmatter__slug}.js?__contentFilePath=C:/Users/JANU/OneDrive/Documents/GitHub/portfolio/blog/post-2.mdx



const BlogPost = ({
  data,
  children
}) => {
  return /*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_.createElement("div", null, /*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_.createElement("h1", {
    className: "text-3xl font-bold mb-2"
  }, data.mdx.frontmatter.title), /*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_.createElement("p", {
    className: "mb-4"
  }, data.mdx.frontmatter.date), children);
};
const query = "3665917307";
const Head = ({
  data
}) => /*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_.createElement(seo/* default */.A, {
  title: data.mdx.frontmatter.title,
  description: data.mdx.frontmatter.description,
  pathname: `/blog/${data.mdx.frontmatter.slug}`
});
BlogPost;
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_.createElement(BlogPost, props, /*#__PURE__*/external_C_Users_JANU_OneDrive_Documents_GitHub_portfolio_node_modules_react_index_js_.createElement(post_2, props));
}

/***/ }),

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

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RP: () => (/* binding */ useMDXComponents)
/* harmony export */ });
/* unused harmony exports MDXContext, withMDXComponents, MDXProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6528);
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return React.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return React.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ })

};
;
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-post-2-mdx.js.map