!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){e.exports=function(){var e=new BMap.Map("bdmap",{enableMapClick:!1}),t=new BMap.Point(121.441112,31.22588);e.centerAndZoom(t,16),e.enableScrollWheelZoom(!0);var n=new BMap.Marker(t);e.addOverlay(n),n.setAnimation(BMAP_ANIMATION_BOUNCE);var r=new BMap.Label("嘉春753E栋8楼",{offset:new BMap.Size(20,-10)});n.setLabel(r)}},function(e,t,n){},,,,,,,,function(e,t,n){n(0),n(1),n(2),n(3),n(5),n(14),n(4)();var r=n(15),i=n(16);$(".engineering").on("click",".project .title",function(){var e=$(this).parent();e.hasClass("proactive")?e.removeClass("proactive"):e.addClass("proactive")}),$(".engineering").on("click",".enggroup .gtil",function(){var e=$(this).parent();e.hasClass("endactive")?e.removeClass("endactive"):e.addClass("endactive")}),$.get("./js/job.json",function(e){var t=r.render(i,e);$(".engineering .blkcent").html(t)})},function(e,t,n){},function(e,t,n){
/*! art-template@4.13.2 for browser | https://github.com/aui/art-template */
"undefined"!=typeof self&&self,e.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";var r=n(6),i=n(2),o=n(22),s=function(e,t){t.onerror(e,t);var n=function(){return"{Template Error}"};return n.mappings=[],n.sourcesContent=[],n},a=function u(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};"string"!=typeof e?t=e:t.source=e,t=i.$extend(t),e=t.source,!0===t.debug&&(t.cache=!1,t.minimize=!1,t.compileDebug=!0),t.compileDebug&&(t.minimize=!1),t.filename&&(t.filename=t.resolveFilename(t.filename,t));var n=t.filename,a=t.cache,c=t.caches;if(a&&n){var l=c.get(n);if(l)return l}if(!e)try{e=t.loader(n,t),t.source=e}catch(v){var f=new o({name:"CompileError",path:n,message:"template not found: "+v.message,stack:v.stack});if(t.bail)throw f;return s(f,t)}var p=void 0,h=new r(t);try{p=h.build()}catch(f){if(f=new o(f),t.bail)throw f;return s(f,t)}var d=function(e,n){try{return p(e,n)}catch(f){if(!t.compileDebug)return t.cache=!1,t.compileDebug=!0,u(t)(e,n);if(f=new o(f),t.bail)throw f;return s(f,t)()}};return d.mappings=p.mappings,d.sourcesContent=p.sourcesContent,d.toString=function(){return p.toString()},a&&n&&c.set(n,d),d};a.Compiler=r,e.exports=a},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,t.matchToToken=function(e){var t={type:"invalid",value:e[0]};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t}},function(e,t,n){"use strict";function r(){this.$extend=function(e){return o(e=e||{},e instanceof r?e:this)}}var i=n(10),o=n(12),s=n(13),a=n(14),u=n(15),c=n(16),l=n(17),f=n(18),p=n(19),h=n(21),d="undefined"==typeof window,v={source:null,filename:null,rules:[f,l],escape:!0,debug:!!d&&!1,bail:!0,cache:!0,minimize:!0,compileDebug:!1,resolveFilename:h,include:s,htmlMinifier:p,htmlMinifierOptions:{collapseWhitespace:!0,minifyCSS:!0,minifyJS:!0,ignoreCustomFragments:[]},onerror:a,loader:c,caches:u,root:"/",extname:".art",ignore:[],imports:i};r.prototype=v,e.exports=new r},function(e,t){},function(e,t,n){"use strict";var r=n(5),i=n(0),o=n(23),s=function(e,t){return t instanceof Object?r({filename:e},t):i({filename:e,source:t})};s.render=r,s.compile=i,s.defaults=o,e.exports=s},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r(e,n)(t)}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(7),u=n(9),c="$data",l="$imports",f="print",p="include",h="extend",d="block",v="$$out",m="$$line",g="$$blocks",y="$$slice",b="$$from",w="$$options",x=function(e,t){return Object.hasOwnProperty.call(e,t)},k=JSON.stringify,O=function(){function e(t){var n,s,a=this;o(this,e);var x=t.source,k=t.minimize,O=t.htmlMinifier;if(this.options=t,this.stacks=[],this.context=[],this.scripts=[],this.CONTEXT_MAP={},this.ignore=[c,l,w].concat(i(t.ignore)),this.internal=(r(n={},v,"''"),r(n,m,"[0,0]"),r(n,g,"arguments[1]||{}"),r(n,b,"null"),r(n,f,"function(){var s=''.concat.apply('',arguments);"+v+"+=s;return s}"),r(n,p,"function(src,data){var s="+w+".include(src,data||"+c+",arguments[2]||"+g+","+w+");"+v+"+=s;return s}"),r(n,h,"function(from){"+b+"=from}"),r(n,y,"function(c,p,s){p="+v+";"+v+"='';c();s="+v+";"+v+"=p+s;return s}"),r(n,d,"function(){var a=arguments,s;if(typeof a[0]==='function'){return "+y+"(a[0])}else if("+b+"){if(!"+g+"[a[0]]){"+g+"[a[0]]="+y+"(a[1])}else{"+v+"+="+g+"[a[0]]}}else{s="+g+"[a[0]];if(typeof s==='string'){"+v+"+=s}else{s="+y+"(a[1])}return s}}"),n),this.dependencies=(r(s={},f,[v]),r(s,p,[v,w,c,g]),r(s,h,[b,p]),r(s,d,[y,b,v,g]),s),this.importContext(v),t.compileDebug&&this.importContext(m),k)try{x=O(x,t)}catch(E){}this.source=x,this.getTplTokens(x,t.rules,this).forEach(function(e){e.type===u.TYPE_STRING?a.parseString(e):a.parseExpression(e)})}return s(e,[{key:"getTplTokens",value:function(){return u.apply(undefined,arguments)}},{key:"getEsTokens",value:function(e){return a(e)}},{key:"getVariables",value:function(e){var t=!1;return e.filter(function(e){return"whitespace"!==e.type&&"comment"!==e.type}).filter(function(e){return"name"===e.type&&!t||(t="punctuator"===e.type&&"."===e.value,!1)}).map(function(e){return e.value})}},{key:"importContext",value:function(e){var t=this,n="",r=this.internal,i=this.dependencies,o=this.ignore,s=this.context,a=this.options,u=a.imports,f=this.CONTEXT_MAP;x(f,e)||-1!==o.indexOf(e)||(x(r,e)?(n=r[e],x(i,e)&&i[e].forEach(function(e){return t.importContext(e)})):n="$escape"===e||"$each"===e||x(u,e)?l+"."+e:c+"."+e,f[e]=n,s.push({name:e,value:n}))}},{key:"parseString",value:function(e){var t=e.value;if(t){var n=v+"+="+k(t);this.scripts.push({source:t,tplToken:e,code:n})}}},{key:"parseExpression",value:function(e){var t=this,n=e.value,r=e.script,i=r.output,o=this.options.escape,s=r.code;i&&(s=!1===o||i===u.TYPE_RAW?v+"+="+r.code:v+"+=$escape("+r.code+")");var a=this.getEsTokens(s);this.getVariables(a).forEach(function(e){return t.importContext(e)}),this.scripts.push({source:n,tplToken:e,code:s})}},{key:"checkExpression",value:function(e){for(var t=[[/^\s*}[\w\W]*?{?[\s;]*$/,""],[/(^[\w\W]*?\([\w\W]*?(?:=>|\([\w\W]*?\))\s*{[\s;]*$)/,"$1})"],[/(^[\w\W]*?\([\w\W]*?\)\s*{[\s;]*$)/,"$1}"]],n=0;n<t.length;){if(t[n][0].test(e)){var r;e=(r=e).replace.apply(r,i(t[n]));break}n++}try{return new Function(e),!0}catch(o){return!1}}},{key:"build",value:function(){var e=this.options,t=this.context,n=this.scripts,r=this.stacks,i=this.source,o=e.filename,s=e.imports,a=[],f=x(this.CONTEXT_MAP,h),d=0,y=function(e,t){var n=t.line,i=t.start,o={generated:{line:r.length+d+1,column:1},original:{line:n+1,column:i+1}};return d+=e.split(/\n/).length-1,o},O=function(e){return e.replace(/^[\t ]+|[\t ]$/g,"")};r.push("function("+c+"){"),r.push("'use strict'"),r.push(c+"="+c+"||{}"),r.push("var "+t.map(function(e){return e.name+"="+e.value}).join(",")),e.compileDebug?(r.push("try{"),n.forEach(function(e){e.tplToken.type===u.TYPE_EXPRESSION&&r.push(m+"=["+[e.tplToken.line,e.tplToken.start].join(",")+"]"),a.push(y(e.code,e.tplToken)),r.push(O(e.code))}),r.push("}catch(error){"),r.push("throw {"+["name:'RuntimeError'","path:"+k(o),"message:error.message","line:"+m+"[0]+1","column:"+m+"[1]+1","source:"+k(i),"stack:error.stack"].join(",")+"}"),r.push("}")):n.forEach(function(e){a.push(y(e.code,e.tplToken)),r.push(O(e.code))}),f&&(r.push(v+"=''"),r.push(p+"("+b+","+c+","+g+")")),r.push("return "+v),r.push("}");var E=r.join("\n");try{var T=new Function(l,w,"return "+E)(s,e);return T.mappings=a,T.sourcesContent=[i],T}catch(P){for(var $=0,j=0,_=0,S=void 0;$<n.length;){var C=n[$];if(!this.checkExpression(C.code)){j=C.tplToken.line,_=C.tplToken.start,S=C.code;break}$++}throw{name:"CompileError",path:o,message:P.message,line:j+1,column:_+1,source:i,generated:S,stack:P.stack}}}}]),e}();O.CONSTS={DATA:c,IMPORTS:l,PRINT:f,INCLUDE:p,EXTEND:h,BLOCK:d,OPTIONS:w,OUT:v,LINE:m,BLOCKS:g,SLICE:y,FROM:b,ESCAPE:"$escape",EACH:"$each"},e.exports=O},function(e,t,n){"use strict";var r=n(8),i=n(1)["default"],o=n(1).matchToToken;e.exports=function(e){return e.match(i).map(function(e){return i.lastIndex=0,o(i.exec(e))}).map(function(e){return"name"===e.type&&r(e.value)&&(e.type="keyword"),e})}},function(e,t,n){"use strict";var r={abstract:!0,await:!0,boolean:!0,"break":!0,byte:!0,"case":!0,"catch":!0,char:!0,"class":!0,"const":!0,"continue":!0,"debugger":!0,"default":!0,"delete":!0,"do":!0,double:!0,"else":!0,"enum":!0,"export":!0,"extends":!0,"false":!0,final:!0,"finally":!0,float:!0,"for":!0,"function":!0,goto:!0,"if":!0,"implements":!0,"import":!0,"in":!0,"instanceof":!0,int:!0,"interface":!0,"let":!0,long:!0,native:!0,"new":!0,"null":!0,"package":!0,"private":!0,"protected":!0,"public":!0,"return":!0,short:!0,"static":!0,"super":!0,"switch":!0,synchronized:!0,"this":!0,"throw":!0,transient:!0,"true":!0,"try":!0,"typeof":!0,"var":!0,"void":!0,volatile:!0,"while":!0,"with":!0,yield:!0};e.exports=function(e){return r.hasOwnProperty(e)}},function(e,t,n){"use strict";function r(e){var t=new String(e.value);return t.line=e.line,t.start=e.start,t.end=e.end,t}function i(e,t,n){this.type=e,this.value=t,this.script=null,n?(this.line=n.line+n.value.split(/\n/).length-1,this.line===n.line?this.start=n.end:this.start=n.value.length-n.value.lastIndexOf("\n")-1):(this.line=0,this.start=0),this.end=this.start+this.value.length}var o=function(e,t){for(var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},o=[new i("string",e)],s=0;s<t.length;s++)for(var a=t[s],u=a.test.ignoreCase?"ig":"g",c=new RegExp(a.test.source,u),l=0;l<o.length;l++){var f=o[l],p=o[l-1];if("string"===f.type){for(var h=void 0,d=0,v=[],m=f.value;null!==(h=c.exec(m));)h.index>d&&(p=new i("string",m.slice(d,h.index),p),v.push(p)),p=new i("expression",h[0],p),h[0]=r(p),p.script=a.use.apply(n,h),v.push(p),d=h.index+h[0].length;d<m.length&&(p=new i("string",m.slice(d),p),v.push(p)),o.splice.apply(o,[l,1].concat(v)),l+=v.length-1}}return o};o.TYPE_STRING="string",o.TYPE_EXPRESSION="expression",o.TYPE_RAW="raw",o.TYPE_ESCAPE="escape",e.exports=o},function(e,t,n){"use strict";(function(t){/*! art-template@runtime | https://github.com/aui/art-template */
var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=Object.create(n),i=/["&'<>]/;r.$escape=function(e){return function(e){var t=""+e,n=i.exec(t);if(!n)return e;var r="",o=void 0,s=void 0,a=void 0;for(o=n.index,s=0;o<t.length;o++){switch(t.charCodeAt(o)){case 34:a="&#34;";break;case 38:a="&#38;";break;case 39:a="&#39;";break;case 60:a="&#60;";break;case 62:a="&#62;";break;default:continue}s!==o&&(r+=t.substring(s,o)),s=o+1,r+=a}return s!==o?r+t.substring(s,o):r}(function t(e){return"string"!=typeof e&&(e=e===undefined||null===e?"":"function"==typeof e?t(e.call(e)):JSON.stringify(e)),e}(e))},r.$each=function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)t(e[n],n);else for(var i in e)t(e[i],i)},e.exports=r}).call(t,n(11))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(r){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=Object.prototype.toString,i=function(e){return null===e?"Null":r.call(e).slice(8,-1)};e.exports=function o(e,t){var n=void 0,r=i(e);if("Object"===r?n=Object.create(t||{}):"Array"===r&&(n=[].concat(t||[])),n){for(var s in e)Object.hasOwnProperty.call(e,s)&&(n[s]=o(e[s],n[s]));return n}return e}},function(e,t,n){"use strict";e.exports=function(e,t,r,i){var o=n(0);return i=i.$extend({filename:i.resolveFilename(e,i),bail:!0,source:null}),o(i)(t,r)}},function(e,t,n){"use strict";e.exports=function(e){}},function(e,t,n){"use strict";var r={__data:Object.create(null),set:function(e,t){this.__data[e]=t},get:function(e){return this.__data[e]},reset:function(){this.__data={}}};e.exports=r},function(e,t,n){"use strict";var r="undefined"==typeof window;e.exports=function(e){if(r)return n(3).readFileSync(e,"utf8");var t=document.getElementById(e);return t.value||t.innerHTML}},function(e,t,n){"use strict";var r={test:/{{([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*}}/,use:function(e,t,n,i){this.options;var o=this.getEsTokens(i),s=o.map(function(e){return e.value}),a={},u=void 0,c=!!t&&"raw",l=n+s.shift();switch(l){case"set":i="var "+s.join("").trim();break;case"if":i="if("+s.join("").trim()+"){";break;case"else":var f=s.indexOf("if");~f?(s.splice(0,f+1),i="}else if("+s.join("").trim()+"){"):i="}else{";break;case"/if":i="}";break;case"each":(u=r._split(o)).shift(),"as"===u[1]&&u.splice(1,1),i="$each("+(u[0]||"$data")+",function("+(u[1]||"$value")+","+(u[2]||"$index")+"){";break;case"/each":i="})";break;case"block":(u=r._split(o)).shift(),i="block("+u.join(",").trim()+",function(){";break;case"/block":i="})";break;case"echo":l="print";case"print":case"include":case"extend":if(0!==s.join("").trim().indexOf("(")){(u=r._split(o)).shift(),i=l+"("+u.join(",")+")";break}default:if(~s.indexOf("|")){var p=o.reduce(function(e,t){var n=t.value,r=t.type;return"|"===n?e.push([]):"whitespace"!==r&&"comment"!==r&&(e.length||e.push([]),":"===n&&1===e[e.length-1].length||e[e.length-1].push(t)),e},[]).map(function(e){return r._split(e)});i=p.reduce(function(e,t){var n=t.shift();return t.unshift(e),"$imports."+n+"("+t.join(",")+")"},p.shift().join(" ").trim())}c=c||"escape"}return a.code=i,a.output=c,a},_split:function(e){e=e.filter(function(e){var t=e.type;return"whitespace"!==t&&"comment"!==t});for(var t=0,n=e.shift(),r=/\]|\)/,i=[[n]];t<e.length;){var o=e[t];"punctuator"===o.type||"punctuator"===n.type&&!r.test(n.value)?i[i.length-1].push(o):i.push([o]),n=o,t++}return i.map(function(e){return e.map(function(e){return e.value}).join("")})}};e.exports=r},function(e,t,n){"use strict";e.exports={test:/<%(#?)((?:==|=#|[=-])?)[ \t]*([\w\W]*?)[ \t]*(-?)%>/,use:function(e,t,n,r){return n={"-":"raw","=":"escape","":!1,"==":"raw","=#":"raw"}[n],t&&(r="/*"+r+"*/",n=!1),{code:r,output:n}}}},function(e,t,n){"use strict";var r="undefined"==typeof window;e.exports=function(e,t){if(r){var i,o=n(20).minify,s=t.htmlMinifierOptions,a=t.rules.map(function(e){return e.test});(i=s.ignoreCustomFragments).push.apply(i,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(a)),e=o(e,s)}return e}},function(e,t){!function(e){e.noop=function(){}}("object"==typeof e&&"object"==typeof e.exports?e.exports:window)},function(e,t,n){"use strict";var r="undefined"==typeof window,i=/^\.+\//;e.exports=function(e,t){if(r){var o=n(3),s=t.root,a=t.extname;if(i.test(e)){var u=t.filename,c=!u||e===u,l=c?s:o.dirname(u);e=o.resolve(l,e)}else e=o.resolve(s,e);o.extname(e)||(e+=a)}return e}},function(e,t,n){"use strict";var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.message));return n.name="TemplateError",n.message=function(e){var t=e.name,n=e.source,r=e.path,i=e.line,o=e.column,s=e.generated,a=e.message;if(!n)return a;var u=n.split(/\n/),c=Math.max(i-3,0),l=Math.min(u.length,i+3),f=u.slice(c,l).map(function(e,t){var n=t+c+1;return(n===i?" >> ":"    ")+n+"| "+e}).join("\n");return(r||"anonymous")+":"+i+":"+o+"\n"+f+"\n\n"+t+": "+a+(s?"\n   generated: "+s:"")}(e),Error.captureStackTrace&&Error.captureStackTrace(n,n.constructor),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(Error);e.exports=r},function(e,t,n){"use strict";e.exports=n(2)}])},function(e,t){e.exports='{{each data}}\r\n<div class="project">\r\n    <div class="title">\r\n        <h3>{{$value.group}}</h3>\r\n        <div class="opening">{{$value.list.length}} Opening</div>\r\n    </div>\r\n    <div class="prolist">\r\n\r\n        {{each $value.list val idx}}\r\n            <div class="enggroup">\r\n            <div class="gtil">{{val.title}}</div>\r\n            <div class="glist">\r\n                <div class="list">\r\n                    <label>岗位职责:</label>\r\n                    <ul>\r\n                        {{each val.responsibility resval residx}}\r\n                        <li>{{resval}}</li>\r\n                        {{/each}}\r\n                    </ul>\r\n                </div>\r\n                <div class="list">\r\n                    <label>任职要求:</label>\r\n                    <ul>\r\n                        {{each val.requirements reqval reqidx}}\r\n                        <li>{{reqval}}</li>\r\n                        {{/each}}\r\n                    </ul>\r\n                </div>\r\n                <div class="sendaddr">请将简历发送到邮箱hr@tigerobo.com</div>\r\n            </div>\r\n        </div>\r\n        {{/each}}\r\n\r\n    </div>\r\n</div>\r\n{{/each}}'}]);
//# sourceMappingURL=jobs.js.map