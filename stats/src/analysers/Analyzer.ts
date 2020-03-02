import { Match } from "../models/Match";

export interface Analyzer {
    run(matches: Match[]): string;
}
