import { OutputTarget } from '../GameStats';

class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}

export default ConsoleReport;
