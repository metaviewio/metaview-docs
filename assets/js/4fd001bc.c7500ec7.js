"use strict";(self.webpackChunkmetaview_docs=self.webpackChunkmetaview_docs||[]).push([[340],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,v=l["".concat(c,".").concat(m)]||l[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},6299:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},c="Javascript",u={unversionedId:"developers/javascript",id:"developers/javascript",title:"Javascript",description:"To access token ratings from a Javascript environment such as a web browser or Node.js you can copy the following code sample or clone the sample repository.",source:"@site/docs/developers/javascript.md",sourceDirName:"developers",slug:"/developers/javascript",permalink:"/developers/javascript",editUrl:"https://github.com/metaviewio/metaview-docs/docs/developers/javascript.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/developers/getting-started"},next:{title:"Solidity",permalink:"/developers/solidity"}},d=[{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"Contract ABI",id:"contract-abi",children:[],level:2}],p={toc:d};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"javascript"},"Javascript"),(0,o.kt)("p",null,"To access token ratings from a Javascript environment such as a web browser or ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," you can copy the following code sample or clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaviewio/metaview-examples-javascript"},"sample repository"),"."),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("p",null,"This code sample makes use of the popular ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ethers.io/"},"Ethers.js")," library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const ethers = require('ethers')\n\nconst contractAddress = '0xE9a7d18ACE629BBF46eF5D13ba3BaA9510EECbD6' // Metaview contract address on Ropsten Testnet\nconst tokenAddress = '0xE9a7d18ACE629BBF46eF5D13ba3BaA9510EECbD6' // Token address to lookup on Ropsten Testnet\n\nconst provider = new ethers.getDefaultProvider('ropsten')\nconst metaviewAbi = [\n  'function getAggregateRating(address token) view returns (tuple(uint64 rating, uint32 ratingCount, uint32 scamCount, uint32 remainingBonuses, uint96 bonusAmount))'\n]\nconst metaviewContract = new ethers.Contract(contractAddress, metaviewAbi, provider)\n\nmetaviewContract.getAggregateRating(tokenAddress).then((aggregateRating) => {\n  var rating = ethers.utils.formatUnits(aggregateRating.rating)\n  console.log('rating:', rating)\n}).catch((error) => {\n  console.error(error)\n})\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The sample code uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"getDefaultProvider")," function, however it is recommended that you sign up for your own API key. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api-keys/"},"this page")," for details."))),(0,o.kt)("h2",{id:"contract-abi"},"Contract ABI"),(0,o.kt)("p",null,"This is the Metaview complete ABI in the format used by the Ethers.js library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"[\n  'event Approval(address indexed owner, address indexed spender, uint256 value)',\n  'event Transfer(address indexed from, address indexed to, uint256 value)',\n  'function allowance(address owner, address spender) view returns (uint256)',\n  'function approve(address spender, uint256 amount) returns (bool)',\n  'function balanceOf(address account) view returns (uint256)',\n  'function decimals() view returns (uint8)',\n  'function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)',\n  'function increaseAllowance(address spender, uint256 addedValue) returns (bool)',\n  'function name() view returns (string)',\n  'function symbol() view returns (string)',\n  'function totalSupply() view returns (uint256)',\n  'function transfer(address recipient, uint256 amount) returns (bool)',\n  'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',\n  'function setRating(address token, uint64 rating, bool scam)',\n  'function getRating(address token, address account) view returns (tuple(uint64 rating, bool rated, bool scam))',\n  'function setBonus(address token, uint96 bonusAmount, uint32 bonusCount)',\n  'function getAggregateRating(address token) view returns (tuple(uint64 rating, uint32 ratingCount, uint32 scamCount, uint32 remainingBonuses, uint96 bonusAmount))'\n]\n")))}l.isMDXComponent=!0}}]);