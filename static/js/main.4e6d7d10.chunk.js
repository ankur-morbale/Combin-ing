(this.webpackJsonpfindit=this.webpackJsonpfindit||[]).push([[0],{22:function(e,t,n){},37:function(e,t,n){e.exports=n.p+"static/media/oven.678dbbff.gif"},38:function(e,t,n){e.exports=n(70)},43:function(e,t,n){},44:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},45:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(32),l=n.n(c),s=(n(43),n(44),n(45),n(7)),i=n(8),o=n(5),u=n.n(o),h=n(9),d=n(12),m=n(13),p=n(17),f=n(15),y=n(10),g=n(16),b=(n(22),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).handleQueryChange=function(e){n.setState({query:e.target.value})},n.handleCloseClick=function(){n.setState({query:""})},n.state={query:""},n.updateQuery=n.updateQuery.bind(Object(y.a)(n)),n.handleQueryChange=n.handleQueryChange.bind(Object(y.a)(n)),n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"updateQuery",value:function(){var e=Object(h.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({query:t.target.value});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;e=r.a.createElement("header",{className:"clssearch-container"},r.a.createElement("div",null,r.a.createElement("h1",{className:"clssearch-header"},"COMBIN-ING"),r.a.createElement("div",{className:"clssearch-box"},r.a.createElement("input",{placeholder:"Search Ingredients ...",className:"clssearch-txt",value:this.state.query,onChange:this.handleQueryChange,onKeyPress:function(e){"Enter"!==e.key&&"Return"!==e.key||document.getElementById("resulttest").click()}}),r.a.createElement("button",{className:"clssearch-boxClose",onClick:this.handleCloseClick},"x")),r.a.createElement(i.b,{to:{pathname:"/results",query:{query:this.state.query}},style:{hidden:!0},id:"resulttest"})));return r.a.createElement("div",null,null,r.a.createElement("div",{className:"clssearch-container"},e))}}]),t}(a.Component)),v=n(35),E=n(36),O=n.n(E).a.create({baseURL:"http://127.0.0.1:5000",json:!0,data:{}}),k=function(){function e(){Object(d.a)(this,e)}return Object(m.a)(e,[{key:"getResults",value:function(e){if(e)return this.perform("post","http://35.170.249.243:5000/results",e);this.perform("get","/")}},{key:"perform",value:function(){var e=Object(h.a)(u.a.mark((function e(t,n,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O({method:t,url:n,data:a}).then((function(e){return console.log(e),e.data?e.data:[]})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()}]),e}(),j=n(37),C=n.n(j);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).handleQueryChange=function(e){n.setState({query:e.target.value})},n.handleCloseClick=function(){n.setState({query:""})},n.state={list:[],loading:!1,query:""},n.handleQueryChange=n.handleQueryChange.bind(Object(y.a)(n)),n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{this.apiClient=new k,this.props.location&&this.props.location.query.query?(this.setState({loading:!0}),this.apiClient.getResults(this.props.location.query.query).then((function(e){return t.setState(w({},t.state,{list:e,loading:!1,query:t.props.location.query.query}))}))):document.getElementById("resulttest1").click()}catch(n){console.log(n),this.setState({loading:!0})}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"reloadResults",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{this.apiClient=new k,this.state.query?(this.setState({loading:!0}),this.apiClient.getResults(this.state.query).then((function(e){return t.setState(w({},t.state,{list:e,loading:!1,query:t.state.query}))}))):document.getElementById("resulttest1").click()}catch(n){console.log(n),this.setState({loading:!0})}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,n=null;n=0===this.state.list.length&&this.state.loading?r.a.createElement("div",null,r.a.createElement("h1",null,"Enjoy the Aroma! The chefs are working for you..."),r.a.createElement("br",null),r.a.createElement("img",{alt:"Oven",height:"500",width:"500",src:C.a})):this.state.list.length>0?this.state.list.map((function(e,t){return r.a.createElement("div",{className:"carddisplay"},r.a.createElement("a",{href:e.link,target:"_blank"},r.a.createElement("figure",{style:{backgroundImage:"linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ),url(".concat(e.image,")")},className:"figure"},r.a.createElement("div",{class:"date"},r.a.createElement("div",null,r.a.createElement("strong",null,"Prep"),":",e.Prep),r.a.createElement("div",null,r.a.createElement("strong",null,"Cook"),":",e.Cook)),r.a.createElement("figcaption",null,r.a.createElement("h4",null," ",r.a.createElement("span",null,e.title)),r.a.createElement("p",null,e.desc)))))})):r.a.createElement("div",null,r.a.createElement("h1",null,"Sorry! No Results Found")),e=r.a.createElement("div",null,r.a.createElement("div",{className:"clssearch-boxrp"},r.a.createElement("input",{placeholder:"Search Ingredients...",className:"clssearch-txt",value:this.state.query,onChange:this.handleQueryChange,onKeyPress:function(e){"Enter"!==e.key&&"Return"!==e.key||t.reloadResults()}}),r.a.createElement("button",{className:"clssearch-boxClose",onClick:this.handleCloseClick},"x")),r.a.createElement(i.b,{to:{pathname:"/",query:{query:this.state.query}},style:{hidden:!0},id:"resulttest1"}),r.a.createElement("h2",null," Search results for : ",this.state.query),r.a.createElement("hr",null));return r.a.createElement("div",null,null,e,n)}}]),t}(a.Component);var S=function(){return Object(a.useEffect)((function(){fetch("/").then((function(e){return e.json().then((function(e){console.log(e)}))}))}),[]),r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:b}),r.a.createElement(s.a,{path:"/results",exact:!0,component:x}),r.a.createElement(s.a,{path:"",exact:!0,component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(69);l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.4e6d7d10.chunk.js.map