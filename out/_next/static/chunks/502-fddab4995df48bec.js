(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{7484:function(e){var t,r,n,o,a,i,u,l,c,s,p,d,f,h,m,y,g,v,b,O,_,k;e.exports=(t="millisecond",r="second",n="minute",o="hour",a="week",i="month",u="quarter",l="year",c="date",s="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},(m={})[h="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},y="$isDayjsObject",g=function(e){return e instanceof _||!(!e||!e[y])},v=function e(t,r,n){var o;if(!t)return h;if("string"==typeof t){var a=t.toLowerCase();m[a]&&(o=a),r&&(m[a]=r,o=a);var i=t.split("-");if(!o&&i.length>1)return e(i[0])}else{var u=t.name;m[u]=t,o=u}return!n&&o&&(h=o),o||!n&&h},b=function(e,t){if(g(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new _(r)},(O={s:f,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,i),a=r-o<0,u=t.clone().add(n+(a?-1:1),i);return+(-(n+(r-o)/(a?o-u:u-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:i,y:l,w:a,d:"day",D:c,h:o,m:n,s:r,ms:t,Q:u})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=v,O.i=g,O.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},k=(_=function(){function e(e){this.$L=v(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[y]=!0}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return O},f.isValid=function(){return this.$d.toString()!==s},f.isSame=function(e,t){var r=b(e);return this.startOf(t)<=r&&r<=this.endOf(t)},f.isAfter=function(e,t){return b(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<b(e)},f.$g=function(e,t,r){return O.u(e)?this[t]:this.set(r,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var u=this,s=!!O.u(t)||t,p=O.p(e),d=function(e,t){var r=O.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return s?r:r.endOf("day")},f=function(e,t){return O.w(u.toDate()[e].apply(u.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},h=this.$W,m=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(p){case l:return s?d(1,0):d(31,11);case i:return s?d(1,m):d(0,m+1);case a:var v=this.$locale().weekStart||0,b=(h<v?h+7:h)-v;return d(s?y-b:y+(6-b),m);case"day":case c:return f(g+"Hours",0);case o:return f(g+"Minutes",1);case n:return f(g+"Seconds",2);case r:return f(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,a){var u,s=O.p(e),p="set"+(this.$u?"UTC":""),d=((u={}).day=p+"Date",u[c]=p+"Date",u[i]=p+"Month",u[l]=p+"FullYear",u[o]=p+"Hours",u[n]=p+"Minutes",u[r]=p+"Seconds",u[t]=p+"Milliseconds",u)[s],f="day"===s?this.$D+(a-this.$W):a;if(s===i||s===l){var h=this.clone().set(c,1);h.$d[d](f),h.init(),this.$d=h.set(c,Math.min(this.$D,h.daysInMonth())).$d}else d&&this.$d[d](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[O.p(e)]()},f.add=function(e,t){var u,c=this;e=Number(e);var s=O.p(t),p=function(t){var r=b(c);return O.w(r.date(r.date()+Math.round(t*e)),c)};if(s===i)return this.set(i,this.$M+e);if(s===l)return this.set(l,this.$y+e);if("day"===s)return p(1);if(s===a)return p(7);var d=((u={})[n]=6e4,u[o]=36e5,u[r]=1e3,u)[s]||1,f=this.$d.getTime()+e*d;return O.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||s;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=O.z(this),a=this.$H,i=this.$m,u=this.$M,l=r.weekdays,c=r.months,p=r.meridiem,f=function(e,r,o,a){return e&&(e[r]||e(t,n))||o[r].slice(0,a)},h=function(e){return O.s(a%12||12,e,"0")},m=p||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(d,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return O.s(t.$y,4,"0");case"M":return u+1;case"MM":return O.s(u+1,2,"0");case"MMM":return f(r.monthsShort,u,c,3);case"MMMM":return f(c,u);case"D":return t.$D;case"DD":return O.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(r.weekdaysMin,t.$W,l,2);case"ddd":return f(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return O.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(a,i,!0);case"A":return m(a,i,!1);case"m":return String(i);case"mm":return O.s(i,2,"0");case"s":return String(t.$s);case"ss":return O.s(t.$s,2,"0");case"SSS":return O.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,c){var s,p=this,d=O.p(t),f=b(e),h=(f.utcOffset()-this.utcOffset())*6e4,m=this-f,y=function(){return O.m(p,f)};switch(d){case l:s=y()/12;break;case i:s=y();break;case u:s=y()/3;break;case a:s=(m-h)/6048e5;break;case"day":s=(m-h)/864e5;break;case o:s=m/36e5;break;case n:s=m/6e4;break;case r:s=m/1e3;break;default:s=m}return c?s:O.a(s)},f.daysInMonth=function(){return this.endOf(i).$D},f.$locale=function(){return m[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=v(e,t,!0);return n&&(r.$L=n),r},f.clone=function(){return O.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,b.prototype=k,[["$ms",t],["$s",r],["$m",n],["$H",o],["$W","day"],["$M",i],["$y",l],["$D",c]].forEach(function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),b.extend=function(e,t){return e.$i||(e(t,_,b),e.$i=!0),b},b.locale=v,b.isDayjs=g,b.unix=function(e){return b(1e3*e)},b.en=m[h],b.Ls=m,b.p={},b)},2962:function(e,t,r){"use strict";r.d(t,{PB:function(){return d},dX:function(){return f},lX:function(){return p}});var n=r(9008),o=r.n(n),a=r(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0,disableGooglebot:!1},c=function(e,t,r){void 0===t&&(t=[]);var n=void 0===r?{}:r,o=n.defaultWidth,i=n.defaultHeight;return t.reduce(function(t,r,n){return t.push(a.createElement("meta",{key:"og:"+e+":0"+n,property:"og:"+e,content:r.url})),r.alt&&t.push(a.createElement("meta",{key:"og:"+e+":alt0"+n,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(a.createElement("meta",{key:"og:"+e+":secure_url0"+n,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(a.createElement("meta",{key:"og:"+e+":type0"+n,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(a.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:r.width.toString()})):o&&t.push(a.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:o.toString()})),r.height?t.push(a.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:r.height.toString()})):i&&t.push(a.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:i.toString()})),t},[])},s=function(e){var t,r,n,o,u,s=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var p="";e.title?(p=e.title,l.templateTitle&&(p=l.templateTitle.replace(/%s/g,function(){return p}))):e.defaultTitle&&(p=e.defaultTitle),p&&s.push(a.createElement("title",{key:"title"},p));var d=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,f=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,h=e.disableGooglebot||l.disableGooglebot||e.dangerouslyDisableGooglebot,m="";if(e.robotsProps){var y=e.robotsProps,g=y.nosnippet,v=y.maxSnippet,b=y.maxImagePreview,O=y.maxVideoPreview,_=y.noarchive,k=y.noimageindex,w=y.notranslate,E=y.unavailableAfter;m=(g?",nosnippet":"")+(v?",max-snippet:"+v:"")+(b?",max-image-preview:"+b:"")+(_?",noarchive":"")+(E?",unavailable_after:"+E:"")+(k?",noimageindex":"")+(O?",max-video-preview:"+O:"")+(w?",notranslate":"")}if(e.dangerouslyDisableGooglebot&&(l.disableGooglebot=!0),d||f?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),s.push(a.createElement("meta",{key:"robots",name:"robots",content:(d?"noindex":"index")+","+(f?"nofollow":"follow")+m})),h||s.push(a.createElement("meta",{key:"googlebot",name:"googlebot",content:(d?"noindex":"index")+","+(f?"nofollow":"follow")+m}))):(s.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),h||s.push(a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+m}))),e.description&&s.push(a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&s.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){s.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&s.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&s.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&s.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&s.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||e.title)&&s.push(a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(o=e.openGraph)?void 0:o.title)||p})),(null!=(r=e.openGraph)&&r.description||e.description)&&s.push(a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(u=e.openGraph)?void 0:u.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&s.push(a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var G=e.openGraph.type.toLowerCase();s.push(a.createElement("meta",{key:"og:type",property:"og:type",content:G})),"profile"===G&&e.openGraph.profile?(e.openGraph.profile.firstName&&s.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&s.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&s.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&s.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===G&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){s.push(a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&s.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&s.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){s.push(a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===G&&e.openGraph.article?(e.openGraph.article.publishedTime&&s.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&s.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&s.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){s.push(a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&s.push(a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){s.push(a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===G||"video.episode"===G||"video.tv_show"===G||"video.other"===G)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&s.push(a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&s.push(a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){s.push(a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){s.push(a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&s.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&s.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){s.push(a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&s.push(a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&s.push.apply(s,c("image",e.openGraph.images,{defaultWidth:l.defaultOpenGraphImageWidth,defaultHeight:l.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&s.push.apply(s,c("video",e.openGraph.videos,{defaultWidth:l.defaultOpenGraphVideoWidth,defaultHeight:l.defaultOpenGraphVideoHeight})),e.openGraph.locale&&s.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&s.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&s.push(a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,r,n;s.push(a.createElement("meta",i({key:"meta:"+(null!=(t=null!=(r=null!=(n=e.keyOverride)?n:e.name)?r:e.property)?t:e.httpEquiv)},e)))}),null!=(n=e.additionalLinkTags)&&n.length&&e.additionalLinkTags.forEach(function(e){var t;s.push(a.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),s},p=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.titleTemplate,n=e.defaultTitle,i=e.dangerouslyDisableGooglebot,u=e.dangerouslySetAllPagesToNoIndex,l=e.dangerouslySetAllPagesToNoFollow,c=e.description,p=e.canonical,d=e.facebook,f=e.openGraph,h=e.additionalMetaTags,m=e.twitter,y=e.defaultOpenGraphImageWidth,g=e.defaultOpenGraphImageHeight,v=e.defaultOpenGraphVideoWidth,b=e.defaultOpenGraphVideoHeight,O=e.mobileAlternate,_=e.languageAlternates,k=e.additionalLinkTags;return a.createElement(o(),null,s({title:t,titleTemplate:r,defaultTitle:n,dangerouslySetAllPagesToNoIndex:void 0!==u&&u,dangerouslySetAllPagesToNoFollow:void 0!==l&&l,description:c,canonical:p,facebook:d,openGraph:f,additionalMetaTags:h,twitter:m,defaultOpenGraphImageWidth:y,defaultOpenGraphImageHeight:g,defaultOpenGraphVideoWidth:v,defaultOpenGraphVideoHeight:b,mobileAlternate:O,languageAlternates:_,additionalLinkTags:k,dangerouslyDisableGooglebot:void 0!==i&&i}))},t}(a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.noindex,n=e.nofollow,i=e.robotsProps,u=e.description,l=e.canonical,c=e.openGraph,p=e.facebook,d=e.twitter,f=e.additionalMetaTags,h=e.titleTemplate,m=e.mobileAlternate,y=e.languageAlternates,g=e.additionalLinkTags,v=e.disableGooglebot;return a.createElement(o(),null,s({title:t,noindex:void 0!==r&&r,nofollow:n,robotsProps:i,description:u,canonical:l,facebook:p,openGraph:c,additionalMetaTags:f,twitter:d,titleTemplate:h,mobileAlternate:m,languageAlternates:y,additionalLinkTags:g,disableGooglebot:v}))},t}(a.Component),f=function(e){var t=e.keyOverride,r=e.url,n=e.title,i=e.images,u=e.datePublished,l=e.dateModified,c=e.authorName,s=e.description,p=e.publisherName,d=e.publisherLogo,f='{\n    "@context": "https://schema.org",\n    "@type": "Article",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'+r+'"\n    },\n    "headline": "'+n+'",\n    "image": [\n      '+(void 0===i?[]:i).map(function(e){return'"'+e+'"'})+'\n     ],\n    "datePublished": "'+u+'",\n    "dateModified": "'+((void 0===l?null:l)||u)+'",\n    "author": '+(Array.isArray(c)?"["+c.map(function(e){return'{"@type": "Person","name": "'+e+'"}'})+"]":'{"@type": "Person","name": "'+c+'"}')+',\n    "publisher": {\n      "@type": "Organization",\n      "name": "'+p+'",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "'+d+'"\n      }\n    },\n    "description": "'+s+'"\n  }';return a.createElement(o(),null,a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:f},key:"jsonld-article"+(t?"-"+t:"")}))}},2038:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return a},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return s}});var r,n,o="refresh",a="navigate",i="restore",u="server-patch",l="prefetch",c="fast-refresh",s="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8693:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6512:function(e,t,r){"use strict";var n=r(930),o=r(5696),a=r(3323),i=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return E}});var c=r(8754)._(r(7294)),s=r(5509),p=r(4514),d=r(4130),f=r(146),h=r(4318),m=r(6514),y=r(8681),g=r(6675),v=r(8693),b=r(6085),O=r(2038),_=new Set;function k(e,t,r,n,o,a){if(a||(0,p.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var i=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(_.has(i))return;_.add(i)}Promise.resolve(a?e.prefetch(t,o):e.prefetch(t,r,n)).catch(function(e){})}}function w(e){return"string"==typeof e?e:(0,d.formatUrl)(e)}var E=c.default.forwardRef(function(e,t){var r,n,u=e.href,d=e.as,_=e.children,E=e.prefetch,G=void 0===E?null:E,P=e.passHref,j=e.replace,M=e.shallow,S=e.scroll,T=e.locale,$=e.onClick,A=e.onMouseEnter,D=e.onTouchStart,x=e.legacyBehavior,C=void 0!==x&&x,I=a(e,i);r=_,C&&("string"==typeof r||"number"==typeof r)&&(r=c.default.createElement("a",null,r));var H=!1!==G,L=null===G?O.PrefetchKind.AUTO:O.PrefetchKind.FULL,N=c.default.useContext(m.RouterContext),R=c.default.useContext(y.AppRouterContext),W=null!=N?N:R,V=!N,U=c.default.useMemo(function(){if(!N){var e=w(u);return{href:e,as:d?w(d):e}}var t=o((0,s.resolveHref)(N,u,!0),2),r=t[0],n=t[1];return{href:r,as:d?(0,s.resolveHref)(N,d):n||r}},[N,u,d]),F=U.href,Y=U.as,K=c.default.useRef(F),z=c.default.useRef(Y);C&&(n=c.default.Children.only(r));var B=C?n&&"object"==typeof n&&n.ref:t,q=o((0,g.useIntersection)({rootMargin:"200px"}),3),J=q[0],Z=q[1],X=q[2],Q=c.default.useCallback(function(e){(z.current!==Y||K.current!==F)&&(X(),z.current=Y,K.current=F),J(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[Y,B,F,X,J]);c.default.useEffect(function(){W&&Z&&H&&k(W,F,Y,{locale:T},{kind:L},V)},[Y,F,Z,T,H,null==N?void 0:N.locale,W,V,L]);var ee={ref:Q,onClick:function(e){C||"function"!=typeof $||$(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),W&&!e.defaultPrevented&&function(e,t,r,n,o,a,i,u,l,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=e.currentTarget.getAttribute("target"))||"_self"===d)&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&(!e.nativeEvent||2!==e.nativeEvent.which)&&(l||(0,p.isLocalURL)(r))){e.preventDefault();var d,f=function(){"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:i}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!s})};l?c.default.startTransition(f):f()}}(e,W,F,Y,j,M,S,T,V,H)},onMouseEnter:function(e){C||"function"!=typeof A||A(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),W&&(H||!V)&&k(W,F,Y,{locale:T,priority:!0,bypassPrefetchedCheck:!0},{kind:L},V)},onTouchStart:function(e){C||"function"!=typeof D||D(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),W&&(H||!V)&&k(W,F,Y,{locale:T,priority:!0,bypassPrefetchedCheck:!0},{kind:L},V)}};if((0,f.isAbsoluteUrl)(Y))ee.href=Y;else if(!C||P||"a"===n.type&&!("href"in n.props)){var et=void 0!==T?T:null==N?void 0:N.locale,er=(null==N?void 0:N.isLocaleDomain)&&(0,v.getDomainLocale)(Y,et,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);ee.href=er||(0,b.addBasePath)((0,h.addLocale)(Y,et,null==N?void 0:N.defaultLocale))}return C?c.default.cloneElement(n,ee):c.default.createElement("a",l(l({},I),ee),r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6675:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});var o=r(7294),a=r(6682),i="function"==typeof IntersectionObserver,u=new Map,l=[];function c(e){var t=e.rootRef,r=e.rootMargin,c=e.disabled||!i,s=n((0,o.useState)(!1),2),p=s[0],d=s[1],f=(0,o.useRef)(null),h=(0,o.useCallback)(function(e){f.current=e},[]);return(0,o.useEffect)(function(){if(i){if(!c&&!p){var e,n,o,s,h=f.current;if(h&&h.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=u.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},l.push(r),u.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(s=e.elements).set(h,function(e){return e&&d(e)}),o.observe(h),function(){if(s.delete(h),o.unobserve(h),0===s.size){o.disconnect(),u.delete(n);var e=l.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&l.splice(e,1)}}}}else if(!p){var m=(0,a.requestIdleCallback)(function(){return d(!0)});return function(){return(0,a.cancelIdleCallback)(m)}}},[c,r,t,p,f.current]),[h,p,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5505:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(8754)._(r(7294)).default.createContext({})},1342:function(e,t){"use strict";function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9989:function(e,t,r){"use strict";var n=r(930);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return c},default:function(){return s}});var i=r(8754),u=(r(7294),i._(r(5686)));function l(e){return{default:(null==e?void 0:e.default)||e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}function s(e,t){var r=u.default,n={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=a(a({},n),e));var o=(n=a(a({},n),t)).loader;return(n.loadableGenerated&&(n=a(a({},n),n.loadableGenerated),delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r(a(a({},n),{},{loader:function(){return null!=o?o().then(l):Promise.resolve(l(function(){return null}))}})):(delete n.webpack,delete n.modules,c(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1597:function(e,t,r){"use strict";var n=r(930);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return p},default:function(){return m}});var a=r(8754),i=r(1757)._(r(7294)),u=a._(r(7271)),l=r(5505),c=r(236),s=r(1342);function p(e){void 0===e&&(e=!1);var t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(3766);var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){var r,a,u,l,c=t.inAmpMode;return e.reduce(d,[]).reverse().concat(p(c).reverse()).filter((r=new Set,a=new Set,u=new Set,l={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var o=e.key.slice(e.key.indexOf("$")+1);r.has(o)?t=!1:r.add(o)}switch(e.type){case"title":case"base":a.has(e.type)?t=!1:a.add(e.type);break;case"meta":for(var i=0,c=f.length;i<c;i++){var s=f[i];if(e.props.hasOwnProperty(s)){if("charSet"===s)u.has(s)?t=!1:u.add(s);else{var p=e.props[s],d=l[s]||new Set;("name"!==s||!n)&&d.has(p)?t=!1:(d.add(p),l[s]=d)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!c&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,i.default.cloneElement(e,a)}return i.default.cloneElement(e,{key:r})})}var m=function(e){var t=e.children,r=(0,i.useContext)(l.AmpStateContext),n=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5933:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});var n=r(8754)._(r(7294)).default.createContext(null)},5686:function(e,t,r){"use strict";var n=r(930),o=r(3227),a=r(8361);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});var c=r(8754)._(r(7294)),s=r(5933),p=[],d=[],f=!1;function h(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(function(e){return r.loading=!1,r.loaded=e,e}).catch(function(e){throw r.loading=!1,r.error=e,e}),r}var m=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"==typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},r.delay)),"number"==typeof r.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},r.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new m(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!f){var a=r.webpack?r.webpack():r.modules;a&&d.push(function(e){var t,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}}(e))){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(e.includes(n))return o()}}catch(e){r.e(e)}finally{r.f()}})}function i(e,t){o(),(a=c.default.useContext(s.LoadableContext))&&Array.isArray(r.modules)&&r.modules.forEach(function(e){a(e)});var a,i=c.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return c.default.useImperativeHandle(t,function(){return{retry:n.retry}},[]),c.default.useMemo(function(){var t;return i.loading||i.error?c.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?c.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return i.preload=function(){return o()},i.displayName="LoadableComponent",c.default.forwardRef(i)}(h,e)}function g(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then(function(){if(e.length)return g(e,t)})}y.preloadAll=function(){return new Promise(function(e,t){g(p).then(e,t)})},y.preloadReady=function(e){return void 0===e&&(e=[]),new Promise(function(t){var r=function(){return f=!0,t()};g(d,e).then(r,r)})},window.__NEXT_PRELOADREADY=y.preloadReady;var v=y},7271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});var n=r(1757)._(r(7294)),o=n.useLayoutEffect,a=n.useEffect;function i(e){var t=e.headManager,r=e.reduceComponentsToState;function i(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=i),function(){t&&(t._pendingUpdate=i)}}),a(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},3766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});var r=function(e){}},5152:function(e,t,r){e.exports=r(9989)},9008:function(e,t,r){e.exports=r(1597)},1664:function(e,t,r){e.exports=r(6512)}}]);