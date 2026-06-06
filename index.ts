// Pick

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, P extends keyof T> = {
  [K in P]: T[P];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// Readonly

interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property

// Tuple To Object

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<T extends readonly any[]> = {
  [k in T[number]]: k;
};

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// First of Array

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
type Firstt<T extends any[]> = T[number] extends number ? T[0] : never;

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
