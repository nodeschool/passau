(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var SectionComponent = /** @class */function (_super) {
    __extends(SectionComponent, _super);
    function SectionComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SectionComponent;
}(_react2.default.PureComponent);
exports.default = SectionComponent;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TwitterIconSetup = exports.TwitterIcon = exports.PanelTwitterLink = exports.Panel = exports.Subtitle = exports.ParagraphEnd = exports.LineBreak = exports.MainTitle = exports.Card = exports.Half = exports.Title = exports.Columns = exports.Column = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Columns = function Columns(props) {
    return _react2.default.createElement(
        "div",
        { className: "columns" },
        props.children
    );
};
var Column = function Column(props) {
    return _react2.default.createElement(
        "div",
        { className: "column" },
        props.children
    );
};
var Title = function Title(props) {
    return _react2.default.createElement(
        "h1",
        { className: "title has-text-centered" },
        props.children
    );
};
var Subtitle = function Subtitle(props) {
    return _react2.default.createElement(
        "h2",
        { className: "title" },
        props.children
    );
};
var MainTitle = function MainTitle(props) {
    return _react2.default.createElement(
        "h1",
        { className: "title is-2 has-text-centered" },
        props.children
    );
};
var Half = function Half(props) {
    return _react2.default.createElement(
        "div",
        { className: "columns is-centered" },
        _react2.default.createElement(
            "div",
            { className: "column is-half-desktop" },
            props.children
        )
    );
};
var Card = function Card(props) {
    if (typeof props.header === "string") {
        return _react2.default.createElement(
            "div",
            { className: "card" },
            _react2.default.createElement(
                "header",
                { className: "card-header-title" },
                _react2.default.createElement(
                    "p",
                    null,
                    props.header
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "card-content" },
                props.children
            )
        );
    } else {
        return _react2.default.createElement(
            "div",
            { className: "card" },
            _react2.default.createElement(
                "header",
                { className: "card-header" },
                props.header
            ),
            _react2.default.createElement(
                "div",
                { className: "card-content" },
                props.children
            )
        );
    }
};
var Panel = function Panel(props) {
    if (typeof props.header === "string") {
        return _react2.default.createElement(
            "div",
            { className: "panel" },
            _react2.default.createElement(
                "div",
                { className: "panel-heading has-text-centered" },
                props.header
            ),
            props.children
        );
    } else {
        return _react2.default.createElement(
            "div",
            { className: "panel" },
            _react2.default.createElement(
                "div",
                { className: "panel-heading" },
                props.header
            ),
            props.children
        );
    }
};
var PanelTwitterLink = function PanelTwitterLink(props) {
    return _react2.default.createElement(
        "a",
        { className: "panel-block", href: props.link },
        _react2.default.createElement(TwitterIcon, null),
        props.children
    );
};
var LineBreak = function LineBreak(props) {
    return _react2.default.createElement("br", null);
};
var ParagraphEnd = function ParagraphEnd(props) {
    return _react2.default.createElement("p", null);
};
var TwitterIcon = function TwitterIcon(props) {
    return _react2.default.createElement(
        "span",
        { className: "panel-icon", role: "presentation" },
        _react2.default.createElement(
            "svg",
            { height: "100%", width: "100%" },
            _react2.default.createElement("use", { xlinkHref: "#icon-twitter" })
        )
    );
};
var TwitterIconSetup = function TwitterIconSetup(props) {
    return _react2.default.createElement(
        "svg",
        { style: { display: 'none' } },
        _react2.default.createElement(
            "symbol",
            { id: "icon-twitter", viewBox: "0 0 24 24" },
            _react2.default.createElement("path", { fill: "#000000", d: "M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" })
        )
    );
};
exports.Column = Column;
exports.Columns = Columns;
exports.Title = Title;
exports.Half = Half;
exports.Card = Card;
exports.MainTitle = MainTitle;
exports.LineBreak = LineBreak;
exports.ParagraphEnd = ParagraphEnd;
exports.Subtitle = Subtitle;
exports.Panel = Panel;
exports.PanelTwitterLink = PanelTwitterLink;
exports.TwitterIcon = TwitterIcon;
exports.TwitterIconSetup = TwitterIconSetup;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Navigation = /** @class */function (_super) {
    __extends(Navigation, _super);
    function Navigation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { open: false };
        _this.toggleMenu = _this.toggleMenu.bind(_this);
        return _this;
    }
    Navigation.prototype.toggleMenu = function () {
        this.setState(function (prevState) {
            return { open: !prevState.open };
        });
    };
    Navigation.prototype.render = function () {
        return _react2.default.createElement(
            'nav',
            { className: 'navbar', role: 'navigation' },
            _react2.default.createElement(
                'div',
                { className: 'navbar-brand' },
                _react2.default.createElement(
                    'a',
                    { className: 'navbar-item', href: '/' },
                    'nodeschool Passau'
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'navbar-burger', onClick: this.toggleMenu, 'aria-label': 'Open menu' },
                    _react2.default.createElement(
                        'svg',
                        { className: 'fill-parent', viewBox: '0 0 24 24' },
                        _react2.default.createElement('path', { fill: '#000000', d: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' })
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { id: 'navMenu', className: "navbar-menu" + (this.state.open ? " is-active" : "") },
                _react2.default.createElement(
                    'div',
                    { className: 'navbar-end' },
                    this.props.paths.map(function (path) {
                        return _react2.default.createElement(
                            _reactStatic.Link,
                            { key: path[2], className: 'navbar-item', to: path[1] },
                            path[0]
                        );
                    })
                )
            )
        );
    };
    return Navigation;
}(_react2.default.PureComponent);
exports.default = Navigation;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Header = /** @class */function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return _react2.default.createElement(
            "header",
            { id: "header" },
            _react2.default.createElement("img", { role: "presentation", src: __webpack_require__(15), alt: "nodeschool passau avatar" }),
            _react2.default.createElement(
                "div",
                { className: "hero" },
                _react2.default.createElement(
                    "div",
                    { className: "hero-body" },
                    _react2.default.createElement(
                        "div",
                        { className: "container has-text-centered" },
                        _react2.default.createElement(
                            "h1",
                            { className: "title" },
                            "Nodeschool Passau"
                        )
                    )
                )
            )
        );
    };
    return Header;
}(_react2.default.PureComponent);
exports.default = Header;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var SectionRenderer = /** @class */function (_super) {
    __extends(SectionRenderer, _super);
    function SectionRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionRenderer.prototype.render = function () {
        var className = "hero";
        if (this.props.isInfo) className = className + " is-info";
        var Content = this.props.toRender;
        return _react2.default.createElement(
            "section",
            { id: this.props.toRender.id, className: className },
            _react2.default.createElement(
                "div",
                { className: "hero-body container" },
                _react2.default.createElement(Content, null)
            )
        );
    };
    return SectionRenderer;
}(_react2.default.PureComponent);
exports.default = SectionRenderer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Footer = /** @class */function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return _react2.default.createElement(
            "footer",
            { className: "footer" },
            _react2.default.createElement(
                "div",
                { className: "container" },
                _react2.default.createElement(
                    "div",
                    { className: "content has-text-centered" },
                    _react2.default.createElement(
                        "p",
                        null,
                        "thanks for: the great ",
                        ' ',
                        _react2.default.createElement(
                            "a",
                            { href: "https://materialdesignicons.com/" },
                            "Material Design Icons"
                        ),
                        " | the awesome ",
                        ' ',
                        _react2.default.createElement(
                            "a",
                            { href: "https://commons.wikimedia.org/w/index.php?curid=16192765", title: "by High Contrast - Eigenes Werk, CC BY 3.0 de" },
                            "Passau picture"
                        )
                    )
                )
            )
        );
    };
    return Footer;
}(_react2.default.PureComponent);
exports.default = Footer;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(10);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component (for static rendering)
exports.default = _App2.default;
// Render your app

