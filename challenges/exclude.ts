// Implement the built in Exclude<T,U>



// write your apprach right here esti

// iterate on the keyof the T
// and exlude the ones we have in the K

type MyExclude<T,U> = T extends U ? never: T

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' , 'c'
