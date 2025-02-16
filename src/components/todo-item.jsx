import React from "react";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo, index, toggleIsDone, deleteTodo }) => {
  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => toggleIsDone(index)}
          className="todo-checkbox"
          aria-label={`Markera ${todo.task} som klar`}
        />
      </label>
      <p className={todo.isDone ? "task isDone" : "task"}>{todo.task}</p>
      <Button
        text={<FontAwesomeIcon icon={faTimes} />}
        className="delete-button"
        onClick={() => deleteTodo(index)}
        aria-label="Ta bort uppgift"
        title="Ta bort uppgift"
      />
    </li>
  );
};

export default TodoItem;
