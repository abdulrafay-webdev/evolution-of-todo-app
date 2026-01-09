import TodoList from "@/components/todo-list";

export default function DashboardPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header>
                <h1 className="text-3xl font-bold mb-2">My Tasks</h1>
                <p className="text-gray-400">Manage your daily goals with focus.</p>
            </header>
            <TodoList />
        </div>
    );
}
