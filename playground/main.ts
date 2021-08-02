import { Pokemon, Trainer } from '@entity';

const pikachu: Pokemon = new Pokemon(1, 'Pikachu', 1);
const charizard: Pokemon = new Pokemon(2, 'Charizard', 2);
const dragonite: Pokemon = new Pokemon(3, 'Dragonite', 4);
const abra: Pokemon = new Pokemon(4, 'Abra', 5);
const kadabra: Pokemon = new Pokemon(5, 'Kadabra', 5);
const alakazam: Pokemon = new Pokemon(6, 'Alakazam', 5);
const bulbasaur: Pokemon = new Pokemon(7, 'Bulbasaur', 6);

const trainer1: Trainer = new Trainer('Bruno', 'Farias', 'BC');
trainer1.caughtPokemon(charizard);
trainer1.caughtPokemon(dragonite);
trainer1.caughtPokemons(abra, kadabra, alakazam, pikachu);

trainer1.sendPokemonToPokedex(pikachu);
trainer1.caughtPokemon(bulbasaur);

// invalid
// trainer1.getPokemons.push(pikachu);

trainer1.releasePokemon(charizard);
trainer1.releasePokemon(kadabra);
// trainer1.releasePokemon(pikachu);

console.log(trainer1.toString());
console.log(trainer1.getPokemons);
console.log(trainer1.getPokedex.getPokemons);

// const trainer2: Trainer = new Trainer('Angeline', 'Farias', 'Angie');
// trainer2.releasePokemon(alakazam);
