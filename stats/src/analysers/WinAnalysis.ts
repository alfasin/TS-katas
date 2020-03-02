import { Analyzer } from "./Analyzer";
import { Match, MatchResult } from "../models/Match";

const { HomeWin, AwayWin } = MatchResult;

export class WinAnalysis implements Analyzer {

    constructor(public team: string) {}

    run(matches: Match[]): string {
        let wins = 0;
        for (let m of matches) {
            if (m.homeTeam === this.team && m.result === HomeWin) {
                wins++;
            }
            if (m.awayTeam === this.team && m.result === AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games`;
    }

}
