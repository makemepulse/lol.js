"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function $enumerable(obj, property, value) {
    return Object.defineProperty(obj, property, {
        enumerable: value
    });
}
exports.$enumerable = $enumerable;
function $configurable(obj, property, value) {
    return Object.defineProperty(obj, property, {
        configurable: value
    });
}
exports.$configurable = $configurable;
function $writable(obj, property, value) {
    return Object.defineProperty(obj, property, {
        writable: value
    });
}
exports.$writable = $writable;
function $setter(obj, property, setter) {
    return Object.defineProperty(obj, property, {
        set: setter
    });
}
exports.$setter = $setter;
function $getter(obj, property, getter) {
    return Object.defineProperty(obj, property, {
        get: getter
    });
}
exports.$getter = $getter;
function $define(obj, property, descriptor) {
    return Object.defineProperty(obj, property, descriptor);
}
exports.$define = $define;
function $readOnly(obj, property) {
    return Object.defineProperty(obj, property, {
        writable: false,
        configurable: false
    });
}
exports.$readOnly = $readOnly;
function $private(obj, property) {
    var descriptor = Object.getOwnPropertyDescriptor(obj, property);
    if (!descriptor && obj.hasOwnProperty(property)) {
        descriptor = {
            get: function () {
                return obj[property];
            },
            set: function (newValue) {
                obj[property] = newValue;
            }
        };
    }
    if (!descriptor)
        return;
    var getter = descriptor.get;
    var setter = descriptor.set;
    var value = obj[property]; //descriptor.default
    if (getter)
        descriptor.get = function $get() {
            if (assertCalledBy(getter, $get)) {
                return value;
            }
        };
    if (setter)
        descriptor.set = function $set(newValue) {
            if (assertCalledBy(setter, $set)) {
                value = newValue;
            }
        };
    function assertCalledBy(caller, f) {
        if (f.caller === caller)
            return true;
        throw new Error('Unauthorized access to the private \'' + property + '\' property');
    }
    return Object.defineProperty(obj, property, descriptor);
}
exports.$private = $private;
