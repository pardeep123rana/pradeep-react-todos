import React, { useContext, useState } from "react";
import { TodosContext } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Mytodos = () => {
  const todosContext = useContext(TodosContext);
  const [checkedState, setCheckedState] = useState<{ [id: number]: boolean }>(
    {}
  );
  const [searchParams] = useSearchParams();
  const todosQuery = searchParams.get("todos");
  console.log(todosQuery);

  if (!todosContext) {
    return <div>Loading...</div>;
  }

  const { todos, toggleTodo, handleDelete, handleCheck } = todosContext;

  const handleCheckboxChange = (id: number) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
    handleCheck(id, !checkedState[id]);
  };

  return (
    <div className="p-4">
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center bg-yellow-200 p-4 mb-2 shadow-md rounded-md"
          >
            <div className="text-black">
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
              >
                {todo.text} (ID: {todo.id})
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`${
                  todo.completed ? "bg-green-500" : "bg-yellow-500"
                } text-white px-2 py-1 rounded-md hover:opacity-90`}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>

              <input
                type="checkbox"
                checked={!!checkedState[todo.id]}
                onChange={() => handleCheckboxChange(todo.id)}
              />

              {checkedState[todo.id] && (
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-gray-500 text-white px-2 py-1 rounded-md hover:bg-gray-600"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No Todos available</p>
      )}
    </div>
  );
};

export default Mytodos;
