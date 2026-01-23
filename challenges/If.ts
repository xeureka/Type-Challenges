// implement the utl type If<c,t,f>
// which accepts condtion c a truthly value t and a falsy value f c is expected to be either ture of false while t and f can be any typ[e

type If<C,T,F> = C extends true ? T : F

type A = If<true, 'a','b'>
type B = If<false, 'a','b'>
