// Implement the type versin of Array.unshift

type Unshift<T extends any[],U> = [U,...T]

type Result = Unshift<[1,2],0> // [0,1,2]
