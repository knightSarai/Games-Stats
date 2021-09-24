"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
function dateStringToDate(dateString) {
    var date = dateString.split('/').map(function (elem) { return parseInt(elem); });
    return new Date(date[2], date[1] - 1, date[0]);
}
exports.dateStringToDate = dateStringToDate;
