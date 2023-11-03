export class MyDate {

    // Definición de atributos

    constructor(private year: number = 1996, private month: number = 6, private day: number = 29) {
        // Inicialización de atributos
    }

    // Métodos
    printFormat(): string {
        const day = this.addPadding(this.day)
        const month = this.addPadding(this.month)
        return `${day}/${month}/${this.year}`
    }

    private addPadding(value: number) {
        if (value < 10) {
            return `0${value}`
        } else {
            return value
        }
    }

    add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this.day += amount;
        }
        if (type === 'months') {
            this.month += amount;
        }
        if (type === 'years') {
            this.year += amount; // Desde aquí sí se podría modificar year porque está dentro de la clase
        }
    }

    getMonth() {
        return this.month;
    }
}

const myDate = new MyDate();
console.log(myDate.printFormat())
console.log(myDate.getMonth());

