// Object Destructing Practise

const user = {
        
    name: "Ahmad",
    age: 15,
    Occupation: "Student",
    Hobies: ["Hockey", "Book Reading"],
    City: "Mianwali"

}

// Renaming Object Destructring

const {name: Name , age: Age} = user;

console.log(Name);
console.log(Age);

// Basic Object Destructring

const {name , age} = user;
console.log(name);
console.log(age);


const Employe = {
    id: 1,
    details: {
        name: "Ahmad",
        Position: "Developer"
    }
}

// Now Its Nested Object Destructering

const {details: {name: Name1 , Position: Position1 }} = Employe;

console.log(Name1);
console.log(Position1);



// Example of using object destructuring in React props

// Step 1: Suppose we receive a 'user' object as a prop
const user1 = {
  name: "Ali",
  age: 25,
  city: "Lahore"
};

// Step 2: Create a component WITHOUT destructuring (long way)
/*
function UserCard(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>Age: {props.user.age}</p>
      <p>City: {props.user.city}</p>
    </div>
  );
}
*/

// Step 3: Create a component WITH destructuring (clean way)
function UserCard({ user1 }) {
  // Object destructuring makes the code cleaner and avoids repeating 'props.user'
  const { name, age, city } = user;

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// OR destructure directly in the function parameters:
/*
function UserCard({ user: { name, age, city } }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}
*/

// Step 4: Use the component and pass the user object as prop
// <UserCard user={user} />

