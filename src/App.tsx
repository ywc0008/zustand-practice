import { useState } from "react";
import "./App.css";
import useTodoStore from "./hooks/useTodoStore";

function App() {
  const todoList = useTodoStore((state) => state.todoList);
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };
  return (
    <>
      <h1>투두리스트</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todoList.map((item) => (
          <div key={item.id}>
            <li>{item.text}</li>
            <button onClick={() => removeTodo(item.id)}>x</button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
