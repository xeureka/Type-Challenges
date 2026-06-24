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

// Length of Tuple
type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
];

type Length<T extends any[]> = T["length"];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

// Exclude

type MyExclude<T, U extends T> = T extends U ? never : T;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

// Awaited

type MyAwaited<T extends PromiseLike<any>> = Awaited<T>;

type ExampleType = Promise<Promise<number>>;

type Result = MyAwaited<ExampleType>; // string

// IF

type If<C, T, F> = C extends true ? T : F;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

// Concact 

type Concat<A extends any[], B extends any[]> = [...A,...B]

type Result = Concat<[1], [2]> // expected to be [1, 2]

// Includes


type Includes<T extends any[], V> = {
    [P in T[number]]:true
}[v] ? true:false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

// Push 

type Push<T extends any[], V> = [...T,V]


type Result = Push<[1, 2], '3'> // [1, 2, '3']

// Unshift 
type Unshift<T extends any[], V> = [V,...T]
type Result = Unshift<[1, 2], 0> // [0, 1, 2]

// Parameters 

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer p) => any ? p:never;


const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

// Get Return Type 


type MyReturnType <T extends (...args: any) => any> = T extends (...args: any) => infer R ? R: never;

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"

// Omit 
interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T, V extends keyof T> = {
    [K in keyof T as K extends V ? never: K]: T[K]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

// Readonly 2
interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyReadonly2<T,V extends keyof T> = {
    readonly [K in keyof T as K extends V ? K:never]: T[K]
} & {
    [K in keyof T as K extends V ? never: K]: T[K]
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // Oi
