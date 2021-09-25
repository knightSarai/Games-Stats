import MatchesReader from './MatchesReader';
import GameStats from './GameStats';

const matchReader = MatchesReader.fromCsv('./football.csv');
const manUnitedWinsStats = GameStats.winsAnalysisAllReports('Man United');

matchReader.load();
manUnitedWinsStats.buildAndPrintReport(matchReader.matches);
