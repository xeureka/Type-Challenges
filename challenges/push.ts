// Implement the generic version of Array.push


type Push<T extends unknown[],U> = [...T,U]

type Result = Push<[1,2],'3'> // [1,2,'3']
