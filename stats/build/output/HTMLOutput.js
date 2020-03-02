"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HtmlOutput = /** @class */ (function () {
    function HtmlOutput() {
    }
    HtmlOutput.prototype.print = function (report) {
        var html = "<div>\n                    <h1>Analysis Report</h1>\n                    <div>" + report + "</div>\n                </div>";
        fs_1.default.writeFileSync('report.html', html);
    };
    return HtmlOutput;
}());
exports.HtmlOutput = HtmlOutput;
