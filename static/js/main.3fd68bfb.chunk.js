(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(6),s=n.n(c),i=(n(11),n(2)),o=n.n(i),u=n(3),l=n(4),d=(n(13),n(0));var j=function(){return Object(d.jsx)("div",{className:"Navbar",children:Object(d.jsx)("h1",{children:"Kanto Pokedex"})})},h={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"};n(15);var b=function(e){var t,n,r=e.pokemon;return Object(d.jsxs)("div",{className:"Card",children:[Object(d.jsx)("div",{className:"Card__img",children:Object(d.jsx)("img",{src:r.sprites.front_default,alt:""})}),Object(d.jsxs)("div",{className:"Card__name",children:["#",(t=r.id,n=3,String(t).padStart(n,"0")),"\xa0",r.name.toUpperCase()]}),Object(d.jsx)("div",{className:"Card__types",children:r.types.map((function(e){return Object(d.jsx)("div",{className:"Card__type",style:{backgroundColor:h[e.type.name]},children:e.type.name})}))}),Object(d.jsxs)("div",{className:"Card__info",children:[Object(d.jsxs)("div",{className:"Card__data Card__data--weight",children:[Object(d.jsx)("p",{className:"title",children:"Weight"}),Object(d.jsx)("p",{children:r.weight})]}),Object(d.jsxs)("div",{className:"Card__data Card__data--weight",children:[Object(d.jsx)("p",{className:"title",children:"Height"}),Object(d.jsx)("p",{children:r.height})]}),Object(d.jsxs)("div",{className:"Card__data Card__data--ability",children:[Object(d.jsx)("p",{className:"title",children:"Ability"}),Object(d.jsx)("p",{children:r.abilities[0].ability.name})]})]})]})};function f(e){var t=e.url;return new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))}))}function p(e){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(16);var x=function(e){var t=e.searchQuery,n=e.setSearchQuery;return Object(d.jsx)("form",{action:"/",method:"get",children:Object(d.jsxs)("div",{class:"search",children:[Object(d.jsx)("input",{type:"checkbox",id:"trigger",class:"search__checkbox"}),Object(d.jsx)("label",{class:"search__label-init",for:"trigger"}),Object(d.jsx)("label",{class:"search__label-active",for:"trigger",onClick:function(){n("")}}),Object(d.jsx)("div",{class:"search__border"}),Object(d.jsx)("input",{type:"text",class:"search__input",value:t,onInput:function(e){return n(e.target.value)},id:"header-search",placeholder:"Search",name:"s"}),Object(d.jsx)("div",{class:"search__close"})]})})};n(17);var O=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(l.a)(s,2),h=(i[0],i[1],Object(r.useState)("")),m=Object(l.a)(h,2),O=(m[0],m[1],Object(r.useState)(!0)),v=Object(l.a)(O,2),g=v[0],_=v[1],w="https://pokeapi.co/api/v2/pokemon/?limit=151",y=window.location.search,k=new URLSearchParams(y).get("s"),C=Object(r.useState)(k||""),N=Object(l.a)(C,2),S=N[0],L=N[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(w);case 2:return t=e.sent,e.next=5,P(t.results);case 5:_(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var P=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(e,t){return t?e.filter((function(e){return t>=0?e.id.toString().includes(t.toLowerCase()):e.name.toLowerCase().includes(t.toLowerCase())})):e}(n,S);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),g&&Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."}),!g&&Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(x,{searchQuery:S,setSearchQuery:L}),Object(d.jsx)("div",{className:"grid-container",children:Q.map((function(e,t){return Object(d.jsx)(b,{pokemon:e},t)}))})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(O,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[18,1,2]]]);
//# sourceMappingURL=main.3fd68bfb.chunk.js.map