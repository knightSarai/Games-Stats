import MatchResults from './MatchResults';
import { dateStringToDate } from './utils';
import { MatchData } from './index';

interface DataReader {
  data: string[][];
  read(filePath: string): void;
}

export default class MatchesReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(filePath: string): void {
    this.reader.read(filePath);
    this.matches = this.reader.data.map(
      (matchElements): MatchData => [
        dateStringToDate(matchElements[0]),
        matchElements[1],
        matchElements[2],
        parseInt(matchElements[3]),
        parseInt(matchElements[4]),
        matchElements[5] as MatchResults,
        matchElements[6],
      ]
    );
  }
}
