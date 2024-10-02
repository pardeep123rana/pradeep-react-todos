import { useContext } from "react";
import { TodosContext } from "../store/todos";
import Navbar from "./navbar";

const Completed = () => {
  const todosContext = useContext(TodosContext);

  if (!todosContext) {
    return <div>Loading...</div>;
  }

  const { todos } = todosContext;

  // Filter only unchecked (incomplete) todos
  const uncheckedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="p-4">
      <Navbar />
      <h2 className="text-center text-lg font-bold mb-4">Unchecked Todos</h2>

      {uncheckedTodos.length > 0 ? (
        uncheckedTodos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center bg-yellow-200 p-4 mb-2 shadow-md rounded-md"
          >
            <div className="text-black">
              <span>{todo.text}</span>
            </div>
            <div>
              <span className="text-sm text-gray-500">ID: {todo.id}</span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">
          No unchecked todos available
        </p>
      )}
    </div>
  );
};

export default Completed;
