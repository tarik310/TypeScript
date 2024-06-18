/*
  Interface
  - Extending Interfaces
*/

interface mUser {
  id: number;
  username: string;
  country: string;
}

interface Moderator {
  role: string | number;
}

interface Admin extends mUser, Moderator {
  protect?: boolean;
}

let muser: Admin = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  role: "Mod",
  protect: true,
};

console.log(muser.id);
