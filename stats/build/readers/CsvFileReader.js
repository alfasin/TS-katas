"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var sync_1 = __importDefault(require("csv-parse/lib/sync"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        var matches = fs_1.default.readFileSync(this.filename);
        this.data = sync_1.default(matches);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
