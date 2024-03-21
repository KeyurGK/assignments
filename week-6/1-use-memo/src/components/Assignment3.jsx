import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);
  const [count, setCount] = useState(0);
  // Your code starts here
  console.log("hi before");
  const totalValue = useMemo(
    function () {
      let totalValue = 0;
      items.forEach(function (item) {
        totalValue = totalValue + item.value;
      });
      return totalValue;
    },
    [items]
  );

  console.log("hi after");
  // Your code ends here
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Counter {count}
      </button>
    </div>
  );
};
