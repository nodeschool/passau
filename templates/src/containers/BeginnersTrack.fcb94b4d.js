webpackJsonp([2],{128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),l=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t}(a.default.PureComponent);t.default=o},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TwitterIconSetup=t.TwitterIcon=t.PanelTwitterLink=t.Panel=t.Subtitle=t.ParagraphEnd=t.LineBreak=t.MainTitle=t.Card=t.Half=t.Title=t.Columns=t.Column=void 0;var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),l=function(e){return a.default.createElement("div",{className:"columns"},e.children)},o=function(e){return a.default.createElement("div",{className:"column"},e.children)},u=function(e){return a.default.createElement("h1",{className:"title has-text-centered"},e.children)},i=function(e){return a.default.createElement("h2",{className:"title"},e.children)},c=function(e){return a.default.createElement("h1",{className:"title is-2 has-text-centered"},e.children)},f=function(e){return a.default.createElement("div",{className:"columns is-centered"},a.default.createElement("div",{className:"column is-half-desktop"},e.children))},d=function(e){return"string"==typeof e.header?a.default.createElement("div",{className:"card"},a.default.createElement("header",{className:"card-header-title"},a.default.createElement("p",null,e.header)),a.default.createElement("div",{className:"card-content"},e.children)):a.default.createElement("div",{className:"card"},a.default.createElement("header",{className:"card-header"},e.header),a.default.createElement("div",{className:"card-content"},e.children))},s=function(e){return"string"==typeof e.header?a.default.createElement("div",{className:"panel"},a.default.createElement("div",{className:"panel-heading has-text-centered"},e.header),e.children):a.default.createElement("div",{className:"panel"},a.default.createElement("div",{className:"panel-heading"},e.header),e.children)},p=function(e){return a.default.createElement("a",{className:"panel-block",href:e.link},a.default.createElement(_,null),e.children)},m=function(e){return a.default.createElement("br",null)},h=function(e){return a.default.createElement("p",null)},_=function(e){return a.default.createElement("span",{className:"panel-icon",role:"presentation"},a.default.createElement("svg",{height:"100%",width:"100%"},a.default.createElement("use",{xlinkHref:"#icon-twitter"})))},y=function(e){return a.default.createElement("svg",{style:{display:"none"}},a.default.createElement("symbol",{id:"icon-twitter",viewBox:"0 0 24 24"},a.default.createElement("path",{fill:"#000000",d:"M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"})))};t.Column=o,t.Columns=l,t.Title=u,t.Half=f,t.Card=d,t.MainTitle=c,t.LineBreak=m,t.ParagraphEnd=h,t.Subtitle=i,t.Panel=s,t.PanelTwitterLink=p,t.TwitterIcon=_,t.TwitterIconSetup=y},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),l=n(43),o=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(e){function t(t){var n=e.call(this,t)||this;return n.state={open:!1},n.toggleMenu=n.toggleMenu.bind(n),n}return o(t,e),t.prototype.toggleMenu=function(){this.setState(function(e){return{open:!e.open}})},t.prototype.render=function(){return a.default.createElement("nav",{className:"navbar",role:"navigation"},a.default.createElement("div",{className:"navbar-brand"},a.default.createElement("a",{className:"navbar-item",href:"/"},"nodeschool Passau"),a.default.createElement("button",{className:"navbar-burger",onClick:this.toggleMenu,"aria-label":"Open menu"},a.default.createElement("svg",{className:"fill-parent",viewBox:"0 0 24 24"},a.default.createElement("path",{fill:"#000000",d:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"})))),a.default.createElement("div",{id:"navMenu",className:"navbar-menu"+(this.state.open?" is-active":"")},a.default.createElement("div",{className:"navbar-end"},this.props.paths.map(function(e){return a.default.createElement(l.Link,{key:e[2],className:"navbar-item",to:e[1]},e[0])}))))},t}(a.default.PureComponent);t.default=u},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),l=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){return a.default.createElement("header",{id:"header"},a.default.createElement("div",{className:"hero"},a.default.createElement("div",{className:"hero-body"},a.default.createElement("div",{className:"container has-text-centered"},a.default.createElement("h1",{className:"title"},"Nodeschool Passau")))))},t}(a.default.PureComponent);t.default=o},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),l=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e="hero";this.props.isInfo&&(e+=" is-info");var t=this.props.toRender;return a.default.createElement("section",{id:this.props.toRender.id,className:e},a.default.createElement("div",{className:"hero-body container"},a.default.createElement(t,null)))},t}(a.default.PureComponent);t.default=o},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),l=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){return a.default.createElement("footer",{className:"footer"},a.default.createElement("div",{className:"container"},a.default.createElement("div",{className:"content has-text-centered"},a.default.createElement("p",null,"thanks for: the great "," ",a.default.createElement("a",{href:"https://materialdesignicons.com/"},"Material Design Icons")," | the awesome "," ",a.default.createElement("a",{href:"https://commons.wikimedia.org/w/index.php?curid=16192765",title:"by High Contrast - Eigenes Werk, CC BY 3.0 de"},"Passau picture")))))},t}(a.default.PureComponent);t.default=o},145:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(146),l=r(a),o=n(147),u=r(o),i=[l.default,u.default];t.default=i},146:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=r(a),o=n(128),u=r(o),i=n(129),c=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return l.default.createElement(i.Half,null,l.default.createElement(i.Title,null,"Introduction"),l.default.createElement("p",null,"When you are starting out with JavaScript development, you need to know quite a few things:"),l.default.createElement("ul",null,l.default.createElement("li",null,"installing different tools"),l.default.createElement("li",null,"configuring environment variables"),l.default.createElement("li",null,"working with a command prompt (cmd, Powershell or Bash)"),l.default.createElement("li",null,"setting up a code editor or IDE")),l.default.createElement("p",null,"In order to get you up and running quickly, we devised the ",l.default.createElement("b",null,"Beginner's Track"),"."),l.default.createElement("p",null,"This is an own guided session where one of our mentors will lead you through setting up everything you need and the first two workshopper modules."))},t.id="intro",t.title="Introduction",t}(u.default);t.default=f},147:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=r(a),o=n(128),u=r(o),i=n(129),c=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return l.default.createElement(i.Half,null,l.default.createElement(i.Title,null,"Beginner's Track Agenda"),l.default.createElement("p",null,"The agenda for the beginner's track session is:"),l.default.createElement("ul",null,l.default.createElement("li",null,"Setup",l.default.createElement("ul",null,l.default.createElement("li",null,"setting up nvm, node and yarn (+ proxy settings)"),l.default.createElement("li",null,"checking the tool setup"),l.default.createElement("li",null,"setting up Visual Studio Code (VSC) (+ proxy settings)"),l.default.createElement("li",null,"working with the command prompt from within VSC"))),l.default.createElement("li",null,"the ",l.default.createElement("a",{href:"https://github.com/workshopper/javascripting"},"javascripting")," workshopper"),l.default.createElement("li",null,"the ",l.default.createElement("a",{href:"https://github.com/workshopper/learnyounode"},"learnyounode")," workshopper")))},t.id="agenda",t.title="Agenda",t}(u.default);t.default=f},45:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=r(a),o=n(130),u=r(o),i=n(131),c=r(i),f=n(133),d=r(f),s=n(145),p=r(s),m=n(132),h=r(m),_=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _(t,e),t.prototype.render=function(){return l.default.createElement("div",null,l.default.createElement(u.default,{paths:p.default.filter(function(e){return void 0!=e.title}).map(function(e){return[e.title,"#"+e.id,e.id]})}),l.default.createElement(c.default,null),p.default.map(function(e,t){return l.default.createElement(h.default,{toRender:e,isInfo:t%2==0,key:t})}),l.default.createElement(d.default,null))},t}(l.default.PureComponent);t.default=y}});