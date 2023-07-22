(()=>{"use strict";var n={176:(n,t,e)=>{e.d(t,{Z:()=>d});var i=e(81),r=e.n(i),o=e(645),a=e.n(o),s=e(735),c=a()(r());c.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap);"]),c.i(s.Z),c.push([n.id,"html {\n    font-family: 'Montserrat', sans-serif;\n    color: var(--lighter);\n    background: var(--dark);\n    height: 100vh;\n}\n\nbody, .wrapper {\n    height: 100%;\n}\n\n[class*='container'] {\n    padding: 0 15px;\n    margin: 0 auto;\n}\n\nbutton {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font-size: inherit;\n    cursor: pointer;\n}\n\n/* ============================================================== */\n\n/* ========================= VARIABLES ========================== */\n\nhtml {\n    --dark: #2A2A2A;\n    --light: #81776F;\n    --lighter: #B9AC9D;\n}\n\n/* ========================= VARIABLES ========================== */\n\n.wrapper {\n    display: flex;\n    flex-direction: column;\n}\n\nmain {\n    margin-top: 50px;\n    display: flex;\n    gap: 15px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nheader {\n    margin-top: 50px;\n    padding: 30px 0;\n}\n\nheader h1 {\n    margin: 0;\n    text-align: center;\n}\n\nheader h1 button#gameMode {\n    padding: 6px 8px;\n    margin: 0;\n    border: none;\n    border-radius: 10px;\n    background: var(--light);\n    color: var(--lighter);\n    font-size: inherit;\n    cursor: pointer;\n}\n\nmain button#gameRestart {\n    display: flex;\n    gap: 5px;\n    justify-content: center;\n    align-items: center;\n}\n\nmain button#gameRestart svg {\n    background: var(--light);\n    padding: 4px;\n    border-radius: 8px;\n}\n\nmain button#gameRestart svg path {\n    transform-origin: 50% 50%;\n    transition: transform 0.2s ease-in-out\n}\n\nmain button#gameRestart:hover svg path {\n    transform: rotate(90deg);\n}\n\nheader h3 {\n    text-align: center;\n}\n\ncanvas {\n    background-color: var(--light);\n    border-radius: 10px;\n    cursor: grab;\n}\n\ncanvas:active {\n    cursor: grabbing;\n}\n\nfooter {\n    padding: 15px 0;\n    text-align: center;\n}\n\n@media(max-width:1920px) {\n    [class*='container'] {\n        max-width: 1200px;\n    }\n}\n\n@media(max-width:1440px) {\n    [class*='container'] {\n        max-width: 968px;\n    }\n}\n\n@media(max-width:1024px) {\n    [class*='container'] {\n        max-width: 768px;\n    }\n}\n\n@media(max-width: 720px) {\n    header {\n        padding: 20px 0;\n    }\n\n    header h3 {\n        margin: 10px 0;\n    }\n}",""]);const d=c},735:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(81),r=e.n(i),o=e(645),a=e.n(o)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var h=[].concat(n[d]);i&&a[h[0]]||(void 0!==o&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=o),e&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=e):h[2]=e),r&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=r):h[4]="".concat(r)),t.push(h))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],d=i.base?c[0]+i.base:c[0],h=o[d]||0,u="".concat(d," ").concat(h);o[d]=h+1;var l=e(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)t[l].references++,t[l].updater(p);else{var g=r(p,i);i.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=e(o[a]);t[s].references--}for(var c=i(n,r),d=0;d<o.length;d++){var h=e(o[d]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}o=c}}},569:n=>{var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,r&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return n[i](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!n;)n=i[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{var n={0:{text:"#F9F6F2",background:"#B9AC9D"},2:{text:"#776E65",background:"#EBDABC"},4:{text:"#776E65",background:"#D6C5A6"},8:{text:"#F9F6F2",background:"#FDCF77"},16:{text:"#F9F6F2",background:"#FAB46E"},32:{text:"#F9F6F2",background:"#EF9869"},64:{text:"#F9F6F2",background:"#ED7B57"},128:{text:"#F9F6F2",background:"#D96858"},256:{text:"#F9F6F2",background:"#C65557"},512:{text:"#F9F6F2",background:"#d1474a"},1024:{text:"#F9F6F2",background:"#dd3c3f"},2048:{text:"#F9F6F2",background:"#ee2b2e"}},t=function(){function t(n,t,e){void 0===e&&(e=10),this.canvas=n,this.context=t,this.scoreElement=document.querySelector("#gameScore"),this.tileSize=65,this.cornerRadius=e}return t.prototype.render=function(n){this.animate(n)},t.prototype.animate=function(n){for(var t=this,e=0;e<n.length;e++)for(var i=0;i<n[e].length;i++){var r=n[e][i],o=r.currentX!==r.targetX||r.currentY!==r.targetY,a=1!==r.scale;(o||a)&&r.update()}this.clearCanvas(),this.drawGrid(n);var s=n.some((function(n){return n.some((function(n){return n.currentX!==n.targetX||n.currentY!==n.targetY}))})),c=n.some((function(n){return n.some((function(n){return 1!==n.scale}))}));(s||c)&&requestAnimationFrame((function(){return t.animate(n)}))},t.prototype.drawGrid=function(n){for(var t=this,e=[],i=0;i<n.length;i++)for(var r=0;r<n[i].length;r++)0!==(o=n[i][r]).getValue()&&e.push(o);for(this.drawBackgroundGrid(),i=0;i<n.length;i++)for(r=0;r<n[i].length;r++){var o,a=(o=n[i][r]).currentX,s=o.currentY;0===o.getValue()&&this.drawTile(a,s,0,o.scale)}e.forEach((function(n){t.drawTile(n.currentX,n.currentY,n.getValue(),n.scale)}))},t.prototype.drawTile=function(t,e,i,r){this.context.fillStyle=n[i].background;var o=this.tileSize*r,a=t+(this.tileSize-o)/2,s=e+(this.tileSize-o)/2;if(this.createRoundedRect(a,s,o,o,this.cornerRadius),this.context.fill(),0!==i){var c=24*r;this.context.font="bold ".concat(c,"px Montserrat"),this.context.fillStyle=n[i].text,this.context.textAlign="center",this.context.textBaseline="middle";var d=t+this.tileSize/2,h=e+this.tileSize/2;this.context.fillText(i.toString(),d,h)}},t.prototype.drawBackgroundGrid=function(){for(var n=0;n<4;n++)for(var t=0;t<4;t++){var e=t*(this.tileSize+8)+8,i=n*(this.tileSize+8)+8;this.drawTile(e,i,0,1)}},t.prototype.createRoundedRect=function(n,t,e,i,r){this.context.beginPath(),this.context.moveTo(n+r,t),this.context.lineTo(n+e-r,t),this.context.arcTo(n+e,t,n+e,t+r,r),this.context.lineTo(n+e,t+i-r),this.context.arcTo(n+e,t+i,n+e-r,t+i,r),this.context.lineTo(n+r,t+i),this.context.arcTo(n,t+i,n,t+i-r,r),this.context.lineTo(n,t+r),this.context.arcTo(n,t,n+r,t,r),this.context.closePath()},t.prototype.clearCanvas=function(){var n=this.canvas.width,t=this.canvas.height;this.context.clearRect(0,0,n,t)},t.prototype.updateScore=function(n){this.scoreElement.textContent=n.toString()},t}();const i=t,r=function(){function n(n,t,e){void 0===e&&(e=1),this.animationStartTime=null,this.animationDuration=150,this.tileSize=65,this.isMoving=!1,this.hasMerged=!1,this.value=n,this.scale=e,this.position=t,this.currentX=t.col*(this.tileSize+8)+8,this.currentY=t.row*(this.tileSize+8)+8,this.targetX=this.currentX,this.targetY=this.currentY}return n.prototype.moveTo=function(n,t){this.targetX=t*(this.tileSize+8)+8,this.targetY=n*(this.tileSize+8)+8,this.animationStartTime=null,this.setPosition(n,t),this.currentX===this.targetX&&this.currentY===this.targetY||(this.isMoving=!0,this.animationStartTime=performance.now())},n.prototype.fadeIn=function(){this.animationStartTime=null,1!==this.scale&&(this.animationStartTime=performance.now())},n.prototype.fadeInAndOut=function(){this.animationStartTime=null,1===this.scale&&(this.scale=1.8,this.animationStartTime=performance.now())},n.prototype.update=function(){if(null!==this.animationStartTime){var n=performance.now()-this.animationStartTime,t=Math.min(n/this.animationDuration,1);if(this.scale<1?this.scale=t:this.scale>1&&(this.scale=(3,1,((e=this.scale)+1)/2+(1-e)/2*Math.sin(6*Math.PI*1))),this.currentX=o(this.currentX,this.targetX,t),this.currentY=o(this.currentY,this.targetY,t),1===t)return this.animationStartTime=null,this.isMoving=!1,this.scale=1,this.animationStartTime}var e;return this.animationStartTime},n.prototype.getValue=function(){return this.value},n.prototype.setValue=function(n){this.value=n},n.prototype.getPosition=function(){return this.position},n.prototype.setPosition=function(n,t){this.position.row=n,this.position.col=t},n.prototype.isEmpty=function(){return 0===this.value},n}();function o(n,t,e){return n*(1-e)+t*e}const a=e.p+"1be84a3db01ade68e51c0660a59fb40f.mp3",s=e.p+"41d706e8503d403c932f37b50c4a1787.mp3",c=function(){function n(n){void 0===n&&(n=4),this.size=n,this.grid=[],this.score=0,this.maxTileValue=0}return n.prototype.init=function(n,t){this.reset(),n&&0!==n.length&&void 0!==t?(this.grid=n,this.score=t):(this.fillGridWithEmptyTiles(),this.spawnRandomTile(1),this.spawnRandomTile(1))},n.prototype.move=function(n){var t=this,e=0,i=function(n){n.madeMove&&(t.spawnRandomTile(),new Audio(a).play()),n.mergeOccured&&(e=n.mergeSum,t.maxTileValue=Math.max(t.maxTileValue,n.mergeSum),new Audio(s).play())};switch(n){case d.UP:i(this.moveUp());break;case d.DOWN:i(this.moveDown());break;case d.LEFT:i(this.moveLeft());break;case d.RIGHT:i(this.moveRight())}this.updateScore(e)},n.prototype.moveUp=function(){for(var n={madeMove:!1,mergeOccured:!1,mergeSum:0},t=0;t<this.size;t++)for(var e=1;e<this.size;e++){var i=this.grid[e][t];if(!i.isEmpty()){for(var o=e-1;o>=0&&this.grid[o][t].isEmpty();)this.grid[o][t]=this.grid[o+1][t],this.grid[o+1][t]=new r(0,{row:o+1,col:t}),this.grid[o][t].moveTo(o,t),n.madeMove=!0,o--;if(o>=0&&this.grid[o][t].getValue()===i.getValue()&&!this.grid[o][t].hasMerged){var a=2*i.getValue();this.grid[o][t].setValue(a),this.grid[o][t].hasMerged=!0,this.grid[o][t].moveTo(o,t),this.grid[o][t].fadeInAndOut(),i.moveTo(o,t),i.setValue(0),n.madeMove=!0,n.mergeOccured=!0,n.mergeSum+=a}}}for(e=0;e<this.size;e++)for(t=0;t<this.size;t++)this.grid[e][t].isEmpty()||(this.grid[e][t].hasMerged=!1);return n},n.prototype.moveDown=function(){for(var n={madeMove:!1,mergeOccured:!1,mergeSum:0},t=0;t<this.size;t++)for(var e=this.size-2;e>=0;e--){var i=this.grid[e][t];if(!i.isEmpty()){for(var o=e+1;o<this.size&&this.grid[o][t].isEmpty();)this.grid[o][t]=this.grid[o-1][t],this.grid[o-1][t]=new r(0,{row:o-1,col:t}),this.grid[o][t].moveTo(o,t),n.madeMove=!0,o++;if(o<this.size&&this.grid[o][t].getValue()===i.getValue()&&!this.grid[o][t].hasMerged){var a=2*i.getValue();this.grid[o][t].setValue(a),this.grid[o][t].hasMerged=!0,this.grid[o][t].moveTo(o,t),this.grid[o][t].fadeInAndOut(),i.moveTo(o,t),i.setValue(0),n.madeMove=!0,n.mergeOccured=!0,n.mergeSum+=a}}}for(e=0;e<this.size;e++)for(t=0;t<this.size;t++)this.grid[e][t].isEmpty()||(this.grid[e][t].hasMerged=!1);return n},n.prototype.moveLeft=function(){for(var n={madeMove:!1,mergeOccured:!1,mergeSum:0},t=0;t<this.size;t++)for(var e=1;e<this.size;e++){var i=this.grid[t][e];if(!i.isEmpty()){for(var o=e-1;o>=0&&this.grid[t][o].isEmpty();)this.grid[t][o]=this.grid[t][o+1],this.grid[t][o+1]=new r(0,{row:t,col:o+1}),this.grid[t][o].moveTo(t,o),n.madeMove=!0,o--;if(o>=0&&this.grid[t][o].getValue()===i.getValue()&&!this.grid[t][o].hasMerged){var a=2*i.getValue();this.grid[t][o].setValue(a),this.grid[t][o].hasMerged=!0,this.grid[t][o].moveTo(t,o),this.grid[t][o].fadeInAndOut(),i.moveTo(t,o),i.setValue(0),n.madeMove=!0,n.mergeOccured=!0,n.mergeSum+=a}}}for(t=0;t<this.size;t++)for(e=0;e<this.size;e++)this.grid[t][e].isEmpty()||(this.grid[t][e].hasMerged=!1);return n},n.prototype.moveRight=function(){for(var n={madeMove:!1,mergeOccured:!1,mergeSum:0},t=0;t<this.size;t++)for(var e=this.size-2;e>=0;e--){var i=this.grid[t][e];if(!i.isEmpty()){for(var o=e+1;o<this.size&&this.grid[t][o].isEmpty();)this.grid[t][o]=this.grid[t][o-1],this.grid[t][o-1]=new r(0,{row:t,col:o-1}),this.grid[t][o].moveTo(t,o),n.madeMove=!0,o++;if(o<this.size&&this.grid[t][o].getValue()===i.getValue()&&!this.grid[t][o].hasMerged){var a=2*i.getValue();this.grid[t][o].setValue(a),this.grid[t][o].hasMerged=!0,this.grid[t][o].moveTo(t,o),this.grid[t][o].fadeInAndOut(),i.moveTo(t,o),i.setValue(0),n.madeMove=!0,n.mergeOccured=!0,n.mergeSum+=a}}}for(t=0;t<this.size;t++)for(e=0;e<this.size;e++)this.grid[t][e].isEmpty()||(this.grid[t][e].hasMerged=!1);return n},n.prototype.spawnRandomTile=function(n){void 0===n&&(n=0);var t=this.getRandomEmptyTile();if(t){var e=t.row,i=t.col,o=Math.random()<1?2:4;this.grid[e][i]=new r(o,{row:e,col:i},n),this.grid[e][i].fadeIn()}},n.prototype.getRandomEmptyTile=function(){for(var n=[],t=0;t<this.grid.length;t++)for(var e=0;e<this.grid.length;e++)this.grid[t][e].getValue||console.log(this.grid[t][e].getValue),0===this.grid[t][e].getValue()&&n.push({row:t,col:e});return 0===n.length?null:n[Math.floor(Math.random()*n.length)]},n.prototype.fillGridWithEmptyTiles=function(){this.grid=[];for(var n=0;n<this.size;n++){for(var t=[],e=0;e<this.size;e++)t.push(new r(0,{row:n,col:e}));this.grid.push(t)}},n.prototype.updateScore=function(n){return this.score+=n,this.score},n.prototype.isTilesMoving=function(){return this.grid.some((function(n){return n.some((function(n){return n.isMoving}))}))},n.prototype.isWin=function(){return 2048===this.maxTileValue},n.prototype.isGameOver=function(){var n=this,t=this.grid.flat(),e=t.filter((function(n){return 0===n.getValue()})),i=t.filter((function(t){var e=t.getValue();return n.getNeighbours(t).some((function(n){return n.getValue()===e}))}));return 0===e.length&&0===i.length},n.prototype.getNeighbours=function(n){var t,e,i,r,o=n.getPosition(),a=o.row,s=o.col;return[null===(t=this.grid[a-1])||void 0===t?void 0:t[s],null===(e=this.grid[a+1])||void 0===e?void 0:e[s],null===(i=this.grid[a])||void 0===i?void 0:i[s-1],null===(r=this.grid[a])||void 0===r?void 0:r[s+1]].filter((function(n){return n}))},n.prototype.reset=function(){this.grid=[],this.score=0,this.maxTileValue=0},n.prototype.getGrid=function(){return this.grid},n.prototype.getSize=function(){return this.size},n}();var d;!function(n){n.UP="ArrowUp",n.DOWN="ArrowDown",n.LEFT="ArrowLeft",n.RIGHT="ArrowRight"}(d||(d={}));const h=function(){function n(n){var t=this;this.lastX=null,this.lastY=null,this.dx=0,this.dy=0,this.handleKeyDown=function(n){["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.key)&&(n.preventDefault(),t.emit("arrowKeyDown",n.key))},this.handleMouseDown=function(n){t.lastX=n.clientX,t.lastY=n.clientY},this.handleMouseUp=function(n){null!==t.lastX&&null!==t.lastY&&(t.dx=n.clientX-t.lastX,t.dy=n.clientY-t.lastY,t.generateSwipe(t.dx,t.dy))},this.handleTouchStart=function(n){n.touches.length>0&&(t.lastX=n.touches[0].clientX,t.lastY=n.touches[0].clientY)},this.handleTouchEnd=function(n){null!==t.lastX&&null!==t.lastY&&n.changedTouches.length>0&&(t.dx=n.changedTouches[0].clientX-t.lastX,t.dy=n.changedTouches[0].clientY-t.lastY,t.generateSwipe(t.dx,t.dy))},this.canvas=n,this.eventListeners={},this.init()}return n.prototype.init=function(){window.addEventListener("keydown",this.handleKeyDown),this.canvas.addEventListener("mousedown",this.handleMouseDown),this.canvas.addEventListener("mousemove",(function(n){return n.preventDefault()})),this.canvas.addEventListener("mouseup",this.handleMouseUp),this.canvas.addEventListener("touchstart",this.handleTouchStart),this.canvas.addEventListener("touchmove",(function(n){return n.preventDefault()})),this.canvas.addEventListener("touchend",this.handleTouchEnd)},n.prototype.generateSwipe=function(n,t){Math.abs(n)>Math.abs(t)&&Math.abs(n)>=50?n>0?this.emit("swipe",d.RIGHT):this.emit("swipe",d.LEFT):Math.abs(t)>Math.abs(n)&&Math.abs(t)>=50&&(t>0?this.emit("swipe",d.DOWN):this.emit("swipe",d.UP))},n.prototype.on=function(n,t){this.eventListeners[n]||(this.eventListeners[n]=[]),this.eventListeners[n].push(t)},n.prototype.emit=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];var i=this.eventListeners[n];i&&i.forEach((function(n){return n.apply(void 0,t)}))},n}(),u=function(){function n(n){var t=this;this.endlessGame=!1,this.handleMove=function(n){t.board.isTilesMoving()||(t.board.move(n),t.renderer.render(t.board.getGrid()),t.renderer.updateScore(t.board.score),t.board.isGameOver()&&setTimeout((function(){alert("No possible move"),t.restart()}),300),!t.endlessGame&&t.board.isWin()&&setTimeout((function(){alert("You won!"),t.restart()}),300))},this.canvas=n,this.context=n.getContext("2d"),this.board=new c(4),this.renderer=new i(this.canvas,this.context),this.inputManager=new h(n)}return n.prototype.start=function(){var n,t,e=null!==(n=window.localStorage.getItem("2048-grid"))?JSON.parse(n).map((function(n){return n.map((function(n){return new r(n.value,{row:n.position.row,col:n.position.col})}))})):[],i=(t=window.localStorage.getItem("2048-score"))?Number(t):0;this.board.init(e,i),this.renderer.drawGrid(this.board.getGrid()),this.renderer.updateScore(this.board.score),this.inputManager.on("arrowKeyDown",this.handleMove),this.inputManager.on("swipe",this.handleMove)},n.prototype.restart=function(){this.board.init(),this.renderer.drawGrid(this.board.getGrid()),this.renderer.updateScore(this.board.score)},n}();var l=e(379),p=e.n(l),g=e(795),m=e.n(g),f=e(569),v=e.n(f),b=e(565),y=e.n(b),w=e(216),x=e.n(w),S=e(589),T=e.n(S),E=e(176),M={};M.styleTagTransform=T(),M.setAttributes=y(),M.insert=v().bind(null,"head"),M.domAPI=m(),M.insertStyleElement=x(),p()(E.Z,M),E.Z&&E.Z.locals&&E.Z.locals,window.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector("#gameCanvas");if(n){!function(n,t,e,i){n.width=300*i,n.height=300*i,n.style.width="300px",n.style.height="300px",n.getContext("2d").setTransform(i,0,0,i,0,0)}(n,0,0,window.devicePixelRatio||1);var t=new u(n);t.start();var e=document.querySelector("#gameMode");e.onclick=function(){return function(n,t){t.endlessGame=!t.endlessGame,t.endlessGame?n.innerHTML="endless":n.textContent="2048"}(e,t)},document.querySelector("#gameRestart").onclick=function(){return function(n){confirm("Restart the game?")&&n.restart()}(t)},window.addEventListener("beforeunload",(function(){var n,e;n=t.board.getGrid(),window.localStorage.setItem("2048-grid",JSON.stringify(n)),e=t.board.score,window.localStorage.setItem("2048-score",e.toString())}))}}))})()})();