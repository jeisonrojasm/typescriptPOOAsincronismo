export class MyService {

    static instance: MyService | null = null;

    private constructor(private name: string) { }

    static create(name: string) {
        if (MyService.instance === null) {
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    }
}

const myService1 = MyService.create('Servicio 1');
const myService2 = MyService.create('Servicio 2');
const myService3 = MyService.create('Servicio 3');

console.log(myService1);
console.log(myService2);
console.log(myService3);
