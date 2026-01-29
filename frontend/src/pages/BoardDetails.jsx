import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import TodoItem from "../components/TodoItem";
import Navbar from "../components/Navbar";

export default function BoardDetails() {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const loadTodos = async () => {
    const res = await api.get(`/todos/${id}`);
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!title) return;
    await api.post("/todos", {
      title,
      boardId: id,
      completed: false,
    });
    setTitle("");
    loadTodos();
  };

  const toggleTodo = async (todoId) => {
    await api.put(`/todos/${todoId}`);
    loadTodos();
  };

  const deleteTodo = async (todoId) => {
    await api.delete(`/todos/${todoId}`);
    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Todos</h2>

        <div className="flex gap-2 mb-6">
          <input
            className="border p-2"
            placeholder="New todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="bg-green-500 text-white px-4"
          >
            Add
          </button>
        </div>

        <div className="space-y-2">
          {todos.map((t) => (
            <TodoItem
              key={t._id}
              todo={t}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
      </div>
    </>
  );
}
