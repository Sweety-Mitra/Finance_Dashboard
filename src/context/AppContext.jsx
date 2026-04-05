import { createContext, useState } from "react";
import { transactions as initialData } from "../data/transactions";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("viewer");

  return (
    <AppContext.Provider
      value={{ transactions, setTransactions, role, setRole }}
    >
      {children}
    </AppContext.Provider>
  );
};