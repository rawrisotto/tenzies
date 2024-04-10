import { useState } from "react";
import Die from "./components/Die"

function App() {
  const [dice, setDice] = useState(generateInitialDice())

  function getRandomValue() {
    return Math.ceil(Math.random() * 6)
  }

  function generateInitialDice() {
    const diceArray = []
    
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        id: i + 1,
        currentValue: getRandomValue(),
        freeze: false,
        roll: getRandomValue
      })
    }

    return diceArray
  }

  return (
    <main>
      <section className="board">
        <h1 className="board__title">Tenzies</h1>
        <p className="board__rules">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="die-wrapper">
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
        </div>
        <button className="btn">Roll</button>
      </section>
    </main>
  );
}

export default App;
