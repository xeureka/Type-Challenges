
// Implement a generic First<T> that takes an array t and returns its first elemtns type

type arr1 = ['a','b','c']
type arr2 = [3,2,1]

type First<T extends any[]> = T['length'] extends 0 ? never: T[0]

type head1 = First<arr1>
type head2 = First<arr2>
