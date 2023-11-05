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
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {
    this.key = key;
  }
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Wellkome in my house");
    } else {
      console.log("access denied");
    }
  }
  abstract OpenDoor(key: Key): void;
}
class MyHouse extends House {
  OpenDoor(key: Key) {
    {
      if (this.key.getSignature() === key.getSignature()) {
        this.door = true;
        console.log("The door is open");
      } else {
        console.log("Sorry, you don't have access");
      }
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
