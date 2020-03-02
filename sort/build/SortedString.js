"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var SortedString = /** @class */ (function (_super) {
    __extends(SortedString, _super);
    function SortedString(str) {
        var _this = _super.call(this) || this;
        _this.str = str;
        return _this;
    }
    Object.defineProperty(SortedString.prototype, "length", {
        get: function () {
            return this.str.length;
        },
        enumerable: true,
        configurable: true
    });
    SortedString.prototype.compare = function (i, j) {
        return this.str.charAt(i) > this.str.charAt(j);
    };
    SortedString.prototype.swap = function (i, j) {
        var newStr = this.str.substring(0, i);
        newStr += this.str.substring(j, j + 1);
        newStr += this.str.substring(i + 1, j);
        newStr += this.str.substring(i, i + 1);
        newStr += this.str.substring(j + 1);
        this.str = newStr;
    };
    SortedString.prototype.toString = function () {
        return this.str;
    };
    return SortedString;
}(Sorter_1.Sorter));
exports.SortedString = SortedString;
