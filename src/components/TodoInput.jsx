import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  

  const handleChange = (e) => {
    setTodoValue(e.target.value);
    console.log("Current input value:", e.target.value); // Debugging the input value
  };

  const handleClick = () => {
    console.log("Todo added:", todoValue); // Debugging the button click
    handleAddTodos(todoValue);
  };

  return (
    <header>
      <input
        value={todoValue}
        onChange={handleChange}
        placeholder="Enter todo..."
      />
      <button onClick={() => {
      handleClick()
      setTodoValue("")}}
      >Add</button>
    </header>
  );
}
