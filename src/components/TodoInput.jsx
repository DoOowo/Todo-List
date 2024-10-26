import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  

  const handleChange = (e) => {
    setTodoValue(e.target.value);
    console.log("Current input value:", e.target.value); // Debugging the input value
  };



  const handleSubmit = (e) =>{
    e.preventDefault()
    handleAddTodos(todoValue);
    setTodoValue('')    
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>    
        <input
        value={todoValue}
        onChange={handleChange}
        placeholder="Enter todo..."
      />
      <button type="submit"
      >Add</button>
      </form>
      
    </header>
  );
}
