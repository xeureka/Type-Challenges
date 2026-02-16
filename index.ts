// Implementing the built in omit generic withotu using it
// constructs a type by picking all properties from T and then removing K

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
