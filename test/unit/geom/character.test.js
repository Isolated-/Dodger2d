const Character = require('../../../lib/geom/character');
const GameObject = require('../../../lib/geom/generic/object');

describe('Character unit test', () => {
  test('should be instance of GameObject', () => {
    const character = new Character(10, 10);
    expect(character).toBeInstanceOf(GameObject);
  });

  describe('#.getHealth()', () => {
    test('should return 3 (default value)', () => {
      const character = new Character(10, 10);
      expect(character.getHealth()).toBe(3);
    });
  });

  describe('#.increaseHealth(amount)', () => {
    test('should increase health by amount', () => {
      const character = new Character(10, 10);

      character.increaseHealth(3);
      expect(character.getHealth()).toBe(6);
    });

    test('should set health to max health (over limit)', () => {
      const character = new Character(10, 10);

      character.increaseHealth(Character.MaxHealth * 2);
      expect(character.getHealth()).toBe(Character.MaxHealth);
    });
  });

  describe('#.decreaseHealth(amount)', () => {
    test('should decrease health by amount', () => {
      const character = new Character(10, 10);

      character.decreaseHealth(2);
      expect(character.getHealth()).toBe(1);
    });

    test('should set player to dead', () => {
      const character = new Character(10, 10);

      character.decreaseHealth(3);
      expect(character.isDead()).toBe(true);
    });
  });
});
