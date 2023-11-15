export interface Driver {
    database: string,
    password: string,
    port: number,
    connect(): void,
    disconnect(): void,
    isConnected(database: string): boolean,
}

class postgresDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number,
    ) { }

    connect(): void {
        throw new Error("Method not implemented.");
    }

    disconnect(): void {
        throw new Error("Method not implemented.");
    }

    isConnected(database: string): boolean {
        throw new Error("Method not implemented.");
    }
}

