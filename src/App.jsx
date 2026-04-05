import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 bg-gray-100 p-6">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
      </main>
    </div>
  );
}

export default App;