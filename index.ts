const tuple = ["tesla", "model 3", "model x", "model y"] as const;

type TupleObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

type result = TupleObject<typeof tuple>;

// T[number],T[keyof T], T[K]
// are called indexed access types they let you iterate / extract from other types

// T[numbr] - give me the type of the values inside an aray/tuple

type Item<T extends any[]> = T[number];

type A = Item<string>;
type B = Item<[1, 2, 3]>;

// T[keyof T] - get all value types of object

type User = {
  id: number;
  name: string;
  active: boolean;
};

type values = User[keyof User];

let name: values = false;

console.log(typeof name);
