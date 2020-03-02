import fs from "fs";
import csvParseSync from "csv-parse/lib/sync";

export class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) {
    }

    read(): void {
        const matches = fs.readFileSync(this.filename)
        this.data = csvParseSync(matches);
    }
}
