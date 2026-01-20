// Implement the built in Pick<T,K> generic withotu using it
// constructs a type by picking the set of properties K from T

interface Todo{
    title: string
    description: string
    completed: boolean
}

// solution
type MyPick<T,K extends keyof T> = {
    [P in K]: T[K]
}

type TodoPreview = MyPick<Todo, 'title'|'completed'>

const todo: TodoPreview = {
    title: 'Clean Room',
    completed: false
}

