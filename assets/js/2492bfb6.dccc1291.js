"use strict";(self.webpackChunkmetaview_docs=self.webpackChunkmetaview_docs||[]).push([[184],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1412:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:1},s="Getting Started",p={unversionedId:"developers/getting-started",id:"developers/getting-started",title:"Getting Started",description:"The Metaview API allows token ratings to be stored on the blockchain and accessed by anyone.",source:"@site/docs/developers/getting-started.md",sourceDirName:"developers",slug:"/developers/getting-started",permalink:"/developers/getting-started",editUrl:"https://github.com/metaviewio/metaview-docs/docs/developers/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Token Utility",permalink:"/metaview-token/token-utility"},next:{title:"Javascript Example",permalink:"/developers/javascript-example"}},c=[{value:"Useful Links",id:"useful-links",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API Reference",id:"api-reference",children:[],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"The Metaview API allows token ratings to be stored on the blockchain and accessed by anyone."),(0,i.kt)("p",null,"Developers can integrate with Metaview using a javascript library such as ",(0,i.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/"},"Web3.js")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethers.io/"},"Ethers.js")," or directly from within a smart contract using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/"},"Solidity"),"."),(0,i.kt)("p",null,"The following documentation will help you get started by providing examples and an API reference."),(0,i.kt)("h2",{id:"useful-links"},"Useful Links"),(0,i.kt)("p",null,"Before you start we recommend that you already know javascript or solidity. Here are some usefull resources."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3schools.com/js/"},"Javascript Tutorial")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/tutorials/"},"Ethereum Development Tutorials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.trufflesuite.com/docs/truffle/quickstart"},"Getting Started with Truffle"))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/developers/javascript-example"},"Javascript Example"))),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/developers/api-reference#getaggregaterating"},"getAggregateRating")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/developers/api-reference#getrating"},"getRating")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/developers/api-reference#setrating"},"setRating")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/developers/api-reference#setbonus"},"setBonus"))))}d.isMDXComponent=!0}}]);