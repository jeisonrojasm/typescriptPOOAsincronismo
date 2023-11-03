export class MyDate {

    constructor(private _year: number = 1996, private _month: number = 6, private _day: number = 29) { }

    // Métodos
    printFormat(): string {
        const day = this.addPadding(this._day)
        const month = this.addPadding(this._month)
        return `${day}/${month}/${this._year}`
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
            this._day += amount;
        }
        if (type === 'months') {
            this._month += amount;
        }
        if (type === 'years') {
            this._year += amount; // Desde aquí sí se podría modificar year porque está dentro de la clase
        }
    }

    get day() {
        return this._day;
    }

    get isLeapYear(): boolean {
        if (this._year % 400 === 0) return true;
        if (this._year % 100 === 0) return false;
        return this._year % 4 === 0;
    }
}

const myDate = new MyDate();
console.log(myDate.day) //Puedo obtener el valor 
// myDate.day = 1; //Pero no puedo modificarlo porque solo es un método get
console.log(myDate.isLeapYear);
