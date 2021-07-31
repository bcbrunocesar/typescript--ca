import { Pokemon } from '@entity';

export default class Trainer {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  nickName: string;
  pokemons: Pokemon[];

  constructor(firstName: string, lastName: string, nickName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.nickName = nickName;
    this.pokemons = [];
  }

  public addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  public addPokemons(...pokemons: Pokemon[]): void {
    this.pokemons.push(...pokemons);
  }

  public toString = (): string => {
    return `Trainer ${this.fullName}, aka ${this.nickName}, has a total of ${this.pokemons.length} pokemons.`;
  };
}
