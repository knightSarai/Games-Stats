"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var MatchesReader = /** @class */ (function () {
    function MatchesReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchesReader.prototype.load = function (filePath) {
        this.reader.read(filePath);
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
