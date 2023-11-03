export class Animal {
    constructor(protected name: string) { } // Puedo acceder a este atributo desde su clase original y desde subclases que hereden de la clase original

    move() {
        console.log('Moving along');
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }

    protected doSomething() {
        console.log('Doing');
    }
}

export class Dog extends Animal {

    constructor(name: string, public owner: string) {
        super(name);
    }

    woof(times: number): void {
        for (let i = 0; i < times; i++) {
            console.log('woof');
        }
        this.doSomething() // Puedo acceder a este método desde su clase original y desde subclases que hereden de la clase original
    }

    move(){
        console.log('Moving as a dog'); // Método move propio de Dog
        super.move(); // Método move de Animal
    }
}

const newDog1 = new Dog('Firulais', 'Jeison');
newDog1.woof(1);
newDog1.doSomethig(); // No puedo acceder a este método desde fuera de su clase original ni tampoco desde fuera de subclases que hereden de la clase original

