"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = Controller;
exports.Get = Get;
exports.Post = Post;
exports.Put = Put;
exports.Delete = Delete;
exports.Resolver = Resolver;
exports.Query = Query;
require("reflect-metadata");
function Controller(path) {
    return function (target) {
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
function Get(path) {
    return function (target) {
        let result = Reflect.getMetadata(path, target);
        console.log(result);
        console.log(target);
        console.log(target.prototype);
    };
}
function Post(path) {
    return function (target) {
        let result = Reflect.getMetadata(path, target);
        console.log(result);
        console.log(target);
        console.log(target.prototype);
    };
}
function Put(path) {
    return function (target) {
        let result = Reflect.getMetadata(path, target);
        console.log(result);
        console.log(target);
        console.log(target.prototype);
    };
}
function Delete(path) {
    return function (target) {
        let result = Reflect.getMetadata(path, target);
        console.log(result);
        console.log(target);
        console.log(target.prototype);
    };
}
function Resolver() {
    return function (target) {
        console.log(target);
        console.log(target.prototype);
    };
}
function Query(path) {
    return function (target) {
        let result = Reflect.getMetadata(path, target);
        console.log(result);
        console.log(target);
        console.log(target.prototype);
    };
}
