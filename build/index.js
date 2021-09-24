"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CSVReader_1 = __importDefault(require("./CSVReader"));
var MatchesReader_1 = __importDefault(require("./MatchesReader"));
var MatchResults_1 = __importDefault(require("./MatchResults"));
var GameStats = /** @class */ (function () {
    function GameStats() {
    }
    GameStats.countTeamWins = function (teamName, matches) {
        var manUnitedWon = 0;
        matches.forEach(function (match) {
            if (match[1] === teamName && match[5] === MatchResults_1.default.HomeWin) {
                manUnitedWon++;
            }
            else if (match[2] === teamName && match[5] === MatchResults_1.default.AwayWin) {
                manUnitedWon++;
            }
        });
        return manUnitedWon;
    };
    return GameStats;
}());
var matchReader = new MatchesReader_1.default(new CSVReader_1.default());
matchReader.load('./football.csv');
var matches = matchReader.matches;
var manUnitedWon = GameStats.countTeamWins('Man United', matches);
console.log(matches[0]);
console.log('Man United', manUnitedWon);
