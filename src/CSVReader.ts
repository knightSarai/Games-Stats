import fs from 'fs';

export default class CSVReader {
  data: string[][] = [];
  constructor(public filePath: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filePath, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((match) => match.split(','));
  }
}
