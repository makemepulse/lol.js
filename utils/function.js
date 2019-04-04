"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Scope a function inside another one. Prevent from binding.
 */
function scope(fn, context) {
    if (context === void 0) { context = null; }
    return function $scope() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn.apply(context, args);
    };
}
exports.scope = scope;
/**
 * Bind a list methods to the context
 */
function bind(context) {
    var methods = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        methods[_i - 1] = arguments[_i];
    }
    methods.forEach(function (str) {
        context[str] = context[str].bind(context);
    });
}
exports.bind = bind;
