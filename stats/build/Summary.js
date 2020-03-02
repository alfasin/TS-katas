"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinAnalysis_1 = require("./analysers/WinAnalysis");
var ConsoleOutput_1 = require("./output/ConsoleOutput");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisAndReport = function (team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new ConsoleOutput_1.ConsoleOutput());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
