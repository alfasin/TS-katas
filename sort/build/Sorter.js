"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        for (var i = 0; i < this.length; i++) {
            for (var j = i + 1; j < this.length; j++) {
                if (this.compare(i, j)) {
                    this.swap(i, j);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
