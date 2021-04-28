/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    //'/': { view: 'pages/homepage' },
    "/": {
        controller: "main",
        action: "index"
    },
    "/signup": {
        controller: "main",
        action: "signup"
    },
    "/login": {
        controller: "main",
        action: "login"
    },
    "/chat": {
        controller: "main",
        action: "chat"
    },
    "/hello": {
        controller: "main",
        action: "hello"
    },
    "/saludo": {
        controller: "main",
        action: "saludo"
    }
};