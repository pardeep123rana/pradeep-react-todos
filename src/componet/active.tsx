import { useContext } from "react";
import { TodosContext } from "../store/todos"; // Make sure you're importing the correct context
import Navbar from "./navbar";

const Active = () => {
  const todosContext = useContext(TodosContext);

  if (!todosContext) {
    return <div>...loading</div>;
  }

  const { todos } = todosContext;

  return (
    <div className="text-black flex justify-center items-center">
      <div>
        <Navbar />

        {/* Conditionally map and render active (incomplete) todos */}
        {todos
          .filter((todo) => !todo.completed) // Show only active todos
          .map((todo) => (
            <div
              key={todo.id}
              className="p-4 border border-gray-300 my-2 rounded bg-yellow-200 flex flex-row justify-between items-center"
            >
              <p className="mr-4">{todo.text}</p> {/* Display todo text */}
              <p>{todo.id}</p> {/* Display todo ID */}
              {/* Optionally, add checkbox */}
              {/* <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              /> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Active;
