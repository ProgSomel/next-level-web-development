# ✍️ Write Your First TypeScript Program
- 📁 Step 1: Create a file
  Create a file called index.ts:
  ```bash
  touch index.ts
  ```

- ✏️ Step 2: Add some TypeScript code
  Open index.ts and paste the following:
  ```ts
  // index.ts
  function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
  }

  const userName: string = "World";

  console.log(greet(userName));

  ```

- ⚙️ Step 3: Compile the TypeScript file
  Run this command in your terminal:
  ```bash
  npx tsc index.ts
  ```
  **This creates a compiled JavaScript file called index.js.**

- ▶️ Step 4: Run the JavaScript
  Run the output file with Node:
  ```bash
  node index.js
  ```
  **You should see:**
  ```bash
  Hello, World! Welcome to TypeScript.
  ```

# To configure TypeScript 
- at first run in the terminal:
  ```bash
  tsc --init
  ```
  then it will create a **tsconfig.json** file




