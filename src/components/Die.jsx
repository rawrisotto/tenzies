const Die = (props) => {

  return (
    <div className={"die " + (props.die.freeze ? "freeze" : "")} onClick={() => props.freezeDie(props.die.id)}>
      <p className="die__number">{props.die.currentValue}</p>
    </div>
  )
}

export default Die