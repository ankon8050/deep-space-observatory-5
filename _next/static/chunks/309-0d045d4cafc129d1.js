"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{309:function(e,t,l){let n,o,i,r,s;l.d(t,{ZP:function(){return p}});var a={tocSelector:".js-toc",tocElement:null,contentSelector:".js-toc-content",contentElement:null,headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1,tocScrollingWrapper:null,tocScrollOffset:30,enableUrlHashUpdateOnScroll:!1};let c={};function d(e){(c=function(...e){let t={};for(let l=0;l<e.length;l++){let n=e[l];for(let e in n)f.call(n,e)&&(t[e]=n[e])}return t}(a,e||{})).scrollSmooth&&(c.duration=c.scrollSmoothDuration,c.offset=c.scrollSmoothOffset,function(e){var t=e.duration,l=e.offset;if("undefined"!=typeof window&&"undefined"!=typeof location){var n=location.hash?o(location.href):location.href;document.body.addEventListener("click",function(i){var r,s,a,c,d,u,f,m,h;!(!("a"===(r=i.target).tagName.toLowerCase()&&(r.hash.length>0||"#"===r.href.charAt(r.href.length-1))&&(o(r.href)===n||o(r.href)+"#"===n))||i.target.className.indexOf("no-smooth-scroll")>-1)&&("#"!==i.target.href.charAt(i.target.href.length-2)||"!"!==i.target.href.charAt(i.target.href.length-1))&&-1!==i.target.className.indexOf(e.linkClass)&&(s=i.target.hash,a={duration:t,offset:l,callback:function(){var e,t;e=i.target.hash,(t=document.getElementById(e.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}},d=window.pageYOffset,u={duration:a.duration,offset:a.offset||0,callback:a.callback,easing:a.easing||function(e,t,l,n){return(e/=n/2)<1?l/2*e*e+t:-l/2*(--e*(e-2)-1)+t}},f=document.querySelector('[id="'+decodeURI(s).split("#").join("")+'"]')||document.querySelector('[id="'+s.split("#").join("")+'"]'),m="string"==typeof s?u.offset+(s?f&&f.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):s,h="function"==typeof u.duration?u.duration(m):u.duration,requestAnimationFrame(function(e){(function t(l){c=l-e,window.scrollTo(0,u.easing(c,d,m,h)),c<h?requestAnimationFrame(t):(window.scrollTo(0,d+m),"function"==typeof u.callback&&u.callback())})(e)}))},!1)}function o(e){return e.slice(0,e.lastIndexOf("#"))}}(c)),n=function(e){let t;let l=[].forEach,n=[].some,o="undefined"!=typeof window&&document.body,i=!0;function r(t){let l=e.orderedList?"ol":"ul",n=document.createElement(l),o=e.listClass+" "+e.extraListClasses;return t&&(o=(o=o+" "+e.collapsibleClass)+" "+e.isCollapsedClass),n.setAttribute("class",o),n}function s(e,t){return e&&e.className!==t&&(e.className=t),e}function a(){return e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop}function c(t,l=a()){let o;return n.call(t,(n,i)=>(function t(l){let n=0;return null!==l&&(n=l.offsetTop,e.hasInnerContainers&&(n+=t(l.offsetParent))),n})(n)>l+e.headingsOffset+10?(o=t[0===i?i:i-1],!0):i===t.length-1?(o=t[t.length-1],!0):void 0),o}return{enableTocAnimation:function(){i=!0},disableTocAnimation:function(t){let l=t.target||t.srcElement;"string"==typeof l.className&&-1!==l.className.indexOf(e.linkClass)&&(i=!1)},render:function(n,o){let i=r(!1);return(o.forEach(t=>{!function t(n,o){let i=o.appendChild(function(t){let n=document.createElement("li"),o=document.createElement("a");return e.listItemClass&&n.setAttribute("class",e.listItemClass),e.onClick&&(o.onclick=e.onClick),e.includeTitleTags&&o.setAttribute("title",t.textContent),e.includeHtml&&t.childNodes.length?l.call(t.childNodes,e=>{o.appendChild(e.cloneNode(!0))}):o.textContent=t.textContent,o.setAttribute("href",`${e.basePath}#${t.id}`),o.setAttribute("class",`${e.linkClass+" "}node-name--${t.nodeName} ${e.extraLinkClasses}`),n.appendChild(o),n}(n));if(n.children.length){let e=r(n.isCollapsed);n.children.forEach(l=>{t(l,e)}),i.appendChild(e)}}(t,i)}),null===(t=n||t))?void 0:(t.firstChild&&t.removeChild(t.firstChild),0===o.length)?t:t.appendChild(i)},updateToc:function(n){if(e.positionFixedSelector&&function(){let l=a(),n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=t.offsetTop),l>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=" "+e.positionFixedClass):n.className=n.className.replace(" "+e.positionFixedClass,"")}(),i&&t&&n.length>0){let o=c(n),i=t.querySelector(`.${e.activeLinkClass}`),r=t.querySelector(`.${e.linkClass}.node-name--${o.nodeName}[href="${e.basePath}#${o.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,"\\$1")}"]`);if(i===r)return;let a=t.querySelectorAll(`.${e.linkClass}`);l.call(a,t=>{s(t,t.className.replace(" "+e.activeLinkClass,""))});let d=t.querySelectorAll(`.${e.listItemClass}`);l.call(d,t=>{s(t,t.className.replace(" "+e.activeListItemClass,""))}),r&&-1===r.className.indexOf(e.activeLinkClass)&&(r.className+=" "+e.activeLinkClass);let u=r?.parentNode;u&&-1===u.className.indexOf(e.activeListItemClass)&&(u.className+=" "+e.activeListItemClass);let f=t.querySelectorAll(`.${e.listClass}.${e.collapsibleClass}`);l.call(f,t=>{-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=" "+e.isCollapsedClass)}),r?.nextSibling&&-1!==r.nextSibling.className.indexOf(e.isCollapsedClass)&&s(r.nextSibling,r.nextSibling.className.replace(" "+e.isCollapsedClass,"")),function t(l){return l&&-1!==l.className.indexOf(e.collapsibleClass)&&-1!==l.className.indexOf(e.isCollapsedClass)?(s(l,l.className.replace(" "+e.isCollapsedClass,"")),t(l.parentNode.parentNode)):l}(r?.parentNode.parentNode)}},getCurrentlyHighlighting:function(){return i},getTopHeader:c,getScrollTop:a,updateUrlHashForHeader:function(e){let t=a(),l=c(e,t);if(!l||t<5)"#"===window.location.hash||""===window.location.hash||window.history.pushState(null,null,"#");else if(l){let e=`#${l.id}`;window.location.hash!==e&&window.history.pushState(null,null,e)}}}}(c),o=function(e){let t=[].reduce;function l(e){return e[e.length-1]}function n(t){if(!function(e){try{return e instanceof window.HTMLElement||e instanceof window.parent.HTMLElement}catch(t){return e instanceof window.HTMLElement}}(t))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;let l=t.getAttribute("data-heading-label")||(e.headingLabelCallback?String(e.headingLabelCallback(t.innerText)):(t.innerText||t.textContent).trim()),n={id:t.id,children:[],nodeName:t.nodeName,headingLevel:+t.nodeName.toUpperCase().replace("H",""),textContent:l};return(e.includeHtml&&(n.childNodes=t.childNodes),e.headingObjectCallback)?e.headingObjectCallback(n,t):n}return{nestHeadingsArray:function(o){return t.call(o,function(t,o){let i=n(o);return i&&function(t,o){let i=n(t),r=i.headingLevel,s=o,a=l(s),c=a?a.headingLevel:0,d=r-c;for(;d>0&&(!(a=l(s))||r!==a.headingLevel);)a&&void 0!==a.children&&(s=a.children),d--;r>=e.collapseDepth&&(i.isCollapsed=!0),s.push(i)}(i,t.nest),t},{nest:[]})},selectHeadings:function(t,l){let n=l;e.ignoreSelector&&(n=l.split(",").map(function(t){return`${t.trim()}:not(${e.ignoreSelector})`}));try{return t.querySelectorAll(n)}catch(e){return console.warn(`Headers not found with selector: ${n}`),null}}}}(c),u();let t=function(e){try{return e.contentElement||document.querySelector(e.contentSelector)}catch(t){return console.warn(`Contents element not found: ${e.contentSelector}`),null}}(c);if(null===t)return;let l=h(c);if(null===l||null===(i=o.selectHeadings(t,c.headingSelector)))return;let d=o.nestHeadingsArray(i),p=d.nest;if(c.skipRendering)return this;n.render(l,p);let C=!1;(r=m(e=>{if(n.updateToc(i),c.disableTocScrollSync||C||function(e){let t=e.tocScrollingWrapper||e.tocElement||document.querySelector(e.tocSelector);if(t&&t.scrollHeight>t.clientHeight){let l=t.querySelector(`.${e.activeListItemClass}`);if(l){let n=l.offsetTop,o=n-e.tocScrollOffset;t.scrollTop=o>0?o:0}}}(c),c.enableUrlHashUpdateOnScroll){let e=n.getCurrentlyHighlighting();e&&n.updateUrlHashForHeader(i)}let t=e?.target?.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||t)&&(n.updateToc(i),c.scrollEndCallback&&c.scrollEndCallback(e))},c.throttleTimeout))(),c.scrollContainer&&document.querySelector(c.scrollContainer)?(document.querySelector(c.scrollContainer).addEventListener("scroll",r,!1),document.querySelector(c.scrollContainer).addEventListener("resize",r,!1)):(document.addEventListener("scroll",r,!1),document.addEventListener("resize",r,!1));let g=null;s=m(e=>{C=!0,c.scrollSmooth&&n.disableTocAnimation(e),n.updateToc(i),g&&clearTimeout(g),g=setTimeout(()=>{n.enableTocAnimation()},c.scrollSmoothDuration),setTimeout(()=>{C=!1},c.scrollSmoothDuration+100)},c.throttleTimeout),c.scrollContainer&&document.querySelector(c.scrollContainer)?document.querySelector(c.scrollContainer).addEventListener("click",s,!1):document.addEventListener("click",s,!1)}function u(){let e=h(c);null!==e&&(!c.skipRendering&&e&&(e.innerHTML=""),c.scrollContainer&&document.querySelector(c.scrollContainer)?(document.querySelector(c.scrollContainer).removeEventListener("scroll",r,!1),document.querySelector(c.scrollContainer).removeEventListener("resize",r,!1),n&&document.querySelector(c.scrollContainer).removeEventListener("click",s,!1)):(document.removeEventListener("scroll",r,!1),document.removeEventListener("resize",r,!1),n&&document.removeEventListener("click",s,!1)))}let f=Object.prototype.hasOwnProperty;function m(e,t,l){let n,o;return t||(t=250),function(...i){let r=l||this,s=+new Date;n&&s<n+t?(clearTimeout(o),o=setTimeout(()=>{n=s,e.apply(r,i)},t)):(n=s,e.apply(r,i))}}function h(e){try{return e.tocElement||document.querySelector(e.tocSelector)}catch(t){return console.warn(`TOC element not found: ${e.tocSelector}`),null}}var p={destroy:u,init:d,refresh:function(e){u(),d(e||c)}}}}]);