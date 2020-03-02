import { Analyzer } from "./analysers/Analyzer";
import { OutputTarget } from "./output/OutputTarget";
import { Match } from "./models/Match";
import { WinAnalysis } from "./analysers/WinAnalysis";
import { ConsoleOutput } from "./output/ConsoleOutput";

export class Summary {

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {
    }

    static winsAnalysisAndReport(team: string) {
        return new Summary(new WinAnalysis(team), new ConsoleOutput());
    }

    buildAndPrintReport(matches: Match[]): void {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report)
    }
}
