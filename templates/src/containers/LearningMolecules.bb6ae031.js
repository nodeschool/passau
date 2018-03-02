webpackJsonp([1],{

/***/ 128:
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

/***/ 129:
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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(43);

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

/***/ 131:
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

/***/ 132:
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

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Intro = __webpack_require__(138);

var _Intro2 = _interopRequireDefault(_Intro);

var _molecule_jsonServer = __webpack_require__(139);

var _molecule_jsonServer2 = _interopRequireDefault(_molecule_jsonServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sections = [_Intro2.default, _molecule_jsonServer2.default];
exports.default = Sections;

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(128);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(129);

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
                    { href: '/BeginnersTrack' },
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

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(128);

var _Section2 = _interopRequireDefault(_Section);

var _Utility = __webpack_require__(129);

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

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navigation = __webpack_require__(130);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Header = __webpack_require__(131);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(132);

var _Footer2 = _interopRequireDefault(_Footer);

var _learningMoleculeSections = __webpack_require__(137);

var _learningMoleculeSections2 = _interopRequireDefault(_learningMoleculeSections);

var _SectionRenderer = __webpack_require__(133);

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

/***/ })

});
//# sourceMappingURL=LearningMolecules.bb6ae031.js.map