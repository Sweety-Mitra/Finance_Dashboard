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
      <div className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm">
          Total Balance
        </h3>
        <p className="text-2xl font-bold mt-1">
          ₹ {balance}
        </p>
      </div>

      {/* Income */}
      <div className="bg-emerald-100 dark:bg-emerald-900/30 text-black dark:text-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm">
          Income
        </h3>
        <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
          ₹ {income}
        </p>
      </div>

      {/* Expense */}
      <div className="bg-red-100 dark:bg-red-900/30 text-black dark:text-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm">
          Expenses
        </h3>
        <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">
          ₹ {expense}
        </p>
      </div>

    </div>
  );
};

export default SummaryCards;