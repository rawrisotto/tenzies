const Die = (props) => {
  return (
    <div className="die freeze">
      <p className="die__number">{props.currentValue}</p>
    </div>
  )
}

export default Die