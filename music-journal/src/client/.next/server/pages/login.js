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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("M9PF");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Layout = ({
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3549934856"
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3549934856"
  }, ["html,body,body>div:first-child,div#__next,div#__next>div,div#__next>div>div{height:100%;background:linear-gradient(to bottom,#FFFFFF,#000000);margin:0;padding:0;}"])));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("O2ls");


/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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

/***/ "O2ls":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/initFirebase.js
var initFirebase = __webpack_require__("XIPB");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-bootstrap/"
var _ = __webpack_require__("pKrt");

// CONCATENATED MODULE: ./components/Login.js


var __jsx = external_react_default.a.createElement;






const Login = ({
  user
}) => {
  const handleSignIn = () => {
    router_default.a.push('/api/spotify-auth');
  }; //This should probably move into the nav


  const handleLogout = () => {
    initFirebase["a" /* auth */].signOut().then(function () {
      alert('Logout successful');
    }).catch(function (error) {
      alert('OOps something went wrong check your console'); // console.log(err);
    });
  };

  Object(external_react_["useEffect"])(() => {
    if (user) {
      router_default.a.push('/');
    }
  }, []);
  return __jsx(external_react_default.a.Fragment, null, __jsx(head_default.a, null, __jsx("title", {
    className: "jsx-1893462548"
  }, "Welcome to MusicJournal")), __jsx(_["Container"], null, __jsx(_["Row"], {
    className: "justify-content-center",
    xs: 12
  }, __jsx("h1", {
    className: "jsx-1893462548"
  }, "Welcome!")), __jsx(_["Row"], {
    className: "text-center"
  }, __jsx("p", {
    className: "jsx-1893462548"
  }, "MusicJournal is a different way of thinking about the music you love, how it relates to your memories, and how to categorize it.")), __jsx(_["Row"], {
    className: "justify-content-center"
  }, __jsx(_["Button"], {
    variant: "dark",
    onClick: () => handleSignIn()
  }, __jsx(_["Image"], {
    src: "spotify-logo.png",
    fluid: true
  }), "Login with Spotify to continue"), __jsx(_["Button"], {
    variant: "light",
    onClick: () => handleSignOut()
  }, "Logout"))), __jsx(style_default.a, {
    id: "1893462548"
  }, [".btn-dark{width:25%;}"]));
};

Login.getInitialProps = async ctx => {
  const user = initFirebase["b" /* firebase */].auth().currentUser;

  if (!user) {
    return {};
  }

  return {
    user
  };
};

/* harmony default export */ var components_Login = (Login);
// CONCATENATED MODULE: ./pages/login.js

var login_jsx = external_react_default.a.createElement;



const LoginPage = () => login_jsx(Layout["a" /* default */], null, login_jsx(components_Login, null));

/* harmony default export */ var login = __webpack_exports__["default"] = (LoginPage);

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });