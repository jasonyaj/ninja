class Ninja {
  constructor(name, health = 10, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  // logs a ninja name
  sayName() {
    console.log(this.name);
  }

  // logs current stat of a ninja
  showStats() {
    console.log(
      'Name:', this.name, '\n',
      'Strength:', this.strength, '\n',
      'Speed:', this.speed, '\n',
      'Health:', this.health
    );
  }

  // adds 10 health to a ninja's current health
  drinkSake() {
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName(); //Hyabusa
ninja1.showStats(); //Hyabusa 3 3 10
ninja1.drinkSake(); //health + 10
ninja1.showStats(); //Hyabusa 3 3 20

