"use strict";(self.webpackChunknext_popover_document=self.webpackChunknext_popover_document||[]).push([[442],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,g=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return r?o.createElement(g,l(l({ref:t},i),{},{components:r})):o.createElement(g,l({ref:t},i))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={slug:"mdx-blog-post",title:"MDX Blog Post",authors:["lyove"],tags:["javascript"]},l=void 0,c={permalink:"/zh-CN/blog/mdx-blog-post",editUrl:"https://github.com/lyove/next-popover-document/blog/2023-09-09-mdx-blog-post.mdx",source:"@site/blog/2023-09-09-mdx-blog-post.mdx",title:"MDX Blog Post",description:"Blog posts support Docusaurus Markdown features, such as MDX.",date:"2023-09-09T00:00:00.000Z",formattedDate:"2023\u5e749\u67089\u65e5",tags:[{label:"javascript",permalink:"/zh-CN/blog/tags/javascript"}],readingTime:.175,hasTruncateMarker:!1,authors:[{name:"lyove",title:"Maintainer of Lyove",url:"https://github.com/lyove",imageURL:"https://avatars.githubusercontent.com/u/26560610",key:"lyove"}],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",authors:["lyove"],tags:["javascript"]},prevItem:{title:"Long Blog Post",permalink:"/zh-CN/blog/long-blog-post"},nextItem:{title:"Welcome",permalink:"/zh-CN/blog/welcome"}},p={authorsImageUrls:[void 0]},s=[],i={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Blog posts support ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,n.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,n.kt)("button",{onClick:()=>alert("button clicked!")},"Click me!")))}m.isMDXComponent=!0}}]);