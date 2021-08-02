import { Pokemon } from '@entity';

export default class Pokedex {
  private _id: number;
  private _pokemons: Pokemon[];

  constructor() {
    this._pokemons = [];
  }

  public get getPokemons(): ReadonlyArray<Pokemon> {
    return this._pokemons;
  }

  public addPokemon(pokemons: Pokemon): void {
    this._pokemons.push(pokemons);
  }
}
