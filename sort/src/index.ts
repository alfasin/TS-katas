import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { SortedString } from "./SortedString";

const nc = new NumberCollection([4,2,6,7,9,3, -1, -5]);
const nc2 = new SortedString("dbcaefg");

nc2.sort();
nc.sort();

console.log(`${nc}`);
console.log(`${nc2}`);
