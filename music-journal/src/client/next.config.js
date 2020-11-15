
const webpack = require('webpack');
const firebaseAdmin = require('firebase-admin');
const firebase = require('firebase/app');
const auth = require('firebase/auth');
const serviceAccount = require('./service-account.json');
require('dotenv').config();

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
}

module.exports = {
    distDir: "../../dist/client",
    trailingSlash: true,
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            '/login': { page: '/login' }
        }
    },
    webpack: config => {
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
    },
    firebase,
    auth,
    firebaseAdmin
};
