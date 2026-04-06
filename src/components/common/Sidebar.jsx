const Sidebar = ({ isOpen, setOpen }) => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close sidebar after click
  };

  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-10 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-full z-20
          w-64
          bg-sky-100 dark:bg-gray-900
          text-black dark:text-white
          p-5 border-r dark:border-gray-800
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          transition-transform duration-300
        `}
      >

        {/* Mobile Header (with close button) */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h1 className="text-xl font-bold">Finance</h1>
          <button
            onClick={() => setOpen(false)}
            className="text-lg"
          >
            ✕
          </button>
        </div>

        {/* Desktop Title */}
        <h1 className="text-xl font-bold mb-6 hidden md:block">
          Finance
        </h1>

        {/* Navigation */}
        <nav className="space-y-3">

          <p
            onClick={() => scrollToSection("dashboard")}
            className="cursor-pointer px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Dashboard
          </p>

          <p
            onClick={() => scrollToSection("transactions")}
            className="cursor-pointer px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Transactions
          </p>

          <p
            onClick={() => scrollToSection("insights")}
            className="cursor-pointer px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Insights
          </p>

        </nav>
      </aside>
    </>
  );
};

export default Sidebar;