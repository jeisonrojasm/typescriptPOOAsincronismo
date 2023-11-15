class MyMath {
    static readonly PI = 3.14;

    static max(...args: number[]) {
        return args[0];
    }
}
// MyMath.PI = 5; NO puedo reasignar PI porque es readonly
const pi = MyMath.PI;
const max = MyMath.max(3, 1, 2);

