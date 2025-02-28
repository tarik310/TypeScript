/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/

function getHardSeconds(): number {
  return 3;
}

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15,
}

enum LLevel {
  Kid = Kids.Ten,
  Easy = 9,
  Medium = Easy - 3,
  Hard = getHardSeconds(),
}

let llvl: string = "Easy";

if (llvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${LLevel.Hard}`);
}
