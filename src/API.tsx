import { createContext, ReactNode } from "react";

// Define the type for your props
interface CreateAppProps {
  children: ReactNode;
}

// Create the context with a default value of `null`
export const TodosContext = createContext(null);

// Define the provider component
export const TodosProvider = ({ children }: CreateAppProps) => {
  {
    children;
  }
  return <TodosContext.Provider value={null}>{children}</TodosContext.Provider>;
};
