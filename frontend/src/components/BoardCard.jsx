import { useNavigate } from "react-router-dom";

export default function BoardCard({ board }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/boards/${board._id}`)}
      className="p-4 bg-white shadow rounded cursor-pointer hover:bg-gray-100"
    >
      <h3 className="text-lg font-semibold">{board.title}</h3>
      <p className="text-sm text-gray-500">
        Created: {new Date(board.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
