"use strict";

var admin = _interopRequireWildcard(require("firebase-admin"));

var functions = _interopRequireWildcard(require("firebase-functions"));

var _next = _interopRequireDefault(require("next"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

admin.initializeApp();
const dev = process.env.NODE_ENV !== "production";
const app = (0, _next.default)({
  dev,
  // the absolute directory from the package.json file that initialises this module
  // IE: the absolute path from the root of the Cloud Function
  conf: {
    distDir: "dist/client"
  }
});
const handle = app.getRequestHandler();
const server = functions.https.onRequest((request, response) => {
  // log the page.js file or resource being requested
  console.log("File: " + request.originalUrl);
  return app.prepare().then(() => handle(request, response));
});
//# sourceMappingURL=index.js.map