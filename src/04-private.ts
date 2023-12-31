export class MyDate {
    private year: number;
    private month: number;
    private day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
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

const myDate = new MyDate(1996, 6, 29);
console.log(myDate.printFormat())
console.log(myDate.getMonth());

