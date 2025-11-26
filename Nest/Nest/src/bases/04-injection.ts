import type { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { pokedApiAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    public id: number;
    public name: string;
    public http: pokedApiAdapter;

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(id: number, name: string, http: pokedApiAdapter) {
        //resimos el id del pokemon y va a recibir el id del nuevo objeto
        this.id = id;
        //resibimos el name del pokemon y va a recibir el name del nuevo objeto
        this.name = name;

        this.http = http;
    }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        // AQUÍ ESTABA EL ERROR:
        // Usamos <PokeApiResponse> para indicar qué forma tiene la data
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        console.log('Movimientos encontrados:', data.moves.length);
        return data.moves;
    }
}

const pokeApi = new pokedApiAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApi);

charmander.getMoves();