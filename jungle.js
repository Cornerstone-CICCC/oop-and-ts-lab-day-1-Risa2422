class Animal {
  #name;
  #species;
  #energy;

  static remainingAnimals = 3;

  constructor(name, species, energy) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get species() {
    return this.#species;
  }

  set species(value) {
    this.#species = value;
  }

  get energy() {
    return this.#energy;
  }

  set energy(value) {
    this.#energy = value;
  }

  attack(target) {
    if (target.energy <= 0) {
      console.log(`${this.#name} wins!`);
      Animal.remainingAnimals -= 1;
    } else if (this.#energy <= 0) {
      console.log(`${target.name} wins!`);
      Animal.remainingAnimals -= 1;
    } else if (target.energy == 0 && target.name == 0) {
      console.log("Both animals do not have this.energy");
      Animal.remainingAnimals -= 2;
    }

    this.energy = this.energy - 10;
    target.energy -= 10;
  }

  eat() {
    this.energy += 10;
  }
}

class Bird extends Animal {
  #canFly;

  constructor(name, species, canFly) {
    super(name, species, 100);
    this.canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }

  set canFly(value) {
    this.#canFly = value;
  }

  attack(target) {
    if (target.energy <= 0) {
      console.log(`${this.name} wins!`);
      Animal.remainingAnimals -= 1;
    } else if (this.energy <= 0) {
      console.log(`${target.name} wins!`);
      Animal.remainingAnimals -= 1;
    } else if (target.energy == 0 && this.energy == 0) {
      console.log("Both animals do not have energy");
      Animal.remainingAnimals -= 2;
    }

    this.energy = this.energy - 20;
    target.energy -= 20;
  }

  eat() {
    this.energy += 10;
  }
}

class Mammal extends Animal {
  #furColor;

  constructor(name, species, furColor) {
    super(name, species, 200);
    this.furColor = furColor;
  }

  get furColor() {
    return this.#furColor;
  }

  set furColor(value) {
    this.#furColor = value;
  }

  attack(target) {
    if (target.energy <= 0) {
      console.log(`${this.name} wins!`);
      Animal.remainingAnimals -= 1;
    } else if (this.energy <= 0) {
      console.log(`${target.name} wins!`);
      Animal.remainingAnimals -= 1;
    } else if (target.energy == 0 && this.energy == 0) {
      console.log("Both animals do not have energy");
      Animal.remainingAnimals -= 2;
    }

    this.energy = this.energy - 50;
    target.energy -= 50;
  }

  eat() {
    this.energy += 20;
  }
}

class Reptile extends Animal {
  #coldBlooded;
  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.coldBlooded = coldBlooded;
  }

  get furColor() {
    return this.#coldBlooded;
  }

  set furColor(value) {
    this.#coldBlooded = value;
  }

  attack(target) {
    if (target.energy <= 0) {
      console.log(`${this.name} wins!`);
      Animal.remainingAnimals -= 1;
    } else if (this.energy <= 0) {
      console.log(`${target.name} wins!`);
      Animal.remainingAnimals -= 1;
    } else if (target.energy == 0 && this.energy == 0) {
      console.log("Both animals do not have energy");
      Animal.remainingAnimals -= 2;
    }

    this.energy = this.energy - 30;
    target.energy -= 30;
  }

  eat() {
    this.energy += 15;
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(
  `Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`
);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(
  `Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`
);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`
);

// Example attack
console.log("\n--- Attacks ---");
console.log(`lion energy :${lion.energy} and eagle energy :${eagle.energy}`);
eagle.attack(lion);
eagle.attack(lion);
eagle.attack(lion);
eagle.attack(lion);
eagle.attack(lion);
eagle.attack(lion);
console.log(`lion energy :${lion.energy} and eagle energy :${eagle.energy}`);

console.log(`eagle energy :${eagle.energy}`);
eagle.eat();
console.log(`eagle energy :${eagle.energy}`);

console.log(`lion :${lion.energy} snake :${snake.energy}`);
lion.attack(snake);
console.log(`lion :${lion.energy} snake :${snake.energy}`);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
