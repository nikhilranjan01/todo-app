import { useEffect, useState } from "react";
import api from "../services/api";
import BoardCard from "../components/BoardCard";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [boards, setBoards] = useState([]);
  const [title, setTitle] = useState("");

  const loadBoards = async () => {
    const res = await api.get("/boards");
    setBoards(res.data);
  };

  const createBoard = async () => {
    if (!title) return;
    await api.post("/boards", { title });
    setTitle("");
    loadBoards();
  };

  useEffect(() => {
    loadBoards();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Boards</h2>

        <div className="flex gap-2 mb-6">
          <input
            className="border p-2"
            placeholder="New board title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={createBoard}
            className="bg-blue-500 text-white px-4"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {boards.map((b) => (
            <BoardCard key={b._id} board={b} />
          ))}
        </div>
      </div>
    </>
  );
}