// Your top level component

if (typeof document !== "undefined") {
    var renderMethod_1 =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;
    var render_1 = function render_1(Comp) {
        renderMethod_1(_react2.default.createElement(
            _reactHotLoader.AppContainer,
            null,
            _react2.default.createElement(Comp, null)
        ), document.getElementById("root"));
    };
    // Render!
    render_1(_App2.default);
    // Hot Module Replacement
    if (false) {
        module.hot.accept("./App", function () {
            render_1(require("./App")["default"]);
        });
    }
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(7);

var _reactStaticRoutes = __webpack_require__(12);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css" }),
      _react2.default.createElement(
        "title",
        null,
        "NodeSchool Passau"
      )
    ),
    _react2.default.createElement(
      _reactStatic.Router,
      null,
      _react2.default.createElement(
        "div",
        { className: "content" },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(13);

var _Home = __webpack_require__(14);

var _Home2 = _interopRequireDefault(_Home);

var _BeginnersTrack = __webpack_require__(27);

var _BeginnersTrack2 = _interopRequireDefault(_BeginnersTrack);

var _LearningMolecules = __webpack_require__(31);

var _LearningMolecules2 = _interopRequireDefault(_LearningMolecules);

var _ = __webpack_require__(35);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
// Template Imports

// Template Map
var templateMap = {
    t_0: _Home2.default,
    t_1: _BeginnersTrack2.default,
    t_2: _LearningMolecules2.default,
    t_3: _2.default
};
// Template Tree
var templateTree = { c: { "404": { t: "t_3" }, "/": { t: "t_0" }, "BeginnersTrack": { t: "t_1" }, "LearningMolecules": { t: "t_2" } } };
// Get template for given path
var getComponentForPath = function getComponentForPath(path) {
    var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
        return d;
    });
    var cursor = templateTree;
    try {
        parts.forEach(function (part) {
            cursor = cursor.c[part];
        });
        return templateMap[cursor.t];
    } catch (e) {
        return false;
    }
};
var Routes = /** @class */function (_super) {
    __extends(Routes, _super);
    function Routes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Routes.prototype.render = function () {
        var _a = this.props,
            Comp = _a.component,
            render = _a.render,
            children = _a.children;
        var renderProps = {
            templateMap: templateMap,
            templateTree: templateTree,
            getComponentForPath: getComponentForPath
        };
        if (Comp) {
            return _react2.default.createElement(Comp, renderProps);
        }
        if (render || children) {
            return (render || children)(renderProps);
        }
        // This is the default auto-routing renderer
        return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
                var Comp = getComponentForPath(props.location.pathname);
                if (!Comp) {
                    Comp = getComponentForPath('404');
                }
                return Comp && _react2.default.createElement(Comp, props);
            } });
    };
    return Routes;
}(_react.Component);
exports.default = Routes;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navigation = __webpack_require__(3);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Header = __webpack_require__(4);

