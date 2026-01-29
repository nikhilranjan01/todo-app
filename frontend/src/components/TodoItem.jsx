export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center p-2 border rounded">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id)}
          className="mr-2"
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo._id)}
        className="text-red-500"
      >
        Delete
      </button>
    </div>
  );
}
