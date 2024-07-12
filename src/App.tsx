import "./App.css";
import useCounter from "../src/hooks/useCounter";

function App() {
  const bears = useCounter((state) => state.bears);
  const onClickPlusHandle = useCounter((state) => state.increaseNumber);
  const onClickMinusHandle = useCounter((state) => state.decreaseNumber);
  const onClickRemoveAllHandle = useCounter((state) => state.removeAllBears);

  return (
    <>
      <h1>{bears} around here...</h1>
      <button onClick={onClickPlusHandle}>one up</button>
      <button onClick={onClickMinusHandle}>one down</button>
      <button onClick={onClickRemoveAllHandle}>remove All</button>
    </>
  );
}

export default App;