var _Header2 = _interopRequireDefault(_Header);

var _SectionRenderer = __webpack_require__(5);

var _SectionRenderer2 = _interopRequireDefault(_SectionRenderer);

var _Footer = __webpack_require__(6);

var _Footer2 = _interopRequireDefault(_Footer);

var _HomeSections = __webpack_require__(16);

var _HomeSections2 = _interopRequireDefault(_HomeSections);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Home = /** @class */function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Navigation2.default, { paths: _HomeSections2.default.filter(function (data) {
                    return data.title != undefined;
                }).map(function (data) {
                    return [data.title, "#" + data.id, data.id];
                }) }),
            _react2.default.createElement(_Header2.default, null),
            _HomeSections2.default.map(function (data, index) {
                return _react2.default.createElement(_SectionRenderer2.default, { toRender: data, isInfo: index % 2 == 0, key: index });
            }),
            _react2.default.createElement(_Footer2.default, null)
        );
    };
    return Home;
}(_react2.default.PureComponent);
exports.default = Home;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/nodeschool_passau.0c5974c7.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _About = __webpack_require__(17);

var _About2 = _interopRequireDefault(_About);

var _Events = __webpack_require__(21);

var _Events2 = _interopRequireDefault(_Events);

var _Welcome = __webpack_require__(22);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Agenda = __webpack_require__(23);

var _Agenda2 = _interopRequireDefault(_Agenda);

var _CodeOfConduct = __webpack_require__(24);

var _CodeOfConduct2 = _interopRequireDefault(_CodeOfConduct);

var _Installation = __webpack_require__(25);

var _Installation2 = _interopRequireDefault(_Installation);

var _Contacts = __webpack_require__(26);

