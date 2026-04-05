import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionTable = () => {
  const { transactions } = useContext(AppContext);

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h3 className="text-lg font-semibold mb-4">Transactions</h3>

      {transactions.length === 0 ? (
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
            {transactions.map((t) => (
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