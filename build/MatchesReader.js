"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var CSVReader_1 = __importDefault(require("./CSVReader"));
var MatchesReader = /** @class */ (function () {
    function MatchesReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchesReader.fromCsv = function (filePath) {
        return new MatchesReader(new CSVReader_1.default(filePath));
    };
    MatchesReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (matchElements) { return [
            utils_1.dateStringToDate(matchElements[0]),
            matchElements[1],
            matchElements[2],
            parseInt(matchElements[3]),
            parseInt(matchElements[4]),
            matchElements[5],
            matchElements[6],
        ]; });
    };
    return MatchesReader;
}());
exports.default = MatchesReader;
