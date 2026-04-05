import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionTable = () => {
    const { transactions } = useContext(AppContext);
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

    return (
        <div className="bg-white p-4 rounded shadow mt-6">
            <h3 className="text-lg font-semibold mb-4">Transactions</h3>

            <div className="flex flex-col md:flex-row gap-3 mb-4">
                {/* Search */}
                <input
                    type="text"
                    placeholder="Search by category..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Filter */}
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="border px-3 py-2 rounded"
                >
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>

            {filteredTransactions.length === 0 ? (
                <p className="text-gray-500">No transactions found</p>
            ) : (
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2">Date</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredTransactions.map((t) => (
                            <tr key={t.id} className="border-b hover:bg-gray-50">
                                <td className="py-2">{t.date}</td>
                                <td>{t.category}</td>
                                <td
                                    className={
                                        t.type === "income"
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }
                                >
                                    {t.type}
                                </td>
                                <td>₹ {t.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TransactionTable;