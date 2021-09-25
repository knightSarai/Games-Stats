import { Analyzer } from '../GameStats';
import MatchData from '../MatchData';
import MatchResults from '../MatchResults';

class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let winsCount = 0;

    matches.forEach((match) => {
      if (match[1] === this.team && match[5] === MatchResults.HomeWin) {
        winsCount++;
      } else if (match[2] === this.team && match[5] === MatchResults.AwayWin) {
        winsCount++;
      }
    });
    return `Team "${this.team}" won ${winsCount} games`;
  }
}

export default WinsAnalysis;
