function Bath(props) {
  return (
    <div>
      <h1 class={'bath'} id={`${props.size}-bath`}> {props.size} Bath</h1>
    </div>
  );
}

export default Bath;