"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var Match_1 = require("./Match");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.prototype.load = function () {
        var _this = this;
        this.reader.read();
        this.reader.data.forEach(function (match) {
            var date = match[0], home = match[1], away = match[2], hs = match[3], as = match[4], res = match[5], name = match[6];
            var dateObj = moment_1.default(date, 'dd/mm/yyyy');
            var m = new Match_1.Match(dateObj, home, away, Number(hs), Number(as), res, name);
            _this.matches.push(m);
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
