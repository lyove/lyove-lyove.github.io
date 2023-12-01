"use strict";(self.webpackChunknext_popover_document=self.webpackChunknext_popover_document||[]).push([[730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const l={sidebar_position:2},r="Methods",i={unversionedId:"configuration/methods",id:"configuration/methods",title:"Methods",description:"Instance methods",source:"@site/docs/configuration/methods.md",sourceDirName:"configuration",slug:"/configuration/methods",permalink:"/zh-CN/docs/configuration/methods",draft:!1,editUrl:"https://github.com/lyove/next-popover-document/docs/configuration/methods.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/zh-CN/docs/configuration/api"}},p={},s=[{value:"Instance methods",id:"instance-methods",level:2},{value:"open()",id:"open",level:3},{value:"close()",id:"close",level:3},{value:"toggle()",id:"toggle",level:3},{value:"openWithDelay()",id:"openwithdelay",level:3},{value:"closeWithDelay()",id:"closewithdelay",level:3},{value:"enable()",id:"enable",level:3},{value:"disable()",id:"disable",level:3},{value:"updateConfig()",id:"updateconfig",level:3},{value:"destroy()",id:"destroy",level:3},{value:"onScroll()",id:"onscroll",level:3},{value:"update()",id:"update",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"methods"},"Methods"),(0,a.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,a.kt)("h3",{id:"open"},"open()"),(0,a.kt)("p",null,"Open the Popover instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"open(): void;\n")),(0,a.kt)("h3",{id:"close"},"close()"),(0,a.kt)("p",null,"Close the Popover instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"close(): void;\n")),(0,a.kt)("h3",{id:"toggle"},"toggle()"),(0,a.kt)("p",null,"Toggle the Popover instance open or close."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"toggle(): void;\n")),(0,a.kt)("h3",{id:"openwithdelay"},"openWithDelay()"),(0,a.kt)("p",null,"Open the popover after ",(0,a.kt)("inlineCode",{parentName:"p"},"config.openDelay")," time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"openWithDelay(): void;\n")),(0,a.kt)("h3",{id:"closewithdelay"},"closeWithDelay()"),(0,a.kt)("p",null,"Close the popover after ",(0,a.kt)("inlineCode",{parentName:"p"},"config.closeDelay")," time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"closeWithDelay(): void;\n")),(0,a.kt)("h3",{id:"enable"},"enable()"),(0,a.kt)("p",null,"Enable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"enable(): void\n")),(0,a.kt)("h3",{id:"disable"},"disable()"),(0,a.kt)("p",null,"Disable and close popover."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"disable(): void\n")),(0,a.kt)("h3",{id:"updateconfig"},"updateConfig()"),(0,a.kt)("p",null,"Update config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"updateConfig(config: Partial<PopoverConfig>): void;\n")),(0,a.kt)("h3",{id:"destroy"},"destroy()"),(0,a.kt)("p",null,"Destroy the Popover instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"destroy(): void;\n")),(0,a.kt)("h3",{id:"onscroll"},"onScroll()"),(0,a.kt)("p",null,"Manually trigger the ",(0,a.kt)("inlineCode",{parentName:"p"},"onScroll")," event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"onScroll(): void;\n")),(0,a.kt)("h3",{id:"update"},"update()"),(0,a.kt)("p",null,"Manually update the position of the Popover instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"update(): void;\n")))}u.isMDXComponent=!0}}]);