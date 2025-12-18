import React from "react";
import  { useState } from "react";
function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateRelationship = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult("Please Enter valid input");
      return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    for (let i = 0; i < arr1.length; i++) {
      const index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1.splice(i, 1);
        arr2.splice(index, 1);
        i--;
      }
    }

    const relations = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
    };

    setResult(relations[(arr1.length + arr2.length) % 6]);
  };

  const clearAll = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div id="main">
      {/* Do not remove the main div */}

      <input
        data-testid="input1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />

      <input
        data-testid="input2"
        name="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />

      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate Relationship Future
      </button>

      <button
        data-testid="clear"
        name="clear"
        onClick={clearAll}
      >
        Clear
      </button>

     <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;
