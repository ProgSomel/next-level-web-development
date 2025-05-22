# Primitive Types and Non Primitive Types
1. Primitive
   - number
   - string
   - boolean
   - null
   - undefined
   - symbol

2. Non Primitive
   - Array
   - Tuple
   - Object

### will we get typescript data type in runtime?
**Answer**: No.... Because we will not run typescript. we will compile typescript file to javascript and then will run the javascript file, thats why we will get the javascript data type not the typescript data type at run time

### How typescript helps us?
**Answer**: When we will compile the code then at the time of compile it will help us by checking the type of data. So that we do not do any wrong when declare a variable with data type.

# Primitive
- ## string
```ts
let firstname = "Somel"; //? implicit data type(by own) 
let lastname = "Ahmed"; //? explicit data type 
```

- ## number
```ts
let roll: number = 12;
```

- ## boolean
```ts
let isAdmin : boolean = true;
```

- ## undefined
```ts
let x: undefined = undefined;
```

- ## null
```ts
let y: null = null;
```

# Non Primitive
- ## Array
```ts
let friends: string[] = ["somel", "ahmed"];
let numbers: number[] = [50, 10];
```

- ## touple --> special type of array --> order --> type of valued
```ts
let coordinates: [number, number] = [1, 5];
let nameAge: [string, number, boolean] = ["somel", 10, true];
```

