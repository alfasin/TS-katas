import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick,
        }
    }

    onSaveClick = (): void => {
        this.model.save();
    };

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    };

    onSetNameClick = (): void => {
        const name = document.getElementById('name') as HTMLInputElement;
        if (name) {
            this.model.setName(name.value);
        }
    };

    template(): string {
        return `
            <input id="name" placeholder="${this.model.get('name')}"/>
            <button class="set-name">Set Name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save-model">Save User</button>
        </div>
        `;
    }
}
