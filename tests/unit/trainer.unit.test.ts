import { Pokemon, Trainer } from '@entity';

describe('Trainer', () => {
  describe('Errors', () => {
    let trainer: Trainer;

    const pikachu: Pokemon = new Pokemon(1, 'Pikachu', 1);
    const abra: Pokemon = new Pokemon(1, 'Abra', 1);
    const kadabra: Pokemon = new Pokemon(1, 'Kadabra', 1);
    const alakazam: Pokemon = new Pokemon(1, 'Alakazam', 1);

    beforeEach(() => {
      trainer = new Trainer('Bruno', 'Cesar', 'BC');
    });

    it(`given a trainer with one pokemon
        when try to add the same pokemon
        then an error should be trown`, () => {
      trainer.caughtPokemon(pikachu);

      expect(() => {
        trainer.caughtPokemon(pikachu);
      }).toThrowError('Bruno Cesar already has a Pikachu.');
    });

    it(`given a trainer with two pokemons
        when trying to add multiple pokemons that the trainer already has
        then an error should be trown`, () => {
      trainer.caughtPokemons(abra, kadabra, alakazam);

      expect(() => {
        trainer.caughtPokemons(kadabra, abra);
      }).toThrowError(
        'Bruno Cesar already has the selected pokemons: Abra, Kadabra.'
      );
    });

    it(`given a trainer
        when trying to add the same pokemon more than once
        then an error should be trown`, () => {
      expect(() => {
        trainer.caughtPokemons(abra, abra);
      }).toThrowError('The trainer cannot have duplicate pokemons.');
    });

    it(`given a trainer without pokemons
        when trying to release a pokemon
        then an error should be trown`, () => {
      expect(() => {
        trainer.releasePokemon(abra);
      }).toThrowError('Bruno Cesar does not have any pokemon to be released.');
    });

    it(`given a trainer with one pokemon
        when trying to release a different pokemon
        then an error should be trown`, () => {
      expect(() => {
        trainer.releasePokemon(abra);
      }).toThrowError('Bruno Cesar does not have any pokemon to be released.');
    });
  });
});
