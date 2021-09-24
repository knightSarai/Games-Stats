"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CSVReader = /** @class */ (function () {
    function CSVReader() {
    }
    CSVReader.read = function (filePath) {
        var matches = fs_1.default
            .readFileSync(filePath, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map(function (match) { return match.split(','); });
        return matches;
    };
    return CSVReader;
}());
exports.default = CSVReader;