var _Contacts2 = _interopRequireDefault(_Contacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeSections = [_Welcome2.default, _About2.default, _Events2.default, _Agenda2.default, _CodeOfConduct2.default, _Installation2.default, _Contacts2.default];
exports.default = HomeSections;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(1);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var About = /** @class */function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return _react2.default.createElement(
            _Utility.Columns,
            null,
            _react2.default.createElement(
                _Utility.Column,
                null,
                _react2.default.createElement('img', { src: __webpack_require__(18) }),
                _react2.default.createElement(
                    _Utility.Title,
                    null,
                    'learn to code'
                ),
                'You would like to get into programming and web technologies with JavaScript and Node.js? Or you are just curious what that is all about? Then the ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://nodeschool.io' },
                    'nodeschool.io'
                ),
                ' lessons are for you!'
            ),
            _react2.default.createElement(
                _Utility.Column,
                null,
                _react2.default.createElement('img', { src: __webpack_require__(19) }),
                _react2.default.createElement(
                    _Utility.Title,
                    null,
                    'at your own pace'
                ),
                'Choose from the wide variety of freely available lessons on nodeschool.io and go through them at your pace. If working face-to-face with other interested people suits you more, attend on of our local workshops!'
            ),
            _react2.default.createElement(
                _Utility.Column,
                null,
                _react2.default.createElement('img', { src: __webpack_require__(20) }),
                _react2.default.createElement(
                    _Utility.Title,
                    null,
                    'for everybody'
                ),
                'We love to code and like to spread this feeling to everyone who is interested! Therefore we try to make workshope be an awesome experience for everyone! Please respect our ',
                _react2.default.createElement(
                    'a',
                    { href: '#conduct' },
                    'Code of Conduct'
                ),
                ' to help us achieve this.'
            )
        );
    };
    About.id = "about";
    About.title = "About";
    return About;
}(_Section2.default);
exports.default = About;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIA0KICAgIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE0LDE3SDdWMTVIMTRNMTcsMTNIN1YxMUgxN00xNyw5SDdWN0gxN00xOSwzSDVDMy44OSwzIDMsMy44OSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjVDMjEsMy44OSAyMC4xLDMgMTksM1oiPjwvcGF0aD4NCjwvc3ZnPg=="

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIA0KICAgIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTIuODEsMTQuMTJMNS42NCwxMS4yOUw4LjE3LDEwLjc5QzExLjM5LDYuNDEgMTcuNTUsNC4yMiAxOS43OCw0LjIyQzE5Ljc4LDYuNDUgMTcuNTksMTIuNjEgMTMuMjEsMTUuODNMMTIuNzEsMTguMzZMOS44OCwyMS4xOUw5LjE3LDE3LjY2QzcuNzYsMTcuNjYgNy43NiwxNy42NiA3LjA1LDE2Ljk1QzYuMzQsMTYuMjQgNi4zNCwxNi4yNCA2LjM0LDE0LjgzTDIuODEsMTQuMTJNNS42NCwxNi45NUw3LjA1LDE4LjM2TDQuMzksMjEuMDNIMi45N1YxOS42MUw1LjY0LDE2Ljk1TTQuMjIsMTUuNTRMNS40NiwxNS43MUwzLDE4LjE2VjE2Ljc0TDQuMjIsMTUuNTRNOC4yOSwxOC41NEw4LjQ2LDE5Ljc4TDcuMjYsMjFINS44NEw4LjI5LDE4LjU0TTEzLDkuNUExLjUsMS41IDAgMCwwIDExLjUsMTFBMS41LDEuNSAwIDAsMCAxMywxMi41QTEuNSwxLjUgMCAwLDAgMTQuNSwxMUExLjUsMS41IDAgMCwwIDEzLDkuNVoiPjwvcGF0aD4NCjwvc3ZnPg=="

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIA0KICAgIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTEyLjEsMTguNTVMMTIsMTguNjVMMTEuODksMTguNTVDNy4xNCwxNC4yNCA0LDExLjM5IDQsOC41QzQsNi41IDUuNSw1IDcuNSw1QzkuMDQsNSAxMC41NCw2IDExLjA3LDcuMzZIMTIuOTNDMTMuNDYsNiAxNC45Niw1IDE2LjUsNUMxOC41LDUgMjAsNi41IDIwLDguNUMyMCwxMS4zOSAxNi44NiwxNC4yNCAxMi4xLDE4LjU1TTE2LjUsM0MxNC43NiwzIDEzLjA5LDMuODEgMTIsNS4wOEMxMC45MSwzLjgxIDkuMjQsMyA3LjUsM0M0LjQyLDMgMiw1LjQxIDIsOC41QzIsMTIuMjcgNS40LDE1LjM2IDEwLjU1LDIwLjAzTDEyLDIxLjM1TDEzLjQ1LDIwLjAzQzE4LjYsMTUuMzYgMjIsMTIuMjcgMjIsOC41QzIyLDUuNDEgMTkuNTgsMyAxNi41LDNaIj48L3BhdGg+DQo8L3N2Zz4="

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(1);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Events = /** @class */function (_super) {
    __extends(Events, _super);
    function Events() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Events.prototype.render = function () {
        return _react2.default.createElement(
            _Utility.Half,
            null,
            _react2.default.createElement(
                _Utility.Title,
                null,
                'Upcoming events'
            ),
            _react2.default.createElement(
                _Utility.Card,
                { header: 'nothing planned at the moment' },
                'Stay tuned'
            )
        );
    };
    Events.id = "events";
    Events.title = "Events";
    return Events;
}(_Section2.default);
exports.default = Events;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(1);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Welcome = /** @class */function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Welcome.prototype.render = function () {
        return _react2.default.createElement(
            _Utility.MainTitle,
            null,
            "Welcome to the nodeschool Passau!"
        );
    };
    Welcome.id = "welcome";
    Welcome.title = undefined;
    return Welcome;
}(_Section2.default);
exports.default = Welcome;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(1);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Agenda = /** @class */function (_super) {
    __extends(Agenda, _super);
    function Agenda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Agenda.prototype.render = function () {
        return _react2.default.createElement(
            _Utility.Half,
            null,
            _react2.default.createElement(
                _Utility.Title,
                null,
                'Workshop Agenda'
            ),
            _react2.default.createElement(
                'p',
                null,
                'The workshops we host embrace the spirit of letting you learn at your own pace.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'During registration for a workshop you can choose whether you\'d like to attend the ',
                _react2.default.createElement(
                    'a',
                    { href: 'BeginnersTrack' },
                    'Beginner\'s Track'
                ),
                ' or whether you\'d like to work on one of the ',
                _react2.default.createElement(
                    'a',
                    { href: 'LearningMolecules' },
                    'Learning Molecules'
                ),
                ' or pick from the lessons provided on ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://nodeschool.io' },
                    'nodeschool.io'
                ),
                '.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'The mentors lend a helping hand with getting wifi access, setting up node and the nodeschool.io lessons and any questions you have regarding JavaScript or Node.js.'
            )
        );
    };
    Agenda.id = "agenda";
    Agenda.title = "Workshop Agenda";
    return Agenda;
}(_Section2.default);
exports.default = Agenda;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(1);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var CodeOfConduct = /** @class */function (_super) {
    __extends(CodeOfConduct, _super);
    function CodeOfConduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodeOfConduct.prototype.render = function () {
        return _react2.default.createElement(
            _Utility.Half,
            null,
            _react2.default.createElement(
                _Utility.Title,
                null,
                'Code of Conduct'
            ),
            'We, the organizers of Nodeschool Passau, are dedicated to providing a harassment-free community for everyone, regardless of sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs. We do not tolerate harassment of community members in any form. Participants violating these rules may be sanctioned or expelled from the community at the discretion of the organizers of Nodeschool Passau. ',
            _react2.default.createElement(_Utility.ParagraphEnd, null),
            'Harassment includes offensive verbal or written comments related to sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs, deliberate intimidation, threats, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Sexual language and imagery is not appropriate for any events at Nodeschool Passau meetups or in any related communication channels. Community members asked to stop any harassing behavior are expected to comply immediately. Sponsors and presenters are also subject to the anti-harassment policy.',
            _react2.default.createElement(_Utility.ParagraphEnd, null),
            'If a community member engages in harassing behavior, the organizers of Nodeschool Passau may take any action they deem appropriate, including warning the offender or expulsion from the community. If you are being harassed, notice that someone else is being harassed, or have any concerns, please contact an organizer immediately.',
            _react2.default.createElement(_Utility.ParagraphEnd, null),
            'If you have questions or feedback about this Code of Conduct please contact one of the ',
            _react2.default.createElement(
                'a',
                { href: '#contacts' },
                'organizers'
            ),
            '.',
            _react2.default.createElement(_Utility.ParagraphEnd, null),
            'The organizers of the above communities developed this Code of Conduct to govern their respective events and communication channels. We used ',
            _react2.default.createElement(
                'a',
                { href: 'http://www.meetup.com/pdxpython/pages/Code_of_Conduct/' },
                'PDX Python\'s anti-harassment policy'
            ),
            'and the ',
            _react2.default.createElement(
                'a',
                { href: 'http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy' },
                'Geek Feminism Conference anti-harassment policy'
            ),
            ' as a starting point. This Code of Conduct, like its inspirations, is licensed under the ',
            _react2.default.createElement(
                'a',
                { href: 'http://creativecommons.org/publicdomain/zero/1.0/' },
                'Creative Commons Zero license.'
            )
        );
    };
    CodeOfConduct.id = "conduct";
    CodeOfConduct.title = "Code of Conduct";
    return CodeOfConduct;
}(_Section2.default);
exports.default = CodeOfConduct;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(1);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Installation = /** @class */function (_super) {
    __extends(Installation, _super);
    function Installation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Installation.prototype.render = function () {
        return _react2.default.createElement(
            _Utility.Half,
            null,
            _react2.default.createElement(
                _Utility.Title,
                null,
                'Installation'
            ),
            _react2.default.createElement(
                _Utility.Subtitle,
                null,
                'nvm'
            ),
            'We recommend that you install a node version manager such that you can upgrade to new versions easily:',
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'Windows: ',
                    _react2.default.createElement(
                        'a',
                        { href: 'https://github.com/coreybutler/nvm-windows' },
                        'nvm-windows'
                    ),
                    '. Download nvm-setup.zip from the releases page, extract and run the installer.'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'Linux: ',
                    _react2.default.createElement(
                        'a',
                        { href: 'https://github.com/creationix/nvm' },
                        'nvm'
                    )
                )
            ),
            'If you are behind a corporate proxy, open a command-line prompt and configure the proxy with',
            _react2.default.createElement(
                'code',
                null,
                'nvm proxy <your-proxy>'
            ),
            '. ',
            _react2.default.createElement(_Utility.ParagraphEnd, null),
            'An alternative to using nvm-windows is ',
            _react2.default.createElement(
                'a',
                { href: 'https://chocolatey.org/' },
                'Chocolatey'
            ),
            '.',
            _react2.default.createElement(
                _Utility.Subtitle,
                null,
                'node'
            ),
            'Open a command-line prompt in admin mode and use nvm to install the latest version of node and npm available with nvm with ',
            _react2.default.createElement(
                'code',
                null,
                'nvm install 8.9.1'
            ),
            ' followed by ',
            _react2.default.createElement(
                'code',
                null,
                'nvm use 8.9.1'
            ),
            '.',
            _react2.default.createElement(_Utility.ParagraphEnd, null),
            'Check that the installation was successfuly with ',
            _react2.default.createElement(
                'code',
                null,
                'node --version'
            ),
            '.',
            _react2.default.createElement(_Utility.ParagraphEnd, null),
            _react2.default.createElement(
                _Utility.Subtitle,
                null,
                'yarn'
            ),
            'As package manager, we recommend using ',
            _react2.default.createElement(
                'a',
                { href: 'https://yarnpkg.com' },
                'yarn'
            ),
            '. Install it from the official website or via chocolatey. If your are behind a corporate proxy, configure yarn to use the proxy with ',
            _react2.default.createElement(
                'code',
                null,
                'yarn config set proxy <your-proxy>'
            ),
            ' and',
            _react2.default.createElement(
                'code',
                null,
                'yarn config set https-proxy <your-proxy>'
            ),
            '.',
            _react2.default.createElement(
                'p',
                null,
                'If you\'d rather stick to npm, don\'t forget to configure this for usage with your corporate\'s proxy, if needed.'
            ),
            _react2.default.createElement(
                _Utility.Subtitle,
                null,
                'Visual Studio Code'
            ),
            'As code editor we recommend ',
            _react2.default.createElement(
                'a',
                { href: 'https://code.visualstudio.com/' },
                'Visual Studio Code'
            ),
            ', a free and open source IDE available for multiple platforms.',
            _react2.default.createElement(
                _Utility.Subtitle,
                null,
                'Your first nodeschool workshopper'
            ),
            'Install your first workshopper with e.g. ',
            _react2.default.createElement(
                'code',
                null,
                'yarn global add javascripting'
            ),
            '. ',
            _react2.default.createElement(_Utility.ParagraphEnd, null),
            'Then create a new folder "javascripting" somewhere on our computer and open the folder in Visual Studio Code. Open a terminal in Visual Studio Code (press F1 to open the search bar, type in "terminal" and select the option to toggle the integrated terminal). In the terminal, type ',
            _react2.default.createElement(
                'kbd',
                null,
                'javascripting'
            ),
            ' and follow the instructions.'
        );
    };
    Installation.id = "installation";
    Installation.title = "Installation";
    return Installation;
}(_Section2.default);
exports.default = Installation;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(1);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Contacts = /** @class */function (_super) {
    __extends(Contacts, _super);
    function Contacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contacts.prototype.render = function () {
        return _react2.default.createElement(
            _Utility.Half,
            null,
            _react2.default.createElement(
                _Utility.Title,
                null,
                'Contacts'
            ),
            _react2.default.createElement(_Utility.TwitterIconSetup, null),
            _react2.default.createElement(
                _Utility.Panel,
                { header: 'nodeschool Passau organizers' },
                _react2.default.createElement(
                    _Utility.PanelTwitterLink,
                    { link: 'https://twitter.com/huberv84' },
                    'Valentin Huber'
                ),
                _react2.default.createElement(
                    _Utility.PanelTwitterLink,
                    { link: 'https://twitter.com/otmarjatsch' },
                    'Otmar Jatsch'
                ),
                _react2.default.createElement(
                    _Utility.PanelTwitterLink,
                    { link: 'https://twitter.com/Koenix83' },
                    'Helmut K\xF6nigseder'
                )
            )
        );
    };
    Contacts.id = "contact";
    Contacts.title = "Contacts";
    return Contacts;
}(_Section2.default);
exports.default = Contacts;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navigation = __webpack_require__(3);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Header = __webpack_require__(4);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(6);

