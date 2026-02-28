// If we have a type which is a wrapped type like Promise, how can we get the type which is insde the wrapped type ?

type ExampleType = Promise<string>;

type MyAwaited<A> = A extends Promise<infer T> ? T : never;

type Result = MyAwaited<ExampleType>; // string
