import { Sortable } from "./Sortable";
import {Sorter} from "./Sorter";

export class SortedString extends Sorter implements Sortable {

    constructor(public str: String) {
        super();
    }

    get length(): number {
        return this.str.length;
    }

    compare(i: number, j: number): boolean {
        return this.str.charAt(i) > this.str.charAt(j);
    }

    swap(i: number, j: number): void {
        let newStr = this.str.substring(0, i);
        newStr += this.str.substring(j, j+1);
        newStr += this.str.substring(i+1, j);
        newStr += this.str.substring(i, i+1);
        newStr += this.str.substring(j+1);
        this.str = newStr;
    }

    public toString(): String {
        return this.str;
    }

}
