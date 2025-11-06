"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpMethods = exports.ControllerDecoratorParams = void 0;
var ControllerDecoratorParams;
(function (ControllerDecoratorParams) {
    ControllerDecoratorParams["Path"] = "path";
    ControllerDecoratorParams["Method"] = "method";
    ControllerDecoratorParams["Middleware"] = "middleware";
})(ControllerDecoratorParams || (exports.ControllerDecoratorParams = ControllerDecoratorParams = {}));
var HttpMethods;
(function (HttpMethods) {
    HttpMethods["Get"] = "get";
    HttpMethods["Post"] = "post";
    HttpMethods["Put"] = "put";
    HttpMethods["Delete"] = "delete";
    HttpMethods["Patch"] = "patch";
})(HttpMethods || (exports.HttpMethods = HttpMethods = {}));
