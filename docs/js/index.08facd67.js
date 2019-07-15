(function(n){function t(t){for(var e,s,a=t[0],i=t[1],o=t[2],y=0,h=[];y<a.length;y++)s=a[y],u[s]&&h.push(u[s][0]),u[s]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(n[e]=i[e]);l&&l(t);while(h.length)h.shift()();return c.push.apply(c,o||[]),r()}function r(){for(var n,t=0;t<c.length;t++){for(var r=c[t],e=!0,a=1;a<r.length;a++){var i=r[a];0!==u[i]&&(e=!1)}e&&(c.splice(t--,1),n=s(s.s=r[0]))}return n}var e={},u={index:0},c=[];function s(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=n,s.c=e,s.d=function(n,t,r){s.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,t){if(1&t&&(n=s(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)s.d(r,e,function(t){return n[t]}.bind(null,e));return r},s.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(t,"a",t),t},s.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var o=0;o<a.length;o++)t(a[o]);var l=i;c.push([0,"chunk-vendors"]),r()})({0:function(n,t,r){n.exports=r("c31f")},"42b1":function(n,t,r){"use strict";var e=r("880c"),u=r.n(e);u.a},"82a9":function(n,t){n.exports="# vue-l10n 一个货币显示本地化的Vue插件\r\n\r\n## 介绍\r\nvue-l10n-currency 是参照vue-i18n 的vue插件方式实现的一个 货币本地化转换Vue插件。\r\nDmoe预览和文档 [vue-l10n example](http://docs.patpat.site/)\r\n\r\n### 安装\r\n\r\n```\r\nnpm install vue-l10n -D\r\n```\r\n\r\n### 使用\r\n#### 在Vue项目的main.js中\r\n\r\n```javaScript\r\nimport VueL10nCurrency from 'vue-l10n'\r\nVue.use(VueL10nCurrency)\r\nconst l10nCurrency = new VueL10nCurrency({\r\n  isoCode: 'USD',\r\n  stuExchangeRate: 1,\r\n  utsExchangeRate: 1,\r\n  symbolDisplay: '$'\r\n})\r\n\r\nnew Vue({\r\n  l10nCurrency,\r\n  router,\r\n  render: h => h(App)\r\n}).$mount('#app')\r\n\r\n```\r\n\r\n#### 在Vue项目的模板中\r\n\r\n```javaScript\r\n  <p>{{$uts(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入\r\n  <p>{{$utsc(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,两位小数后值大于0就进位\r\n  <p>{{$utst(34.62)}}</p> // 按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,舍去两位小数后的值不进位\r\n  <p>{{$stu(237.41)}}</p> // 按照汇率从Self(本地货币)转换为USD(美元)保留两位小数四舍五入\r\n  <p>{{$textUts(\"这个金额是$23.5,那个金额是$18.99\")}}</p> // 将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入\r\n  <p>{{$textUtsi(\"这个金额是$23.5,那个金额是$18.99\")}}</p> // 将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留整数四舍五入\r\n```\r\n\r\n#### 在js中切换货币\r\n\r\n```javaScript\r\n  const isoCode = 'CNY'\r\n  const utsExchangeRate = 6.85765\r\n  const stuExchangeRate = 0.14582\r\n  const symbolDisplay = '￥'\r\n  this.$l10nCurrency.currency = {\r\n    isoCode,\r\n    stuExchangeRate,\r\n    utsExchangeRate,\r\n    symbolDisplay\r\n  }\r\n```\r\n\r\n### API文档\r\n\r\n**Vue全局对象**\r\n\r\nl10nCurrency\r\n\r\n`this.$l10nCurrency `\r\n \r\n对象属性：\r\n \r\n\r\n```\r\ncurrency: {\r\n    isoCode:'USD',\r\n    stuExchangeRate: 1,\r\n    utsExchangeRate: 1,\r\n    symbolDisplay: ‘$’\r\n}\r\n_computeTypeEnum: {\r\n    ROUNDING: 'rounding', // 保留两位小数，四舍五入\r\n    CARRY: 'carry', // 保留两位小数，后面有值就进位\r\n    TRUNCATION: 'truncation', // 保留两位小数，直接舍去后面的小数\r\n    INT: 'int', // 保留整数，四舍五入\r\n    ORIGINAL: 'original' // 保留原始计算结果\r\n}\r\n```\r\n\r\n| Vue全局函数 | 使用 | 描述 |\r\n| --- | --- | --- |\r\n| uts  | $uts(34.62)  | 美元转当地货币金额（保留两位小数，四舍五入） |\r\n| utsc | $utsc(34.62) | 美元转当地货币金额（保留两位小数，后面有值就进位） |\r\n| utst | $utst(34.62) | 美元转当地货币金额（保留两位小数，直接舍去后面的小数） |\r\n| stu | $stu(237.41) | 当地货币美元金额（保留两位小数，四舍五入） |\r\n| stuo | $stuo(237.41) | 当地货币美元金额（保留原始计算结果） |\r\n| textUts | $textUts(\"这个金额是$23.5,那个金额是$18.99\") | 美元字符串转当地货币字符串（保留两位小数，四舍五入） |\r\n| textUtsi | $textUtsi(\"这个金额是$23.5,那个金额是$18.99\") | 美元字符串转当地货币字符串（保留整数，四舍五入） |\r\n\r\n\r\n### Customize configuration\r\n\r\nSee [Configuration Reference](https://cli.vuejs.org/config/).\r\n"},"83b8":function(n,t,r){},"880c":function(n,t,r){},"8e6d":function(n,t,r){"use strict";var e=r("aad2"),u=r.n(e);u.a},aad2:function(n,t,r){},b8da:function(n,t,r){"use strict";var e=r("83b8"),u=r.n(e);u.a},c31f:function(n,t,r){"use strict";r.r(t);r("ac6a"),r("cadf"),r("551c"),r("f751"),r("097d");var e=r("a026"),u=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"nav-menu"},[r("router-link",{staticClass:"tab",attrs:{to:"/"}},[n._v("例子")]),r("router-link",{staticClass:"tab",attrs:{to:"/doc"}},[n._v("文档")]),r("a",{attrs:{href:"https://github.com/StriverF/vue-l10n-currency",target:"_blank"}},[n._v("GitHub\n    "),r("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])],1),r("router-view")],1)},c=[],s=(r("42b1"),r("2877")),a={},i=Object(s["a"])(a,u,c,!1,null,null,null),o=i.exports,l=r("8c4f"),y=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"main container"},[r("H3",[n._v("货币转换测试")]),r("ul",[r("li",[r("span",[n._v("按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入")]),r("p",[n._v(n._s(n.$uts(34.62)))])]),r("li",[r("span",[n._v("按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,两位小数后值大于0就进位")]),r("p",[n._v(n._s(n.$utsc(34.62)))])]),r("li",[r("span",[n._v("按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数,舍去两位小数后的值不进位")]),r("p",[n._v(n._s(n.$utst(34.62)))])]),r("li",[r("span",[n._v("按照汇率从Self(本地货币)转换为USD(美元)保留两位小数四舍五入")]),r("p",[n._v(n._s(n.$stu(237.41)))])]),r("li",[r("span",[n._v("按照汇率从Self(本地货币)转换为USD(美元)保留原始计算结果")]),r("p",[n._v(n._s(n.$stuo(237.41)))])]),r("li",[r("span",[n._v("将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留两位小数四舍五入")]),r("p",[n._v(n._s(n.$textUts("这个金额是$23.5,那个金额是$18.99")))])]),r("li",[r("span",[n._v("将一段字符串中的$符号的金额，按照汇率从USD(美元)转换为Self(本地货币)，保留整数四舍五入")]),r("p",[n._v(n._s(n.$textUtsi("这个金额是$23.5,那个金额是$18.99")))])])]),r("button",{staticClass:"c-button",on:{click:function(t){return n.cL10nUSD()}}},[n._v("切换切换货币USD")]),r("button",{staticClass:"c-button",on:{click:function(t){return n.cL10nCNY()}}},[n._v("切换切换货币CNY")])],1)},h=[],p={methods:{cL10nCNY:function(){console.log("点击切换货币CNY");var n="CNY",t=6.85765,r=.14582,e="￥";this.$l10nCurrency.currency={isoCode:n,stuExchangeRate:r,utsExchangeRate:t,symbolDisplay:e}},cL10nUSD:function(){console.log("点击切换货币USD");var n="USD",t=1,r=1,e="$";this.$l10nCurrency.currency={isoCode:n,stuExchangeRate:r,utsExchangeRate:t,symbolDisplay:e}}}},f=p,v=(r("8e6d"),Object(s["a"])(f,y,h,!1,null,"1a2d0ae1",null)),_=v.exports,d=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"main container"},[r("vue-markdown",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"article",attrs:{source:n.content}})],1)},m=[],C=r("9ce6"),g=r.n(C),$=r("82a9"),b=r.n($),x=r("d258"),D=r.n(x),U={data:function(){return{content:b.a,html:""}},components:{VueMarkdown:g.a,MarkDown:D.a},mounted:function(){}},S=U,R=(r("b8da"),Object(s["a"])(S,d,m,!1,null,null,null)),w=R.exports;e["a"].use(l["a"]);var E=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"demo",component:_},{path:"/doc",name:"doc",component:w}]}),O=(r("a481"),r("6762"),r("2fdb"),r("d225")),N=r("b0b4"),T=r("bd86");function j(n){n.prototype.hasOwnProperty("$l10nCurrency")||Object.defineProperty(n.prototype,"$l10nCurrency",{get:function(){return this._l10nCurrency}}),n.prototype.$uts=function(n){var t=this.$l10nCurrency,r=t._computeTypeEnum.ROUNDING,e=t.currency.utsExchangeRate,u=t.currency.symbolDisplay;return t._uts(n,r,e,u)},n.prototype.$utsc=function(n){var t=this.$l10nCurrency,r=t._computeTypeEnum.CARRY,e=t.currency.utsExchangeRate,u=t.currency.symbolDisplay;return t._uts(n,r,e,u)},n.prototype.$utst=function(n){var t=this.$l10nCurrency,r=t._computeTypeEnum.TRUNCATION,e=t.currency.utsExchangeRate,u=t.currency.symbolDisplay;return t._uts(n,r,e,u)},n.prototype.$stu=function(n){var t=this.$l10nCurrency,r=t._computeTypeEnum.ROUNDING,e=t.currency.stuExchangeRate;return t._stu(n,r,e)},n.prototype.$stuo=function(n){var t=this.$l10nCurrency,r=t._computeTypeEnum.ORIGINAL,e=t.currency.stuExchangeRate;return t._stu(n,r,e)},n.prototype.$textUts=function(n){var t=this.$l10nCurrency,r=t._computeTypeEnum.ROUNDING,e=t.currency.utsExchangeRate,u=t.currency.symbolDisplay;return t._textUts(n,r,e,u)},n.prototype.$textUtsi=function(n){var t=this.$l10nCurrency,r=t._computeTypeEnum.INT,e=t.currency.utsExchangeRate,u=t.currency.symbolDisplay;return t._textUts(n,r,e,u)}}var k,I,L,A={beforeCreate:function(){var n=this.$options;n.l10nCurrency?(this._l10nCurrency=n.l10nCurrency,this._l10nCurrencyWatcher=this._l10nCurrency.watchL10nCurrencyData(),this._l10nCurrency.subscribeDataChanging(this),(void 0===n.l10nCurrency.sync||n.l10nCurrency.sync)&&(this._currencyWatcher=this.$l10nCurrency.watchCurrency())):this.$root&&this.$root.$l10nCurrency?(this._l10nCurrency=this.$root.$l10nCurrency,this._l10nCurrency.subscribeDataChanging(this)):n.parent&&n.parent.$l10nCurrency&&(this._l10nCurrency=n.parent.$l10nCurrency,this._l10nCurrency.subscribeDataChanging(this)),console.log("[vue-l10n-currency] already beforeCreate.")},beforeDestroy:function(){if(this._l10nCurrency){var n=this;this.$nextTick(function(){n._l10nCurrency.unsubscribeDataChanging(n),n._l10nCurrencyWatcher&&(n._l10nCurrencyWatcher(),n._l10nCurrency.destroyVM(),delete n._l10nCurrencyWatcher),n._currencyWatcher&&(n._currencyWatcher(),delete n._currencyWatcher),n._l10nCurrency=null}),console.log("[vue-l10n-currency] already beforeDestroy.")}}};function V(n){V.installed=!0,k=n,j(k),k.mixin(A);var t=k.config.optionMergeStrategies;t.l10nCurrency=function(n,t){return void 0===t?n:t}}var M=(L=I=function(){function n(t){Object(O["a"])(this,n),Object(T["a"])(this,"_computeTypeEnum",{ROUNDING:"rounding",CARRY:"carry",TRUNCATION:"truncation",INT:"int",ORIGINAL:"original"}),Object(T["a"])(this,"_vm",void 0),Object(T["a"])(this,"_root",void 0),Object(T["a"])(this,"_dataListeners",void 0),!k&&"undefined"!==typeof window&&window.Vue&&V(window.Vue);var r=t.isoCode||"USD",e=t.stuExchangeRate||"1",u=t.utsExchangeRate||"1",c=t.symbolDisplay||"$",s={isoCode:r,stuExchangeRate:e,utsExchangeRate:u,symbolDisplay:c};this._vm=null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._dataListeners=[],this._initVM({currency:s})}return Object(N["a"])(n,[{key:"_initVM",value:function(n){var t=k.config.silent;k.config.silent=!0,this._vm=new k({data:n}),k.config.silent=t}},{key:"destroyVM",value:function(){this._vm.$destroy()}},{key:"subscribeDataChanging",value:function(n){this._dataListeners.push(n)}},{key:"unsubscribeDataChanging",value:function(n){var t=this._dataListeners;if(t.length){var r=t.indexOf(n);if(r>-1)return t.splice(r,1)}}},{key:"watchL10nCurrencyData",value:function(){var n=this;return this._vm.$watch("$data",function(){var t=n._dataListeners.length;while(t--)k.nextTick(function(){n._dataListeners[t]&&n._dataListeners[t].$forceUpdate()})},{deep:!0})}},{key:"watchCurrency",value:function(){if(!this._sync||!this._root)return null;var n=this._vm;return this._root.$l10nCurrency.vm.$watch("currency",function(t){n.$set(n,"currency",t),n.$forceUpdate()},{immediate:!0})}},{key:"_formatAmount",value:function(n,t){var r;return r=t===this._computeTypeEnum.ROUNDING?n.toFixed(2):t===this._computeTypeEnum.CARRY?Math.ceil(100*n)/100:t===this._computeTypeEnum.TRUNCATION?Math.floor(100*n)/100:t===this._computeTypeEnum.INT?n.toFixed():n,r}},{key:"_uts",value:function(n,t,r,e){console.log("[vue-l10n-currency] _uts.");var u=n*r,c=this._formatAmount(u,t);return e+c}},{key:"_stu",value:function(n,t,r){console.log("[vue-l10n-currency] _stu.");var e=n*r,u=this._formatAmount(e,t);return u}},{key:"_textUts",value:function(n,t,r,e){console.log("[vue-l10n-currency] _textUts.");var u=n,c=this;if("string"===typeof n&&""!==n&&n.includes("$")){var s=/(\$\d*(\.\d*|\d*))/g,a=n.replace(s,function(n){var u=n.slice(1),s=u*r,a=c._formatAmount(s,t);return e+a});u=a}return u}},{key:"vm",get:function(){return this._vm}},{key:"currency",get:function(){return this._vm.currency},set:function(n){this._vm.$set(this._vm,"currency",n)}}]),n}(),Object(T["a"])(I,"install",void 0),Object(T["a"])(I,"version",void 0),L);M.install=V,M.version="1.0.1";var G=M,Y=r("1487"),P=r.n(Y);r("eba2");e["a"].directive("highlight",function(n){var t=n.querySelectorAll("pre code");t.forEach(function(n){P.a.highlightBlock(n)})}),e["a"].use(G);var W=new G({});e["a"].config.productionTip=!1,new e["a"]({l10nCurrency:W,router:E,render:function(n){return n(o)}}).$mount("#app")}});
//# sourceMappingURL=index.08facd67.js.map