var _Footer2 = _interopRequireDefault(_Footer);

var _beginnersTrackSections = __webpack_require__(28);

var _beginnersTrackSections2 = _interopRequireDefault(_beginnersTrackSections);

var _SectionRenderer = __webpack_require__(5);

var _SectionRenderer2 = _interopRequireDefault(_SectionRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var BeginnersTrackPage = /** @class */function (_super) {
    __extends(BeginnersTrackPage, _super);
    function BeginnersTrackPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BeginnersTrackPage.prototype.render = function () {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Navigation2.default, { paths: _beginnersTrackSections2.default.filter(function (data) {
                    return data.title != undefined;
                }).map(function (data) {
                    return [data.title, "#" + data.id, data.id];
                }) }),
            _react2.default.createElement(_Header2.default, null),
            _beginnersTrackSections2.default.map(function (data, index) {
                return _react2.default.createElement(_SectionRenderer2.default, { toRender: data, isInfo: index % 2 == 0, key: index });
            }),
            _react2.default.createElement(_Footer2.default, null)
        );
    };
    return BeginnersTrackPage;
}(_react2.default.PureComponent);
exports.default = BeginnersTrackPage;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Intro = __webpack_require__(29);

var _Intro2 = _interopRequireDefault(_Intro);

var _Agenda = __webpack_require__(30);

