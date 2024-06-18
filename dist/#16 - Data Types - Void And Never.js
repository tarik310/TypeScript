"use strict";
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Iam A Message"));
console.log("Test");
const fail = (msg) => {
    throw new Error(msg);
};
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
alwaysLog("Osama");
//# sourceMappingURL=#16%20-%20Data%20Types%20-%20Void%20And%20Never.js.map