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
    <div className="bg-white p-4 rounded shadow my-6">
      <h3 className="font-semibold mb-3">Add Transaction</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <button
        onClick={handleAdd}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default AddTransaction;