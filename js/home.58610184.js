(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{bc13:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"page-container",attrs:{id:"home"}},[e._m(0),n("div",{staticClass:"info-container"},[n("div",{staticClass:"info"},[n("span",{staticClass:"date"},[e._v("8 / 1 ~ 8 / 2")]),n("span",{staticClass:"venue"},[e._v(" "+e._s(e.languageService.languagePack.home.info.venue)+" ")])]),n("router-link",{staticClass:"announcement-toggle",attrs:{to:{query:{popUp:"announcement"}}}},[n("span",[e._v(" "+e._s(e.languageService.languagePack.home.info.tabs.announcement)+" ")])])],1),e._l(e.sections,(function(t){return n("section",{key:"section-"+t.name,staticClass:"section-block"},[n("img",{staticClass:"prefix-icon",attrs:{src:"/2020/images/logo.svg"}}),n("h2",{staticClass:"section-title"},[e._v(" "+e._s(t.title)+" ")]),n("article",{staticClass:"section-content notice markdown",domProps:{innerHTML:e._s(t.content)}})])}))],2)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner-container"},[n("div",{staticClass:"logo-wrapper"},[n("div",{staticClass:"logo-container"},[n("h2",[e._v("COSCUP 2020")]),n("div",{staticClass:"logo-content"},[n("img",{attrs:{src:"/2020/images/banner-logo.svg",alt:"COSCUP"}}),n("div",[n("p",[e._v("Conference for Open Source Coders, Users & Promoters")])])])])])])}],s=(n("96cf"),n("1da1")),o=n("e4fd"),r=n("c5bb"),i=n("680e"),u=n("ab44"),l=(n("f37d"),Object(o["defineComponent"])({name:"Home",setup:function(){var e=Object(u["c"])(),t=Object(i["e"])(),n=Object(o["ref"])(""),a=Object(o["ref"])(""),c=Object(o["computed"])((function(){return[{name:"notice",title:t.languagePack.home.notice.title,content:n.value},{name:"about",title:t.languagePack.home.about.title,content:a.value}]})),l=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["a"])(t.languagePack.home.notice.content);case 2:return n.value=e.sent,e.next=5,Object(r["a"])(t.languagePack.home.about.content);case 5:a.value=e.sent;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o["watch"])((function(){return t.languageType}),l),Object(o["onMounted"])(Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:e();case 3:case"end":return t.stop()}}),t)})))),{languageService:t,sections:c}}})),g=l,m=n("2877"),f=Object(m["a"])(g,a,c,!1,null,null,null);t["default"]=f.exports},f37d:function(e,t,n){}}]);
//# sourceMappingURL=home.58610184.js.map