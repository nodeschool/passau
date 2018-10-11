webpackJsonp([2],{

/***/ 133:
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

/***/ 134:
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

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(45);

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

/***/ 136:
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

/***/ 137:
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

/***/ 138:
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

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Intro = __webpack_require__(140);

var _Intro2 = _interopRequireDefault(_Intro);

var _Agenda = __webpack_require__(141);

var _Agenda2 = _interopRequireDefault(_Agenda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sections = [_Intro2.default, _Agenda2.default];
exports.default = Sections;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(133);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(134);

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

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(133);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(134);

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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navigation = __webpack_require__(135);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Header = __webpack_require__(136);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(137);

var _Footer2 = _interopRequireDefault(_Footer);

var _beginnersTrackSections = __webpack_require__(139);

var _beginnersTrackSections2 = _interopRequireDefault(_beginnersTrackSections);

var _SectionRenderer = __webpack_require__(138);

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

/***/ })

});
//# sourceMappingURL=BeginnersTrack.bad0c56b.js.map