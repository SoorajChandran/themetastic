(this.webpackJsonpthemetastic=this.webpackJsonpthemetastic||[]).push([[0],{17:function(e,n,t){e.exports=t(25)},22:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(12),c=t.n(o),i=(t(22),t(7)),u=t(8),l=t(10),s=t(9),h=t(14),m="#444",d={background:"#F8F8F9",body:m},g={background:m,body:"#FFFFFF"},b=function(e){return"dark"===e?g:d},f=Object(r.createContext)({isDark:!1,toggleTheme:function(){}});function k(){var e=Object(i.a)(["\n  margin: 0;\n  border: 0;\n  font-size: 80px;\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n"]);return k=function(){return e},e}function v(){var e=Object(i.a)(["\n  margin: 0;\n"]);return v=function(){return e},e}function O(){var e=Object(i.a)(["\n  background: ",";\n  width: 100vw;\n  text-align: center;\n  height: 100vh;\n  h1 {\n    color: ",";\n  }\n"]);return O=function(){return e},e}var j=Object(u.a)("div")(O(),(function(e){return e.theme.background}),(function(e){return e.theme.body})),w=u.a.h1(v()),D=u.a.button(k()),E=function(){var e=a.a.useContext(f);return a.a.createElement(j,null,a.a.createElement("div",null,a.a.createElement(w,null,"Click on the icon below"),a.a.createElement(D,{"data-testid":"toggle-button",onClick:function(){return e.toggleTheme()}},e.isDark?"\u2600\ufe0f":"\ud83c\udf11")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement((function(e){var n=e.children,t=function(){var e=Object(r.useState)({isDark:!1,hasThemeMounted:!1}),n=Object(s.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){var e="true"===localStorage.getItem("isDark");a(Object(l.a)({},t,{isDark:e,hasThemeMounted:!0}))}),[]),[t,a]}(),o=Object(s.a)(t,2),c=o[0],i=o[1];if(!c.hasThemeMounted)return a.a.createElement("div",null);var u=c.isDark?b("dark"):b("light");return a.a.createElement(h.a,{theme:u},a.a.createElement(f.Provider,{value:{isDark:c.isDark,toggleTheme:function(){var e=!c.isDark;localStorage.setItem("isDark",JSON.stringify(e)),i(Object(l.a)({},c,{isDark:e}))}}},n))}),null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.d610d4ab.chunk.js.map