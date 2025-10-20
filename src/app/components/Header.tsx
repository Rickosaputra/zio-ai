import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950">
      <h2 className="text-lg font-semibold">Chat Assistant</h2>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full hover:bg-gray-800 transition"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}
