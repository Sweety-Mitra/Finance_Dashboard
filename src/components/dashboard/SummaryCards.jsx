import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SummaryCards = () => {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Balance */}
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
        <h3 className="text-gray-500">Total Balance</h3>
        <p className="text-xl font-bold">₹ {balance}</p>
      </div>

      {/* Income */}
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
        <h3 className="text-gray-500">Income</h3>
        <p className="text-xl font-bold text-green-600">₹ {income}</p>
      </div>

      {/* Expense */}
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
        <h3 className="text-gray-500">Expenses</h3>
        <p className="text-xl font-bold text-red-600">₹ {expense}</p>
      </div>
    </div>
  );
};

export default SummaryCards;