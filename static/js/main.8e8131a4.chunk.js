(this.webpackJsonpeventbot=this.webpackJsonpeventbot||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(49),s=n.n(a),o=(n(55),n(8)),i=n.n(o),u=n(16),j=n(10),l=(n(57),n(2)),b=(n(58),n(12)),h=Object(c.createContext)(null),d=n(1);var O=function(e){var t=e.onLogout,n=Object(c.useContext)(h).workspace;return Object(d.jsxs)("div",{className:"nav-bar",children:[Object(d.jsx)("h1",{children:"EventBot"}),n&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"workspace",children:[Object(d.jsx)("h3",{children:n.team.name}),Object(d.jsx)("button",{onClick:t,children:"Log Out"})]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/sendMessage",children:"Send Message"})})]})]})]})};n(64);var x=function(e){var t=e.onSubmit;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Enter Slack Token"}),Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsx)("input",{type:"password"}),Object(d.jsx)("input",{type:"submit"})]})]})},v=n(27),p=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.auth.test().catch((function(e){return Promise.reject("Invalid token: '".concat(t.token,"'"))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.conversations.list().then((function(e){return{channels:e.channels.map((function(e){return{id:e.id,name:e.name}})).sort((function(e,t){return e.name>t.name?1:-1}))}})),t.team.info().then((function(e){return{team:{name:e.team.name,icon:e.team.icon.image_230}}}))]);case 2:return n=e.sent,c=Object(j.a)(n,2),r=c[0],a=c[1],e.abrupt("return",Object(v.a)(Object(v.a)({},r),a));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(65);var m=function(){var e=Object(c.useContext)(h),t=e.workspace,n=(t=void 0===t?{}:t).channels,r=e.slackClient,a=Object(c.useRef)(null),s=Object(c.useState)(n&&n[0].id),o=Object(j.a)(s,2),i=o[0],u=o[1];return Object(d.jsx)("div",{className:"message-sender",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=a.current.value;t&&(!function(e,t,n){e.chat.postMessage({text:t,channel:n}).catch((function(e){console.error(e,{channel:n,message:t}),alert("Unable to post message. Review the error message in the console.")}))}(r,t,i),a.current.value="")},children:[Object(d.jsx)("textarea",{type:"text",ref:a}),Object(d.jsxs)("div",{children:[Object(d.jsx)("select",{value:i,onChange:function(e){u(e.target.value)},children:n&&n.map((function(e,t){return Object(d.jsx)("option",{value:e.id,children:e.name},t)}))}),Object(d.jsx)("input",{type:"submit"})]})]})})};var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Send message"}),Object(d.jsx)(m,{})]})};var k=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Welcome to EventBot"}),Object(d.jsx)("p",{children:"Select an action on the left nav bar"})]})},w=n(66).WebClient;var S=function(){var e=Object(c.useState)(localStorage.slackToken),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),s=Object(j.a)(a,2),o=s[0],b=s[1],v=Object(l.e)(),m=Object(l.f)(),S=new w(n);Object(c.useEffect)((function(){n?(localStorage.setItem("slackToken",n),y()):(localStorage.removeItem("slackToken"),v.push("/login"))}),[n]);var y=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(S);case 3:return e.t0=b,e.next=6,f(S);case 6:e.t1=e.sent,(0,e.t0)(e.t1),"/login"===m.pathname&&v.push("/"),e.next=15;break;case 11:e.prev=11,e.t2=e.catch(0),r(),alert(e.t2);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),C=function(e){e.preventDefault(),r(e.target[0].value),e.target[0].value=""};return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(h.Provider,{value:{slackClient:S,workspace:o},children:[Object(d.jsx)(O,{onLogout:function(){r(),b()}}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:k}),Object(d.jsx)(l.a,{path:"/sendMessage",component:g}),Object(d.jsx)(l.a,{path:"/login",render:function(){return Object(d.jsx)(x,{onSubmit:C})}})]})]})})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b.a,{children:Object(d.jsx)(S,{})})}),document.getElementById("root"))},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.8e8131a4.chunk.js.map