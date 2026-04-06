import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Charts = () => {
  const { transactions } = useContext(AppContext);

  // Line Chart Data
  const lineData = transactions.map((t) => ({
    date: t.date,
    amount: t.type === "income" ? t.amount : -t.amount,
  }));

  // Pie Chart Data
  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  const COLORS = ["#4ade80", "#f87171", "#60a5fa", "#fbbf24"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Line Chart */}
      <div className="bg-slate-200 dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow-sm">
        <h3 className="mb-3 font-semibold text-lg">
          Balance Trend
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis
              dataKey="date"
              stroke="#9ca3af" // gray-400
            />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937", // dark bg
                border: "none",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-slate-200 dark:bg-gray-800 text-black dark:text-white p-5 rounded-2xl shadow-sm">
        <h3 className="mb-3 font-semibold text-lg">
          Spending Breakdown
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={80}>
              {pieData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;