import { Pokemon, Trainer } from '@entity';

const pikachu: Pokemon = new Pokemon('Pikachu', 1);
const charizard: Pokemon = new Pokemon('Charizard', 2);
const dragonite: Pokemon = new Pokemon('Dragonite', 4);
const abra: Pokemon = new Pokemon('Abra', 5);
const kadabra: Pokemon = new Pokemon('Kadabra', 5);
const alakazam: Pokemon = new Pokemon('Alakazam', 5);

const trainer: Trainer = new Trainer('Bruno', 'Farias', 'BC');
trainer.addPokemon(charizard);
trainer.addPokemon(dragonite);
trainer.addPokemons(abra, kadabra, alakazam);

console.log(trainer.toString());
console.log(trainer.pokemons);
