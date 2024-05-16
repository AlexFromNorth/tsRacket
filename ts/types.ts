type test1 = {
  q1: number;
  q2: string;
  q3: boolean;
  q4: number[];
  q5: w1;
  q6: (p1: boolean)=>void;
};

type w1 = {
  w1: number;
  w2: string;
};

type test3 = (par1 : number, par2 : string) => string

export { test1, test3 };
