import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

const AddTransaction = () => {
  const { transactions, setTransactions, role } = useContext(AppContext);

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  if (role !== "admin") return null; // RBAC

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.date || !form.amount || !form.category) return;

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    setTransactions([newTransaction, ...transactions]);

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
  <div className="bg-lime-50 dark:bg-lime-900/30 text-black dark:text-white p-5 rounded-2xl shadow-sm my-6">
    
    <h3 className="font-semibold text-lg mb-4">
      Add Transaction
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      
      {/* Date */}
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="border p-2 rounded 
        bg-white dark:bg-gray-700 
        text-black dark:text-white
        placeholder-gray-400 dark:placeholder-gray-300"
      />

      {/* Amount */}
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="border p-2 rounded 
        bg-white dark:bg-gray-700 
        text-black dark:text-white
        placeholder-gray-400 dark:placeholder-gray-300"
      />

      {/* Category */}
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="border p-2 rounded 
        bg-white dark:bg-gray-700 
        text-black dark:text-white
        placeholder-gray-400 dark:placeholder-gray-300"
      />

      {/* Type */}
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="border p-2 rounded 
        bg-white dark:bg-gray-700 
        text-black dark:text-white"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

    </div>

    <button
      onClick={handleAdd}
      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
    >
      Add
    </button>

  </div>
);
};

export default AddTransaction;