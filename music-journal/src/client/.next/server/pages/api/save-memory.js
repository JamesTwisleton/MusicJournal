module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+6Rq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
async function handler(req, res) {
  if (!req.body.song || !req.body.memorytext) {
    return 'save memory request missing key data';
  }

  const firebaseAdmin = __webpack_require__("NWFc");

  const firebase = __webpack_require__("pNaP");

  const serviceAccount = __webpack_require__("oB7b");

  const {
    v4: uuid
  } = __webpack_require__("kNaX");

  if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
      databaseURL: "https://musicjournal-c3d3e.firebaseio.com"
    });
  }

  const user = firebase.auth().currentUser;
  const messageUuid = uuid();
  const saveSong = firebaseAdmin.database().ref(`/memory/${user.uid}/${messageUuid}/song`).set(req.body.song);
  const saveText = firebaseAdmin.database().ref(`/memory/${user.uid}/${messageUuid}/text`).set(req.body.memorytext);
  await Promise.all([saveSong, saveText]);
  res.writeHead(301, {
    Location: '/'
  }).end();
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+6Rq");


/***/ }),

/***/ "NWFc":
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "oB7b":
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"musicjournal-c3d3e\",\"private_key_id\":\"4f6b1c1e4f9f007a96fb3263bbdbfb2c8855c123\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCF8ns3edsqW1NU\\n/YG2RFSBRb7oTQYpzzWMTuTwzcPPpWvosu3PJPvkpd4nbBNYBj2W+G6YduqkLR+v\\n/c9M4sINhzm8A4hrTiURRParh6/cno29XJ5VQPI/AgWlZptbPjNuBs5/rEAjvRX3\\n8opjokzeA9lYWnmsb1KjJ04isuB17tDvXsx9VTkJw7eM9diS1APHXR74psQYuBG8\\nrmTDC6Bz7d6FHQq6FzgpscD56AXGwu8KkZ2cmbpaNz1Ja8M4YaK+kzh9cKpXQMKU\\nVsJE2kaC2K38ix2Ru89KLsKLq/dl/P2rnBboUlAhLIr00AI1F1RuY3tGq/EeoG8A\\nL5XOakmbAgMBAAECggEAEqPLwcyTUzGiRxGAG30mxVaPWoRddzP+n6fa9CeuOBct\\nDRTZQxpCc28hmxrPFlDIAVpRCaaCwJYG8ta/IlPr7TYEMsXLFiOpxN1z9irLrkfi\\nMZfR8Ms46su9PWcp92iQf58y3VF7G34UsIxv9a2AROUEOeddR0G2nj26AdoiokaG\\nAuQ6QDQBH045BtkEWF/cegtC8Kx60r4vjEOYOzL/OBi6ma+id3LrjC+LCKqC3Uny\\n5VJfZmY6CKEYT2PC3nQ513/iAxVd72DQ+/c/OYWTtUzki+UgxNGCQrWt+eIW/6FV\\nDhjXGQyiBv4t4J6KWuLQvsVoGRrQbiqhIYVvAwcLAQKBgQC5pWwd3SjBkhQzLrMd\\ngviNm8KB8hnrGLKwHkf/+EjaHDs32f5EPfUQXdqSBEoxzDUfXD2CypQamHOJlnpt\\nw68pQitTVCH4IDGIl8A+3ooc5Fx8iH5xfVpbem0Lw36Za2iZrS05ocMh3A+/ur4o\\ntHlFdoJfKcmyD0N9kiW8Nrq5fwKBgQC4tXM2Iurbh2xdJvYQzirR9mPnsa6ohEJl\\n0RAJNHBK+LW4Hc7wgOwtNfiqPN8TiQPs5Pk/2fK/rT3WRJGbdPJ3XD7CC+hEfvRE\\n2x8ufm5U4PA9VTzSbMs/JVD3BM6T00Wpn7or0a7B7foTHsYWxIOuz7wWw+Auo7ZW\\nlyxq3u0l5QKBgEJUkKS6+GzxPLZs4SKSQSyXko/LaOdPE8lJiIA0vhLwM1hpUyge\\n2wjV/9pcHgZc6D4kPvYUW4aFIgLu+R9u447iTYigbuKw3gHn9pCAAuj/zuvP+R2j\\npD07KOsjFoDKl70Q2y/UVFwsvJPMrVTt5sai6UIHNEGiooKjTUhKZb0RAoGAcQUu\\nIxEIjh12NCWT6UKNtv3BsdLqIVkUW8Kpwkgg8e7vGmK67jSkzyE4L8qhYQ20pi6R\\nSP2uaJSzwrkgM3RCrMB38jpg/BCGnN9LXCKmli8xMQZH+iXx04ic2xlI4fEjrh/7\\nRba+7REVtL9ezC2gucWIvJFMSp2IA8HqvtX7W/UCgYEAiyBOwHDFsS2a/Bl+AiJe\\nbveJWsdTsrxgnN9onT5S6dLRttURJkCxFiAC2vxECcB1bep03DiUZYPZVQOBqONR\\nyBEWMf3btvcNeFmk1/efgly6ImLriDVc12+raxdn/y4LmFkNgLnTJ8+dB4uRWAun\\ngKsPMpNzArH0uFpduyauAgA=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-moako@musicjournal-c3d3e.iam.gserviceaccount.com\",\"client_id\":\"103136499983710627686\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-moako%40musicjournal-c3d3e.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ })

/******/ });