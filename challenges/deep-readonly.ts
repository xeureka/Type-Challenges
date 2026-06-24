type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

// keyof T extends never - base case

type DeepReadonly<T> = keyof T extends never
  ? T
  : {
      readonly [k in keyof T]: DeepReadonly<T[k]>;
    };
type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as `Expected`
