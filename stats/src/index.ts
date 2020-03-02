import { Summary } from "./Summary";
import { MatchReader } from "./readers/MatchReader";

const matchReader = MatchReader.csvReader('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisAndReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