var _Agenda2 = _interopRequireDefault(_Agenda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sections = [_Intro2.default, _Agenda2.default];
exports.default = Sections;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(1);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var About = /** @class */function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return _react2.default.createElement(
            _Utility.Half,
            null,
            _react2.default.createElement(
                _Utility.Title,
                null,
                'Introduction'
            ),
            _react2.default.createElement(
                'p',
                null,
                'When you are starting out with JavaScript development, you need to know quite a few things:'
            ),
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'installing different tools'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'configuring environment variables'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'working with a command prompt (cmd, Powershell or Bash)'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'setting up a code editor or IDE'
                )
            ),
            _react2.default.createElement(
                'p',
                null,
                'In order to get you up and running quickly, we devised the ',
                _react2.default.createElement(
                    'b',
                    null,
                    'Beginner\'s Track'
                ),
                '.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This is an own guided session where one of our mentors will lead you through setting up everything you need and the first two workshopper modules.'
            )
        );
    };
    About.id = "intro";
    About.title = "Introduction";
    return About;
}(_Section2.default);
exports.default = About;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(1);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Agenda = /** @class */function (_super) {
    __extends(Agenda, _super);
    function Agenda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Agenda.prototype.render = function () {
        return _react2.default.createElement(
            _Utility.Half,
            null,
            _react2.default.createElement(
                _Utility.Title,
                null,
                'Beginner\'s Track Agenda'
            ),
            _react2.default.createElement(
                'p',
                null,
                'The agenda for the beginner\'s track session is:'
            ),
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'Setup',
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'setting up nvm, node and yarn (+ proxy settings)'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'checking the tool setup'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'setting up Visual Studio Code (VSC) (+ proxy settings)'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'working with the command prompt from within VSC'
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'the ',
                    _react2.default.createElement(
                        'a',
                        { href: 'https://github.com/workshopper/javascripting' },
                        'javascripting'
                    ),
                    ' workshopper'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'the ',
                    _react2.default.createElement(
                        'a',
                        { href: 'https://github.com/workshopper/learnyounode' },
                        'learnyounode'
                    ),
                    ' workshopper'
                )
            )
        );
    };
    Agenda.id = "agenda";
    Agenda.title = "Agenda";
    return Agenda;
}(_Section2.default);
exports.default = Agenda;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navigation = __webpack_require__(3);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Header = __webpack_require__(4);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(6);

