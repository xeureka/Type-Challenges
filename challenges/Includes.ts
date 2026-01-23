// Implemnt jaascript Array.includes fucntion in the types system, A type takes the two arguments 
// the output shoudl be a boolean true of false

type Includes<T extends any[], V> ={
    [P in T[number]]: true
}[V] extends true ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
