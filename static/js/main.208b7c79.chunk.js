(this["webpackJsonpweb-desafioslideworks"]=this["webpackJsonpweb-desafioslideworks"]||[]).push([[0],{104:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(12),r=c.n(n),i=c(18),l=c.n(i),o=c(30),j=c(7),b=c(8),u=(c(36),(0,c(37).create)({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/desafio-web-Slideworks",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_HOST:"http://localhost:3333"}).REACT_API_HOST||"http://localhost:3333"})),d=(c(5),c(0));function h(e){var t=e.name,c=e.setName;return Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("label",{className:"label-input",htmlFor:"input_name",children:"Name"}),Object(d.jsx)("input",{className:"input-75",value:t,onChange:function(e){return c(e.target.value)},id:"input_name"})]})}function O(e){var t=e.email,c=e.setEmail;return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{className:"label-input",htmlFor:"input_email",children:"E-mail"}),Object(d.jsx)("input",{className:"input-75",value:t,onChange:function(e){return c(e.target.value)},id:"input_email"})]})}function x(e){var t=e.description,c=e.setDescription;return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{className:"label-input",htmlFor:"textarea_type",children:"Type something..."}),Object(d.jsx)("textarea",{className:"input-75",id:"textarea_type",rows:"10",cols:"30",value:t,onChange:function(e){return c(e.target.value)}})]})}function m(e){e.email,e.setEmail;return Object(d.jsxs)("div",{className:"row-flex",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",name:"checkbox_opcao1",id:"checkbox1"}),Object(d.jsx)("label",{htmlFor:"checkbox1",children:"Op\xe7\xe3o 1"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",name:"checkbox_opcao2",id:"checkbox2"}),Object(d.jsx)("label",{htmlFor:"checkbox2",children:"Op\xe7\xe3o 2"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",name:"checkbox_opcao3",id:"checkbox3"}),Object(d.jsx)("label",{htmlFor:"checkbox3",children:"Op\xe7\xe3o 3"})]})]})}function p(e){var t=e.select,c=e.setSelect;return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("label",{className:"label-input",htmlFor:"cars",children:"Dropdown"}),Object(d.jsxs)("select",{className:"input-10",name:"cars",id:"cars",form:"carform",value:t,onChange:function(e){return c(e.target.value)},children:[Object(d.jsx)("option",{value:"1",children:"Select 1"}),Object(d.jsx)("option",{value:"2",children:"Select 2"}),Object(d.jsx)("option",{value:"3",children:"Select 3"})]})]})}function v(e){e.tags,e.setTags;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{children:" Tags "}),Object(d.jsxs)("div",{className:"tags",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:"tag",type:"checkbox",name:"checkbox_tag",id:"tag1"}),Object(d.jsx)("label",{className:"label-tag nao-selecionavel",htmlFor:"tag1",children:"web"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:"tag",type:"checkbox",name:"checkbox_tag",id:"tag2"}),Object(d.jsx)("label",{className:"label-tag nao-selecionavel",htmlFor:"tag2",children:"api"})]})]})]})}function g(e){var t=e.createCard;return Object(d.jsx)("div",{className:"button",children:Object(d.jsx)("button",{onClick:t,type:"submit",children:"Enviar"})})}function f(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],f=r[1],N=Object(a.useState)(""),k=Object(j.a)(N,2),_=k[0],S=k[1],w=Object(a.useState)(""),E=Object(j.a)(w,2),T=E[0],C=E[1],F=Object(a.useState)(""),y=Object(j.a)(F,2),A=y[0],D=y[1],P=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.post("/board",{name:c,description:_});case 3:(a=e.sent).ok?(R(),b.b.success("Board ".concat(a.data.message.name," criado com sucesso"))):(b.b.error("Ocorreu um erro"),404===a.status&&b.b.error("Servidor n\xe3o encontrado")),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),b.b.error(e.t0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){s(""),f(""),S(""),C(""),D("")};return Object(d.jsxs)("form",{className:"container",children:[Object(d.jsx)(b.a,{}),Object(d.jsxs)("div",{className:"col-70",children:[Object(d.jsx)(h,{name:c,setName:s}),Object(d.jsx)(O,{email:i,setEmail:f}),Object(d.jsx)(x,{description:_,setDescription:S})]}),Object(d.jsxs)("div",{className:"col-30 right",children:[Object(d.jsx)(m,{}),Object(d.jsx)(p,{select:T,setSelect:C}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(v,{tags:A,setTags:D}),Object(d.jsx)(g,{createCard:P})]})]})]})}r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))},5:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.208b7c79.chunk.js.map