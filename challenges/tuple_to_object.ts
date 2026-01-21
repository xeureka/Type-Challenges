
const tuple = ['tesla','model 3','model x','model y']as const;

type TupleToObject<T extends readonly (string | number)[]> = {
    [P in T[number]] : P
}

type result = TupleToObject<typeof tuple>



