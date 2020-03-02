export abstract class Sorter {
    abstract length: number;

    abstract compare(i: number, j: number): boolean;

    abstract  swap(i: number, j: number): void;

    sort(): void {
        for (let i = 0; i < this.length; i++) {
            for (let j = i + 1; j < this.length; j++) {
                if (this.compare(i, j)) {
                    this.swap(i, j)
                }
            }
        }
    }
}

