import React from "react";

const threads = [
  {
    id: "1",
    title: "🔧 Hỏi đáp kỹ thuật phần cứng",
    author: "admin",
    createdAt: "2025-06-12T10:30:00Z",
  },
  {
    id: "2",
    title: "💻 Review laptop MSI GF63",
    author: "vozuser123",
    createdAt: "2025-06-11T15:00:00Z",
  },
  {
    id: "3",
    title: "🧠 Góc chém gió về AI",
    author: "deepvoz",
    createdAt: "2025-06-10T20:00:00Z",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🧵 Diễn đàn VOZ Clone</h1>

      <div className="space-y-4">
        {threads.map(
          (
            thread // Lặp qua danh sách thread để hiển thị
          ) => (
            <div
              key={thread.id}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                {thread.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Bởi {thread.author} •{" "}
                {new Date(thread.createdAt).toLocaleString()}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
