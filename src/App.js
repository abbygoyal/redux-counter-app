import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Inc, Dec, Incby25, Decby25, setReset } from "./states/reducers/index";

function App() {
  const currentState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Redux Counter Project</h1>
        <h1>{currentState}</h1>
        <div>
          <button onClick={() => dispatch(Inc())}>Increase</button>
          <button onClick={() => dispatch(Dec())}>Decrease</button>
          <button onClick={() => dispatch(Incby25(25))}>Increase By 25</button>
          <button onClick={() => dispatch(Decby25(25))}>Decrease By 25</button>
        </div>
        <button onClick={() => dispatch(setReset(0))}>Reset</button>
      </div>
    </>
  );
}

export default App;
