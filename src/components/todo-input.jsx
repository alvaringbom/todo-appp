import React, { useState } from "react";
import Button from "./button";

const TodoInput = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInput = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="todo-input-container">
      <input
        className="todo-input"
        type="text"
        placeholder="Skriv här"
        value={newTodo}
        onChange={handleInput}
      />
      <button className="add-button" onClick={handleAddTodo}>
        Lägg till
      </button>
    </div>
  );
};

export default TodoInput;
