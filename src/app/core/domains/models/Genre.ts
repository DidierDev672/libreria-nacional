export class Genre {
    private uuid: string;
    private name: string;

    constructor(uuid: string, name: string) {
        this.uuid = uuid;
        this.name = name;
    }

    getUuid(): string {
        return this.uuid;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}