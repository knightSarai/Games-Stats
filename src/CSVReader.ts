import fs from 'fs';
export default class CSVReader {
  static read(filePath: string): string[][] {
    let matches = fs
      .readFileSync(filePath, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((match) => match.split(','));

    return matches;
  }
}
