const Sidebar = () => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="w-64 bg-gray-900 text-white p-5">
      <h1 className="text-xl font-bold mb-6">Finance</h1>

      <nav className="space-y-3">
        <p
          onClick={() => scrollToSection("dashboard")}
          className="cursor-pointer hover:text-gray-300 transition"
        >
          Dashboard
        </p>

        <p
          onClick={() => scrollToSection("transactions")}
          className="cursor-pointer hover:text-gray-300 transition"
        >
          Transactions
        </p>

        <p
          onClick={() => scrollToSection("insights")}
          className="cursor-pointer hover:text-gray-300 transition"
        >
          Insights
        </p>
      </nav>
    </aside>
  );
};

export default Sidebar;