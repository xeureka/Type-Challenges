//  For a given tuple, you need create a generic Length, pick the length of the typle

type tesla = ['tesla','model 3','model x','model y']
type spaceX = ['falcon 9','falcon heavy','bragon','startship','human space flight']

type Length<T extends any[]> = T['length']


type teslaLength = Length<tesla> // 4
type spaceXLength = Length<spaceX> // 5
