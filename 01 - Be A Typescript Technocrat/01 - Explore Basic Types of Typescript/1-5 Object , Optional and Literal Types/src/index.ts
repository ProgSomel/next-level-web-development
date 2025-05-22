//! reference type --> object

const user:{
    firstName: string;
    middleName?: string; //? optional
    lastName: string;
    isMarried?: boolean;
    company?: "Somel Hero"; //? Literal Type --> value can not be changed
    readonly class: string;
} = {
    firstName: "Somel",
    lastName: "Ahmed",
    isMarried: false,
    company: "Somel Hero", //? we can not change the value as it is literal type
    class: "eight",
}

user.class = "seven"; //? can not change here as it is  readonly