//! Normal Function
function add(num1: number, num2: number = 10): number{
    return num1 + num2;
}

add(2, 3);

//! Array function 
const addArrow = (num1: number, num2: number): number => num1 + num2;

//! if there is a function under object --> we call it method
const poorUser = {
    name: "Somel",
    balance: 0,
    addBalance1(balance: number): number{
        return this.balance + balance;
    },
    addBalance2(balance: number): string{
        return `My new balance is = ${this.balance + balance}`;
    }
}

const arr: number[] = [1, 4, 4, 5];
const newArr: number[] = arr.map((elem: number): number=> elem*elem);