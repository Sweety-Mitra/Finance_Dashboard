import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Header = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border px-3 py-1 rounded"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default Header;