var _Footer2 = _interopRequireDefault(_Footer);

var _learningMoleculeSections = __webpack_require__(32);

var _learningMoleculeSections2 = _interopRequireDefault(_learningMoleculeSections);

var _SectionRenderer = __webpack_require__(5);

var _SectionRenderer2 = _interopRequireDefault(_SectionRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var LearningMoleculesPage = /** @class */function (_super) {
    __extends(LearningMoleculesPage, _super);
    function LearningMoleculesPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LearningMoleculesPage.prototype.render = function () {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Navigation2.default, { paths: _learningMoleculeSections2.default.filter(function (data) {
                    return data.title != undefined;
                }).map(function (data) {
                    return [data.title, "#" + data.id, data.id];
                }) }),
            _react2.default.createElement(_Header2.default, null),
            _learningMoleculeSections2.default.map(function (data, index) {
                return _react2.default.createElement(_SectionRenderer2.default, { toRender: data, isInfo: index % 2 == 0, key: index });
            }),
            _react2.default.createElement(_Footer2.default, null)
        );
    };
    return LearningMoleculesPage;
}(_react2.default.PureComponent);
exports.default = LearningMoleculesPage;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Intro = __webpack_require__(33);

var _Intro2 = _interopRequireDefault(_Intro);

var _molecule_jsonServer = __webpack_require__(34);

