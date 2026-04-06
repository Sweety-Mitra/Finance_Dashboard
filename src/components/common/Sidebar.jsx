const Sidebar = () => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="w-64 bg-sky-100 dark:bg-gray-900 text-black dark:text-white p-5 border-r dark:border-gray-800">
      
      <h1 className="text-xl font-bold mb-6">Finance</h1>

      <nav className="space-y-3">
        
        <p
          onClick={() => scrollToSection("dashboard")}
          className="cursor-pointer px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Dashboard
        </p>

        <p
          onClick={() => scrollToSection("transactions")}
          className="cursor-pointer px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Transactions
        </p>

        <p
          onClick={() => scrollToSection("insights")}
          className="cursor-pointer px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Insights
        </p>

      </nav>
    </aside>
  );
};

export default Sidebar;