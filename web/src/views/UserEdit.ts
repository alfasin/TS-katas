import { View } from "./View";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";
import { UserForm } from "./UserForm";

export class UserEdit extends View<User, UserProps>{

    regionsMap(): { [key: string]: string } {
        return {
            userShow: '.user-show',
            userForm: '.user-form'
        };
    }

    template(): string {
        return `<div>
                    <div class="user-show"></div>
                    <div class="user-form"></div>
                    </div>
        `;
    }

    onRender(): void {
        const userShow = new UserShow(this.regions.userShow, this.model);
        const userForm = new UserForm(this.regions.userForm, this.model);
        userShow.render();
        userForm.render();
    }
}
