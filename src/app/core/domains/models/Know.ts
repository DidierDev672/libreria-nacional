export class Know {
    private title: string;
    private description: string[];

    constructor(title: string, description: string[]) {
        this.title = title;
        this.description = description;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getDescription(): string[] {
        return this.description;
    }

    setDescription(description: string[]): void {
        this.description = description;
    }
}