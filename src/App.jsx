import Sidebar from "./components/common/Sidebar";
import Header from "./components/common/Header";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import SummaryCards from "./components/dashboard/SummaryCards";

function App() {
  const { transactions, role } = useContext(AppContext);
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 bg-gray-100 p-6">
        <Header />
        <p className="mb-4">Current Role: {role}</p>
        <SummaryCards/>
        <p>Main Content</p>
      </main>
    </div>
  );
}

export default App;