import { test1, test3 } from "./types";

const qwer: test1 = {
  q1: 12,
  q2: "qwer",
  q3: false,
  q4: [123, 123, 12, 3, 123, 12, 31, 23],
  q5: { w1: 123, w2: "123" },
  q6: (p1) => {},
};

(function test2(par1: number = 1, par2: string = "text"): string {
  return par1 + par2;
})();

const test3: test3 = (par1, par2) => {
  return par1 + par2;
};


