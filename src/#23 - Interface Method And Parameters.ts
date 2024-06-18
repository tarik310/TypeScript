/*
  Interface
  - Interface Method And Parameters
*/

interface uUser {
  id: number;
  username: string;
  country: string;
  sayHello(): string;
  sayWelcome: () => string;
  getDouble(num: number): number;
}

let uuser: uUser = {
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
