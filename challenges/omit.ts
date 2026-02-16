// Implement the built in Omit<T,K> generic w/out using it
// constructure a type by picking all properies from T and then remving K

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
