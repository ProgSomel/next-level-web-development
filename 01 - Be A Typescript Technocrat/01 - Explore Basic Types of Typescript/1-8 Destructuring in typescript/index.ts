//! 1-8 Destructuring in typescript
//? object destructuring
const user = {
    id: 1235,
    name: {
        firstName: "Somel",
        middleName: "",
        lastName: "Ahmed",
    },
    contactNo: "01870436887",
    address: "Bangladesh"
}

const {contactNo, name:{middleName: midName}} = user;

//? Array destructuring
const friends = ['somel', 'ahmed', 'shakil', 'sheikh'];
const [a, b, c] = friends;
const [, , d] = friends;
const [s, ...rest] = friends;