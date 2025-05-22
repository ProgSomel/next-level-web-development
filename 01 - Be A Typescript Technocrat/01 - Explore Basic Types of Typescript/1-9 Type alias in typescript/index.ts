//! 1-9 Type alias in typescript

type Student = {
    name: string;
    age: string;
    gender: string;
    contactNo: string;
    address: string;
}

const student1:Student  = {
    name: "Somel",
    age: "50",
    gender: "male",
    contactNo: "01",
    address: "dhaka"
}

const student2:Student  = {
    name: "Somel",
    age: "50",
    gender: "male",
    contactNo: "01",
    address: "dhaka"
}

//? type alias with function
type Add = (num1:number, num2:number) =>number;

const add:Add = (num1, num2) => num1 + num2;