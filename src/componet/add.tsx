import React, { useContext, useState } from "react";
import { TodosContext } from "../store/todos"; // Adjust the import path as needed

const Add: React.FC = () => {
  const [data, setData] = useState("");
  const todosContext = useContext(TodosContext);

  if (!todosContext) {
    return <div>Loading...</div>;
  }

  const { handleAdd } = todosContext;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default form submission behavior
    handleAdd(data);
    setData("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 p-4 w-full max-w-md mx-auto bg-white rounded-lg shadow-md mt-4 "
    >
      <input
        type="text"
        name="thought"
        placeholder="Write your thought..."
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="flex-grow w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transform transition duration-200 ease-in-out"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
