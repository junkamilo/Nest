import axios from "axios";
import type { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {

    //siempre debemos inicialisar
    public id: number;
    public name: string;

    get imageUrl(): string {
        return `https://pokemon.com${this.id}.jpg`
    }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);

    }

    speak() {
        console.log(`${this.name},${this.name}`);
    }

    //este constrtuctor es el que va a instancias cuando creamos un nuevo objeto
    constructor(id: number, name: string) {
        //resimos el id del pokemon y va a recibir el id del nuevo objeto
        this.id = id;
        //resibimos el name del pokemon y va a recibir el name del nuevo objeto
        this.name = name;
    }

    async getMoves() {

        // const moves = 10;

        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        return data.moves


    }

}

export const charmander = new Pokemon(10, 'pokemon');

const resultData =await charmander.getMoves();
console.log(resultData);

