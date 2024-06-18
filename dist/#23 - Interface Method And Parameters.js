"use strict";
let uuser = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${uuser.username}`;
    },
    getDouble(n) {
        return n * 2;
    },
};
console.log(uuser.id);
console.log(uuser.sayHello());
console.log(uuser.sayWelcome());
console.log(uuser.getDouble(100));
//# sourceMappingURL=#23%20-%20Interface%20Method%20And%20Parameters.js.map