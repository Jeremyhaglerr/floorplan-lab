import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen(props) {
  return (
    <div id={'kitchen'}>
      <h1> kitchen </h1>
      <Oven/>
      <Sink/>
    </div>
  );
}

export default Kitchen;