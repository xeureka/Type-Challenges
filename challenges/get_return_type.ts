// Implement the built-in ReturnType<T> generic withotu using it

const fn = (v: boolean) => {
    if (v)
        return 1
    else 
        return 2 
}

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type a = MyReturnType<typeof fn>
