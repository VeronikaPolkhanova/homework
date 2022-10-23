"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
function findOdd(A) {
    const countItems = A.reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {});
    let result;
    for (const key in countItems) {
        if (countItems[key] % 2 !== 0) {
            result = Number(key);
        }
    }
    return result;
}
exports.findOdd = findOdd;
