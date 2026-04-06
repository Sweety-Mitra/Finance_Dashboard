import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Header = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-lg font-semibold">Finance Dashboard</h1>

      <select
        className="border px-3 py-1 rounded text-sm"
      >
        <option>Viewer</option>
        <option>Admin</option>
      </select>
    </header>
  );
};

export default Header;