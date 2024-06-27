"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.colorTheme = exports.colors = exports.colorClasses = exports.lightTheme = exports.palette = void 0;
var utils_1 = require("./utils");
exports.palette = {
    amBlue: {
        darken80: '#020d1f',
        darken60: '#051a3e',
        darken40: '#07275c',
        darken20: '#0a347b',
        base: '#0c419a',
        lighten20: '#3d67ae',
        lighten40: '#6d8dc2',
        lighten60: '#9eb3d7',
        lighten80: '#ced9eb',
        lighten90: '#e7ecf5',
        lighten97: '#f8f9fc'
    },
    cyan: {
        darken80: '#00212d',
        darken60: '#004259',
        darken40: '#006386',
        darken20: '#0084b2',
        base: '#00a5df',
        lighten20: '#33b7e5',
        lighten40: '#66c9ec',
        lighten60: '#99dbf2',
        lighten80: '#ccedf9',
        lighten90: '#e5f6fc',
        lighten97: '#f7fcfe'
    },
    frostedBlue: {
        darken80: '#142327',
        darken60: '#28464d',
        darken40: '#3d6874',
        darken20: '#518b9a',
        base: '#65aec1',
        lighten20: '#84becd',
        lighten40: '#a3ceda',
        lighten60: '#c1dfe6',
        lighten80: '#e0eff3',
        lighten90: '#f0f7f9',
        lighten97: '#fafdfd'
    },
    parme: {
        darken80: '#171c26',
        darken60: '#2f384d',
        darken40: '#465473',
        darken20: '#5e709a',
        base: '#758cc0',
        lighten20: '#91a3cd',
        lighten40: '#acbad9',
        lighten60: '#c8d1e6',
        lighten80: '#e3e8f2',
        lighten90: '#f1f3f9',
        lighten97: '#fbfcfd'
    },
    mauve: {
        darken80: '#201224',
        darken60: '#402449',
        darken40: '#60376d',
        darken20: '#804992',
        base: '#a05bb6',
        lighten20: '#b37cc5',
        lighten40: '#c69dd3',
        lighten60: '#d9bde2',
        lighten80: '#ecdef0',
        lighten90: '#f5eff8',
        lighten97: '#fcfafd'
    },
    pink: {
        darken80: '#2d051a',
        darken60: '#5a0a34',
        darken40: '#87104d',
        darken20: '#b41567',
        base: '#e11a81',
        lighten20: '#e7489a',
        lighten40: '#ed76b3',
        lighten60: '#f3a3cd',
        lighten80: '#f9d1e6',
        lighten90: '#fce8f2',
        lighten97: '#fef8fb'
    },
    brick: {
        darken80: '#291112',
        darken60: '#522224',
        darken40: '#7b3237',
        darken20: '#a44349',
        base: '#cd545b',
        lighten20: '#d7767c',
        lighten40: '#e1989d',
        lighten60: '#ebbbbd',
        lighten80: '#f5ddde',
        lighten90: '#faeeef',
        lighten97: '#fdfafa'
    },
    orange: {
        darken80: '#2d100b',
        darken60: '#5a2017',
        darken40: '#862f22',
        darken20: '#b33f2e',
        base: '#e04f39',
        lighten20: '#e67261',
        lighten40: '#ec9588',
        lighten60: '#f3b9b0',
        lighten80: '#f9dcd7',
        lighten90: '#fcedeb',
        lighten97: '#fefaf9'
    },
    yellow: {
        darken80: '#302407',
        darken60: '#60480e',
        darken40: '#906b15',
        darken20: '#c08f1c',
        base: '#f0b323',
        lighten20: '#f3c24f',
        lighten40: '#f6d17b',
        lighten60: '#f9e1a7',
        lighten80: '#fcf0d3',
        lighten90: '#fdf7e9',
        lighten97: '#fffdf8'
    },
    green: {
        darken80: '#112717',
        darken60: '#224e2d',
        darken40: '#347444',
        darken20: '#459b5a',
        base: '#56c271',
        lighten20: '#78ce8d',
        lighten40: '#9adaaa',
        lighten60: '#bbe7c6',
        lighten80: '#ddf3e3',
        lighten90: '#eef9f1',
        lighten97: '#fafdfb'
    },
    turquoise: {
        darken80: '#00221c',
        darken60: '#004439',
        darken40: '#006755',
        darken20: '#008972',
        base: '#00ab8e',
        lighten20: '#33bca5',
        lighten40: '#66cdbb',
        lighten60: '#99ddd2',
        lighten80: '#cceee8',
        lighten90: '#e5f7f4',
        lighten97: '#f7fcfc'
    },
    grey: {
        darken80: '#111212',
        darken60: '#222324',
        darken40: '#323535',
        darken20: '#434647',
        base: '#545859',
        lighten20: '#76797a',
        lighten40: '#989b9b',
        lighten60: '#bbbcbd',
        lighten80: '#dddede',
        lighten90: '#eeeeee',
        lighten97: '#fafafa'
    }
};
exports.lightTheme = {
    primary: exports.palette.amBlue.base,
    secondary: exports.palette.cyan.darken40,
    accent: exports.palette.cyan.base,
    error: exports.palette.orange.darken20,
    info: exports.palette.amBlue.base,
    success: exports.palette.green.base,
    warning: exports.palette.yellow.base,
    risquePro: exports.palette.brick.base
};
exports.colorClasses = {};
Object.entries(exports.palette).forEach(function (_a) {
    var colorName = _a[0], colorValues = _a[1];
    Object.entries(colorValues).forEach(function (_a) {
        var variationName = _a[0], colorValue = _a[1];
        var colorClass = (0, utils_1.toKebabCase)("".concat(colorName, "-").concat(variationName)
            .replace(/\d+/, '-$&')
            .replace('-base', ''));
        exports.colorClasses[colorClass] = colorValue;
    });
});
exports.colors = __assign(__assign({}, exports.palette), exports.lightTheme);
exports.colorTheme = __assign(__assign({}, exports.colorClasses), exports.lightTheme);
