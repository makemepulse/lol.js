"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shuffle an array
 */
function shuffle(arr) {
    var length = arr.length;
    var tmp, rand;
    while (length != 0) {
        rand = Math.floor(Math.random() * length);
        length--;
        tmp = arr[length];
        arr[length] = arr[rand];
        arr[rand] = tmp;
    }
    return arr;
}
exports.shuffle = shuffle;
/**
 * Sort an array
 */
function sort(arr) {
    var currIndex = -1;
    var tmp = [];
    var tm;
    for (var i = 0, ilen = arr.length; i < ilen; i++) {
        currIndex = tmp.length;
        tmp[currIndex] = arr[i];
        for (var j = 0, jlen = tmp.length; j < jlen; j++) {
            if (tmp[currIndex] < tmp[j]) {
                tm = tmp[j];
                tmp[j] = tmp[currIndex];
                tmp[currIndex] = tm;
            }
        }
    }
    return tmp;
}
exports.sort = sort;
/**
 * Sort array relative to object key
 */
function sortByKey(arr, key) {
    var currIndex = -1;
    var tmp = [];
    var tm;
    for (var i = 0, ilen = arr.length; i < ilen; i++) {
        currIndex = tmp.length;
        tmp[currIndex] = arr[i];
        for (var j = 0, jlen = tmp.length; j < jlen; j++) {
            if (tmp[currIndex][key] < tmp[j][key]) {
                tm = tmp[j];
                tmp[j] = tmp[currIndex];
                tmp[currIndex] = tm;
            }
        }
    }
    return tmp;
}
exports.sortByKey = sortByKey;
/**
 * Inverse array
 */
function inverse(arr) {
    var tmp = [];
    for (var ilen = arr.length - 1, i = ilen; i >= 0; i--) {
        tmp.push(arr[i]);
    }
    return tmp;
}
exports.inverse = inverse;
/**
 * Remove duplicates
 */
function unique(arr) {
    var tmp = [];
    for (var i = 0, ilen = arr.length; i < ilen; i++) {
        if (tmp.indexOf(arr[i]) === -1) {
            tmp.push(arr[i]);
        }
    }
    return tmp;
}
exports.unique = unique;
/**
 * Split array into chunks
 */
function chunk(array, count) {
    var arr = [];
    for (var i = 0, ilen = array.length; i < ilen; i += count) {
        arr.push(array.slice(i, i + count));
    }
    return arr;
}
exports.chunk = chunk;
/**
 * Generate an array
 */
function generate(callback) {
    var arr = [];
    var i = 0;
    var running = true;
    var previous;
    function stop_running() { running = false; }
    while (running) {
        previous = callback(i, stop_running, previous);
        arr.push(previous);
        i++;
    }
    return arr;
}
exports.generate = generate;
/**
 * Generate enumeration
 */
function generateEnumeration(count) {
    if (count === void 0) { count = 10; }
    return generate(function (index, stop_running, previous) {
        if (index + 1 == count)
            stop_running();
        return index;
    });
}
exports.generateEnumeration = generateEnumeration;
/**
 * Generate random enumeration
 */
function generateRandomEnumeration(count) {
    if (count === void 0) { count = 10; }
    return generate(function (index, stop_running, previous) {
        if (index + 1 == count)
            stop_running();
        return Math.random();
    });
}
exports.generateRandomEnumeration = generateRandomEnumeration;
/**
 * Find similar elements between two arrays
 */
function similarity(arr0, arr1) {
    var arr = [];
    for (var i = 0; i < arr0.length; i++) {
        var el0 = arr0[i];
        for (var j = 0; j < arr1.length; j++) {
            var el1 = arr1[j];
            if (el0 == el1)
                arr.push(el0);
        }
    }
    return arr;
}
exports.similarity = similarity;
/**
 * Find different elements between two arrays
 */
function difference(arr0, arr1) {
    var arr = [];
    for (var i = 0; i < arr0.length; i++) {
        var el0 = arr0[i];
        if (arr1.indexOf(el0) == -1)
            arr.push(el0);
    }
    return arr;
}
exports.difference = difference;
