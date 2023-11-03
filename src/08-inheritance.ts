export class Animal {
    constructor(public name: string) { }

    move() {
        console.log('Moving along');
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }
}

export class Dog extends Animal {
    // Esta clase está heredando los tributos, el constructor y los métodos de la clase Animal

    // Atributos propios de la clase Dog
    constructor(name: string, public owner: string) {
        super(name);
    }

    // Métodos propios de la clase Dog
    woof(times: number): void {
        for (let i = 0; i < times; i++) {
            console.log('woof');
        }
    }
}

const newDog1 = new Dog('Firulais', 'Jeison');
console.log(newDog1.greeting());
console.log(newDog1.owner);


