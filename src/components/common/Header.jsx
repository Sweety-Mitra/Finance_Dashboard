import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Header = ({ setOpen }) => {
  const { role, setRole } = useContext(AppContext);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <header className="bg-purple-100 dark:bg-gray-800 border-b px-4 md:px-6 py-3 flex justify-between items-center sticky top-0 z-30 text-black dark:text-white">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        
        {/* Hamburger */}
        <button
          onClick={() => setOpen(prev => !prev)}
          className="md:hidden px-2 py-1 border rounded"
        >
          ☰
        </button>

        {/* Title */}
        <h1 className="text-lg font-semibold">
          Finance Dashboard
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        {/* Role */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border px-2 py-1 rounded text-sm bg-white dark:bg-gray-700 text-black dark:text-white"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        {/* Dark Mode */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded text-sm"
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </div>
    </header>
  );
};

export default Header;