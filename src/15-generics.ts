

function getValue<T>(value: T) {
    return value;
}

getValue<number>(29)
getValue<string>(29)

export class BaseHttpService<T> {
    data: T[] = [];

    getAll(): T[] {
        return []
    }
}

