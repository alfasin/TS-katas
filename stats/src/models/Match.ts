import { Moment } from "moment";

export class Match {
    constructor(public matchDate: Moment,
                public homeTeam: String,
                public awayTeam: String,
                public homeScore: number,
                public awayScore: number,
                public result: MatchResult,
                public name: String) {
    }
}

export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}
