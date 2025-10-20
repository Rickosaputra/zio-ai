"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Halo Ricko 👋, saya ZIO-AI. Apa yang bisa saya bantu hari ini?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { from: "user", text: input };
  setMessages([...messages, userMessage]);
  setInput("");

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });

  const data = await res.json();
  setMessages((prev) => [...prev, { from: "ai", text: data.reply }]);
};


  return (
    <div className="flex flex-col h-full justify-between">
      <div className="space-y-4 overflow-y-auto mb-4">
        {messages.map((m, i) => (
          <MessageBubble key={i} from={m.from} text={m.text} />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Tulis pesan..."
          className="flex-1 bg-gray-800 text-gray-100 px-4 py-2 rounded-xl outline-none"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl text-white"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
