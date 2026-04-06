import Sidebar from "./components/common/Sidebar";
import Header from "./components/common/Header";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import SummaryCards from "./components/dashboard/SummaryCards";
import Charts from "./components/dashboard/Charts";
import TransactionTable from "./components/transactions/TransactionTable";
import AddTransaction from "./components/transactions/AddTransaction";
import Insights from "./components/insights/Insights";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col">

      {/* Header */}
      <Header />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className="flex-1 bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6 overflow-y-auto">

          <div className="space-y-8 max-w-6xl mx-auto">

            <div id="dashboard" className="scroll-mt-24">
              <SummaryCards />
              <Charts />
            </div>

            <div id="transactions" className="scroll-mt-24">
              <AddTransaction />
              <TransactionTable />
            </div>

            <div id="insights" className="scroll-mt-24">
              <Insights />
            </div>

          </div>

        </main>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;