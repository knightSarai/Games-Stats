import fs from 'fs';
import { OutputTarget } from '../GameStats';

class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <h1>Report</h1>
        <p>${report}</p>
      `;
    fs.writeFileSync('reprot.html', html);
  }
}

export default HtmlReport;
