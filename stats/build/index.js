"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary_1 = require("./Summary");
var MatchReader_1 = require("./readers/MatchReader");
var matchReader = MatchReader_1.MatchReader.csvReader('football.csv');
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisAndReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
