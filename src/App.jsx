import { useState, useEffect } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(generateInitialDice());
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    let allValuesEqual = true;
    const frozenDice = [];

    for (let die of dice) {
      die.freeze && frozenDice.push(die);
    }

    if (frozenDice.length !== 0) {
      const frozenValue = frozenDice[0].currentValue;

      for (let die of frozenDice) {
        if (die.currentValue !== frozenValue) {
          allValuesEqual = false;
          return;
        }
      }

      if (frozenDice.length === 10 && allValuesEqual)
        setGameWon((prevState) => !prevState);
    }
  }, [dice]);

  function getRandomValue() {
    return Math.ceil(Math.random() * 6);
  }

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
    setDice((prevState) =>
      prevState.map((die) => {
        if (die.id === id) {
          const updatedDie = { ...die, freeze: !die.freeze };
          return updatedDie;
        } else {
          return die;
        }
      })
    );
  }

  function rollDie() {
    setDice((prevState) =>
      prevState.map((die) => {
        if (!die.freeze) {
          return {
            ...die,
            currentValue: getRandomValue(),
          };
        } else {
          return die;
        }
      })
    );
  }

  const diceElements = dice.map((die) => {
    return <Die key={die.id} die={die} freezeDie={(id) => freezeDie(id)} />;
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
        {gameWon ? (
          <>
            <p className="board__success">Congratulation!</p>
            <button className="btn" onClick={() => window.location.reload()}>
              Reset Game
            </button>
          </>
        ) : (
          <button className="btn" onClick={rollDie}>
            Roll
          </button>
        )}
      </section>
    </main>
  );
}

export default App;
