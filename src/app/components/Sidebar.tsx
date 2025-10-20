import { Home, MessageSquare, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-950 flex flex-col justify-between p-6 border-r border-gray-800">
      <div>
        <h1 className="text-2xl font-bold text-blue-400 mb-8">ZIO-AI</h1>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-300 hover:text-blue-400 cursor-pointer">
            <Home size={18} /> Dashboard
          </li>
          <li className="flex items-center gap-3 text-gray-300 hover:text-blue-400 cursor-pointer">
            <MessageSquare size={18} /> Chat
          </li>
          <li className="flex items-center gap-3 text-gray-300 hover:text-blue-400 cursor-pointer">
            <Settings size={18} /> Settings
          </li>
        </ul>
      </div>

      <div className="text-xs text-gray-500">© 2025 ZIO Labs</div>
    </div>
  );
}
