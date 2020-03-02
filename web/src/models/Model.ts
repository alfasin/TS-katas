import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttribute<T> {
    get<K extends keyof T>(key: K): T[K];
    set(update: T): void;
    getAll(): T;
}

interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise
}

interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void
}

interface HasId {
    id?: number;
}

export class Model<T extends HasId> {

    constructor(
        private attributes: ModelAttribute<T>,
        private events: Events,
        private sync: Sync<T>) {}

    on = this.events.on;

    trigger = this.events.trigger;

    get = this.attributes.get;

    set(attr: T): void {
        this.attributes.set(attr);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.get("id") as number;
        if (!id) {
            throw new Error(`can't fetch without an ID`);
        }

        this.sync.fetch(id).then((resp: AxiosResponse) => {
            this.set(resp.data);
        });
    }

    save(): void {
        this.sync.save(this.attributes.getAll()).then((resp: AxiosResponse) => {
            this.trigger('save');
        }).catch(e => {
            this.trigger('error');
        });
    }
}
