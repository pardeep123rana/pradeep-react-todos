import React, { createContext, ReactNode, useState } from "react";

// Define the shape of the context value
interface Todo {
  id: number;
  text: string;
  completed: boolean; // Add 'completed' to track whether a todo is finished or not
  createdAt: Date;
}

interface TodosContextType {
  todos: Todo[];
  handleAdd: (text: string) => void;
  toggleTodo: (id: number) => void;
  handleDelete: (id: number) => void;
  handleCheck: (id: number, isChecked: boolean) => void; // Checkbox logic
}

// Create a context with an initial value of null
export const TodosContext = createContext<TodosContextType | null>(null);

// Create the provider component
export const TodosProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add a new todo
  const handleAdd = (text: string) => {
    setTodos((prev) => [
      {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date()
      },
      ...prev
    ]);
  };

  // Toggle the completion of a todo
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo by its id
  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Handle the checkbox logic
  const handleCheck = (id: number, isChecked: boolean) => {
    // Optionally handle additional logic when the checkbox is checked/unchecked
    console.log(`Todo with id ${id} isChecked: ${isChecked}`);
  };

  return (
    <TodosContext.Provider
      value={{ todos, handleAdd, toggleTodo, handleDelete, handleCheck }}
    >
      {children}
    </TodosContext.Provider>
  );
};
