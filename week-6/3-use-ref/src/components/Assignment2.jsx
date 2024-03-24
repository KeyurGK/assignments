import React, { useState, useCallback, useRef, memo } from "react";

export function Assignment2() {
  //   const [forceRender, setForceRender] = useState(0);
  //   const renderCount = useRef(0);
  //   const handleReRender = () => {
  //     // Update state to force re-render
  //     setForceRender(forceRender + 1);
  //   };
  //   const handleRefChange = () => {
  //     console.log(renderCount);
  //     renderCount.current = renderCount.current + 1;
  //     console.log(renderCount);
  //   };

  //   return (
  //     <div>
  //       <p>This component has rendered {forceRender} times.</p>
  //       <button onClick={handleReRender}>Force Re-render</button>
  //       <button onClick={handleRefChange}>Ref Change</button>
  //       <p>{renderCount.current}</p>
  //     </div>
  //     );

  const [count, setCount] = useState(0);

  const numberOfTimesReRendered = useRef(0);
  console.log(count);
  const handleReRender = () => {
    // Update state to force re-render
    setCount(count + 1);
  };
  console.log(count);

  console.log(numberOfTimesReRendered);
  numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;

  return (
    <div>
      <p>
        This component has rendered {numberOfTimesReRendered.current} times.
      </p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
