(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),s=n.n(r),i=(n(21),n(2)),o=n.n(i),l=n(4),u=n(3),d=(n(23),n.p+"static/media/pokeball.b8326827.png"),j=n(0);var b=function(){return Object(j.jsxs)("div",{className:"Navbar",children:[Object(j.jsx)("img",{src:d,alt:"pokeball",className:"pokeball"}),Object(j.jsx)("h1",{children:"Kanto Pokedex"})]})},h={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"};n(25);var p=function(e){var t,n,c=e.pokemon;return Object(j.jsxs)("div",{className:"Card",children:[Object(j.jsx)("div",{className:"Card__img",children:Object(j.jsx)("img",{src:c.sprites.front_default,alt:""})}),Object(j.jsxs)("div",{className:"Card__name",children:["#",(t=c.id,n=3,String(t).padStart(n,"0")),"\xa0",c.name.toUpperCase()]}),Object(j.jsx)("div",{className:"Card__types",children:c.types.map((function(e){return Object(j.jsx)("div",{className:"Card__type",style:{backgroundColor:h[e.type.name]},children:e.type.name})}))}),Object(j.jsxs)("div",{className:"Card__info",children:[Object(j.jsxs)("div",{className:"Card__data Card__data--weight",children:[Object(j.jsx)("p",{className:"title",children:"Weight"}),Object(j.jsx)("p",{children:c.weight})]}),Object(j.jsxs)("div",{className:"Card__data Card__data--weight",children:[Object(j.jsx)("p",{className:"title",children:"Height"}),Object(j.jsx)("p",{children:c.height})]}),Object(j.jsxs)("div",{className:"Card__data Card__data--ability",children:[Object(j.jsx)("p",{className:"title",children:"Ability"}),Object(j.jsx)("p",{children:c.abilities[0].ability.name})]})]})]})};function f(e){var t=e.url;return new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))}))}function O(e){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(26);var x=function(e){var t=e.searchQuery,n=e.setSearchQuery;return Object(j.jsx)("form",{action:"/",method:"get",children:Object(j.jsxs)("div",{class:"search",children:[Object(j.jsx)("input",{type:"checkbox",id:"trigger",class:"search__checkbox"}),Object(j.jsx)("label",{class:"search__label-init",for:"trigger"}),Object(j.jsx)("label",{class:"search__label-active",for:"trigger",onClick:function(){n("")}}),Object(j.jsx)("div",{class:"search__border"}),Object(j.jsx)("input",{type:"text",class:"search__input",value:t,onInput:function(e){return n(e.target.value)},id:"header-search",placeholder:"Search",name:"s"}),Object(j.jsx)("div",{class:"search__close"})]})})};n(27),n(28);var v=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),i=Object(u.a)(s,2),d=i[0],h=i[1],m="https://pokeapi.co/api/v2/pokemon/?limit=386",v=window.location.search,g=new URLSearchParams(v).get("s"),_=Object(c.useState)(g||""),w=Object(u.a)(_,2),k=w[0],y=w[1],C=Object(c.useState)(!1),N=Object(u.a)(C,2),S=N[0],P=N[1],T=Object(c.useState)(!1),L=Object(u.a)(T,2),Q=L[0],E=L[1],H=Object(c.useState)(!1),J=Object(u.a)(H,2),W=J[0],A=J[1],B=Object(c.useState)(!1),F=Object(u.a)(B,2),I=F[0],K=F[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(m);case 2:return t=e.sent,e.next=5,U(t.results);case 5:h(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var U=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e,t){return t?e.filter((function(e){return t>=0?e.id.toString().includes(t.toLowerCase()):e.name.toLowerCase().includes(t.toLowerCase())})):e}(n,k);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"region__select",children:[Object(j.jsx)("h1",{children:"Select region:"}),Object(j.jsx)("button",{onClick:function(){K(!0),P(!0),A(!1),E(!1),window.scrollTo({top:500,behavior:"smooth"})},children:"KANTO"}),Object(j.jsx)("button",{onClick:function(){P(!1),K(!0),A(!1),E(!0),window.scrollTo({top:500,behavior:"smooth"})},children:"JOHTO"}),Object(j.jsx)("button",{onClick:function(){P(!1),K(!0),A(!0),E(!1),window.scrollTo({top:500,behavior:"smooth"})},children:"HOENN"})]}),!I&&Object(j.jsx)("div",{className:"blank"}),!d&&Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(x,{searchQuery:k,setSearchQuery:y}),Object(j.jsx)("div",{className:"grid-container",children:R.map((function(e,t){return e.id<152&&S||e.id>151&&e.id<252&&Q||e.id>251&&W?Object(j.jsx)(p,{pokemon:e},t):void 0}))})]}),Object(j.jsx)("div",{id:"container"})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(v,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.bce9c71e.chunk.js.map