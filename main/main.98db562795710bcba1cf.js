!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=147)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(66))},function(t,n,e){var r=e(0),o=e(14),i=e(29),c=e(41),u=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,n,e){"use strict";e.d(n,"p",(function(){return r})),e.d(n,"u",(function(){return o})),e.d(n,"m",(function(){return i})),e.d(n,"n",(function(){return c})),e.d(n,"o",(function(){return u})),e.d(n,"z",(function(){return a})),e.d(n,"s",(function(){return s})),e.d(n,"q",(function(){return f})),e.d(n,"t",(function(){return l})),e.d(n,"r",(function(){return p})),e.d(n,"v",(function(){return d})),e.d(n,"e",(function(){return v})),e.d(n,"i",(function(){return h})),e.d(n,"g",(function(){return y})),e.d(n,"f",(function(){return g})),e.d(n,"h",(function(){return m})),e.d(n,"d",(function(){return w})),e.d(n,"a",(function(){return b})),e.d(n,"c",(function(){return x})),e.d(n,"b",(function(){return S})),e.d(n,"w",(function(){return j})),e.d(n,"y",(function(){return O})),e.d(n,"x",(function(){return _})),e.d(n,"l",(function(){return k})),e.d(n,"k",(function(){return E})),e.d(n,"j",(function(){return P}));e(61),e(76);var r=document.querySelector(".results__news-list"),o=document.forms.search,i=document.querySelector(".search__input"),c="b99ed99ced6a450b962a2138904e4943",u=document.querySelector(".results"),a="news",s=(document.querySelector(".news-card__image"),document.querySelector(".results__news")),f=document.querySelector(".results__error"),l=document.querySelector(".results__noresults"),p=document.querySelector(".results__loader"),d=document.querySelector(".results__button"),v=3,h="dubandrun",y="newsanalyzer",g=20,m="0c50466cf8eef5eb0543636f9b4624d18667ccbd",w=document.querySelector(".commits__slider"),b=document.querySelector(".commits"),x=document.querySelector(".commits__error"),S=document.querySelector(".commits__container"),j=document.querySelector(".stats__keyword"),O=document.querySelector(".stats__numbsperweek"),_=document.querySelector(".stats__numbsofmentions"),k=document.querySelector(".graph__heading-date"),E=document.querySelector(".graph__dates"),P=document.querySelector(".graph__bars")},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(8),o=e(39),i=e(3),c=e(21),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(4);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(8),o=e(6),i=e(18);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(0),o=e(14),i=e(9),c=e(7),u=e(28),a=e(40),s=e(24),f=s.get,l=s.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,e,o){var a=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||c(e,"name")||i(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(a?!f&&t[n]&&(s=!0):delete t[n],s?t[n]=e:i(t,n,e)):s?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a.call(this)}))},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(0),o=e(22).f,i=e(9),c=e(10),u=e(28),a=e(44),s=e(48);t.exports=function(t,n){var e,f,l,p,d,v=t.target,h=t.global,y=t.stat;if(e=h?r:y?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(d=o(e,f))&&d.value:e[f],!s(h?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,f,p,t)}}},function(t,n,e){"use strict";function r(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}function o(){var t=new Date(new Date-5184e5);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}function i(){return(new Date).toLocaleString("ru",{month:"long"})}function c(){var t=new Date,n=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"][t.getDay()];return t.getDate()+", "+n}function u(t){var n=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"][new Date(new Date-24*t*3600*1e3).getDay()];return new Date(new Date-24*t*3600*1e3).getDate()+", "+n}function a(t){var n=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"][new Date(t).getDay()];return new Date(t).getDate()+", "+n}function s(t){var n=new Date(t),e=n.getFullYear(),r=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][n.getMonth()];return n.getDate()+" "+r+", "+e}e.d(n,"a",(function(){return r})),e.d(n,"f",(function(){return o})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return u})),e.d(n,"g",(function(){return a})),e.d(n,"e",(function(){return s}))},function(t,n,e){var r=e(23),o=e(67);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(43),o=e(20);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(45),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(35),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(8),o=e(42),i=e(18),c=e(15),u=e(21),a=e(7),s=e(39),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=u(n,!0),s)try{return f(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=!1},function(t,n,e){var r,o,i,c=e(68),u=e(0),a=e(5),s=e(9),f=e(7),l=e(25),p=e(19),d=u.WeakMap;if(c){var v=new d,h=v.get,y=v.has,g=v.set;r=function(t,n){return g.call(v,t,n),n},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var m=l("state");p[m]=!0,r=function(t,n){return s(t,m,n),n},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(14),o=e(29),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(46),o=e(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(20);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(0),o=e(9);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){"use strict";var r,o,i=e(50),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,s=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=void 0!==/()??/.exec("")[1];(s||f)&&(a=function(t){var n,e,r,o,a=this;return f&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),s&&(n=a.lastIndex),r=c.call(a,t),s&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),f&&r&&r.length>1&&u.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},function(t,n,e){var r=e(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(0),o=e(5),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(31);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(6).f,o=e(7),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r,o,i=e(0),c=e(55),u=i.process,a=u&&u.versions,s=a&&a.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(8),o=e(4),i=e(34);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(14);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r=e(4);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(4),o=e(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(7),o=e(70),i=e(22),c=e(6);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,s=0;s<e.length;s++){var f=e[s];r(t,f)||u(t,f,a(n,f))}}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(7),o=e(15),i=e(71).indexOf,c=e(19);t.exports=function(t,n){var e,u=o(t),a=0,s=[];for(e in u)!r(c,e)&&r(u,e)&&s.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(4),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==s||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,n){t.exports={}},function(t,n,e){"use strict";var r=e(3);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){var r=e(46),o=e(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){n.f=e(1)},,function(t,n,e){var r=e(16);t.exports=r("document","documentElement")},function(t,n,e){var r=e(16);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(3),o=e(79),i=e(30),c=e(19),u=e(54),a=e(34),s=e(25)("IE_PROTO"),f=function(){},l=function(){var t,n=a("iframe"),e=i.length;for(n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;e--;)delete l.prototype[i[e]];return l()};t.exports=Object.create||function(t,n){var e;return null!==t?(f.prototype=r(t),e=new f,f.prototype=null,e[s]=t):e=l(),void 0===n?e:o(e,n)},c[s]=!0},function(t,n,e){var r=e(36),o=e(43),i=e(27),c=e(17),u=e(58),a=[].push,s=function(t){var n=1==t,e=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,v,h,y){for(var g,m,w=i(d),b=o(w),x=r(v,h,3),S=c(b.length),j=0,O=y||u,_=n?O(d,S):e?O(d,0):void 0;S>j;j++)if((p||j in b)&&(m=x(g=b[j],j,w),t))if(n)_[j]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:a.call(_,g)}else if(f)return!1;return l?-1:s||f?f:_}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,n,e){var r=e(5),o=e(33),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},,function(t,n,e){var r=e(35),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){"use strict";var r=e(12),o=e(32);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){"use strict";var r=e(9),o=e(10),i=e(4),c=e(1),u=e(32),a=c("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,l){var p=c(t),d=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),v=d&&!i((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[p]=/./[p]),e.exec=function(){return n=!0,null},e[p](""),!n}));if(!d||!v||"replace"===t&&!s||"split"===t&&!f){var h=/./[p],y=e(p,""[t],(function(t,n,e,r,o){return n.exec===u?d&&!o?{done:!0,value:h.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),g=y[0],m=y[1];o(String.prototype,t,g),o(RegExp.prototype,p,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)}),l&&r(RegExp.prototype[p],"sham",!0)}}},function(t,n,e){var r=e(11),o=e(32);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){var r=e(45),o=e(7),i=e(52),c=e(6).f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},function(t,n,e){var r=e(4),o=e(1),i=e(38),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(28),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0),o=e(40),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(11),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){var r=e(16),o=e(26),i=e(47),c=e(3);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(15),o=e(17),i=e(60),c=function(t){return function(n,e,c){var u,a=r(n),s=o(a.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){"use strict";var r=e(16),o=e(6),i=e(1),c=e(8),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r,o,i,c=e(0),u=e(4),a=e(11),s=e(36),f=e(54),l=e(34),p=e(74),d=c.location,v=c.setImmediate,h=c.clearImmediate,y=c.process,g=c.MessageChannel,m=c.Dispatch,w=0,b={},x=function(t){if(b.hasOwnProperty(t)){var n=b[t];delete b[t],n()}},S=function(t){return function(){x(t)}},j=function(t){x(t.data)},O=function(t){c.postMessage(t+"",d.protocol+"//"+d.host)};v&&h||(v=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return b[++w]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(w),w},h=function(t){delete b[t]},"process"==a(y)?r=function(t){y.nextTick(S(t))}:m&&m.now?r=function(t){m.now(S(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=j,r=s(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(O)?r="onreadystatechange"in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),x(t)}}:function(t){setTimeout(S(t),0)}:(r=O,c.addEventListener("message",j,!1))),t.exports={set:v,clear:h}},function(t,n,e){var r=e(55);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){"use strict";var r=e(31),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){"use strict";var r=e(62),o=e(3),i=e(20),c=e(77),u=e(63);r("search",1,(function(t,n,e){return[function(n){var e=i(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var i=o(t),a=String(this),s=i.lastIndex;c(s,0)||(i.lastIndex=0);var f=u(i,a);return c(i.lastIndex,s)||(i.lastIndex=s),null===f?-1:f.index}]}))},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,e){"use strict";var r=e(12),o=e(0),i=e(16),c=e(23),u=e(8),a=e(41),s=e(4),f=e(7),l=e(33),p=e(5),d=e(3),v=e(27),h=e(15),y=e(21),g=e(18),m=e(56),w=e(51),b=e(26),x=e(80),S=e(47),j=e(22),O=e(6),_=e(42),k=e(9),E=e(10),P=e(14),T=e(25),L=e(19),C=e(29),D=e(1),M=e(52),N=e(64),B=e(37),I=e(24),q=e(57).forEach,R=T("hidden"),A=D("toPrimitive"),F=I.set,z=I.getterFor("Symbol"),J=Object.prototype,W=o.Symbol,Y=i("JSON","stringify"),$=j.f,K=O.f,G=x.f,H=_.f,U=P("symbols"),Q=P("op-symbols"),V=P("string-to-symbol-registry"),X=P("symbol-to-string-registry"),Z=P("wks"),tt=o.QObject,nt=!tt||!tt.prototype||!tt.prototype.findChild,et=u&&s((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=$(J,n);r&&delete J[n],K(t,n,e),r&&t!==J&&K(J,n,r)}:K,rt=function(t,n){var e=U[t]=m(W.prototype);return F(e,{type:"Symbol",tag:t,description:n}),u||(e.description=n),e},ot=a&&"symbol"==typeof W.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},it=function(t,n,e){t===J&&it(Q,n,e),d(t);var r=y(n,!0);return d(e),f(U,r)?(e.enumerable?(f(t,R)&&t[R][r]&&(t[R][r]=!1),e=m(e,{enumerable:g(0,!1)})):(f(t,R)||K(t,R,g(1,{})),t[R][r]=!0),et(t,r,e)):K(t,r,e)},ct=function(t,n){d(t);var e=h(n),r=w(e).concat(ft(e));return q(r,(function(n){u&&!ut.call(e,n)||it(t,n,e[n])})),t},ut=function(t){var n=y(t,!0),e=H.call(this,n);return!(this===J&&f(U,n)&&!f(Q,n))&&(!(e||!f(this,n)||!f(U,n)||f(this,R)&&this[R][n])||e)},at=function(t,n){var e=h(t),r=y(n,!0);if(e!==J||!f(U,r)||f(Q,r)){var o=$(e,r);return!o||!f(U,r)||f(e,R)&&e[R][r]||(o.enumerable=!0),o}},st=function(t){var n=G(h(t)),e=[];return q(n,(function(t){f(U,t)||f(L,t)||e.push(t)})),e},ft=function(t){var n=t===J,e=G(n?Q:h(t)),r=[];return q(e,(function(t){!f(U,t)||n&&!f(J,t)||r.push(U[t])})),r};(a||(E((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=C(t),e=function(t){this===J&&e.call(Q,t),f(this,R)&&f(this[R],n)&&(this[R][n]=!1),et(this,n,g(1,t))};return u&&nt&&et(J,n,{configurable:!0,set:e}),rt(n,t)}).prototype,"toString",(function(){return z(this).tag})),_.f=ut,O.f=it,j.f=at,b.f=x.f=st,S.f=ft,u&&(K(W.prototype,"description",{configurable:!0,get:function(){return z(this).description}}),c||E(J,"propertyIsEnumerable",ut,{unsafe:!0})),M.f=function(t){return rt(D(t),t)}),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:W}),q(w(Z),(function(t){N(t)})),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(f(V,n))return V[n];var e=W(n);return V[n]=e,X[e]=n,e},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(X,t))return X[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,n){return void 0===n?m(t):ct(m(t),n)},defineProperty:it,defineProperties:ct,getOwnPropertyDescriptor:at}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(v(t))}}),Y)&&r({target:"JSON",stat:!0,forced:!a||s((function(){var t=W();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}))},{stringify:function(t,n,e){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=n,(p(n)||void 0!==t)&&!ot(t))return l(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!ot(n))return n}),o[1]=n,Y.apply(null,o)}});W.prototype[A]||k(W.prototype,A,W.prototype.valueOf),B(W,"Symbol"),L[R]=!0},function(t,n,e){var r=e(8),o=e(6),i=e(3),c=e(51);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(15),o=e(26).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,n,e){"use strict";var r=e(12),o=e(8),i=e(0),c=e(7),u=e(5),a=e(6).f,s=e(44),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[n]=!0),n};s(p,f);var d=p.prototype=f.prototype;d.constructor=p;var v=d.toString,h="Symbol(test)"==String(f("test")),y=/^Symbol\((.*)\)[^)]+$/;a(d,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,n=v.call(t);if(c(l,t))return"";var e=h?n.slice(7,-1):n.replace(y,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,n,e){"use strict";var r=e(21),o=e(6),i=e(18);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(10),o=e(89),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,n,e){var r=e(1),o=e(49),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(69),o=e(49),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(3);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(12),o=e(4),i=e(33),c=e(5),u=e(27),a=e(17),s=e(82),f=e(58),l=e(65),p=e(1),d=e(38),v=p("isConcatSpreadable"),h=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!c(t))return!1;var n=t[v];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!h||!y},{concat:function(t){var n,e,r,o,i,c=u(this),l=f(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?c:arguments[n],g(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&s(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,p++,i)}return l.length=p,l}})},function(t,n,e){"use strict";var r=e(69),o={};o[e(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,n,e){"use strict";var r,o,i,c,u=e(12),a=e(23),s=e(0),f=e(16),l=e(91),p=e(10),d=e(92),v=e(14),h=e(37),y=e(72),g=e(5),m=e(31),w=e(93),b=e(11),x=e(94),S=e(87),j=e(95),O=e(73).set,_=e(96),k=e(97),E=e(98),P=e(75),T=e(99),L=e(24),C=e(48),D=e(1),M=e(38),N=D("species"),B="Promise",I=L.get,q=L.set,R=L.getterFor(B),A=l,F=s.TypeError,z=s.document,J=s.process,W=v("inspectSource"),Y=f("fetch"),$=P.f,K=$,G="process"==b(J),H=!!(z&&z.createEvent&&s.dispatchEvent),U=C(B,(function(){var t=W(A)!==String(A);if(66===M)return!0;if(!t&&!G&&"function"!=typeof PromiseRejectionEvent)return!0;if(a&&!A.prototype.finally)return!0;if(M>=51&&/native code/.test(A))return!1;var n=A.resolve(1),e=function(t){t((function(){}),(function(){}))};return(n.constructor={})[N]=e,!(n.then((function(){}))instanceof e)})),Q=U||!S((function(t){A.all(t).catch((function(){}))})),V=function(t){var n;return!(!g(t)||"function"!=typeof(n=t.then))&&n},X=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;_((function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var u,a,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,d=f.reject,v=f.domain;try{l?(i||(2===n.rejection&&et(t,n),n.rejection=1),!0===l?u=o:(v&&v.enter(),u=l(o),v&&(v.exit(),s=!0)),u===f.promise?d(F("Promise-chain cycle")):(a=V(u))?a.call(u,p,d):p(u)):d(o)}catch(t){v&&!s&&v.exit(),d(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&tt(t,n)}))}},Z=function(t,n,e){var r,o;H?((r=z.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:n,reason:e},(o=s["on"+t])?o(r):"unhandledrejection"===t&&E("Unhandled promise rejection",e)},tt=function(t,n){O.call(s,(function(){var e,r=n.value;if(nt(n)&&(e=T((function(){G?J.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),n.rejection=G||nt(n)?2:1,e.error))throw e.value}))},nt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,n){O.call(s,(function(){G?J.emit("rejectionHandled",t):Z("rejectionhandled",t,n.value)}))},rt=function(t,n,e,r){return function(o){t(n,e,o,r)}},ot=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,X(t,n,!0))},it=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw F("Promise can't be resolved itself");var o=V(e);o?_((function(){var r={done:!1};try{o.call(e,rt(it,t,r,n),rt(ot,t,r,n))}catch(e){ot(t,r,e,n)}})):(n.value=e,n.state=1,X(t,n,!1))}catch(e){ot(t,{done:!1},e,n)}}};U&&(A=function(t){w(this,A,B),m(t),r.call(this);var n=I(this);try{t(rt(it,this,n),rt(ot,this,n))}catch(t){ot(this,n,t)}},(r=function(t){q(this,{type:B,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(A.prototype,{then:function(t,n){var e=R(this),r=$(j(this,A));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=G?J.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&X(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=I(t);this.promise=t,this.resolve=rt(it,t,n),this.reject=rt(ot,t,n)},P.f=$=function(t){return t===A||t===i?new o(t):K(t)},a||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,n){var e=this;return new A((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof Y&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return k(A,Y.apply(s,arguments))}}))),u({global:!0,wrap:!0,forced:U},{Promise:A}),h(A,B,!1,!0),y(B),i=f(B),u({target:B,stat:!0,forced:U},{reject:function(t){var n=$(this);return n.reject.call(void 0,t),n.promise}}),u({target:B,stat:!0,forced:a||U},{resolve:function(t){return k(a&&this===i?A:this,t)}}),u({target:B,stat:!0,forced:Q},{all:function(t){var n=this,e=$(n),r=e.resolve,o=e.reject,i=T((function(){var e=m(n.resolve),i=[],c=0,u=1;x(t,(function(t){var a=c++,s=!1;i.push(void 0),u++,e.call(n,t).then((function(t){s||(s=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=$(n),r=e.reject,o=T((function(){var o=m(n.resolve);x(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(10);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(3),o=e(84),i=e(17),c=e(36),u=e(85),a=e(86),s=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,f,l){var p,d,v,h,y,g,m,w=c(n,e,f?2:1);if(l)p=t;else{if("function"!=typeof(d=u(t)))throw TypeError("Target is not iterable");if(o(d)){for(v=0,h=i(t.length);h>v;v++)if((y=f?w(r(m=t[v])[0],m[1]):w(t[v]))&&y instanceof s)return y;return new s(!1)}p=d.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(y=a(p,w,m.value,f))&&y&&y instanceof s)return y;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,n,e){var r=e(3),o=e(31),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r,o,i,c,u,a,s,f,l=e(0),p=e(22).f,d=e(11),v=e(73).set,h=e(74),y=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,w="process"==d(g),b=p(l,"queueMicrotask"),x=b&&b.value;x||(r=function(){var t,n;for(w&&(t=g.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},w?c=function(){g.nextTick(r)}:y&&!h?(u=!0,a=document.createTextNode(""),new y(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):m&&m.resolve?(s=m.resolve(void 0),f=s.then,c=function(){f.call(s,r)}):c=function(){v.call(l,r)}),t.exports=x||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(3),o=e(5),i=e(75);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){var r=e(8),o=e(6).f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},,,,,,,,,,,,,,function(t,n,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(114),e(83),e(90);var r=e(13);function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.input=n,this.newsToken=e}var n,e,i;return n=t,(e=[{key:"getNews",value:function(){return fetch("http://newsapi.org/v2/everything?"+"q=".concat(this.input.value,"&")+"from=".concat(Object(r.a)(),"&")+"to=".concat(Object(r.f)(),"&")+"pageSize=100&sortBy=popularity&language=ru&"+"apiKey=".concat(this.newsToken)).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).then((function(t){return t})).catch((function(t){throw new Error(t.message)}))}}])&&o(n.prototype,e),i&&o(n,i),t}(),c=e(2);function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.newsContainer=n,this.newsCardlist=e,this.storageData=r}var n,e,r;return n=t,(e=[{key:"getLastResults",value:function(){if(this.storageData in localStorage){var t=JSON.parse(localStorage.getItem("".concat(this.storageData)));this.newsCardlist.renderNews(t),this.newsContainer.classList.remove("hidden")}else this.newsContainer.classList.add("hidden")}}])&&u(n.prototype,e),r&&u(n,r),t}();e(78),e(81),e(100);function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(n,e,r,o,i,c,u,a,s,f,l){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.resultsSection=n,this.cardsContainer=e,this.storageData=r,this.newsCard=o,this.newsApi=i,this.errorBlock=c,this.noResultsBlock=u,this.newsBlock=a,this.loaderBlock=s,this.startCounter=0,this.showMoreButton=f,this.input=l}var n,e,o;return n=t,(e=[{key:"_addCard",value:function(t){this.cardsContainer.insertAdjacentHTML("beforeend",t)}},{key:"clearLastNews",value:function(){this.cardsContainer.textContent=""}},{key:"preloaderOn",value:function(){this.newsBlock.classList.add("hidden"),this.loaderBlock.classList.remove("hidden")}},{key:"noResultsOff",value:function(){this.noResultsBlock.classList.add("hidden"),this.errorBlock.classList.add("hidden"),this.resultsSection.classList.remove("hidden"),this.newsBlock.classList.remove("hidden"),this.loaderBlock.classList.add("hidden")}},{key:"noResultsOn",value:function(){this.resultsSection.classList.remove("hidden"),this.noResultsBlock.classList.remove("hidden"),this.errorBlock.classList.add("hidden"),this.newsBlock.classList.add("hidden"),this.loaderBlock.classList.add("hidden")}},{key:"errorOn",value:function(){this.resultsSection.classList.remove("hidden"),this.errorBlock.classList.remove("hidden"),this.newsBlock.classList.add("hidden"),this.loaderBlock.classList.add("hidden"),this.noResultsBlock.classList.add("hidden")}},{key:"hideAndShowMoreNewsButton",value:function(t){this.cardsContainer.childElementCount<t.articles.length?this.showMoreButton.classList.remove("hidden"):this.showMoreButton.classList.add("hidden")}},{key:"renderNews",value:function(t){for(var n=t.articles,e=this.startCounter;e<this.startCounter+c.e;e++)if(n[e]){var o=this.newsCard.create(n[e].url,n[e].urlToImage,Object(r.e)(n[e].publishedAt),n[e].title,n[e].description,n[e].source.name);this._addCard(o)}this.hideAndShowMoreNewsButton(t)}},{key:"showMoreNews",value:function(t){this.startCounter+=c.e,this.renderNews(t)}},{key:"getNews",value:function(){var t=this;this.preloaderOn(),this.startCounter=0,this.newsApi.getNews().then((function(n){0!=+n.totalResults?(t.clearLastNews(),localStorage.clear(),t.noResultsOff(),localStorage.setItem("keyword","".concat(t.input.value)),localStorage.setItem("".concat(t.storageData),JSON.stringify(n)),t.renderNews(JSON.parse(localStorage.getItem("".concat(t.storageData))))):t.noResultsOn()})).catch((function(n){t.errorOn(),console.log("Ошибка: ".concat(n.message))}))}}])&&s(n.prototype,e),o&&s(n,o),t}();e(88);function l(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p,d,v,h=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,r;return n=t,(e=[{key:"create",value:function(t,n,e,r,o,i){return'\n           <div class="news-card">\n             <a href="'.concat(t,'" class="link news-card__url" target="_blank">\n               <div class="news-card__image-container">\n               <img src="').concat(n,'" alt="обложка новости" class="news-card__image" onerror="this.onerror=null;this.src=\'https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg\';">\n               </div>\n               <p class="news-card__date">').concat(e,'</p>\n               <h3 class="news-card__title">').concat(r,'</h3>\n               <div class="news-card__text">').concat(o,'</div>\n               <p class="news-card__source">').concat(i,"</p>\n             </a>\n           </div>")}}])&&l(n.prototype,e),r&&l(n,r),t}();p=new i(c.m,c.n),d=new h,v=new f(c.o,c.p,c.z,d,p,c.q,c.t,c.s,c.r,c.v,c.m),new a(c.o,v,c.z).getLastResults(),c.u.addEventListener("submit",(function(t){t.preventDefault(),"Enter"===t.key&&v.getNews(),v.getNews()})),c.v.addEventListener("click",(function(){return v.showMoreNews(JSON.parse(localStorage.getItem("".concat(c.z))))}))}]);