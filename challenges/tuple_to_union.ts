type Arr = ["1", "2", "3"];

type TupleToUnion<T extends readonly any[]> =
  T extends Array<infer R> ? R : never;

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
