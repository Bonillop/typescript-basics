//Enum
enum Role {ADMIN, AUTHOR, READ_ONLY};

// Plain object
const something: object = { something: "something" };

// "Specialized" object

const person: { 
  name: string;
  age: number;
  hobbies: string[];
  role: Role; //enum
} = {
  name: "John Doe",
  age: 30,
  hobbies: ["Drinking", "Gambling"],
  role: Role.ADMIN
}

// "Specialized", infered object
const person2 = {
  name: "John Doe",
  age: 30,
  hobbies: ["Drinking", "Gambling"],
  role: [1, "admin"] // tuple
}

let favoriteActivities: string[]

console.log(person2);