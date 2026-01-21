
// Implement the built in readonly<T> generic without using it

// constructs a type with all properies of  T set to readonly, meaning the properties of the constructed type cannot be reassigned

interface Todo{
    title: string
    description: string
}

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "Foobar"
}
