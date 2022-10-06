// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const increse = () => {
    //setCount(count + 1);
    dispatch({ type: "INCREASE" });
  };

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={increse}>증가</button>
    </div>
  );
}

export default App;
