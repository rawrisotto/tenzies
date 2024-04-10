import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(generateInitialDice());

  // This function will be used to get a random value between 1 and 6
  function getRandomValue() {
    return Math.ceil(Math.random() * 6);
  }

  // This function will be used to set the initial state of dice
  function generateInitialDice() {
    const diceArray = [];

    for (let i = 0; i < 10; i++) {
      diceArray.push({
        id: i + 1,
        currentValue: getRandomValue(),
        freeze: false,
      });
    }

    return diceArray;
  }

  function freezeDie(id) {
    setDice(prevState => prevState.map(die => {
      if (die.id === id) {
        return {
          ...die, freeze: !die.freeze
        }
      } else {
        return die
      }
    }))
  }

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        currentValue={die.currentValue}
        id={die.id}
        freeze={die.freeze}
        freezeDie={(id) => freezeDie(id)}
      />
    );
  });

  return (
    <main>
      <section className="board">
        <h1 className="board__title">Tenzies</h1>
        <p className="board__rules">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="die-wrapper">{diceElements}</div>
        <button className="btn">Roll</button>
      </section>
    </main>
  );
}

export default App;