var _molecule_jsonServer2 = _interopRequireDefault(_molecule_jsonServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sections = [_Intro2.default, _molecule_jsonServer2.default];
exports.default = Sections;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(1);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var About = /** @class */function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return _react2.default.createElement(
            _Utility.Half,
            null,
            _react2.default.createElement(
                _Utility.Title,
                null,
                'Learning Molecules'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Once you got started by attending a ',
                _react2.default.createElement(
                    'a',
                    { href: 'BeginnersTrack' },
                    'Beginner\'s Track'
                ),
                ' session, you may choose from any of the workshopper modules listed on the ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://nodeschool.org' },
                    'NodeSchool'
                ),
                ' page.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'In order to facilitate discussions with peers in a NodeSchool Passau workshop, we provide what we call "Learning Molecules" - ideas for tiny projects you may work on, instead of or in addition to the workshopper modules.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'In all NodeSchool Passau workshops, a mentor will present one of these Learning Molecules to introduce you to the main topics of the molecule.'
            )
        );
    };
    About.id = "intro";
    About.title = "Introduction";
    return About;
}(_Section2.default);
exports.default = About;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(1);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var Molecule = /** @class */function (_super) {
    __extends(Molecule, _super);
    function Molecule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Molecule.prototype.render = function () {
        return _react2.default.createElement(
            _Utility.Half,
            null,
            _react2.default.createElement(
                _Utility.Title,
                null,
                Molecule.title
            ),
            _react2.default.createElement(
                'p',
                null,
                'When you build a web app, you\'ll probably want to be able to demonstrate the app without writing a full-blown backend. ',
                _react2.default.createElement(
                    'a',
                    { href: 'https://github.com/typicode/json-server' },
                    'JSON Server'
                ),
                ' is an npm module which facilitates exactly this.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Steps:'
            ),
            _react2.default.createElement(
                'ol',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'create a new folder for this project'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'create a ',
                    _react2.default.createElement(
                        'code',
                        null,
                        'package.json'
                    ),
                    ' file by running ',
                    _react2.default.createElement(
                        'code',
                        null,
                        'yarn init -y'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'add JSON Server: ',
                    _react2.default.createElement(
                        'code',
                        null,
                        'yarn add json-server'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'add a script entry to your ',
                    _react2.default.createElement(
                        'code',
                        null,
                        'package.json'
                    ),
                    ': ',
                    _react2.default.createElement(
                        'code',
                        null,
                        '"scripts": ',
                        "{",
                        ' "start": "json-server --watch db.json" ',
                        "}"
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'Follow the post ',
                    _react2.default.createElement(
                        'a',
                        { href: 'https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d' },
                        'Create a REST API With JSON Server'
                    )
                )
            )
        );
    };
    Molecule.id = "json_server";
    Molecule.title = "Learning Molecule: JSON Server";
    return Molecule;
}(_Section2.default);
exports.default = Molecule;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            '404 - Oh no\'s! We couldn\'t find that page :('
        )
    );
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.d48f1646.js.map