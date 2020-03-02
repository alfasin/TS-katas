import { Sortable } from "./Sortable";
import {Sorter} from "./Sorter";

export class NumberCollection extends Sorter implements Sortable {
    public data: number[];

    constructor(data: number[]) {
        super();
        this.data = data;
    }

    compare(left: number, right: number): boolean {
        return this.data[left] > this.data[right];
    }

    swap(i: number, j: number): void {
        const t = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = t;
    }

    get length(): number {
        return this.data.length;
    }

    public toString(): string {
        return String(this.data);
    }
}
