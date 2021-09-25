import MatchResults from './MatchResults';
import { dateStringToDate } from './utils';
import MatchData from './MatchData';
import CSVReader from './CSVReader';

interface DataReader {
  data: string[][];
  read(): void;
}

export default class MatchesReader {
  matches: MatchData[] = [];
  static fromCsv(filePath: string): MatchesReader {
    return new MatchesReader(new CSVReader(filePath));
  }
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
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
