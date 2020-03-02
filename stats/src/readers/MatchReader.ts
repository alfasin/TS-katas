import moment from "moment";
import { Match, MatchResult } from "../models/Match";
import { CsvFileReader } from "./CsvFileReader";
import { DataReader } from "./DataReader";

export class MatchReader {

    public matches: Match[] = [];

    private constructor(public reader: DataReader) {}

    static csvReader(filename: string) {
        const reader = new CsvFileReader(filename);
        return new MatchReader(reader);
    }

    load(): void {
        this.reader.read();
        this.reader.data.forEach(match => {
            const [date, home, away, hs, as, res, name] = match;
            const dateObj = moment(date, 'dd/mm/yyyy');
            const m = new Match(dateObj, home, away, Number(hs), Number(as), res as MatchResult, name);
            this.matches.push(m);
        });
    }
}
