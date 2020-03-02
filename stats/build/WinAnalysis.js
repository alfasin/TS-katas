"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Match_1 = require("./Match");
var HomeWin = Match_1.MatchResult.HomeWin, AwayWin = Match_1.MatchResult.AwayWin;
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(team) {
        this.team = team;
    }
    WinAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var m = matches_1[_i];
            if (m.homeTeam === this.team && m.result === HomeWin) {
                wins++;
            }
            if (m.awayTeam === this.team && m.result === AwayWin) {
                wins++;
            }
        }
        return "Team " + this.team + " won " + wins + " games";
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
