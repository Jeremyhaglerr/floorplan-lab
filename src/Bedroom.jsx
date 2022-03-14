function Bedroom(props) {
  return (
    <div>
     <h1 className={'bedroom'} id={`bed-${props.bedNum}`}>Bedroom {props.bedNum}</h1>
    </div>
  );
}

export default Bedroom;