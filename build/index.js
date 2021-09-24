"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CSVReader_1 = __importDefault(require("./CSVReader"));
var MatchResults;
(function (MatchResults) {
    MatchResults["HomeWin"] = "H";
    MatchResults["AwayWin"] = "A";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
var GameStats = /** @class */ (function () {
    function GameStats() {
    }
    GameStats.countTeamWins = function (teamName, matches) {
        var manUnitedWon = 0;
        matches.forEach(function (match) {
            if (match[1] === teamName && match[5] === MatchResults.HomeWin) {
                manUnitedWon++;
            }
            else if (match[2] === teamName && match[5] === MatchResults.AwayWin) {
                manUnitedWon++;
            }
        });
        return manUnitedWon;
    };
    return GameStats;
}());
var matchesArray = CSVReader_1.default.read('./football.csv');
var manUnitedWon = GameStats.countTeamWins('Man United', matchesArray);
console.log('Man United', manUnitedWon);
