import MatchData from './MatchData';
import WinsAnalysis from './analyzers/WinsAnalysis';
import ConsoleReport from './reportTarget/ConsoleReport';
import HtmlReport from './reportTarget/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class GameStats {
  constructor(
    public analyzer: Analyzer,
    public outputTargets: OutputTarget[]
  ) {}

  static winsAnalysisAllReports(team: string): GameStats {
    return new GameStats(new WinsAnalysis(team), [
      new ConsoleReport(),
      new HtmlReport(),
    ]);
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    for (let outputTarget of this.outputTargets) {
      outputTarget.print(output);
    }
  }
}

export default GameStats;
