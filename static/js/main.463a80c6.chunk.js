(this["webpackJsonprandom-quote-generator"]=this["webpackJsonprandom-quote-generator"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),o=n.n(a),r=n(2),u=(n(9),n(10),n.p+"static/media/arrow-circle.67055034.svg"),s=n(0);function i(e){var t=e.onClick;return Object(s.jsxs)("button",{className:"random-button",onClick:t,children:["random",Object(s.jsx)("img",{src:u,alt:"random",width:"30",height:"30"})]})}n(12);function h(e){var t=e.quoteAuthor,n=e.quoteGenre,c=e.onClick;return Object(s.jsxs)("button",{className:"author",onClick:c,"aria-label":"Author: ".concat(t,". Genre: ").concat(n),children:[Object(s.jsx)("span",{"aria-hidden":"true",className:"author-name",children:t}),Object(s.jsx)("span",{"aria-hidden":"true",className:"genres",children:n})]})}n(13);function j(e){var t=e.quoteText;return Object(s.jsx)("p",{className:"quote",children:t})}n(14);function l(){return Object(s.jsx)("span",{className:"loader",children:Object(s.jsx)("span",{className:"loader-deco",children:"Loading..."})})}function d(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)([]),u=Object(r.a)(o,2),d=u[0],b=u[1],p=Object(c.useState)(!0),m=Object(r.a)(p,2),f=m[0],O=m[1];function x(){O(!0),fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random").then((function(e){return e.json()})).then((function(e){a(e.data[0]),b([]),O(!1)}))}Object(c.useEffect)(x,[a,b,O]);var q="https://quote-garden.herokuapp.com/api/v3/quotes?author=".concat(n.quoteAuthor,"&page=1&limit=3&genre=").concat(n.quoteGenre),g=d.filter((function(e){return e._id!==n._id})),v=3===g.length?g.slice(0,2):g,N=d.length>0;return Object(s.jsxs)("div",{className:"main-wrapper",children:[f&&Object(s.jsx)(l,{}),Object(s.jsx)(i,{onClick:function(){x()}}),Object(s.jsxs)("div",{className:"quotes-wrapper",children:[N&&Object(s.jsx)("h1",{className:"author-title",children:n.quoteAuthor}),Object(s.jsx)(j,{quoteText:n.quoteText}),v.map((function(e){return Object(s.jsx)(j,{quoteText:e.quoteText},e._id)})),!N&&Object(s.jsx)(h,{quoteAuthor:n.quoteAuthor,quoteGenre:n.quoteGenre,onClick:function(){O(!0),fetch(q).then((function(e){return e.json()})).then((function(e){b(e.data),O(!1)}))}})]}),Object(s.jsxs)("p",{className:"copy",children:["created by ",Object(s.jsx)("a",{href:"https://github.com/silpagui",children:"silpagui"})," - devChallenges.io"]})]})}o.a.render(Object(s.jsx)(d,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.463a80c6.chunk.js.map