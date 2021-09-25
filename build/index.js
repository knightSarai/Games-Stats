"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchesReader_1 = __importDefault(require("./MatchesReader"));
var GameStats_1 = __importDefault(require("./GameStats"));
var matchReader = MatchesReader_1.default.fromCsv('./football.csv');
var manUnitedWinsStats = GameStats_1.default.winsAnalysisAllReports('Man United');
matchReader.load();
manUnitedWinsStats.buildAndPrintReport(matchReader.matches);
