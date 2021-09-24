import CSVReader from './CSVReader';
import MatchesReader from './MatchesReader';
import MatchResults from './MatchResults';

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResults,
  string
];

class GameStats {
  static countTeamWins(teamName: string, matches: MatchData[]): number {
    let manUnitedWon = 0;

    matches.forEach((match) => {
      if (match[1] === teamName && match[5] === MatchResults.HomeWin) {
        manUnitedWon++;
      } else if (match[2] === teamName && match[5] === MatchResults.AwayWin) {
        manUnitedWon++;
      }
    });
    return manUnitedWon;
  }
}

const matchReader = new MatchesReader(new CSVReader());
matchReader.load('./football.csv');
const matches = matchReader.matches;
let manUnitedWon = GameStats.countTeamWins('Man United', matches);

console.log(matches[0]);
console.log('Man United', manUnitedWon);
