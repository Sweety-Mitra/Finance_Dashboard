import Sidebar from "./components/common/Sidebar";
import Header from "./components/common/Header";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import SummaryCards from "./components/dashboard/SummaryCards";
import Charts from "./components/dashboard/Charts";
import TransactionTable from "./components/transactions/TransactionTable";
import AddTransaction from "./components/transactions/AddTransaction";
import Insights from "./components/insights/Insights";

function App() {
  const { transactions, role } = useContext(AppContext);
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 bg-gray-100 p-6">
        <Header />
        <p className="mb-4">Current Role: {role}</p>
        <SummaryCards/>
        <Charts />
        <AddTransaction/>
        <TransactionTable />
        <Insights/>
      </main>
    </div>
  );
}

export default App;