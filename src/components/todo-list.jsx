import React, { useEffect, useState } from "react";
import TodoInput from "./todo-input";
import TodoItem from "./todo-item";

const TodoList = () => {
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todo");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          { task: "Dricka kaffe på dalmål", isDone: true },
          { task: "Handla bär: banan", isDone: true },
          { task: "Spela TicTacToe", isDone: false },
        ];
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const allTodosDone = todo.every((todo) => todo.isDone);

  const addTodo = (newTodo) => {
    if (newTodo.trim() !== "") {
      setTodo([...todo, { task: newTodo, isDone: false }]);
    }
  };

  const toggleIsDone = (index) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo, i) =>
        i === index ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodo((prevTodo) => prevTodo.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="todo-list">
        <TodoInput addTodo={addTodo} />
        {allTodosDone && (
          <div classname="hurra-message">
            <h2>HURRA! Du är klar!</h2>
          </div>
        )}
        <ol className="todos-container">
          {todo.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              toggleIsDone={toggleIsDone}
              deleteTodo={deleteTodo}
            />
          ))}
        </ol>
      </div>
    </>
  );
};

export default TodoList;
