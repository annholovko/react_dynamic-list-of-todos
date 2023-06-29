(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),o=c(1),i=c.n(o),r=(c(10),c(11),c(3)),d=c.n(r),j=c(0),u=function(e){var t=e.todo,c=e.onSelectTodo,s=e.selectedTodo,a=t.id===(null===s||void 0===s?void 0:s.id);return Object(j.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":a}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:t.id}),Object(j.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:d()({"has-text-danger":!t.completed},{"has-text-success":t.completed}),children:t.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:d()("far",{"fa-eye-slash":s===t,"fa-eye":s!==t})})})})})]})},b=function(e){var t=e.todos,c=e.onSelectTodo,s=e.selectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(u,{todo:e,onSelectTodo:c,selectedTodo:s},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var h=function(e){var t=e.searchQuery,c=e.onSearch,a=e.onSelectStatus;return Object(j.jsxs)("form",{className:"field has-addons",onSubmit:function(e){e.preventDefault()},children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){a(e.target.value)},children:[Object(j.jsx)("option",{value:s.ALL,children:"All"}),Object(j.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(j.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(j.jsx)("button",{"aria-label":"clearSearch","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})},m=(c(13),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=i.a.memo((function(e){var t=e.todo,c=e.onClose,s=Object(o.useState)(null),a=Object(l.a)(s,2),n=a[0],i=a[1],r=Object(o.useState)(!0),d=Object(l.a)(r,2),u=d[0],b=d[1],h=t.userId,x=t.title,f=t.id,v=t.completed;return Object(o.useEffect)((function(){(function(e){return O("/users/".concat(e))})(h).then((function(e){i(e),b(!1)})).catch((function(e){return new Error("Error fetching user:",e.message)}))}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),u?Object(j.jsx)(m,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(f)}),Object(j.jsx)("button",{"aria-label":"delete",type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:x}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[v?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})})),f=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(!0),i=Object(l.a)(n,2),r=i[0],d=i[1],u=Object(o.useState)(null),f=Object(l.a)(u,2),v=f[0],p=f[1],N=Object(o.useState)(""),y=Object(l.a)(N,2),g=y[0],S=y[1],E=Object(o.useState)(s.ALL),T=Object(l.a)(E,2),C=T[0],L=T[1];Object(o.useEffect)((function(){O("/todos").then((function(e){a(e),d(!1)})).catch((function(e){return new Error("Error fetching todos:",e.message)}))}),[]);var k=c.filter((function(e){var t=e.title.toLowerCase().trim().includes(g.toLowerCase());switch(C){case s.ALL:return t;case s.ACTIVE:return t&&!e.completed;case s.COMPLETED:return t&&e.completed;default:throw new Error("Unknown status selector")}}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(h,{searchQuery:g,onSearch:function(e){S(e)},onSelectStatus:L})}),Object(j.jsx)("div",{className:"block",children:r?Object(j.jsx)(m,{}):Object(j.jsx)(b,{todos:k,selectedTodo:v,onSelectTodo:function(e){p(e)}})})]})})}),v&&Object(j.jsx)(x,{todo:v,onClose:function(){p(null)}})]})};n.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f3b82993.chunk.js.map