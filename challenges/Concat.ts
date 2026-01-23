// Implement the javascript Array.concat function the type system a types takes the two arguments 
// the output shoudl be a new array that incldues inputs in ltr order

type Concat<A extends any[],B extends any[]> =  [...A,...B]

type Result = Concat<[1],[2]> // [1,2]
