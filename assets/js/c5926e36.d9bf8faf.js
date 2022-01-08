"use strict";(self.webpackChunkmetaview_docs=self.webpackChunkmetaview_docs||[]).push([[248],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3454:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:5},s="Smart Contract",u={unversionedId:"features-and-functionality/smart-contract",id:"features-and-functionality/smart-contract",title:"Smart Contract",description:"The Metaview smart contract is deployed on three chains",source:"@site/docs/features-and-functionality/smart-contract.md",sourceDirName:"features-and-functionality",slug:"/features-and-functionality/smart-contract",permalink:"/docs/features-and-functionality/smart-contract",editUrl:"https://github.com/metaviewio/metaview-docs/docs/features-and-functionality/smart-contract.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Audits",permalink:"/docs/features-and-functionality/audits"},next:{title:"Token Utility",permalink:"/docs/metaview-token/token-utility"}},l=[{value:"Token Balances",id:"token-balances",children:[],level:2},{value:"Reviews",id:"reviews",children:[],level:2},{value:"Bonus Rewards",id:"bonus-rewards",children:[],level:2}],d={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smart-contract"},"Smart Contract"),(0,i.kt)("p",null,"The Metaview smart contract is deployed on three chains"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ethereum"),(0,i.kt)("li",{parentName:"ul"},"Binance Smart Chain"),(0,i.kt)("li",{parentName:"ul"},"Polygon")),(0,i.kt)("p",null,"The smart contract is identical across these chains and as such the Metaview smart contract is a multichain contract."),(0,i.kt)("p",null,"The smart contract has the following functions"),(0,i.kt)("h2",{id:"token-balances"},"Token Balances"),(0,i.kt)("p",null,"The smart contract has the standard token balance and thus provides users with the VIEW token"),(0,i.kt)("h2",{id:"reviews"},"Reviews"),(0,i.kt)("p",null,"The second step in the review process is the step of submitting the review to the blockchain. The following data is submitted for each review"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"rating the user gave"),(0,i.kt)("li",{parentName:"ul"},"whether this token was marked as a scam"),(0,i.kt)("li",{parentName:"ul"},"the wallet address which gave the rating")),(0,i.kt)("p",null,"Submitting a review will credit the account which submitted the review with VIEW tokens as a reward for submitting the review."),(0,i.kt)("h2",{id:"bonus-rewards"},"Bonus Rewards"),(0,i.kt)("p",null,"The smart contract has a function on which bonus rewards can be set for a given token. The token owner would pay the bonus rewards"),(0,i.kt)("p",null,"function parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void setBonus(uint96 bonusAmount, uint32 numReviews)\n")))}p.isMDXComponent=!0}}]);