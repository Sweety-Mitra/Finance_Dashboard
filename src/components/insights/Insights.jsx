import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  // Category spending
  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const highestCategory = Object.keys(categoryMap).reduce(
    (a, b) => (categoryMap[a] > categoryMap[b] ? a : b),
    ""
  );

  // Totals
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const isBalanced = totalIncome >= totalExpense;

  return (
    <div className="mt-6 pb-6">
      <h3 className="text-xl font-semibold mb-4">Insights</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Highest Category */}
        <div className="bg-yellow-50 p-4 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-sm text-gray-500">Top Spending</p>
          <h4 className="text-lg font-semibold mt-1">
            {highestCategory || "N/A"}
          </h4>
        </div>

        {/* Income */}
        <div className="bg-green-50 p-4 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-sm text-gray-500">Total Income</p>
          <h4 className="text-lg font-semibold text-green-600 mt-1">
            ₹ {totalIncome}
          </h4>
        </div>

        {/* Expense */}
        <div className="bg-red-50 p-4 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-sm text-gray-500">Total Expense</p>
          <h4 className="text-lg font-semibold text-red-600 mt-1">
            ₹ {totalExpense}
          </h4>
        </div>

        {/* Insight */}
        <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-sm text-gray-500">Insight</p>
          <h4 className="text-sm font-medium mt-1">
            {isBalanced
              ? "Your finances are well balanced ✅"
              : "You are spending more than you earn ⚠️"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Insights;