//dato tipo arrays
export const pokemonIds = [1,2,3,4,5,6,7,8,9,10]

//creamos una interface
interface Props{
    name: string,
    age:number,
    validate:boolean,
    Food:string[],
}

//dato tipo objeto
export const persona: Props= {
    name : 'juan camilo',
    age : 20,
    validate : true,
    Food : ['pescado', 'Hamburguesa']
}