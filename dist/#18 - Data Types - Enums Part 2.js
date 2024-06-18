"use strict";
function getHardSeconds() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var LLevel;
(function (LLevel) {
    LLevel[LLevel["Kid"] = 15] = "Kid";
    LLevel[LLevel["Easy"] = 9] = "Easy";
    LLevel[LLevel["Medium"] = 6] = "Medium";
    LLevel[LLevel["Hard"] = getHardSeconds()] = "Hard";
})(LLevel || (LLevel = {}));
let llvl = "Easy";
if (llvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${LLevel.Hard}`);
}
//# sourceMappingURL=#18%20-%20Data%20Types%20-%20Enums%20Part%202.js.map