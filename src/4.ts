abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(`Hello ${person.name}, you are in house!`);
    } else {
      console.log("Your key is not valid");
    }
  }

  abstract openDoor(key: Key): void;
}

class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, public name: string) {}
  getKey(): Key {
    return this.key;
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(keyPerson: Key): void {
    if (this.key.getSignature() === keyPerson.getSignature()) this.door = true;
  }
}

const key = new Key();
const key2 = new Key();
console.log(key.getSignature());
console.log(key2.getSignature());
const house = new MyHouse(key);
console.log(house);
const person = new Person(key, "Archi");
console.log(person);
house.openDoor(person.getKey());
house.comeIn(person);

// export {};
