import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionTable = () => {
  const { transactions, setTransactions, role } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      filterType === "all" || t.type === filterType;

    return matchesSearch && matchesType;
  });

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="bg-rose-50 dark:bg-rose-900/30 text-black dark:text-white p-5 rounded-2xl shadow-sm mt-6">
      <h3 className="text-lg font-semibold mb-4">Transactions</h3>

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded 
          bg-white dark:bg-gray-700 
          text-black dark:text-white
          focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Filter */}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border px-3 py-2 rounded 
          bg-white dark:bg-gray-700 
          text-black dark:text-white"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {filteredTransactions.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No transactions found
        </p>
      ) : (
        <table className="w-full text-left text-sm">
          
          {/* Header */}
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="py-2">Date</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
              {role === "admin" && <th>Action</th>}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredTransactions.map((t) => (
              <tr
                key={t.id}
                className="border-b dark:border-gray-700 
                hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="py-2">{t.date}</td>
                <td>{t.category}</td>

                <td
                  className={
                    t.type === "income"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }
                >
                  {t.type}
                </td>

                <td>₹ {t.amount}</td>

                {role === "admin" && (
                  <td>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="text-red-500 dark:text-red-400 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>

        </table>
      )}
    </div>
  );
};

export default TransactionTable;