const Die = (props) => {
  return (
    <div className={"die " + (props.freeze ? "freeze" : "")} onClick={() => props.freezeDie(props.id)}>
      <p className="die__number">{props.currentValue}</p>
    </div>
  )
}

export default Die