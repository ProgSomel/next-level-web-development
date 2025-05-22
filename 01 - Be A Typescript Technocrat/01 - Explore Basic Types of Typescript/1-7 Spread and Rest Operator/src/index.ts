//! 1-7 Spread and Rest Operator

//? Spread Operator
// with array
const bros1: string[] = ["Somel", "Ahmed"];
const bros2: string[] = ["Nahid", "Sheikh"];

bros1.push(...bros2);

// with object
const mentors = {
    typescript: "A",
    redux: "B",
    dbms: "C",
}

const mentors2 = {
    prisma: "D",
    nextjs: "E",
    cloud: "F"
}

const mentorList = {
    ...mentors, 
    ...mentors2
}

//? Rest Operator
const greetFriends = (...friends: string[]) =>{
    friends.forEach((friend: string)=> console.log(`Hi ${friend}`));
} 
greetFriends("Somel Ahmed", "Nahid Islam", "Sarjis Alam", "Mahfuz Alam");