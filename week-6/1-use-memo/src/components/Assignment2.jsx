import React, { useEffect, useState, useMemo } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 5;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += " ";
  }
  ALL_WORDS.push(sentence);
}

export function Assignment2() {
  const [count, setCount] = useState(0);
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");
  function counter() {
    setCount(count + 1);
  }
  console.log("hi brfore");
  const filteredSentences = useMemo(
    function () {
      return sentences.filter((x) => x.includes(filter));
    },
    [sentences, filter]
  );

  console.log("hi after");
  return (
    <div>
      <button onClick={counter}>count ++ : {count}</button>
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></input>
      {filteredSentences.map((word) => (
        <div>{word}</div>
      ))}
    </div>
  );
}
