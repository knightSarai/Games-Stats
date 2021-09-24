import fs from 'fs';

export default class CSVReader {
  data: string[][] = [];
  read(filePath: string): void {
    this.data = fs
      .readFileSync(filePath, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((match) => match.split(','));
  }
}
