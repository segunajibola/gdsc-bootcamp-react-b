import React, { useState, useEffect } from "react";

function ButtonEvents() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  // Subscribe to the click event on the document
  useEffect(() => {
    document.addEventListener("click", handleClick);

    // Clean up subscription when component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <h1>Subscription Example (Button events)</h1>
      <button>Number of clicks: {clickCount}</button>
    </div>
  );
}

export default ButtonEvents;
