abstract class Animal {
    // Método abstracto declarado pero NO definido
    abstract makeSound(): void;

    // Método concreto declarado y definido
    doSomething(): void {
        console.log('Doing something');
    }
}

class Dog extends Animal {
    // Método abstracto definido
    makeSound(): void {
        throw new Error("Method not implemented.");
    }

    // No hay problema si no hago uso de doSomething
}

