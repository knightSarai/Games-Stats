import CSVReader from './CSVReader';

enum MatchResults {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

class GameStats {
  static countTeamWins(teamName: string, matches: string[][]): number {
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

const matchesArray = CSVReader.read('./football.csv');
let manUnitedWon = GameStats.countTeamWins('Man United', matchesArray);

console.log('Man United', manUnitedWon);
