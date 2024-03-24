import { useEffect, useState, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

// export function Assignment1() {
//   const inputRef = useRef(null);
//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const handleButtonClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input type="text" placeholder="Enter text here" ref={inputRef} />
//       <button onClick={handleButtonClick}>Focus Input</button>
//     </div>
//   );
// }

export function Assignment1() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    previousInputValue.current = inputValue;
    console.log("hi");
  }, [inputValue]);
  useEffect(() => {
    console.log("hi2");
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: </h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}
