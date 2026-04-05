const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5">
      <h1 className="text-xl font-bold mb-6">Finance</h1>

      <nav className="space-y-3">
        <p className="cursor-pointer hover:text-gray-300 transition">
          Dashboard
        </p>
        <p className="cursor-pointer hover:text-gray-300 transition">
          Transactions
        </p>
        <p className="cursor-pointer hover:text-gray-300 transition">
          Insights
        </p>
      </nav>
    </aside>
  );
};

export default Sidebar;