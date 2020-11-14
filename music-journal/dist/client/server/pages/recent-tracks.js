module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "601x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_RecentTracks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wi6c");
/* harmony import */ var _src_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zhWm");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Dashboard = () => __jsx(_components_RecentTracks__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null);

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_withAuth__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Dashboard));

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("601x");


/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "M9PF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pKrt");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NavigationBar = () => {
  return __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    style: {
      position: 'absolute',
      top: '0'
    },
    className: "navbar-dark bg-dark",
    expand: "lg"
  }, __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    href: "#home"
  }, "MusicJournal"), __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
    id: "basic-navbar-nav"
  }, __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto"
  }, __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#home"
  }, "Home"), __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#link"
  }, "Link"), __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
    title: "Dropdown",
    id: "basic-nav-dropdown"
  }, __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    href: "#action/3.1"
  }, "Action"), __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    href: "#action/3.2"
  }, "Another action"), __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    href: "#action/3.3"
  }, "Something"), __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Divider, null), __jsx(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    href: "#action/3.4"
  }, "Separated link")))));
};

/* unused harmony default export */ var _unused_webpack_default_export = (NavigationBar);

/***/ }),

/***/ "XIPB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);


const config = {
  apiKey: "AIzaSyCBRa1iHoHk86KM8hSa-NvLtfqfOETQtG4",
  authDomain: "musicjournal-c3d3e.firebaseapp.com",
  databaseURL: "https://musicjournal-c3d3e.firebaseio.com",
  projectId: "musicjournal-c3d3e",
  storageBucket: "musicjournal-c3d3e.appspot.com",
  messagingSenderId: "57127666300"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "pKrt":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wi6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pKrt");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("M9PF");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //TODO: Move to services

const fetcher = url => fetch(url, {
  method: 'GET'
}).then(res => res.json());

const RecentTracks = ({
  firebaseToken
}) => {
  const {
    0: carouselIndex,
    1: setCarouselIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: recentTracks,
    1: setRecentTracks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: scaleDirection,
    1: setScaleDirection
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: scaleRatio,
    1: setScaleRatio
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => console.log('Hello, World!'), 3000);
    setInterval(() => {
      if (scaleRatio > .2) {
        setScaleDirection(-1);
      }

      if (scaleRatio < 0) {
        setScaleDirection(1);
      }

      setScaleRatio(scaleRatio + .00009 * scaleDirection);
      console.log(scaleRatio);
    }, 10);
    fetcher('/api/recent-tracks-from-spotify').then(json => {
      setRecentTracks(json);
    });
  }, []);

  const moveCarousel = index => {
    let nextIndex = carouselIndex + index;

    if (nextIndex < 0) {
      nextIndex = recentTracks.length - 1;
    }

    setCarouselIndex(nextIndex % recentTracks.length);
    console.log(carouselIndex);
  };

  return __jsx("div", {
    style: {
      overflowX: 'hidden',
      overflowY: 'hidden'
    }
  }, __jsx("div", {
    className: "backgroundDiv",
    style: recentTracks.length > 0 ? {
      background: `url(${recentTracks[carouselIndex].image.url}) center center/cover no-repeat fixed`,
      transform: `scale(${1 + scaleRatio}, ${1 + scaleRatio})`,
      height: '100vh'
    } : {}
  }, __jsx("div", {
    style: {
      height: '100%',
      width: '100%'
    }
  }, __jsx("div", {
    style: {
      height: '100%',
      float: 'left',
      width: '50%'
    },
    onClick: () => moveCarousel(-1)
  }), __jsx("div", {
    style: {
      height: '100%',
      float: 'left',
      width: '50%'
    },
    onClick: () => moveCarousel(1)
  }))), __jsx("p", {
    style: {
      background: 'black',
      color: 'white',
      fontSize: '50px',
      textAlign: 'center',
      opacity: '.8',
      position: 'absolute',
      bottom: '0'
    }
  }, recentTracks.length > 0 ? recentTracks[carouselIndex].description : ''));
};

RecentTracks.getInitialProps = async ctx => {
  const {
    firebaseToken
  } = cookies(ctx);

  if (!firebaseToken) {
    return {};
  }

  return {
    firebaseToken
  };
};

/* harmony default export */ __webpack_exports__["a"] = (RecentTracks);

/***/ }),

/***/ "zhWm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _initFirebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XIPB");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3i/4");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const withAuth = Component => {
  return class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(ctx) {
      const {
        firebaseToken
      } = next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx);

      if (!firebaseToken) {
        return {};
      }

      _initFirebase__WEBPACK_IMPORTED_MODULE_2__[/* firebase */ "b"].auth().signInWithCustomToken(firebaseToken).catch(function (error) {});
      const user = _initFirebase__WEBPACK_IMPORTED_MODULE_2__[/* firebase */ "b"].auth().currentUser;
      return {
        user
      };
    }

    constructor(props) {
      super(props);
      this.state = {
        status: 'LOADING'
      };
    }

    componentDidMount() {
      if (this.props.user) {
        this.setState({
          status: 'SIGNED_IN'
        });
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
      }
    }

    renderContent() {
      const {
        status
      } = this.state;

      if (status == 'LOADING') {
        return __jsx("h1", null, "Loading ......");
      } else if (status == 'SIGNED_IN') {
        return __jsx(Component, this.props);
      }
    }

    render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.renderContent());
    }

  };
};

/* harmony default export */ __webpack_exports__["a"] = (withAuth);

/***/ })

/******/ });