"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
app_1.app.listen({
    host: '0.0.0.0',
    port: 3333
}).then(function () {
    console.log('🚀 HTTP Server Running');
});
