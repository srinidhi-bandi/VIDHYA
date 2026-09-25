// 1 Components (Building Blocks)
// creates a component
function Welcome()
{
  return <h2>Hello Student!</h2>;
}

// Uses that component
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}

export default App;

// 2 JSX (Mixing HTML and Javascript)
// function App(){
//   const name = "Aniketh";

//   return(
//     <div>
//       <p>Hello {name}, welcome to React!</p>
//     </div>
//   )
// }

// 3 Props (Passing Data to Components)
// function Welcome(props){
//   return <h2>Hello {props.name}</h2>;
// }

// function App(){
//   return (
//     <div>
//       <Welcome name="Lucky" />
//       <Welcome name="Aniketh" />
//       <Welcome name="Rahul" />
//       <Welcome name="Vishnu" />
//     </div>
//   );
// }

// 4) State (Remembering Data)
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// 5A) Events and Conditional Rendering
// function App(){
//   function handleClick(){
//     alert("Button clicked!");
//   }

//   return (
//     <button onClick={handleClick}>
//       Click Me
//     </button>
//   );
// }

// 5B)
// function App() {
//   const isLoggedIn = true;

//   return (
//     <div>
//       {isLoggedIn ? (
//         <h2>Welcome Back!</h2>
//       ) : (
//         <h2>Please Login</h2>
//       )}
//     </div>
//   );
// }

// 6) List and Keys
// const fruits = ["Apple", "Mango", "Banana"];

// function App() {
//   return (
//     <ul>
//       {fruits.map((fruit, index) => (
//         <li key={index}>{fruit}</li>
//       ))}
//     </ul>
//   );
// }

// 7) Hooks (Making React Smarter)
// import { useState } from "react";

// function App() {
//   const [likes, setLikes] = useState(0);

//   return (
//     <button onClick={() => setLikes(likes + 1)}>
//       Likes {likes}
//     </button>
//   );
// }
