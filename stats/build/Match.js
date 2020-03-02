"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Match = /** @class */ (function () {
    function Match(matchDate, homeTeam, awayTeam, homeScore, awayScore, result, name) {
        this.matchDate = matchDate;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = homeScore;
        this.awayScore = awayScore;
        this.result = result;
        this.name = name;
    }
    return Match;
}());
exports.Match = Match;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
