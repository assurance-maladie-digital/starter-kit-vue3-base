"use strict";
exports.__esModule = true;
exports.toKebabCase = void 0;
function toKebabCase(value) {
    return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}
exports.toKebabCase = toKebabCase;
