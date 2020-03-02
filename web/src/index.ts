import { UserList } from './views/UserList'
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const users = new Collection('http://localhost:3000/users',
    (json: UserProps) => {
        return User.buildUser(json);
    }
);

users.fetch();

users.on('change', () => {
   const root = document.getElementById('root');
   if (root) {
       new UserList(root, users).render();
   }
});

// import { UserEdit } from "./views/UserEdit";
// import { User } from "./models/User";
//
// const user = User.buildUser({ name: 'NAME', age: 33 });
//
// function getRoot() {
//     return document.getElementById('root');
// }
//
// let root = getRoot();
// if (root) {
//     const userEdit = new UserEdit(root, user);
//     userEdit.render();
// }

// import { UserForm } from "./views/UserForm";
// import { User } from "./models/User";
//
// const user = User.buildUser({ name: 'NAME', age: 33 });
//
// function getRoot() {
//     return document.getElementById('root');
// }
//
// let root = getRoot();
// if (root) {
//     const userForm = new UserForm(root, user);
//     userForm.render();
// }

// import { User } from "./models/User";
//
//
// const url = 'http://localhost:3000/users';
// console.log(url);
// const collection = User.buildUserCollection();
// collection.fetch();
// console.log(collection);

// import { User } from "./models/User";
// // const user = new User({ name: 'Nir', age: 45 });
// const user = User.buildUser({ id: 1, name: 'bla', age: 25 });
//
// // console.log(user.get('name'));
//
// user.on('change', () => {
//     console.log(user);
// });
//
// user.save();
//
// // user.trigger('change');
// user.set({name: 'Shir'});
// console.log(user.get('name'));
// user.fetch();

// user.set({name: 'jose'});
//
// user.on('change', () => { console.log(1) });
// user.on('change', () => { console.log(2) });
// user.on('bla', () => { console.log(3) });
//
// user.trigger('change');
// user.trigger('bla');
// console.log(user)

// class Person {
//     constructor(public firstName: string, public lastName: string) {}
//
//     get fullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
//
// const p = new Person('Nir', 'Alfasi');
// console.log(p.fullName);
