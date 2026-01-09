"use client"
import { useEffect, useState } from "react";
import { useApi } from "@/lib/api";
import TodoItem from "./todo-item";
import TodoForm from "./todo-form";
import { GlassCard } from "./ui/glass-card";
import { useAuth } from "@clerk/nextjs";

interface Todo {
  id: number;
  title: string;
  description?: string;
  due_date?: string;
  status: "pending" | "completed";
  is_completed: boolean;
  user_id: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const { isLoaded, userId, getToken } = useAuth();
  const api = useApi();

  const fetchTodos = async () => {
    if (!isLoaded || !userId) return;
    
    try {
      setLoading(true);
      // Ensure token is fresh
      await getToken(); 
      const { data } = await api.get("/todos");
      setTodos(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoaded && userId) {
      console.log("Current Clerk User ID:", userId); // Debugging
      fetchTodos();
    }
  }, [isLoaded, userId]);

  const handleTodoAdded = (newTodo: Todo) => {
     setTodos(prev => [...prev, newTodo]);
  };

  const handleUpdate = (updatedTodo: Todo) => {
     setTodos(prev => prev.map(t => t.id === updatedTodo.id ? updatedTodo : t));
  };

  const handleDelete = (id: number) => {
     setTodos(prev => prev.filter(t => t.id !== id));
  };

  if (!isLoaded) return <div className="text-white text-center">Loading user data...</div>;
  if (!userId) return <div className="text-white text-center">Please log in to see your todos.</div>;
  if (loading) return <div className="text-white text-center">Loading todos...</div>;

  return (
    <div className="space-y-6">
      <GlassCard>
        <TodoForm onTodoAdded={handleTodoAdded} />
      </GlassCard>
      
      <div className="space-y-3">
        {todos.map(todo => (
           <TodoItem 
             key={todo.id} 
             todo={todo} 
             onUpdate={handleUpdate} 
             onDelete={handleDelete} 
           />
        ))}
        {todos.length === 0 && <div className="text-gray-400 text-center py-4">No todos yet. Add one above!</div>}
      </div>
    </div>
  );
}