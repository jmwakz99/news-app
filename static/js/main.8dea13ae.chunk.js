(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{26:function(e,a,t){e.exports=t(44)},31:function(e,a,t){},32:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),i=t.n(c),o=(t(31),t(18)),s=t(19),l=t(22),m=t(23),u=(t(32),t(62)),h=t(66),p=t(68),d=t(67),f=t(65),g=t(20),E=t.n(g),w=(t(34),Object(u.a)((function(e){return{root:{flexGrow:2},paper:{padding:e.spacing(3),margin:"30px auto",maxWidth:500},title:{color:"#1A0DAB"},source:{color:"green"},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}}))),v=function(e){var a=w();return r.a.createElement("div",{className:a.root},r.a.createElement(f.a,{className:a.paper},r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12,sm:6},r.a.createElement(d.a,{className:a.image},r.a.createElement("img",{className:a.img,alt:"News",src:e.habari.urlToImage}))),r.a.createElement(h.a,{item:!0,xs:12,sm:!0,container:!0,style:{textAlign:"left"}},r.a.createElement(h.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(p.a,{variant:"subtitle1",className:a.title},e.habari.title)),r.a.createElement(h.a,{item:!0},r.a.createElement(p.a,{variant:"body2",className:a.source,style:{cursor:"pointer",display:"inline"}},e.habari.source.name),r.a.createElement("span",{style:{display:"inline",opacity:.8}}," ","-"," ",r.a.createElement(E.a,{fromNow:!0,ago:!0},e.habari.publishedAt)," ","ago")))))))},b=(t(41),function(e){return r.a.createElement("div",{className:""},e.news.map((function(e,a){return r.a.createElement(v,{key:a,habari:e})})))}),y=(t(42),function(e){var a=e.handleChange,t=e.type,n=e.placeholder;return r.a.createElement("div",{className:"search-box"},r.a.createElement("div",{className:"search"},r.a.createElement("input",{className:"search-input",type:t,placeholder:n,onChange:a})))}),x=(t(43),function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).handleChange=function(a){e.setState({searchField:a.target.value})},e.state={news:[],searchField:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=f1d8d6b770cf4c828522e97c7db914f5 ").then((function(e){return e.json()})).then((function(a){e.setState((function(){return{news:a.articles}}))}))}},{key:"render",value:function(){var e=this.state,a=e.news,t=e.searchField,n=a.filter((function(e){return e.source.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement(y,{type:"search",placeholder:"search news from different sources e.g fox news...",handleChange:this.handleChange}),r.a.createElement(b,{news:n}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.8dea13ae.chunk.js.map