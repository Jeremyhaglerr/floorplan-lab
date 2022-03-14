import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen(props) {
  return (
    <div id={'kitchen'}>
      <div id='appliances'>
      <Oven/>
      <Sink/>
      </div>
      <h1> kitchen </h1>
    </div>
  );
}

export default Kitchen;