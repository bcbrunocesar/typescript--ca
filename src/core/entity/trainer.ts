import { Pokedex, Pokemon } from '@entity';

export default class Trainer {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _nickName: string;
  private _pokedex: Pokedex;
  private _pokemons: Pokemon[];

  constructor(
    firstName: string,
    lastName: string,
    nickName: string,
    pokemons: Pokemon[] = []
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._nickName = nickName;
    this._pokemons = pokemons;
    this._pokedex = new Pokedex();
  }

  public get getId(): number {
    return this._id;
  }

  public get getFirstName(): string {
    return this._firstName;
  }

  public get getLastName(): string {
    return this._lastName;
  }

  public get getFullname(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  public get getNickname(): string {
    return this._nickName;
  }

  public get getPokedex(): Pokedex {
    return this._pokedex;
  }

  public get getPokemons(): ReadonlyArray<Pokemon> {
    return this._pokemons;
  }

  public caughtPokemon(pokemon: Pokemon): void {
    if (this._pokemons.length === 6)
      throw new Error(
        `${this.getFullname} reached the limit of pokemons (${this._pokemons.length}), to caught more, send one to the pokedex first.`
      );

    if (this._pokemons.some((p: Pokemon) => p.getId === pokemon.getId))
      throw new Error(`${this.getFullname} already has a ${pokemon.getName}.`);

    this._pokemons.push(pokemon);
  }

  public caughtPokemons(...pokemons: Pokemon[]): void {
    // TODO: check limit

    const hasPokemonsDuplicated: boolean =
      new Set(pokemons).size !== pokemons.length;

    if (hasPokemonsDuplicated) {
      throw new Error('The trainer cannot have duplicate pokemons.');
    }

    const pokemonsAlreadyFound: Pokemon[] = this._pokemons.filter(
      (pokemon: Pokemon) => pokemons.includes(pokemon)
    );

    if (pokemonsAlreadyFound.length > 0)
      throw new Error(
        `${
          this.getFullname
        } already has the selected pokemons: ${pokemonsAlreadyFound
          .map((pokemon: Pokemon) => pokemon.getName)
          .join(', ')}.`
      );

    this._pokemons.push(...pokemons);
  }

  public sendPokemonToPokedex(pokemon: Pokemon): void {
    if (!this._pokemons.some((p: Pokemon) => p.getId === pokemon.getId))
      throw new Error(
        `${this.getFullname} does not have a ${pokemon.getName}.`
      );

    const pokemonToSend: Pokemon = this._pokemons.find(
      (p: Pokemon) => p.getId === pokemon.getId
    );

    this._pokemons = this._pokemons.filter(
      (p: Pokemon) => p.getId !== pokemon.getId
    );

    this._pokedex.addPokemon(pokemonToSend);
  }

  public releasePokemon(pokemon: Pokemon): void {
    if (this._pokemons.length === 0)
      throw new Error(
        `${this.getFullname} does not have any pokemon to be released.`
      );

    if (!this._pokemons.some((p: Pokemon) => p.getId === pokemon.getId))
      throw new Error(
        `${this.getFullname} does not have a ${pokemon.getName}.`
      );

    this._pokemons = this._pokemons.filter(
      (p: Pokemon) => p.getId !== pokemon.getId
    );
  }

  public toString = (): string => {
    return `${this.getFullname}, aka ${this.getNickname}, has a total of ${this._pokemons.length} pokemons.`;
  };
}
